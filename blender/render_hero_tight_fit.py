import bpy
import os
import json
import math

from mathutils import Vector

PROJECT_ROOT = r"C:\Users\hp\OneDrive\Desktop\InternMatch AI website"

DESKTOP_DIR = os.path.join(
    PROJECT_ROOT,
    "public",
    "media",
    "hero-bow",
    "desktop",
)

MOBILE_DIR = os.path.join(
    PROJECT_ROOT,
    "public",
    "media",
    "hero-bow",
    "mobile",
)

MANIFEST_PATH = os.path.join(
    PROJECT_ROOT,
    "public",
    "media",
    "hero-bow",
    "manifest.json",
)

os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(MOBILE_DIR, exist_ok=True)

scene = bpy.context.scene

FRAME_START = 1
FRAME_END = 110
FRAME_COUNT = 110

desktop_camera = bpy.data.objects.get("Camera_DESKTOP")
mobile_camera = bpy.data.objects.get("Camera_MOBILE")

if desktop_camera is None:
    raise RuntimeError("Camera_DESKTOP not found.")

if mobile_camera is None:
    raise RuntimeError("Camera_MOBILE not found.")


# ============================================================
# HERO GEOMETRY BOUNDS
# ============================================================

def get_animation_bounds_xz():
    """
    Measure visible Hero geometry across every animation frame.

    Cameras, lights, background planes and helper objects are
    intentionally excluded.

    This guarantees:
      - full upper bow tip
      - full lower bow tip
      - full string
      - complete flying arrow
      - complete four-tab target
    """

    xmin = float("inf")
    xmax = float("-inf")
    zmin = float("inf")
    zmax = float("-inf")

    original_frame = scene.frame_current

    valid_types = {
        "MESH",
        "CURVE",
        "SURFACE",
        "META",
    }

    excluded_tokens = (
        "backdrop",
        "background",
        "floor",
        "plane",
        "camera",
        "light",
        "sun",
    )

    for frame in range(
        FRAME_START,
        FRAME_END + 1,
    ):
        scene.frame_set(frame)

        depsgraph = (
            bpy.context
            .evaluated_depsgraph_get()
        )

        depsgraph.update()

        for obj in scene.objects:
            if obj.hide_render:
                continue

            if obj.type not in valid_types:
                continue

            lower_name = obj.name.lower()

            if any(
                token in lower_name
                for token in excluded_tokens
            ):
                continue

            evaluated = obj.evaluated_get(
                depsgraph
            )

            try:
                corners = evaluated.bound_box
            except Exception:
                continue

            matrix = evaluated.matrix_world

            for corner in corners:
                point = (
                    matrix
                    @ Vector(corner)
                )

                xmin = min(
                    xmin,
                    point.x,
                )

                xmax = max(
                    xmax,
                    point.x,
                )

                zmin = min(
                    zmin,
                    point.z,
                )

                zmax = max(
                    zmax,
                    point.z,
                )

    scene.frame_set(original_frame)

    values = (
        xmin,
        xmax,
        zmin,
        zmax,
    )

    if not all(
        math.isfinite(v)
        for v in values
    ):
        raise RuntimeError(
            "Could not calculate Hero bounds."
        )

    return values


def fit_camera(
    camera,
    render_width,
    render_height,
    margin,
):
    """
    Tight orthographic fit.

    Camera screen axes:
      horizontal = world X
      vertical   = world Z

    ortho_scale is calculated from BOTH axes and current
    render aspect ratio.

    Therefore objects become as large as safely possible
    WITHOUT cropping.
    """

    xmin, xmax, zmin, zmax = (
        get_animation_bounds_xz()
    )

    world_width = xmax - xmin
    world_height = zmax - zmin

    aspect = (
        render_width
        / render_height
    )

    required_from_width = (
        world_width
    )

    required_from_height = (
        world_height
        * aspect
    )

    required_scale = max(
        required_from_width,
        required_from_height,
    )

    camera.data.ortho_scale = (
        required_scale * margin
    )

    camera.location.x = (
        xmin + xmax
    ) / 2.0

    camera.location.z = (
        zmin + zmax
    ) / 2.0

    print("")
    print("TIGHT FIT:", camera.name)
    print(
        "  X:",
        round(xmin, 3),
        "->",
        round(xmax, 3),
    )

    print(
        "  Z:",
        round(zmin, 3),
        "->",
        round(zmax, 3),
    )

    print(
        "  aspect:",
        round(aspect, 3),
    )

    print(
        "  margin:",
        margin,
    )

    print(
        "  ortho_scale:",
        round(
            camera.data.ortho_scale,
            3,
        ),
    )


# ============================================================
# RENDER SETTINGS
# ============================================================

scene.render.film_transparent = True

scene.render.image_settings.file_format = "WEBP"
scene.render.image_settings.color_mode = "RGBA"
scene.render.image_settings.color_depth = "8"

if hasattr(
    scene.render.image_settings,
    "quality",
):
    scene.render.image_settings.quality = 92

try:
    scene.view_settings.view_transform = "Standard"
except Exception:
    pass


# ============================================================
# RENDER FUNCTION
# ============================================================

def render_sequence(
    camera,
    output_dir,
    width,
    height,
    label,
    margin,
):
    scene.camera = camera

    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100

    fit_camera(
        camera,
        width,
        height,
        margin,
    )

    print("")
    print(
        "RENDERING",
        label,
        width,
        "x",
        height,
    )

    for frame in range(
        FRAME_START,
        FRAME_END + 1,
    ):
        scene.frame_set(frame)

        filename = (
            f"frame-{frame:04d}.webp"
        )

        scene.render.filepath = (
            os.path.join(
                output_dir,
                filename,
            )
        )

        bpy.ops.render.render(
            write_still=True
        )

        if (
            frame == 1
            or frame % 10 == 0
            or frame == 110
        ):
            print(
                f"[{label}] "
                f"{frame}/110"
            )


# ============================================================
# DESKTOP
#
# Small safety margin:
# larger than before but still fully inside frame.
# ============================================================

render_sequence(
    desktop_camera,
    DESKTOP_DIR,
    1400,
    900,
    "DESKTOP",
    margin=1.035,
)


# ============================================================
# MOBILE
#
# Square presentation is intentional.
#
# The previous 900x680 landscape image forced Blender to pull
# the camera too far away vertically.
#
# 900x900 allows the diagonal bow -> target composition to
# occupy substantially more of the phone screen.
# ============================================================

render_sequence(
    mobile_camera,
    MOBILE_DIR,
    900,
    900,
    "MOBILE",
    margin=1.04,
)


# ============================================================
# MANIFEST
# ============================================================

manifest = {
    "version": 2,

    "frameCount": 110,
    "frameStart": 1,
    "frameEnd": 110,

    "desktop": {
        "width": 1400,
        "height": 900,
        "pattern":
            "/media/hero-bow/desktop/frame-{frame}.webp",
        "poster":
            "/media/hero-bow/desktop/frame-0001.webp",
    },

    "mobile": {
        "width": 900,
        "height": 900,
        "pattern":
            "/media/hero-bow/mobile/frame-{frame}.webp",
        "poster":
            "/media/hero-bow/mobile/frame-0001.webp",
    },

    "timeline": {
        "rest": {
            "start": 1,
            "end": 18,
        },

        "draw": {
            "start": 19,
            "end": 50,
        },

        "hold": {
            "start": 50,
            "end": 60,
        },

        "release": {
            "start": 60,
            "end": 64,
        },

        "flight": {
            "start": 64,
            "end": 84,
        },

        "impact": {
            "frame": 84,
        },

        "resolve": {
            "start": 84,
            "end": 110,
        },
    },
}

with open(
    MANIFEST_PATH,
    "w",
    encoding="utf-8",
) as file:
    json.dump(
        manifest,
        file,
        indent=2,
    )

print("")
print(
    "TIGHT-FIT HERO RENDER COMPLETE"
)