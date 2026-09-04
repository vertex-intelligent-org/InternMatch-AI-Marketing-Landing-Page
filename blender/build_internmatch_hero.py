import bpy
import math
import os
from mathutils import Vector

# ============================================================
# PATHS
# ============================================================

PROJECT_ROOT = r"C:\Users\hp\OneDrive\Desktop\InternMatch AI website"
BLEND_PATH = os.path.join(PROJECT_ROOT, "blender", "internmatch_hero.blend")
PREVIEW_DIR = os.path.join(
    PROJECT_ROOT,
    "public",
    "media",
    "hero-bow",
    "previews",
)

os.makedirs(PREVIEW_DIR, exist_ok=True)

# ============================================================
# RESET
# ============================================================

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

for datablocks in (
    bpy.data.meshes,
    bpy.data.curves,
    bpy.data.materials,
    bpy.data.cameras,
    bpy.data.lights,
):
    pass

scene = bpy.context.scene
scene.frame_start = 1
scene.frame_end = 110
scene.render.film_transparent = False

try:
    scene.render.engine = "BLENDER_EEVEE_NEXT"
except Exception:
    pass

scene.render.image_settings.file_format = "PNG"
scene.render.image_settings.color_mode = "RGBA"
scene.render.image_settings.color_depth = "8"

scene.render.resolution_percentage = 100

# ============================================================
# COLOR MANAGEMENT
# ============================================================

try:
    scene.view_settings.view_transform = "Standard"
except Exception:
    pass

# ============================================================
# HELPERS
# ============================================================

def material(name, color, metallic=0.0, roughness=0.45):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1.0)
    mat.use_nodes = True

    bsdf = mat.node_tree.nodes.get("Principled BSDF")

    if bsdf:
        bsdf.inputs["Base Color"].default_value = (*color, 1.0)
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Roughness"].default_value = roughness

    return mat


def add_beveled_cube(
    name,
    location,
    scale,
    mat,
    bevel=0.12,
    rotation=(0.0, 0.0, 0.0),
):
    bpy.ops.mesh.primitive_cube_add(location=location, rotation=rotation)

    obj = bpy.context.object
    obj.name = name
    obj.scale = scale

    bpy.ops.object.transform_apply(
        location=False,
        rotation=False,
        scale=True,
    )

    bev = obj.modifiers.new("Soft Bevel", "BEVEL")
    bev.width = bevel
    bev.segments = 5

    obj.data.materials.append(mat)

    return obj


def add_curve(
    name,
    points,
    bevel_depth,
    mat,
    resolution=8,
):
    curve_data = bpy.data.curves.new(name, "CURVE")
    curve_data.dimensions = "3D"
    curve_data.resolution_u = resolution
    curve_data.bevel_resolution = 5
    curve_data.bevel_depth = bevel_depth
    curve_data.resolution_u = 12

    spline = curve_data.splines.new("BEZIER")
    spline.bezier_points.add(len(points) - 1)

    for bp, co in zip(spline.bezier_points, points):
        bp.co = co
        bp.handle_left_type = "AUTO"
        bp.handle_right_type = "AUTO"

    obj = bpy.data.objects.new(name, curve_data)
    bpy.context.collection.objects.link(obj)

    obj.data.materials.append(mat)

    return obj


def add_poly_curve(
    name,
    points,
    bevel_depth,
    mat,
):
    curve_data = bpy.data.curves.new(name, "CURVE")
    curve_data.dimensions = "3D"
    curve_data.resolution_u = 2
    curve_data.bevel_resolution = 4
    curve_data.bevel_depth = bevel_depth

    spline = curve_data.splines.new("POLY")
    spline.points.add(len(points) - 1)

    for point, co in zip(spline.points, points):
        point.co = (*co, 1.0)

    obj = bpy.data.objects.new(name, curve_data)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)

    return obj, spline


def add_cylinder_between(
    name,
    start,
    end,
    radius,
    mat,
    vertices=32,
):
    start = Vector(start)
    end = Vector(end)

    direction = end - start
    length = direction.length
    midpoint = (start + end) / 2

    bpy.ops.mesh.primitive_cylinder_add(
        vertices=vertices,
        radius=radius,
        depth=length,
        location=midpoint,
    )

    obj = bpy.context.object
    obj.name = name

    obj.rotation_mode = "QUATERNION"
    obj.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(direction)

    obj.data.materials.append(mat)

    return obj


def add_torus(
    name,
    location,
    major_radius,
    minor_radius,
    mat,
):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major_radius,
        minor_radius=minor_radius,
        major_segments=64,
        minor_segments=16,
        location=location,
        rotation=(math.radians(90), 0, 0),
    )

    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(mat)

    return obj


def add_disc(
    name,
    location,
    radius,
    depth,
    mat,
):
    bpy.ops.mesh.primitive_cylinder_add(
        vertices=64,
        radius=radius,
        depth=depth,
        location=location,
        rotation=(math.radians(90), 0, 0),
    )

    obj = bpy.context.object
    obj.name = name
    obj.data.materials.append(mat)

    return obj


def look_at(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def key(obj, frame, data_path=None):
    if data_path:
        obj.keyframe_insert(data_path=data_path, frame=frame)
    else:
        obj.keyframe_insert(data_path="location", frame=frame)
        obj.keyframe_insert(data_path="rotation_euler", frame=frame)
        obj.keyframe_insert(data_path="scale", frame=frame)


# ============================================================
# MATERIALS
# ============================================================

GRAPHITE = material(
    "Deep InternMatch Teal",
    (0.0262, 0.0723, 0.0999),
    metallic=0.42,
    roughness=0.24,
)

GRAPHITE_SOFT = material(
    "InternMatch Teal",
    (0.0612, 0.1946, 0.2747),
    metallic=0.32,
    roughness=0.27,
)

TEAL = material(
    "InternMatch Primary Teal",
    (0.0612, 0.1946, 0.2747),
    metallic=0.38,
    roughness=0.23,
)

TEAL_LIGHT = material(
    "InternMatch Light Teal",
    (0.1878, 0.3968, 0.4793),
    metallic=0.25,
    roughness=0.25,
)

METAL = material(
    "InternMatch Ice Metal",
    (0.5711, 0.7231, 0.7682),
    metallic=0.72,
    roughness=0.19,
)

STEEL = material(
    "InternMatch Arrow Metal",
    (0.0612, 0.1946, 0.2747),
    metallic=0.78,
    roughness=0.18,
)

LEATHER = material(
    "InternMatch Matte Grip",
    (0.0262, 0.0723, 0.0999),
    metallic=0.05,
    roughness=0.38,
)

STRING_MAT = material(
    "InternMatch Cyan String",
    (0.1878, 0.3968, 0.4793),
    metallic=0.05,
    roughness=0.24,
)

WHITE = material(
    "InternMatch Ice White",
    (0.8879, 0.9301, 0.9387),
    metallic=0.12,
    roughness=0.26,
)

# ============================================================
# MASTER COLLECTION ROOTS
# ============================================================

bow_root = bpy.data.objects.new("Bow_ROOT", None)
bpy.context.collection.objects.link(bow_root)

arrow_root = bpy.data.objects.new("Arrow_ROOT", None)
bpy.context.collection.objects.link(arrow_root)

target_root = bpy.data.objects.new("Target_ROOT", None)
bpy.context.collection.objects.link(target_root)

# ============================================================
# BOW POSITION
# ============================================================

CENTER_Z = -1.35

# ============================================================
# RISER / HANDLE
# ============================================================

riser_main = add_beveled_cube(
    "Riser_Main",
    (-2.85, 0.0, CENTER_Z),
    (0.20, 0.18, 0.92),
    GRAPHITE,
    bevel=0.16,
)

riser_main.parent = bow_root

sight_window = add_beveled_cube(
    "Riser_Sight_Window",
    (-2.60, -0.02, CENTER_Z + 0.36),
    (0.22, 0.13, 0.34),
    GRAPHITE_SOFT,
    bevel=0.10,
)

sight_window.parent = bow_root

grip = add_beveled_cube(
    "Grip",
    (-2.96, -0.02, CENTER_Z - 0.08),
    (0.21, 0.22, 0.46),
    LEATHER,
    bevel=0.15,
    rotation=(0, math.radians(-7), math.radians(-4)),
)

grip.parent = bow_root

# Grip wrap ribs
for i in range(-4, 5):
    rib = add_beveled_cube(
        f"Grip_Rib_{i:+d}",
        (
            -3.19,
            -0.23,
            CENTER_Z - 0.08 + i * 0.085,
        ),
        (0.028, 0.025, 0.018),
        TEAL_LIGHT if i in (-1, 2) else GRAPHITE_SOFT,
        bevel=0.015,
    )
    rib.parent = bow_root

# Limb pockets
for z in (CENTER_Z + 0.93, CENTER_Z - 0.93):
    pocket = add_beveled_cube(
        f"Limb_Pocket_{z:.2f}",
        (-2.82, 0.0, z),
        (0.27, 0.20, 0.18),
        METAL,
        bevel=0.09,
    )
    pocket.parent = bow_root

    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=32,
        ring_count=16,
        radius=0.085,
        location=(-2.57, -0.20, z),
    )

    bolt = bpy.context.object
    bolt.name = "Titanium_Limb_Bolt"
    bolt.data.materials.append(TEAL)
    bolt.parent = bow_root

# ============================================================
# RECURVE LIMBS
# ============================================================

upper_rest = [
    (-2.84, 0.0, CENTER_Z + 0.85),
    (-2.54, 0.0, CENTER_Z + 1.42),
    (-2.23, 0.0, CENTER_Z + 2.05),
    (-2.10, 0.0, CENTER_Z + 2.58),
    (-2.30, 0.0, CENTER_Z + 2.93),
    (-2.58, 0.0, CENTER_Z + 3.16),
]

lower_rest = [
    (-2.84, 0.0, CENTER_Z - 0.85),
    (-2.54, 0.0, CENTER_Z - 1.42),
    (-2.23, 0.0, CENTER_Z - 2.05),
    (-2.10, 0.0, CENTER_Z - 2.58),
    (-2.30, 0.0, CENTER_Z - 2.93),
    (-2.58, 0.0, CENTER_Z - 3.16),
]

upper = add_curve(
    "Upper_Recurve_Limb",
    upper_rest,
    0.115,
    GRAPHITE,
)

lower = add_curve(
    "Lower_Recurve_Limb",
    lower_rest,
    0.115,
    GRAPHITE,
)

upper.parent = bow_root
lower.parent = bow_root

# Teal limb accents
upper_accent = add_curve(
    "Upper_Limb_Teal_Accent",
    [
        (-2.80, -0.11, CENTER_Z + 0.93),
        (-2.49, -0.11, CENTER_Z + 1.49),
        (-2.20, -0.11, CENTER_Z + 2.07),
        (-2.12, -0.11, CENTER_Z + 2.52),
    ],
    0.025,
    TEAL,
)

lower_accent = add_curve(
    "Lower_Limb_Teal_Accent",
    [
        (-2.80, -0.11, CENTER_Z - 0.93),
        (-2.49, -0.11, CENTER_Z - 1.49),
        (-2.20, -0.11, CENTER_Z - 2.07),
        (-2.12, -0.11, CENTER_Z - 2.52),
    ],
    0.025,
    TEAL,
)

upper_accent.parent = bow_root
lower_accent.parent = bow_root

# Tip wedges
for z in (
    CENTER_Z + 3.16,
    CENTER_Z - 3.16,
):
    tip = add_beveled_cube(
        f"Recurve_Tip_{z:.2f}",
        (-2.58, 0.0, z),
        (0.16, 0.14, 0.11),
        METAL,
        bevel=0.07,
        rotation=(0, 0, math.radians(8 if z > CENTER_Z else -8)),
    )
    tip.parent = bow_root

# ============================================================
# STRING — ACTUAL ANIMATED CURVE
# ============================================================

TOP_TIP = (-2.58, -0.10, CENTER_Z + 3.16)
BOTTOM_TIP = (-2.58, -0.10, CENTER_Z - 3.16)

REST_NOCK = (-2.42, -0.12, CENTER_Z + 0.02)
DRAW_NOCK = (-3.72, -0.12, CENTER_Z - 0.06)

string_obj, string_spline = add_poly_curve(
    "Bow_String",
    [
        TOP_TIP,
        REST_NOCK,
        BOTTOM_TIP,
    ],
    0.026,
    STRING_MAT,
)

string_obj.parent = bow_root

# Keyframe all 3 points directly
def key_string(frame, middle):
    coords = [
        TOP_TIP,
        middle,
        BOTTOM_TIP,
    ]

    for point, co in zip(string_spline.points, coords):
        point.co = (*co, 1.0)
        point.keyframe_insert(
            data_path="co",
            frame=frame,
        )

# Rest
key_string(1, REST_NOCK)
key_string(18, REST_NOCK)

# Draw
key_string(50, DRAW_NOCK)

# Hold
key_string(58, DRAW_NOCK)

# Snap
key_string(64, REST_NOCK)

# Stay
key_string(110, REST_NOCK)

# ============================================================
# ARROW
# ============================================================

ARROW_LENGTH = 3.05

# ------------------------------------------------------------
# Arrow-specific materials
# Keep everything inside the InternMatch teal / cyan family.
# ------------------------------------------------------------

ARROW_SHAFT_MAT = material(
    "Arrow Shaft Satin Teal",
    (0.055, 0.245, 0.335),
    metallic=0.58,
    roughness=0.20,
)

ARROW_EDGE_MAT = material(
    "Arrow Edge Ice",
    (0.28, 0.62, 0.74),
    metallic=0.48,
    roughness=0.18,
)

ARROW_FEATHER_MAT = material(
    "Arrow Feather Cyan",
    (0.12, 0.46, 0.60),
    metallic=0.08,
    roughness=0.30,
)

ARROW_FEATHER_LIGHT_MAT = material(
    "Arrow Feather Ice",
    (0.50, 0.78, 0.84),
    metallic=0.04,
    roughness=0.31,
)

# ------------------------------------------------------------
# Main shaft
# Slightly slimmer than the previous version,
# but high-contrast enough to remain readable in the Hero.
# ------------------------------------------------------------

shaft = add_cylinder_between(
    "Arrow_Shaft",
    (0.0, 0.0, 0.0),
    (ARROW_LENGTH, 0.0, 0.0),
    0.043,
    ARROW_SHAFT_MAT,
    vertices=40,
)

shaft.parent = arrow_root

# ------------------------------------------------------------
# Arrowhead
# Longer, sharper field-point profile.
# ------------------------------------------------------------

bpy.ops.mesh.primitive_cone_add(
    vertices=40,
    radius1=0.105,
    radius2=0.0,
    depth=0.44,
    location=(ARROW_LENGTH + 0.22, 0.0, 0.0),
    rotation=(0.0, math.radians(90.0), 0.0),
)

arrow_tip = bpy.context.object
arrow_tip.name = "Arrow_Precision_Tip"
arrow_tip.data.materials.append(STEEL)
arrow_tip.parent = arrow_root

# Small metal collar immediately behind the arrowhead.
bpy.ops.mesh.primitive_torus_add(
    major_radius=0.050,
    minor_radius=0.013,
    major_segments=40,
    minor_segments=10,
    location=(ARROW_LENGTH - 0.015, 0.0, 0.0),
    rotation=(0.0, math.radians(90.0), 0.0),
)

tip_collar = bpy.context.object
tip_collar.name = "Arrow_Tip_Collar"
tip_collar.data.materials.append(ARROW_EDGE_MAT)
tip_collar.parent = arrow_root

# ------------------------------------------------------------
# Nock
# Compact cylindrical nock + two subtle rear prongs.
# ------------------------------------------------------------

bpy.ops.mesh.primitive_cylinder_add(
    vertices=32,
    radius=0.050,
    depth=0.14,
    location=(-0.070, 0.0, 0.0),
    rotation=(0.0, math.radians(90.0), 0.0),
)

nock = bpy.context.object
nock.name = "Arrow_Nock"
nock.data.materials.append(TEAL_LIGHT)
nock.parent = arrow_root

for z_offset in (-0.043, 0.043):
    prong = add_beveled_cube(
        f"Arrow_Nock_Prong_{z_offset:+.3f}",
        (-0.145, 0.0, z_offset),
        (0.075, 0.028, 0.018),
        TEAL_LIGHT,
        bevel=0.012,
    )
    prong.parent = arrow_root

# ------------------------------------------------------------
# Real tapered 3D fletching
#
# Unlike the previous rectangular cubes, each vane is a
# thin tapered aerodynamic prism.
# ------------------------------------------------------------

def add_arrow_vane(
    name,
    angle_deg,
    material_ref,
):
    x0 = 0.10
    x1 = 0.78

    height = 0.145
    thickness = 0.020

    # Side profile:
    #
    #          __________
    #        /            \
    # ______/              \____
    #
    profile = [
        (x0,           0.0),
        (x0 + 0.12,    height * 0.92),
        (x1 - 0.20,    height),
        (x1 - 0.06,    height * 0.48),
        (x1,           0.0),
    ]

    vertices = []

    # Front/back thickness along local Y.
    for y in (-thickness, thickness):
        for x, z in profile:
            vertices.append((x, y, z))

    count = len(profile)

    faces = []

    # Two broad faces.
    faces.append(tuple(range(count)))
    faces.append(tuple(range(count, count * 2)))

    # Outer perimeter walls.
    for i in range(count):
        j = (i + 1) % count

        faces.append((
            i,
            j,
            count + j,
            count + i,
        ))

    mesh = bpy.data.meshes.new(f"{name}_Mesh")
    mesh.from_pydata(vertices, [], faces)
    mesh.update()

    vane = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(vane)

    vane.data.materials.append(material_ref)

    vane.rotation_mode = "XYZ"

    # Rotate each feather around the shaft axis.
    vane.rotation_euler[0] = math.radians(angle_deg)

    bevel = vane.modifiers.new(
        "Feather Edge Softening",
        "BEVEL",
    )
    bevel.width = 0.012
    bevel.segments = 3

    vane.parent = arrow_root

    return vane


# Three real vanes around the shaft.
#
# One brighter cock feather makes the arrow visually legible
# while staying fully inside the InternMatch palette.

add_arrow_vane(
    "Arrow_Fletching_Cock",
    0.0,
    ARROW_FEATHER_LIGHT_MAT,
)

add_arrow_vane(
    "Arrow_Fletching_120",
    120.0,
    ARROW_FEATHER_MAT,
)

add_arrow_vane(
    "Arrow_Fletching_240",
    240.0,
    ARROW_FEATHER_MAT,
)

# ------------------------------------------------------------
# Cresting rings
# Thin polished rings directly in front of the feathers.
# ------------------------------------------------------------

crest_data = (
    (0.82, ARROW_EDGE_MAT),
    (0.88, TEAL_LIGHT),
    (0.94, ARROW_EDGE_MAT),
)

for index, (x, crest_mat) in enumerate(crest_data):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.047,
        minor_radius=0.011,
        major_segments=40,
        minor_segments=10,
        location=(x, 0.0, 0.0),
        rotation=(0.0, math.radians(90.0), 0.0),
    )

    ring = bpy.context.object
    ring.name = f"Arrow_Crest_Ring_{index + 1}"
    ring.data.materials.append(crest_mat)
    ring.parent = arrow_root

# Small transition sleeve behind the main shaft.
bpy.ops.mesh.primitive_cylinder_add(
    vertices=32,
    radius=0.055,
    depth=0.16,
    location=(0.045, 0.0, 0.0),
    rotation=(0.0, math.radians(90.0), 0.0),
)

rear_sleeve = bpy.context.object
rear_sleeve.name = "Arrow_Rear_Sleeve"
rear_sleeve.data.materials.append(ARROW_EDGE_MAT)
rear_sleeve.parent = arrow_root
# ============================================================
# ARROW ALIGNMENT
# ============================================================

TARGET_CENTER = Vector((5.00, 0.0, 2.45))

# ============================================================
# APPROVED REFERENCE COMPOSITION
# ============================================================
#
# Measured from the approved reference:
#
# Bow long-axis tilt:
#   ~25 degrees LEFT from vertical.
#
# Arrow trajectory:
#   ~26 degrees UP from horizontal.
#
# Crucially:
#   the bow rotates around its own central region,
#   while the arrow nock coordinates receive the SAME
#   mathematical rotation so arrow + string stay connected.
#
# Do NOT use +25 here.
# +25 sends the upper limb right and produces the rejected pose.
#
REFERENCE_BOW_TILT_DEG = -25.0

REFERENCE_BOW_PIVOT = Vector((
    -2.58,
    0.0,
    CENTER_Z,
))


def rotate_reference_point_y(point):
    """
    Apply exactly the same Y-axis rotation used by the bow
    to a world-space point.

    This is used for the REST and DRAW nock positions so the
    arrow never detaches from the rotated bow/string.
    """
    p = Vector(point)

    theta = math.radians(REFERENCE_BOW_TILT_DEG)
    c = math.cos(theta)
    s = math.sin(theta)

    dx = p.x - REFERENCE_BOW_PIVOT.x
    dz = p.z - REFERENCE_BOW_PIVOT.z

    return Vector((
        REFERENCE_BOW_PIVOT.x + (dx * c) + (dz * s),
        p.y,
        REFERENCE_BOW_PIVOT.z - (dx * s) + (dz * c),
    ))


REST_NOCK_WORLD = rotate_reference_point_y(REST_NOCK)
DRAW_NOCK_WORLD = rotate_reference_point_y(DRAW_NOCK)


def apply_reference_bow_composition():
    """
    Parent the complete Bow_ROOT under one clean composition root.

    Bow_ROOT already contains:
    - riser
    - grip
    - upper/lower limbs
    - string
    - limb hardware

    Its existing release animation stays intact underneath this
    static presentation rotation.
    """

    existing = bpy.data.objects.get("Reference_Bow_Composition_ROOT")

    if existing is not None:
        bpy.data.objects.remove(existing, do_unlink=True)

    composition = bpy.data.objects.new(
        "Reference_Bow_Composition_ROOT",
        None,
    )
    bpy.context.collection.objects.link(composition)

    composition.empty_display_type = "PLAIN_AXES"
    composition.empty_display_size = 0.30
    composition.location = REFERENCE_BOW_PIVOT
    composition.rotation_mode = "XYZ"

    # Preserve Bow_ROOT's existing world transform before parenting.
    bow_world = bow_root.matrix_world.copy()

    bow_root.parent = composition
    bow_root.matrix_parent_inverse = composition.matrix_world.inverted()
    bow_root.matrix_world = bow_world

    # NEGATIVE is intentional:
    # upper tip -> left
    # lower tip -> right
    composition.rotation_euler[1] = math.radians(
        REFERENCE_BOW_TILT_DEG
    )

    print("")
    print("REFERENCE BOW COMPOSITION")
    print("  tilt:", REFERENCE_BOW_TILT_DEG)
    print(
        "  rest nock:",
        tuple(round(v, 4) for v in REST_NOCK_WORLD),
    )
    print(
        "  draw nock:",
        tuple(round(v, 4) for v in DRAW_NOCK_WORLD),
    )
    print("")

def place_arrow_from_nock(nock_position):
    nock_position = Vector(nock_position)

    direction = TARGET_CENTER - nock_position
    direction.normalize()

    arrow_root.location = nock_position
    arrow_root.rotation_mode = "QUATERNION"
    arrow_root.rotation_quaternion = Vector((1, 0, 0)).rotation_difference(direction)

    return direction

# Rest
place_arrow_from_nock(REST_NOCK_WORLD)
arrow_root.keyframe_insert("location", frame=1)
arrow_root.keyframe_insert("rotation_quaternion", frame=1)

arrow_root.keyframe_insert("location", frame=18)
arrow_root.keyframe_insert("rotation_quaternion", frame=18)

# Draw
place_arrow_from_nock(DRAW_NOCK_WORLD)
arrow_root.keyframe_insert("location", frame=50)
arrow_root.keyframe_insert("rotation_quaternion", frame=50)

# Hold
arrow_root.keyframe_insert("location", frame=58)
arrow_root.keyframe_insert("rotation_quaternion", frame=58)

# Release starts
arrow_root.keyframe_insert("location", frame=60)
arrow_root.keyframe_insert("rotation_quaternion", frame=60)

# Impact position — arrow tip meets target center
direction = Vector((1, 0, 0))
current_rotation = arrow_root.rotation_quaternion.copy()
arrow_root.rotation_quaternion = current_rotation

arrow_local_tip = Vector((ARROW_LENGTH + 0.34, 0, 0))
tip_world_offset = current_rotation @ arrow_local_tip
impact_origin = TARGET_CENTER - tip_world_offset

arrow_root.location = impact_origin
arrow_root.keyframe_insert("location", frame=84)
arrow_root.keyframe_insert("rotation_quaternion", frame=84)

arrow_root.keyframe_insert("location", frame=110)
arrow_root.keyframe_insert("rotation_quaternion", frame=110)

# ============================================================
# TARGET WITH BRAND PROTRUSIONS
# ============================================================

target_root.location = TARGET_CENTER

outer = add_torus(
    "Target_Outer_Ring",
    (0, 0, 0),
    0.66,
    0.055,
    TEAL,
)

mid = add_torus(
    "Target_Mid_Ring",
    (0, -0.02, 0),
    0.46,
    0.035,
    TEAL_LIGHT,
)

inner = add_torus(
    "Target_Inner_Ring",
    (0, -0.04, 0),
    0.275,
    0.037,
    TEAL,
)

bull = add_disc(
    "Target_Bullseye",
    (0, -0.06, 0),
    0.115,
    0.065,
    TEAL,
)

highlight = add_disc(
    "Target_Highlight",
    (-0.035, -0.095, 0.035),
    0.028,
    0.02,
    WHITE,
)

for obj in (outer, mid, inner, bull, highlight):
    obj.parent = target_root

# Four clear outward protrusions
protrusions = [
    ((0.0, 0.0, 0.86), (0.10, 0.060, 0.25)),
    ((0.0, 0.0, -0.86), (0.10, 0.060, 0.25)),
    ((0.86, 0.0, 0.0), (0.25, 0.060, 0.10)),
    ((-0.86, 0.0, 0.0), (0.25, 0.060, 0.10)),
]

for index, (loc, scale) in enumerate(protrusions):
    tab = add_beveled_cube(
        f"Target_Protrusion_{index + 1}",
        loc,
        scale,
        TEAL,
        bevel=0.08,
    )

    tab.parent = target_root

# Brand rule:
# Exactly four protrusions only:
# top / right / bottom / left.
# No diagonal tabs or decorative protrusions.

# Target animation
target_root.rotation_mode = "XYZ"
target_root.rotation_euler = (0, 0, 0)
target_root.scale = (1, 1, 1)
key(target_root, 1)

key(target_root, 83)

target_root.scale = (1.055, 1.055, 1.055)
key(target_root, 88)

target_root.rotation_euler[1] = math.radians(360)
target_root.scale = (1, 1, 1)
key(target_root, 104)

key(target_root, 110)

# ============================================================
# BOW SUBTLE RELEASE RESPONSE
# ============================================================

bow_root.rotation_mode = "XYZ"
bow_root.rotation_euler = (0, 0, 0)
key(bow_root, 1)
key(bow_root, 58)

bow_root.rotation_euler[1] = math.radians(-2.2)
bow_root.rotation_euler[2] = math.radians(1.3)
key(bow_root, 64)

bow_root.rotation_euler = (0, 0, 0)
key(bow_root, 72)
key(bow_root, 110)

# ============================================================
# ANIMATION CURVES
# ============================================================
#
# Blender 5.x uses the layered Action / ChannelBag animation API.
# The keyframes created above already use Blender's default smooth
# interpolation, so we intentionally leave them untouched here.
#
# This keeps the scene compatible with Blender 5.2 without relying
# on the removed legacy action.fcurves collection.

# ============================================================
# LIGHTING
# ============================================================

world = scene.world

if world is None:
    world = bpy.data.worlds.new("World")
    scene.world = world

world.use_nodes = True
world.node_tree.nodes["Background"].inputs["Color"].default_value = (
    1.0,
    1.0,
    1.0,
    1.0,
)
world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.80

def area_light(name, location, energy, size, color):
    light_data = bpy.data.lights.new(name, "AREA")
    light_data.energy = energy
    light_data.shape = "DISK"
    light_data.size = size
    light_data.color = color

    light = bpy.data.objects.new(name, light_data)
    bpy.context.collection.objects.link(light)

    light.location = location
    look_at(light, (0.5, 0, 0.4))

    return light

area_light(
    "Key_Light",
    (-1.0, -6.0, 6.0),
    1050,
    5.0,
    (0.95, 0.98, 1.0),
)

area_light(
    "Fill_Light",
    (4.0, -4.0, 1.0),
    650,
    4.0,
    (0.72, 0.88, 0.95),
)

area_light(
    "Rim_Light",
    (-5.0, 1.5, 3.0),
    850,
    3.0,
    (0.36, 0.72, 0.80),
)

# ============================================================
# CAMERAS
# ============================================================

def world_bbox_center(obj):
    if not hasattr(obj, "bound_box"):
        return obj.matrix_world.translation.copy()

    points = [obj.matrix_world @ Vector(corner) for corner in obj.bound_box]
    center = Vector((0.0, 0.0, 0.0))

    for p in points:
        center += p

    return center / len(points)


def tilt_bow_assembly(tilt_degrees=22.0):
    """
    Tilt only the bow assembly in screen space so the bow limbs
    become visually parallel to the arrow direction.

    We keep:
    - target unchanged
    - flying arrow unchanged
    - cameras unchanged

    We tilt:
    - bow body / riser / limbs
    - bow string
    - left-side bow accessories
    """
    pivot = Vector((-2.58, 0.0, CENTER_Z))

    root = bpy.data.objects.get("Bow_Tilt_Root")
    if root is None:
        root = bpy.data.objects.new("Bow_Tilt_Root", None)
        root.empty_display_type = "PLAIN_AXES"
        root.empty_display_size = 0.25
        bpy.context.collection.objects.link(root)

    root.location = pivot
    root.rotation_mode = "XYZ"
    root.rotation_euler = (0.0, 0.0, 0.0)

    exclude_tokens = (
        "Camera",
        "Target",
        "Arrow",
        "Light",
        "Sun",
        "Backdrop",
        "Floor",
    )

    candidates = []

    for obj in scene.objects:
        if obj == root:
            continue

        if obj.type in {"CAMERA", "LIGHT"}:
            continue

        if any(token in obj.name for token in exclude_tokens):
            continue

        center = world_bbox_center(obj)

        # Grab the full bow cluster on the left side only.
        if center.x < -1.55 and abs(center.z - CENTER_Z) < 4.2:
            candidates.append(obj)

    for obj in candidates:
        if obj.parent == root:
            continue

        world_matrix = obj.matrix_world.copy()
        obj.parent = root
        obj.matrix_parent_inverse = root.matrix_world.inverted()
        obj.matrix_world = world_matrix

    # Positive Y rotation = top tip moves right, bottom tip moves left,
    # which matches the arrow's lower-left -> upper-right diagonal.
    root.rotation_euler[1] = math.radians(tilt_degrees)

    print("")
    print("BOW TILT APPLIED")
    print("  objects:", len(candidates))
    print("  tilt degrees:", tilt_degrees)
    print("  pivot:", tuple(round(v, 3) for v in root.location))
    print("")
def create_camera(name, location, target, ortho_scale):
    cam_data = bpy.data.cameras.new(name)
    cam_data.type = "ORTHO"
    cam_data.ortho_scale = ortho_scale

    cam = bpy.data.objects.new(name, cam_data)
    bpy.context.collection.objects.link(cam)

    cam.location = location

    # Stable front-facing orthographic view.
    # Screen horizontal = world X.
    # Screen vertical   = world Z.
    cam.rotation_mode = "XYZ"
    cam.rotation_euler = (
        math.radians(90.0),
        0.0,
        0.0,
    )

    return cam


def get_animation_bounds_xz():
    """
    Measure the REAL evaluated geometry across the entire animation.

    We intentionally inspect all frames so the camera contains:
    - full bow at rest
    - full bow at full draw
    - arrow during flight
    - complete target
    - complete target during impact / rotation

    Returns:
        xmin, xmax, zmin, zmax
    """

    xmin = float("inf")
    xmax = float("-inf")
    zmin = float("inf")
    zmax = float("-inf")

    original_frame = scene.frame_current

    geometry_types = {
        "MESH",
        "CURVE",
        "SURFACE",
        "FONT",
        "META",
    }

    for frame in range(scene.frame_start, scene.frame_end + 1):
        scene.frame_set(frame)

        depsgraph = bpy.context.evaluated_depsgraph_get()
        depsgraph.update()

        for obj in scene.objects:
            if obj.hide_render:
                continue

            if obj.type not in geometry_types:
                continue

            evaluated = obj.evaluated_get(depsgraph)

            try:
                corners = evaluated.bound_box
            except Exception:
                continue

            matrix = evaluated.matrix_world

            for corner in corners:
                p = matrix @ Vector(corner)

                xmin = min(xmin, p.x)
                xmax = max(xmax, p.x)
                zmin = min(zmin, p.z)
                zmax = max(zmax, p.z)

    scene.frame_set(original_frame)

    if not all(math.isfinite(v) for v in (xmin, xmax, zmin, zmax)):
        raise RuntimeError("Could not calculate animation bounds.")

    return xmin, xmax, zmin, zmax


def fit_camera_to_animation(
    camera,
    render_width,
    render_height,
    margin=1.10,
):
    """
    Auto-fit the orthographic camera to the COMPLETE animation.

    For our landscape orthographic camera, ortho_scale represents
    the visible horizontal width.

    Therefore the required width is:

        max(
            world horizontal span,
            world vertical span * image aspect ratio
        )

    This guarantees both X and Z fit simultaneously.
    """

    xmin, xmax, zmin, zmax = get_animation_bounds_xz()

    width_world = xmax - xmin
    height_world = zmax - zmin

    aspect = render_width / render_height

    required_width_for_x = width_world
    required_width_for_z = height_world * aspect

    required_ortho_scale = max(
        required_width_for_x,
        required_width_for_z,
    )

    camera.data.ortho_scale = required_ortho_scale * margin

    center_x = (xmin + xmax) / 2.0
    center_z = (zmin + zmax) / 2.0

    camera.location.x = center_x
    camera.location.z = center_z

    print("")
    print("AUTO-FIT:", camera.name)
    print(
        "  bounds X:",
        round(xmin, 3),
        "->",
        round(xmax, 3),
    )
    print(
        "  bounds Z:",
        round(zmin, 3),
        "->",
        round(zmax, 3),
    )
    print(
        "  center:",
        round(center_x, 3),
        round(center_z, 3),
    )
    print(
        "  aspect:",
        round(aspect, 4),
    )
    print(
        "  ortho scale:",
        round(camera.data.ortho_scale, 3),
    )



# Apply the approved reference pose ONCE.
#
# Reference orientation:
# - upper bow tip moves LEFT
# - lower bow tip moves RIGHT
# - arrow aims UP + RIGHT
# - arrow nock uses the same -25 degree transform
#
# === ARROW_STRING_CENTER_SYNC_V1 START ===

def _sync_bbox_center_world(obj):
    """
    Return the evaluated world-space center of an object's
    rendered bounding box at the current frame.
    """
    bpy.context.view_layer.update()

    points = [
        obj.matrix_world @ Vector(corner)
        for corner in obj.bound_box
    ]

    center = Vector((0.0, 0.0, 0.0))

    for p in points:
        center += p

    return center / len(points)


def _sync_arrow_origin_from_string_contact(
    string_contact_world,
    aim_quaternion,
):
    """
    The actual groove of our modeled nock sits behind the
    Arrow_ROOT origin.

    Local nock geometry extends to roughly X = -0.20.

    Therefore we position Arrow_ROOT so that the nock groove,
    not the root origin, lands exactly on the bow string.
    """
    NOCK_GROOVE_LOCAL_X = -0.20

    groove_offset_world = (
        aim_quaternion
        @ Vector((NOCK_GROOVE_LOCAL_X, 0.0, 0.0))
    )

    return (
        Vector(string_contact_world)
        - groove_offset_world
    )


def _sync_set_string_middle_world(
    frame,
    world_position,
):
    """
    Put the MIDDLE control point of the bow string exactly at
    a requested world-space point.

    Because Bow_ROOT is already inside the approved -25 degree
    composition, we convert the world point back into the
    string object's local coordinates before keyframing it.
    """
    scene.frame_set(frame)
    bpy.context.view_layer.update()

    world_position = Vector(world_position)

    local_position = (
        string_obj.matrix_world.inverted()
        @ world_position
    )

    middle = string_spline.points[1]

    middle.co = (
        local_position.x,
        local_position.y,
        local_position.z,
        1.0,
    )

    middle.keyframe_insert(
        data_path="co",
        frame=frame,
    )


def _sync_set_arrow_pose(
    frame,
    string_contact_world,
):
    """
    Keep the arrow aimed at the target while forcing its real
    nock groove to touch the exact same point as the string.
    """
    scene.frame_set(frame)
    bpy.context.view_layer.update()

    contact = Vector(string_contact_world)

    direction = TARGET_CENTER - contact

    if direction.length <= 0.00001:
        raise RuntimeError(
            "Arrow synchronization produced zero-length aim vector."
        )

    direction.normalize()

    rotation = Vector(
        (1.0, 0.0, 0.0)
    ).rotation_difference(direction)

    origin = _sync_arrow_origin_from_string_contact(
        contact,
        rotation,
    )

    arrow_root.rotation_mode = "QUATERNION"
    arrow_root.location = origin
    arrow_root.rotation_quaternion = rotation

    arrow_root.keyframe_insert(
        data_path="location",
        frame=frame,
    )

    arrow_root.keyframe_insert(
        data_path="rotation_quaternion",
        frame=frame,
    )

    return direction, rotation


def synchronize_arrow_and_string_center():
    """
    Final mechanical synchronization.

    This does NOT modify:
    - bow model
    - bow -25 degree composition
    - target
    - camera
    - materials
    - arrow geometry
    - arrow feathers

    It only corrects the physical relationship between:
    bow center -> string -> nock -> arrow.

    TIMING:
      frames 1-18  = ready/rest position
      frames 50-58 = full draw
      frame 60     = final held draw before release
      frame 64     = string snapped forward
      frame 84     = arrow impact
      frame 110    = final impact state
    """

    riser = bpy.data.objects.get("Riser_Main")

    if riser is None:
        raise RuntimeError(
            "Riser_Main not found — cannot calculate true bow center."
        )

    # --------------------------------------------------------
    # REAL ARROW-REST POSITION
    # --------------------------------------------------------
    #
    # Start from the actual rendered center of the riser.
    #
    # A small offset:
    #   +X = puts shaft just through/front of the riser opening
    #   +Z = places it slightly above grip center like a real rest
    #   -Y = brings arrow fractionally toward camera so it remains
    #        visually readable instead of being buried inside riser
    #
    scene.frame_set(1)
    bpy.context.view_layer.update()

    riser_center = _sync_bbox_center_world(riser)

    bow_rest_world = Vector((
        riser_center.x + 0.12,
        riser_center.y - 0.20,
        riser_center.z + 0.14,
    ))

    # Direction from actual bow center to bullseye.
    aim_direction = (
        TARGET_CENTER - bow_rest_world
    ).normalized()

    # Resting nock:
    # tiny backset lets the shaft visibly emerge through the
    # middle of the bow instead of floating in front of it.
    rest_contact_world = (
        bow_rest_world
        - aim_direction * 0.08
    )

    # Full-draw distance.
    #
    # This matches the previous mechanical draw magnitude
    # (~1.30 Blender units) but NOW it happens on the exact
    # arrow/target axis.
    FULL_DRAW_DISTANCE = 1.30

    draw_contact_world = (
        rest_contact_world
        - aim_direction * FULL_DRAW_DISTANCE
    )

    # --------------------------------------------------------
    # REST / READY
    # Arrow and string are on the exact same contact point.
    # --------------------------------------------------------

    for frame in (1, 18):
        _sync_set_string_middle_world(
            frame,
            rest_contact_world,
        )

        _sync_set_arrow_pose(
            frame,
            rest_contact_world,
        )

    # --------------------------------------------------------
    # FULL DRAW
    #
    # The nock and middle of string move backwards together,
    # producing a visibly taut triangular string.
    # --------------------------------------------------------

    for frame in (50, 58, 60):
        _sync_set_string_middle_world(
            frame,
            draw_contact_world,
        )

        _sync_set_arrow_pose(
            frame,
            draw_contact_world,
        )

    # --------------------------------------------------------
    # STRING RELEASE
    #
    # At frame 64 string returns to the bow center.
    # Arrow has already begun its flight by interpolation
    # between frame 60 and impact frame 84.
    # --------------------------------------------------------

    _sync_set_string_middle_world(
        64,
        rest_contact_world,
    )

    _sync_set_string_middle_world(
        110,
        rest_contact_world,
    )

    # --------------------------------------------------------
    # IMPACT
    #
    # Calculate impact using the REAL arrow tip.
    #
    # Current arrowhead:
    # center = ARROW_LENGTH + 0.22
    # depth  = 0.44
    #
    # therefore actual forward tip:
    # ARROW_LENGTH + 0.44
    # --------------------------------------------------------

    impact_direction = (
        TARGET_CENTER - rest_contact_world
    ).normalized()

    impact_rotation = Vector(
        (1.0, 0.0, 0.0)
    ).rotation_difference(impact_direction)

    ARROW_REAL_TIP_X = ARROW_LENGTH + 0.44

    tip_offset_world = (
        impact_rotation
        @ Vector((ARROW_REAL_TIP_X, 0.0, 0.0))
    )

    impact_origin = (
        TARGET_CENTER - tip_offset_world
    )

    for frame in (84, 110):
        scene.frame_set(frame)

        arrow_root.rotation_mode = "QUATERNION"
        arrow_root.location = impact_origin
        arrow_root.rotation_quaternion = impact_rotation

        arrow_root.keyframe_insert(
            data_path="location",
            frame=frame,
        )

        arrow_root.keyframe_insert(
            data_path="rotation_quaternion",
            frame=frame,
        )

    # --------------------------------------------------------
    # INTERPOLATION
    #
    # Keep the existing Blender animation style.
    # No new timing system.
    # --------------------------------------------------------

    scene.frame_set(1)
    bpy.context.view_layer.update()

    print("")
    print("ARROW / STRING CENTER SYNC")
    print(
        "  riser center:",
        tuple(round(v, 4) for v in riser_center),
    )
    print(
        "  rest contact:",
        tuple(round(v, 4) for v in rest_contact_world),
    )
    print(
        "  full draw:",
        tuple(round(v, 4) for v in draw_contact_world),
    )
    print(
        "  full draw distance:",
        FULL_DRAW_DISTANCE,
    )
    print(
        "  target:",
        tuple(round(v, 4) for v in TARGET_CENTER),
    )
    print("  string + nock contact = synchronized")
    print("")

# === ARROW_STRING_CENTER_SYNC_V1 END ===

apply_reference_bow_composition()
synchronize_arrow_and_string_center()

desktop_cam = create_camera(
    "Camera_DESKTOP",
    (0.0, -20.0, 0.0),
    (0.0, 0.0, 0.0),
    1.0,
)

fit_camera_to_animation(
    desktop_cam,
    1400,
    900,
    margin=1.10,
)

mobile_cam = create_camera(
    "Camera_MOBILE",
    (0.0, -20.0, 0.0),
    (0.0, 0.0, 0.0),
    1.0,
)

fit_camera_to_animation(
    mobile_cam,
    900,
    680,
    margin=1.10,
)

# ============================================================
# SAVE BLEND
# ============================================================

bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)

# ============================================================
# PREVIEW RENDER FUNCTION
# ============================================================

def render_preview(
    camera,
    frame,
    width,
    height,
    filename,
):
    scene.camera = camera
    scene.frame_set(frame)

    scene.render.resolution_x = width
    scene.render.resolution_y = height

    scene.render.filepath = os.path.join(
        PREVIEW_DIR,
        filename,
    )

    bpy.ops.render.render(write_still=True)


# Desktop previews
render_preview(
    desktop_cam,
    1,
    1400,
    900,
    "desktop-rest.png",
)

render_preview(
    desktop_cam,
    55,
    1400,
    900,
    "desktop-full-draw.png",
)

render_preview(
    desktop_cam,
    84,
    1400,
    900,
    "desktop-impact.png",
)

# Mobile previews
render_preview(
    mobile_cam,
    1,
    900,
    680,
    "mobile-rest.png",
)

render_preview(
    mobile_cam,
    55,
    900,
    680,
    "mobile-full-draw.png",
)

render_preview(
    mobile_cam,
    84,
    900,
    680,
    "mobile-impact.png",
)

# Save one more time after preview camera usage
bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)

print("")
print("============================================================")
print("INTERNMATCH HERO BLENDER BUILD COMPLETE")
print("============================================================")
print("BLEND:", BLEND_PATH)
print("PREVIEWS:", PREVIEW_DIR)
print("FRAMES:", scene.frame_start, "to", scene.frame_end)
print("============================================================")