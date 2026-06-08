---
name: Modern Heritage
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#40484c'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#70787d'
  outline-variant: '#bfc8cd'
  surface-tint: '#17667f'
  primary: '#00465a'
  on-primary: '#ffffff'
  primary-container: '#085f78'
  on-primary-container: '#94d7f4'
  inverse-primary: '#8dd0ec'
  secondary: '#7f5600'
  on-secondary: '#ffffff'
  secondary-container: '#feba44'
  on-secondary-container: '#704b00'
  tertiary: '#5d3719'
  on-tertiary: '#ffffff'
  tertiary-container: '#784e2d'
  on-tertiary-container: '#fcc299'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbe9ff'
  primary-fixed-dim: '#8dd0ec'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d63'
  secondary-fixed: '#ffddae'
  secondary-fixed-dim: '#feba44'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#f4bb92'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#653d1e'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

This design system draws inspiration from mid-century modern (MCM) aesthetics, blending 1950s optimism with contemporary precision. The narrative centers on "The Art of the Clean," treating professional cleaning as a sophisticated, curated service rather than a chore.

The visual style is **Minimalist-Retro**. It utilizes structured geometry, generous negative space (le vide), and high-quality typographic contrast to evoke a sense of order and serenity. The "retro-chic" vibe is achieved through a combination of vintage-inspired palettes and modern functional layouts, ensuring the interface feels professional, dependable, and high-end.

**Target Audience:** Discerning residential and commercial clients in francophone markets who value architectural beauty, order, and premium service.
**Emotional Response:** Confidence, nostalgia, cleanliness, and tranquility.

## Colors

The palette is rooted in the "Atomic Age" but refined for digital clarity. 

- **Teal (Primaire):** A deep, saturated teal represents depth and professional stability. It is the primary vehicle for headers and action states.
- **Mustard (Secondaire):** This warm gold provides energy and calls to action, contrasting sharply against the teal for high legibility.
- **Wood (Tertiaire):** A walnut-toned brown used for subtle accents and dividing lines, grounding the digital experience in physical materials.
- **Bone (Fond):** An off-white, warm neutral is used for the background instead of pure white to maintain the vintage feel and reduce eye strain.

Use **#0B3039** (Midnight Teal) for text to maintain a softer, more organic feel than pure black.

## Typography

The typography strategy relies on the tension between a high-contrast serif and a geometric sans-serif.

- **Headlines (Titres):** Use *Playfair Display*. Its elegant strokes and traditional serifs convey the "Cristal" aspect of the brand—clarity and luxury.
- **Body & Labels (Corps et Étiquettes):** Use *Montserrat*. Its geometric construction mirrors the Bauhaus influence prevalent in mid-century design. 

For French text, pay close attention to line heights for accents (é, à, Ç). Display titles should use tighter tracking for a poster-like, editorial feel. Labels and small navigational elements should use increased letter spacing for a clean, architectural look.

## Layout & Spacing

This design system uses a **Fixed Grid** philosophy. Content is contained within a structured central column to provide a sense of focus and curated order.

- **Desktop:** 12-column grid, 1200px max-width, with wide 64px external margins to emphasize whitespace.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing follows an 8px base unit. Sections are separated by significant vertical gaps (80px+) to allow the eye to rest, mimicking the spaciousness of mid-century modern interiors. Alignment should be strict and primarily left-aligned or centered; avoid justified text.

## Elevation & Depth

To maintain a clean, minimalistic aesthetic, this design system avoids heavy shadows.

- **Flat Planes:** Most surfaces are flat, using color shifts (e.g., Teal against Bone) to indicate hierarchy.
- **Low-Contrast Outlines:** Instead of shadows, use 1px borders in *Tertiaire* (Walnut) or a 10% opacity version of *Primaire* (Teal) to define card boundaries.
- **Layered Elements:** Depth is achieved through "Tonal Layers"—stacking mustard elements over teal or off-white backgrounds.
- **Interactive States:** On hover, use a slight vertical shift (transform: translateY(-2px)) and a soft, diffused glow (15% opacity mustard) rather than a traditional dark shadow.

## Shapes

The shape language is "Soft-Geometric." While mid-century design is known for sharp lines, the "soft" 0.25rem (4px) corner radius provides a modern friendliness and professional approachability.

- **Primary Radius:** 4px for buttons, input fields, and small cards.
- **Feature Cards:** 8px (rounded-lg) for larger, hero-style components.
- **Iconography:** Use "Star-burst" or "Sparkle" shapes (as seen in the reference) for brand accents. These should remain sharp and geometric.

## Components

### Buttons (Boutons)
- **Primary:** Solid *Mustard Secondaire* with *Midnight Teal* text. Bold, geometric sans-serif. 4px radius.
- **Secondary:** Outline in *Teal Primaire* with 1px stroke.
- **Text:** All-caps *Montserrat* for a formal, architectural look.

### Input Fields (Champs de saisie)
- Minimalist style. Use a 1px bottom border in *Wood Tertiaire* or a full light-teal stroke. Background should be slightly darker than the "Bone" page color for contrast.

### Cards (Cartes)
- No shadows. Use a "Bone" background against the white body, or a thin 1px walnut border. 
- Headers within cards should use the serif *Playfair Display*.

### Lists (Listes)
- Use custom "Sparkle" icons instead of standard bullets to emphasize the cleaning theme.
- High vertical padding (16px) between items for breathability.

### Chips (Badges)
- Pill-shaped with background tints of the primary colors (e.g., 10% teal background with 100% teal text). Highly effective for indicating service types or status.