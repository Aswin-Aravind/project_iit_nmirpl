from PIL import Image

img = Image.open('src/assets/logo_cropped.png')
width, height = img.size

# Search for the red laser line. The laser line is red (#ff3300 or similar).
# We look for pixels where R is high (e.g., > 200) and G, B are low (e.g., < 100).
red_rows = []
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if a > 50 and r > 200 and g < 100 and b < 100:
            red_rows.append(y)
            break

if red_rows:
    avg_y = sum(red_rows) / len(red_rows)
    print(f"Red laser line found at average Y coordinate: {avg_y:.2f} out of {height} pixels.")
    print(f"Percentage height: {avg_y / height:.4f}")
else:
    print("Could not locate the red laser line.")
