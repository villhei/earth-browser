# Blue Marble terrain masks

The supplied `earth-blue-marble-terrain-mask-bc10000.png`,
`earth-blue-marble-terrain-mask-bc8000.png` and
`earth-blue-marble-terrain-mask-bc5000.png` are automatically displayed as
additional textures for their matching 10,000, 8,000 and 5,000 BCE eras with
Blue Marble selected. **Visuals → Terrain mask** toggles the active mask on
and off. Other eras have no terrain mask.

The original image is composited over the base using its alpha before GPU
filtering and mipmap generation, so white RGB in transparent pixels cannot
bleed into the coastline. The source PNG is unchanged. It renders below the
ice overlay and territory polygons, and is replaced or removed when changing
era, or removed when disabled or choosing another surface.
