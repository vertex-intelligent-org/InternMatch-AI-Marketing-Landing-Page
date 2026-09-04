import bpy
import os
import json
import time

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
FRAME_COUNT = FRAME_END - FRAME_START + 1

desktop_camera = bpy.data.objects.get("Camera_DESKTOP")
mobile_camera = bpy.data.objects.get("Camera_MOBILE")

if desktop_camera is None:
    raise RuntimeError("Camera_DESKTOP not found in approved .blend")

if mobile_camera is None:
    raise RuntimeError("Camera_MOBILE not found in approved .blend")

# ------------------------------------------------------------
# WEB RENDER SETTINGS
# ------------------------------------------------------------

# Keep the approved rendering engine/materials.
# Only make the background transparent so the website's
# #F7F7F5 background can show through perfectly.
scene.render.film_transparent = True
scene.render.use_file_extension = True

formats = {
    item.identifier
    for item in
    scene.render.image_settings.bl_rna.properties[
        "file_format"
    ].enum_items
}

if "WEBP" not in formats:
    raise RuntimeError(
        "This Blender build does not expose WEBP rendering."
    )

scene.render.image_settings.file_format = "WEBP"
scene.render.image_settings.color_mode = "RGBA"
scene.render.image_settings.color_depth = "8"

# Blender exposes quality for WebP in current builds.
if hasattr(scene.render.image_settings, "quality"):
    scene.render.image_settings.quality = 90

# Keep Standard transform from the approved stage.
try:
    scene.view_settings.view_transform = "Standard"
except Exception:
    pass

# ------------------------------------------------------------
# RENDER FUNCTION
# ------------------------------------------------------------

def render_sequence(
    camera,
    output_dir,
    width,
    height,
    label,
):
    print("")
    print("============================================================")
    print("RENDERING:", label)
    print("CAMERA:", camera.name)
    print("SIZE:", width, "x", height)
    print("FRAMES:", FRAME_START, "->", FRAME_END)
    print("============================================================")

    scene.camera = camera

    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100

    started = time.time()

    for frame in range(FRAME_START, FRAME_END + 1):
        scene.frame_set(frame)

        filename = f"frame-{frame:04d}.webp"

        scene.render.filepath = os.path.join(
            output_dir,
            filename,
        )

        bpy.ops.render.render(write_still=True)

        if (
            frame == FRAME_START
            or frame == FRAME_END
            or frame % 10 == 0
        ):
            print(
                f"[{label}] rendered "
                f"{frame - FRAME_START + 1}/{FRAME_COUNT}: "
                f"{filename}"
            )

    elapsed = time.time() - started

    print(
        f"{label} completed in "
        f"{elapsed:.2f} seconds."
    )


# ------------------------------------------------------------
# DESKTOP
# ------------------------------------------------------------

render_sequence(
    desktop_camera,
    DESKTOP_DIR,
    1400,
    900,
    "DESKTOP",
)

# ------------------------------------------------------------
# MOBILE
# ------------------------------------------------------------

render_sequence(
    mobile_camera,
    MOBILE_DIR,
    900,
    680,
    "MOBILE",
)

# ------------------------------------------------------------
# MANIFEST
# ------------------------------------------------------------

manifest = {
    "version": 1,
    "frameCount": FRAME_COUNT,
    "frameStart": FRAME_START,
    "frameEnd": FRAME_END,

    "desktop": {
        "width": 1400,
        "height": 900,
        "pattern": "/media/hero-bow/desktop/frame-{frame}.webp",
        "poster": "/media/hero-bow/desktop/frame-0001.webp",
    },

    "mobile": {
        "width": 900,
        "height": 680,
        "pattern": "/media/hero-bow/mobile/frame-{frame}.webp",
        "poster": "/media/hero-bow/mobile/frame-0001.webp",
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
) as f:
    json.dump(
        manifest,
        f,
        indent=2,
    )

print("")
print("============================================================")
print("FINAL HERO WEB SEQUENCES COMPLETE")
print("============================================================")
print("Desktop:", DESKTOP_DIR)
print("Mobile :", MOBILE_DIR)
print("Manifest:", MANIFEST_PATH)
print("Frames per sequence:", FRAME_COUNT)
print("Total rendered frames:", FRAME_COUNT * 2)
print("============================================================")