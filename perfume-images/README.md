
# Perfume Images

This directory contains all the perfume product images used in the shop.

Images should follow this naming convention:
- Main product image: `product-name.jpg`
- Additional product images: `product-name-2.jpg`, `product-name-3.jpg`, etc.

Image Specifications:
- Recommended size: 1000x1000px (1:1 aspect ratio)
- Format: JPG or WebP
- Max file size: 200KB
- White or transparent background preferred
- Consistent lighting and positioning

All images should be high-quality, properly compressed, and consistent in dimensions.

## Important Note for Developers

When referencing these images in the code, use paths like:
```
/perfume-images/product-name.jpg
```

Do NOT use paths with the `public/` prefix as Vite automatically serves files from the public directory at the root path.
