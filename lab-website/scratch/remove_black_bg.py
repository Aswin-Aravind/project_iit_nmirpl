import cv2
import numpy as np

# Load the image
img = cv2.imread('src/assets/OPC LOGO (1).jpg')
h, w, c = img.shape
print(f"Image dimensions: width={w}, height={h}, channels={c}")

# Let's save a copy where we mask out the black background.
# Since it is a black background, let's do a floodfill from the corners to find the background.
# Floodfill from (0,0), (w-1, 0), (0, h-1), (w-1, h-1)

# Convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to get a binary mask of black/dark areas
_, thresh = cv2.threshold(gray, 10, 255, cv2.THRESH_BINARY)

# Create a mask for floodFill
# Mask size needs to be 2 pixels larger than the image
mask = np.zeros((h + 2, w + 2), np.uint8)

# Flood fill from the four corners with 0 (which means background)
# We will start with a copy of the image and flood fill the background with a specific color,
# or we can construct a background mask.
bg_mask = np.zeros((h, w), np.uint8)

# Flood fill from corners on the thresholded image (or grayscale)
# Since the background is black, we want to find the connected black regions starting from the corners.
# In the thresholded image, black background is 0, foreground is 255.
# We want to fill the 0s starting from corners with 255 in the bg_mask.
temp_thresh = thresh.copy()

# cv2.floodFill returns: retval, image, mask, rect
# We can floodfill the background (value 0) in temp_thresh with a dummy value (e.g. 128)
cv2.floodFill(temp_thresh, None, (0, 0), 128)
cv2.floodFill(temp_thresh, None, (w - 1, 0), 128)
cv2.floodFill(temp_thresh, None, (0, h - 1), 128)
cv2.floodFill(temp_thresh, None, (w - 1, h - 1), 128)

# Now, pixels in temp_thresh that are 128 are the background!
bg_pixels = (temp_thresh == 128)

# Create an RGBA image
rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
rgba[bg_pixels] = [0, 0, 0, 0]  # Set background pixels to transparent

# Let's check if the floodfill worked well by saving the result
cv2.imwrite('src/assets/OPC_LOGO_no_bg.png', rgba)
print("Saved transparent logo to src/assets/OPC_LOGO_no_bg.png")
