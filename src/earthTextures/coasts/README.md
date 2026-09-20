# Coastal terrain masks

The supplied `earth-blue-marble-terrain-mask-bc123000.png`,
`earth-blue-marble-terrain-mask-bc10000.png`,
`earth-blue-marble-terrain-mask-bc8000.png` and
`earth-blue-marble-terrain-mask-bc5000.png` are automatically displayed as
additional textures for their matching 123,000, 10,000, 8,000 and 5,000 BCE eras with
Blue Marble selected. **Visuals → Terrain mask** toggles the active mask on
and off.

Day Map uses the supplied `earth-daymap-may.png` base with matching
`earth-daymap-may-terrain-mask-bc10000.png`,
`earth-daymap-may-terrain-mask-bc8000.png` and
`earth-daymap-may-terrain-mask-bc5000.png` masks. These are enabled by default
for 10,000, 8,000 and 5,000 BCE and use the same Terrain mask toggle.
Other eras and surface textures have no terrain mask.

The original image is composited over the base using its alpha before GPU
filtering and mipmap generation, so white RGB in transparent pixels cannot
bleed into the coastline. The source PNG is unchanged. It renders below the
ice overlay and territory polygons, and is replaced or removed when changing
era or surface, or removed when disabled or choosing an unsupported surface.
