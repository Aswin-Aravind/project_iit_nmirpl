import numpy as np
from PIL import Image
import sys

img = Image.open('src/assets/logo.png')
# Convert image to numpy array of alpha channel
alpha = np.array(img.split()[-1])
row_sums = alpha.sum(axis=1)

# Find where the blurred text starts
# We look for a gap of zeros (or near zeros) after the main logo body.
nonzero_rows = np.where(row_sums > 0)[0]

last_row = nonzero_rows[0]
for r in nonzero_rows:
    if r - last_row > 10:
        print(f"Substantial gap found between {last_row} and {r}!")
    last_row = r

# We can also just print out the row blocks:
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
    # We assume the last block is the blurred text.
    # The actual logo ends at or before the end of the second-to-last block.
    # We will crop from the first block's start to the end of the second-to-last block.
    # And crop horizontally tightly.
    crop_top = min([b[0] for b in blocks[:-1]])
    crop_bottom = max([b[1] for b in blocks[:-1]]) + 5 # Add 5px padding
    
    # Now find the horizontal bbox for just these rows
    sub_alpha = alpha[crop_top:crop_bottom, :]
    col_sums = sub_alpha.sum(axis=0)
    nonzero_cols = np.where(col_sums > 0)[0]
    crop_left = nonzero_cols[0] - 5
    crop_right = nonzero_cols[-1] + 5

    print(f"Optimal crop box: ({crop_left}, {crop_top}, {crop_right}, {crop_bottom})")
    
    # Crop and save it as logo_cropped.png
    cropped = img.crop((crop_left, crop_top, crop_right, crop_bottom))
    cropped.save('src/assets/logo_cropped.png')
    print("Saved logo_cropped.png successfully.")
else:
    print("Could not separate blocks!")
