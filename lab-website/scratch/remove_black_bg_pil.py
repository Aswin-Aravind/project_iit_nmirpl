from PIL import Image
import collections

# Load the image
img = Image.open('src/assets/OPC LOGO (1).jpg')
img = img.convert('RGBA')
width, height = img.size
pixels = img.load()

# We want to identify the black background.
# Since the background is black, we will start a Breadth-First Search (BFS)
# from the 4 corners: (0,0), (width-1, 0), (0, height-1), (width-1, height-1).
# A pixel is considered part of the background if it is connected to the corners
# and is sufficiently dark (e.g., R, G, B all < 40).
# Using a threshold like 40 is safe to ensure we get all of the black background.

visited = set()
queue = collections.deque()

# Add corners to the queue
corners = [
    (0, 0),
    (width - 1, 0),
    (0, height - 1),
    (width - 1, height - 1)
]

for corner in corners:
    r, g, b, a = pixels[corner[0], corner[1]]
    # Check if the corner itself is dark
    if r < 40 and g < 40 and b < 40:
        queue.append(corner)
        visited.add(corner)

# BFS to find all connected dark pixels
while queue:
    x, y = queue.popleft()
    
    # Check 4-connected neighbors
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < width and 0 <= ny < height:
            if (nx, ny) not in visited:
                r, g, b, a = pixels[nx, ny]
                # If neighbor is dark, it's part of the background
                if r < 40 and g < 40 and b < 40:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

# Set all background pixels to transparent
for x, y in visited:
    pixels[x, y] = (0, 0, 0, 0)

# Save the resulting image as PNG
img.save('src/assets/OPC_LOGO_no_bg.png', 'PNG')
print("Successfully saved transparent logo to src/assets/OPC_LOGO_no_bg.png using PIL BFS!")
