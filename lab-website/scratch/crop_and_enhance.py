from PIL import Image, ImageEnhance

# Open the original logo
img = Image.open('src/assets/logo.png')
width, height = img.size

# Bounding box of the visual content:
# crop_left = 595, crop_top = 1692, crop_right = 4776, crop_bottom = 2376
# Let's crop it tightly
cropped = img.crop((595, 1692, 4776, 2376))

# Let's resize it to a width of 2000px for ultra-sharpness on high-DPI/Retina screens
target_width = 2000
target_height = int(cropped.height * (target_width / cropped.width))
resized = cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)

# Enhance sharpness to make the text and laser lines crisper
sharpness_enhancer = ImageEnhance.Sharpness(resized)
enhanced = sharpness_enhancer.enhance(1.4)

# Enhance contrast slightly to make it pop on both dark and light navbar backgrounds
contrast_enhancer = ImageEnhance.Contrast(enhanced)
final_logo = contrast_enhancer.enhance(1.1)

# Save the final sharp cropped logo
final_logo.save('src/assets/logo_cropped.png')
print("Successfully saved enhanced and cropped logo to src/assets/logo_cropped.png")
