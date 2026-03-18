# Stepcare Landing Page - Image Assets Documentation

This document lists all images used in the Stepcare Mental Health Landing Page.

## Figma Assets (Downloaded with Code)

These images are imported using the `figma:asset` scheme and will be included when you download the code:

### 1. **Logo**
- **File**: `figma:asset/137b5bec4e9b237c081ad32e8d6249e0aca84590.png`
- **Used in**: Header component
- **Description**: Stepcare logo

### 2. **Hero Background**
- **File**: `figma:asset/1f442bdc019e0e692067d58dfdfe4445f57efdfb.png`
- **Used in**: Hero component
- **Description**: Doctor consulting with patient - mental health care consultation image
- **Overlay**: White overlay at 80% opacity for text readability

### 3. **Previous Hospital Background** (Replaced)
- **File**: `figma:asset/c37127e08cf2e85173199991d696cfb115bd984a.png`
- **Status**: No longer used (replaced with new hero image)

---

## External Images (Unsplash URLs)

These images are loaded from Unsplash CDN and will work when you download the code:

### TrustMarker Component
- **Video Thumbnail**: Professional psychiatrist consultation
  - URL: `https://images.unsplash.com/photo-1758273240403-052b3c99f636`

### WhyChoose Component
- **Doctor-Patient Consultation**: 
  - URL: `https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7`
- **Mental Health Therapy**:
  - URL: `https://images.unsplash.com/photo-1621887348744-6b0444f8a058`
- **Healthcare Team Support**:
  - URL: `https://images.unsplash.com/photo-1722235623141-86bb9b38fca1`

### Treatments Component
- **Anxiety Disorders**:
  - URL: `https://images.unsplash.com/photo-1740645581682-bc1e8e37b0f3`
- **Depression**:
  - URL: `https://images.unsplash.com/photo-1590564310808-f93b5f8d662d`
- **Bipolar Disorder**:
  - URL: `https://images.unsplash.com/photo-1665646458877-90669ce5ccd6`
- **OCD, PTSD, Eating Disorders, Schizophrenia, ADHD, Children's Mental Health**:
  - Various Unsplash images (reused from above for consistency)

### FinalCTA Component
- **Healthcare Team**:
  - URL: `https://images.unsplash.com/photo-1722235623141-86bb9b38fca1`

---

## How Images Are Handled

### Figma Assets
- Images imported with `figma:asset/[hash].png` are embedded in the project
- These will be included in your download automatically
- No external dependencies

### Unsplash Images
- Images loaded from Unsplash CDN using full URLs
- Will continue to work when code is downloaded
- No download required - images are served from Unsplash's servers
- All images are properly attributed to Unsplash

---

## Download Instructions

When you download this project:

1. **Figma Assets**: Automatically included in the download
2. **Unsplash Images**: Will load from Unsplash CDN (internet connection required)
3. **All components**: Properly linked and will work immediately

### Optional: Local Image Setup

If you want to host all images locally:

1. Download each Unsplash image from the URLs above
2. Place them in a `/public/images/` folder
3. Update the image URLs in the components to use local paths
4. Example: Change `https://images.unsplash.com/photo-...` to `/images/filename.jpg`

---

## Components with Images

| Component | Images Used | Type |
|-----------|-------------|------|
| Header | Stepcare Logo | Figma Asset |
| Hero | Doctor-Patient Background | Figma Asset |
| TrustMarker | Video Thumbnail | Unsplash |
| WhyChoose | Carousel Images (3 images) | Unsplash |
| Treatments | Treatment Category Images (9 images) | Unsplash |
| FinalCTA | Healthcare Team | Unsplash |

---

## Image Optimization Notes

- All images use Unsplash's CDN optimization parameters
- Images are lazy-loaded where appropriate
- Responsive image sizing applied
- No heavy local assets that slow down the build

---

**Last Updated**: March 5, 2026
**Total Figma Assets**: 2 (Logo + Hero Background)
**Total External Images**: ~15 (Unsplash CDN)
