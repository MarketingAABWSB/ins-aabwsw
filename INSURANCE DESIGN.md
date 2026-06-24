---
name: Lumina Assurance
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is anchored in the principles of stability, clarity, and approachability. It serves a demographic that values security and professional guidance, requiring a UI that feels both institutional and human-centric. 

The aesthetic follows a **Corporate / Modern** direction. It prioritizes functional minimalism to reduce cognitive load during complex financial decisions. The interface uses generous white space to evoke a sense of calm and organization. Visual interest is maintained through high-quality, authentic photography of people and property, avoiding overly "stock" imagery in favor of natural lighting and relatable subjects.

## Colors

The palette is designed to communicate authority and innovation. 
- **Primary (Deep Blue):** Used for core branding, navigation backgrounds, and primary headings to establish a foundation of stability.
- **Secondary (Teal):** Applied to success states, interactive elements, and key call-to-actions (CTAs) to provide a modern, refreshing contrast.
- **Tertiary (Sky Blue):** Used for accents, information callouts, and subtle hover states.
- **Neutrals:** A range of cool grays provides structure without adding visual noise. Backgrounds should remain predominantly white (#FFFFFF) or extremely light gray (#F8FAFC) to maintain a clean, airy feel.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Manrope** is used for headlines to provide a modern, slightly rounded, and friendly geometric touch. **Inter** is the workhorse for all body copy and UI labels, chosen for its exceptional legibility and neutral, professional tone.

Maintain a strict vertical rhythm by adhering to the defined line heights. For long-form reading, such as policy documents, use `body-lg` with increased paragraph spacing. Labels should be used sparingly for form headers and small navigation elements to ensure the hierarchy remains clear.

## Layout & Spacing

The system employs a **Fixed Grid** model for desktop to ensure content remains readable and centered, scaling to a **Fluid Grid** for mobile devices. 
- **Desktop:** 12-column grid, 1120px max-width, 24px gutters.
- **Tablet:** 8-column grid, fluid width, 24px gutters.
- **Mobile:** 4-column grid, fluid width, 16px gutters.

Spacing follows a 4px base unit. Section-level spacing (`80px`+) is encouraged to separate distinct insurance products or service features, preventing the "cluttered" look often associated with legacy insurance portals. Large margins ensure the user's eye is drawn toward the center of the experience.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Ambient Shadows**. The design system avoids heavy, dark shadows in favor of light, diffused elevation that feels integrated with the surface.

- **Level 0 (Flat):** Used for the main background.
- **Level 1 (Subtle):** Cards and containers use a 1px border (#E2E8F0) with no shadow, or a very soft, high-blur shadow (Y: 2px, B: 4px, Opacity: 4% Black).
- **Level 2 (Raised):** Interactive cards on hover and dropdown menus use a more pronounced shadow (Y: 10px, B: 20px, Opacity: 8% Primary Blue) to indicate interactivity.
- **Interactive Layers:** Buttons use a solid fill; they do not use shadows unless they are "floating" action buttons.

## Shapes

The shape language is **Rounded**, reflecting a balance between corporate structure and friendly accessibility. 
- **Standard UI Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Hero sections and large content blocks use a 1rem (16px) radius to soften the overall layout.
- **Icons:** Use a consistent 2px stroke weight with slightly rounded corners to match the UI's geometry.

## Components

### Buttons & CTAs
- **Primary:** Solid Teal background with White text. High contrast for critical actions like "Get a Quote."
- **Secondary:** Transparent background with a 1px Deep Blue border and Deep Blue text.
- **Tertiary:** Text-only with an underline or chevron for navigation-based actions.

### Form Elements
Insurance involves data entry. Inputs must be large (minimum 48px height) with 1px borders that turn Teal on focus. Error states must use a distinct red and include an icon for accessibility. Labels always sit above the input field, never as placeholder text.

### Trust Badges & Social Proof
Horizontal layouts of monochromatic partner logos or security certifications. These should be placed near CTAs to reinforce credibility at the moment of conversion.

### Cards
Cards are the primary way to display insurance plans. They should use a white background, Level 1 elevation, and a distinct "Top Border" in the primary or secondary color to categorize the product type (e.g., Auto, Home, Life).

### Progress Indicators
For multi-step quote forms, use a horizontal stepper with Teal indicators for completed steps and Deep Blue for the active step.