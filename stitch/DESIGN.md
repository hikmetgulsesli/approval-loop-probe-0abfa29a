---
name: Deterministic Utility
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#434655'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  tabular-nums:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  component-gap-xs: 4px
  component-gap-sm: 8px
  row-height-sm: 32px
  row-height-md: 40px
---

## Brand & Style
The design system is engineered for "Approval Loop Probe," focusing on high-density utility, technical precision, and deterministic clarity. The UI is designed to function as a reliable tool for professional environments where information density is a requirement, not a drawback. 

The aesthetic is **Modern Corporate / Minimalist**, characterized by a "calm product UI" approach. It rejects decorative elements, marketing fluff, and excessive whitespace in favor of structural integrity and clear data hierarchies. The emotional response is one of stability, control, and efficiency. Every pixel serves a functional purpose, utilizing subtle borders and tonal shifts rather than dramatic shadows to define the workspace.

## Colors
This design system utilizes a foundation of Slate and Gray to maintain a neutral, low-fatigue workspace. Visual energy is reserved for functional status indicators and primary actions.

- **Primary (Blue):** Used for interactive elements, focus states, and primary action buttons.
- **Success (Emerald):** Denotes "Ready," "Approved," or "Healthy" statuses.
- **Warning (Amber):** Highlights pending items, warnings, or states requiring attention.
- **Neutral (Slate):** Forms the structural skeleton of the UI (borders, secondary text, and iconography).
- **Backgrounds:** A tiered system of light grays (`#F8FAFC` for page backgrounds, `#FFFFFF` for containers) creates subtle separation without heavy shadows.

## Typography
The system uses **Geist** for its technical precision and exceptional legibility at small sizes. The typography is optimized for high-density layouts and tabular data.

- **Tabular Alignment:** All numerical data must use `tabular-nums` to ensure columns align perfectly in tables and lists.
- **Information Density:** The base body size is set to 14px, with 13px used for dense data grids to maximize visible content without sacrificing readability.
- **Labels:** Use `label-caps` for table headers and section metadata to provide clear structural anchoring.
- **Hierarchy:** Contrast is achieved through weight (Medium/SemiBold) rather than significant jumps in font size.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. The philosophy is "compact but breathable," ensuring that high-density information does not feel cluttered.

- **Grid:** A 12-column grid is used for dashboard layouts, while data-heavy views utilize a flexible flexbox/grid approach with a 12px gutter.
- **Density:** Standard row heights are capped at 40px, with a "compact" mode at 32px for large data sets.
- **Margins:** Page margins are kept to a functional 16px or 24px on desktop to maximize the utility of the center stage.
- **Breakpoints:** 
  - Mobile (<768px): Single column, 12px side margins.
  - Tablet (768px - 1024px): Multi-column with collapsed sidebars.
  - Desktop (>1024px): Full multi-pane utility layout.

## Elevation & Depth
The design system avoids deep shadows in favor of **Tonal Layers and Low-Contrast Outlines**. Depth is used sparingly to indicate interactivity or modal prominence.

- **Level 0 (Base):** `#F8FAFC` background.
- **Level 1 (Cards/Surface):** `#FFFFFF` surface with a 1px solid border in `#E2E8F0`. No shadow.
- **Level 2 (Hover/Active):** A very subtle ambient shadow (4px blur, 2% opacity black) to indicate a card is interactive.
- **Level 3 (Modals/Popovers):** Defined by a crisp 1px border and a slightly more pronounced shadow (12px blur, 8% opacity) to separate the element from the data grid below.
- **Separators:** Use 1px borders in `#F1F5F9` for internal row separation within tables.

## Shapes
The shape language is **Soft (0.25rem)**, reflecting a professional, engineered feel. 

- **Standard Elements:** Buttons, input fields, and tags use a 4px (0.25rem) radius.
- **Containers:** Large cards or panels may use 8px (0.5rem) to provide a soft container feel for internal sharp-edged data rows.
- **Status Pills:** Status indicators use a fully rounded (pill) shape to distinguish them clearly from interactive buttons.

## Components
Consistent styling across functional components ensures predictability in the approval workflow.

- **Data Tables:** The core of the system. Use subtle `:hover` background shifts (`#F1F5F9`). Headers are sticky, using `label-caps` in Slate 500.
- **Status Indicators:** Small, solid-color dots or low-contrast pills (e.g., light green background with dark green text) for "Ready," "Pending," or "Error."
- **Action Buttons:**
    - *Primary:* Solid Blue 600, white text, 4px radius.
    - *Secondary:* White background, Slate 200 border, Slate 700 text.
    - *Ghost:* No border/background until hover, used for secondary table actions.
- **Input Fields:** 1px solid Slate 200 border, 4px radius. Focus state uses a 2px Primary Blue ring with 0px offset.
- **Compact Tiles:** Used for summary metrics. They feature a `label-caps` title and a large `tabular-nums` value, encased in a Level 1 border.
- **Timeline/Audit Trail:** A vertical 2px line in Slate 200 with small 8px nodes to represent the "Loop" history in the probe.