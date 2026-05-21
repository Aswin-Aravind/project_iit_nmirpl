from PIL import Image

img = Image.open('src/assets/logo.png')
print(f"Original image size: {img.size}")
alpha = img.split()[-1]
width, height = img.size

# Calculate row sums of alpha channel
alpha_data = list(alpha.getdata())
row_sums = [sum(alpha_data[r * width : (r + 1) * width]) for r in range(height)]

# Find nonzero rows
nonzero_rows = [r for r, val in enumerate(row_sums) if val > 0]

if not nonzero_rows:
    print("No visible pixels found.")
    exit(1)

blocks = []
current_block = [nonzero_rows[0], nonzero_rows[0]]
for r in nonzero_rows[1:]:
    if r - current_block[1] > 2: # gap of at least 3 rows
        blocks.append(current_block)
        current_block = [r, r]
    else:
        current_block[1] = r
blocks.append(current_block)

print("Row blocks of visual pixels (startY, endY):", blocks)

if len(blocks) >= 2:
    # Crop from first block start to second-to-last block end plus padding
    crop_top = min([b[0] for b in blocks[:-1]])
    crop_bottom = max([b[1] for b in blocks[:-1]]) + 5
    
    # Calculate column sums for this horizontal slice
    col_sums = [0] * width
    for r in range(crop_top, crop_bottom):
        row_offset = r * width
        for c in range(width):
            col_sums[c] += alpha_data[row_offset + c]
            
    nonzero_cols = [c for c, val in enumerate(col_sums) if val > 0]
    crop_left = max(0, nonzero_cols[0] - 5)
    crop_right = min(width, nonzero_cols[-1] + 5)
    
    print(f"Crop box: ({crop_left}, {crop_top}, {crop_right}, {crop_bottom})")
    cropped = img.crop((crop_left, crop_top, crop_right, crop_bottom))
    cropped.save('src/assets/logo_cropped.png')
    print("Saved logo_cropped.png successfully.")
else:
    # If only 1 block, crop tightly to that block
    crop_top = blocks[0][0]
    crop_bottom = blocks[0][1]
    col_sums = [0] * width
    for r in range(crop_top, crop_bottom):
        row_offset = r * width
        for c in range(width):
            col_sums[c] += alpha_data[row_offset + c]
    nonzero_cols = [c for c, val in enumerate(col_sums) if val > 0]
    crop_left = max(0, nonzero_cols[0] - 5)
    crop_right = min(width, nonzero_cols[-1] + 5)
    print(f"Crop box (single block): ({crop_left}, {crop_top}, {crop_right}, {crop_bottom})")
    cropped = img.crop((crop_left, crop_top, crop_right, crop_bottom))
    cropped.save('src/assets/logo_cropped.png')
    print("Saved logo_cropped.png successfully.")
