

## Implementation Plan: Personal Portfolio - Bento Grid

### 1. Update Global Styles
- Set background color to `#F9FAFB`, add electric blue CSS variable, define typing animation keyframes in `src/index.css`

### 2. Build the Index Page (`src/pages/Index.tsx`)
Complete single-page portfolio with these sections:

- **Hero Bento Card**: Circular avatar placeholder, bold name, animated subtitle cycling through roles with typing effect
- **Projects Grid**: 3-4 cards with title, description, tech tags, link icon; hover: shadow elevation + scale
- **Skills Bento Card**: Tags grouped by category (Frontend, Backend, Tools) with Lucide icons, blue hover accent
- **Footer**: Centered LinkedIn, GitHub, X icons with hover color transition to electric blue

All sections use `rounded-2xl` white cards with subtle borders on the off-white background, responsive grid layout.

