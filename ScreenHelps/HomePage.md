# HomePage — Frontend Specification

## 1. Overview

The HomePage is the main landing section of the interactive personal portfolio.

Its purpose is to immediately communicate:

* Who Gabriel Couto is
* His professional background
* His main technical areas
* His focus on Robotics, Embedded Systems, AI and Software Development
* A clear path to explore his projects or get in contact

The implementation must visually follow the provided reference image.

The page should feel:

* Modern
* Technical
* Minimalist
* Professional
* Dark
* Futuristic
* Interactive without being visually overloaded

---

# 2. Page Structure

The HomePage consists of the following main areas:

```text
HomePage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Theme Toggle
│
├── Hero Section
│   ├── Introduction
│   ├── Name
│   ├── Professional Title
│   ├── Description
│   ├── Primary CTA
│   ├── Secondary CTA
│   └── Social Links
│
├── Hero Visualization
│   ├── Robotic Arm
│   ├── AI Tag
│   ├── Robotics Tag
│   ├── Embedded Systems Tag
│   ├── Web Development Tag
│   └── Background Visualization
│
└── Back To Top Button
```

---

# 3. Global Visual Style

The HomePage must use the project's established design system.

### General appearance

* Dark background
* Very subtle blue/green tones
* Green used as the primary accent color
* White/off-white primary text
* Muted gray secondary text
* Thin borders
* Subtle glow effects
* Rounded corners
* Minimal shadows
* High contrast between content and background

The visual hierarchy must prioritize:

1. Gabriel's name
2. Professional title
3. Short description
4. Primary CTA
5. Hero visualization

---

# 4. Main Container

The entire portfolio should be presented inside a centered visual container.

### Desktop

The container should:

* Occupy most of the viewport width
* Maintain consistent horizontal margins
* Have a subtle border
* Have slightly rounded corners
* Have a dark background
* Have enough internal padding to prevent content from touching the edges

Reference proportions:

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
│                                                              │
│                                                              │
│ Hero Content                         Hero Visualization      │
│                                                              │
│                                                              │
│ Social Links                                                 │
└──────────────────────────────────────────────────────────────┘
```

The container should preferably use:

```css
min-height: 100vh;
```

or an equivalent layout that fills the initial viewport.

Avoid hardcoding the container height to the reference image dimensions.

---

# 5. Header

The header is positioned at the top of the HomePage.

It contains:

```text
Logo

Home   About   Skills   Projects   Education   Contact

Theme Toggle
```

---

## 5.1 Logo

Text:

```text
<Dev/Portfolio>
```

### Styling

* Green accent color
* Monospace or developer-oriented typography
* Medium/bold weight
* Slightly smaller than the main navigation
* Positioned on the left side

The logo should be clickable and return the user to the Home section.

---

## 5.2 Navigation

Navigation items:

```text
Home
About
Skills
Projects
Education
Contact
```

Navigation must use anchor-based section navigation.

Example:

```html
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#education">Education</a>
<a href="#contact">Contact</a>
```

### Active state

The current section should have:

* Green text
* Slightly higher visual emphasis

Inactive items should use muted gray.

Hovering over an item should smoothly transition the text toward the accent color.

---

## 5.3 Theme Toggle

The theme toggle is represented by a small sun icon.

Requirements:

* Use Lucide Icons
* Button must be accessible
* Provide an accessible `aria-label`
* Toggle between light and dark themes if the theme system supports both

Example:

```text
aria-label="Toggle theme"
```

The icon should not visually dominate the header.

---

# 6. Hero Section

The Hero Section is the primary content of the HomePage.

It should use a two-column layout on desktop.

```text
┌──────────────────────────┬─────────────────────────────┐
│                          │                             │
│       Text Content       │      Hero Visualization    │
│                          │                             │
└──────────────────────────┴─────────────────────────────┘
```

Suggested ratio:

```text
45% text
55% visualization
```

The content must remain vertically centered.

---

# 7. Hero Text Content

The left side contains the professional introduction.

---

## 7.1 Greeting

Text:

```text
Hi, I'm
```

### Styling

* Green accent
* Small font
* Medium weight
* Positioned immediately above the main heading

---

## 7.2 Main Heading

Text:

```text
Gabriel Couto
```

This is the most visually prominent text on the page.

### Requirements

* Large font
* Bold
* High contrast
* Responsive typography
* No unnecessary decorative effects

The name should remain readable at every supported viewport width.

---

## 7.3 Professional Title

Text:

```text
Mechatronics Engineer • Full Stack Developer
```

### Styling

* Gray/muted text
* Medium font size
* Positioned directly below the name

The bullet separator should remain visually subtle.

---

## 7.4 Description

Text:

```text
I build intelligent systems that combine
embedded hardware, AI, and modern web
technologies to solve real-world problems.
```

This text should be treated as a short professional summary.

### Requirements

* Maximum readable line width
* Muted gray color
* Comfortable line height
* Avoid excessive text width

On smaller screens, the text should naturally wrap instead of being
forced into the same line breaks as the reference image.

---

# 8. Call To Action

Two buttons are displayed below the description.

```text
[ View My Projects → ]   [ Get In Touch ]
```

---

## 8.1 Primary CTA

Text:

```text
View My Projects
```

Icon:

```text
ArrowRight
```

Action:

```text
Scroll to #projects
```

### Visual style

* Green background
* Dark text
* Rounded corners
* Strong visual emphasis

### Hover

The button should have a subtle transition such as:

* Slight brightness change
* Slight upward movement
* Subtle shadow/glow

Do not use excessive animation.

---

## 8.2 Secondary CTA

Text:

```text
Get In Touch
```

Action:

```text
Scroll to #contact
```

### Visual style

* Transparent/dark background
* Thin border
* Light text
* Same height as primary CTA

On hover:

* Border becomes more prominent
* Text becomes brighter
* Subtle accent transition

---

# 9. Social Links

Social links are positioned below the CTA area.

Reference icons:

```text
GitHub
LinkedIn
Email
```

Use Lucide Icons where an appropriate icon exists.

Each icon must be an actual interactive link.

Example destinations:

```text
GitHub   → GitHub profile
LinkedIn → LinkedIn profile
Email    → mailto address
```

### Requirements

Each link must have:

* Accessible label
* Keyboard focus state
* Hover state
* Appropriate external-link behavior where applicable

Example:

```html
aria-label="GitHub"
```

The icons should remain visually subtle compared to the CTA buttons.

---

# 10. Hero Visualization

The right side of the Hero Section contains the main visual element.

The visualization consists of:

```text
                ┌─────────┐
                │   • AI  │
                └─────────┘

                         Robotic Arm
                            │
        ┌─────────────┐    │
        │ Embedded    │    │
        │ Systems  •  │────┘
        └─────────────┘

              [Robotic Arm]

        ┌──────────────┐
        │ Web          │
        │ Development •│
        └──────────────┘
```

The central visual is a robotic arm.

---

# 11. Robotic Arm

The robotic arm is the main visual representation of Gabriel's technical
profile.

It should communicate:

* Robotics
* Automation
* Engineering
* Embedded systems
* AI

### Visual characteristics

The reference uses a technical/wireframe robotic-arm appearance.

Preferred implementation:

1. Use a provided optimized asset if available.
2. Otherwise use an SVG illustration.
3. Avoid using a large raster image when an SVG alternative is practical.

The arm should visually integrate with the dark background.

---

# 12. Visualization Background

Behind the robotic arm there are subtle circular/technical elements.

These may include:

* Radial circles
* Dotted patterns
* Fine grid elements
* Subtle particles
* Faint glow
* Technical rings

These elements must remain secondary to the robotic arm.

They should not reduce text readability or create visual noise.

If implemented using CSS, prefer pseudo-elements and lightweight CSS effects
instead of large numbers of DOM elements.

---

# 13. Technology Tags

Four floating labels surround the robotic arm.

### Tags

```text
AI
Robotics
Embedded Systems
Web Development
```

Each tag contains:

```text
[green dot] Label
```

---

## 13.1 AI Tag

Position:

```text
Upper-right area
```

Text:

```text
AI
```

---

## 13.2 Robotics Tag

Position:

```text
Right side of robotic arm
```

Text:

```text
Robotics
```

---

## 13.3 Embedded Systems Tag

Position:

```text
Left side of robotic arm
```

Text:

```text
Embedded
Systems
```

The label may wrap into two lines on desktop to match the reference.

---

## 13.4 Web Development Tag

Position:

```text
Lower-left area
```

Text:

```text
Web
Development
```

---

# 14. Technology Tag Styling

Each tag should have:

* Dark translucent background
* Thin subtle border
* Small border radius
* Small green indicator
* Muted white/gray text
* Slight backdrop blur if supported

The green indicator should be a small circular element.

Example structure:

```html
<div class="tech-tag">
    <span class="tech-tag__indicator"></span>
    <span class="tech-tag__label">AI</span>
</div>
```

---

# 15. Hero Animations

Animations should reinforce the technical aesthetic without distracting from
the content.

Recommended animations:

### Page entrance

On initial page load:

* Hero text fades in
* Hero visualization fades in
* Technology tags appear with a slight delay

### Technology tags

Tags may use a very subtle floating animation.

The animation should be slow and almost imperceptible.

### Robotic arm

The robotic arm may have a subtle glow/pulse effect.

Avoid continuous rotation unless the asset specifically supports it well.

### CTA buttons

Use short hover transitions.

All animations must respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

* Disable floating animations
* Disable unnecessary entrance animations
* Keep transitions minimal

---

# 16. Back To Top Button

A circular green button is positioned near the bottom-right corner of the
main container.

It contains an upward arrow.

Use:

```text
ArrowUp
```

from Lucide Icons.

### Behavior

Clicking the button should smoothly scroll to:

```text
#home
```

The button may remain visible on the HomePage, but preferably should become
visible after the user scrolls down.

---

# 17. Responsive Behavior

The desktop reference must not be treated as a fixed-size layout.

The HomePage must adapt to:

* Desktop
* Laptop
* Tablet
* Mobile

---

## Desktop

For large screens:

```text
Header
────────────────────────────────────────

Text Content       Hero Visualization

                    Robotic Arm
```

Maintain the two-column layout.

---

## Tablet

For medium-sized screens:

* Reduce horizontal spacing
* Reduce heading size
* Reduce visualization size
* Keep the two-column layout if sufficient space exists
* Move technology tags closer to the robotic arm

If the layout becomes crowded, transition to a stacked layout.

---

## Mobile

On mobile, use a single-column layout:

```text
Header

Hi, I'm

Gabriel Couto

Mechatronics Engineer • Full Stack Developer

Description

[ View My Projects ]
[ Get In Touch ]

Social Links

Robotic Arm
Technology Tags
```

Requirements:

* Navigation should collapse into a mobile menu.
* Hero content should be centered or left-aligned consistently.
* Buttons should remain easily tappable.
* Robotic arm should scale down.
* Technology tags must not overflow the viewport.
* Decorative elements should be reduced.
* No horizontal scrolling.

The hero visualization may be placed below the text content.

---

# 18. Accessibility

The HomePage must follow basic accessibility practices.

Requirements:

* Use semantic HTML.
* Use a single `<h1>` for `Gabriel Couto`.
* Maintain logical heading hierarchy.
* All interactive elements must be keyboard accessible.
* Provide accessible labels for icon-only buttons.
* Maintain visible focus states.
* Do not rely exclusively on color to communicate information.
* Ensure sufficient text contrast.
* Provide appropriate `alt` text for meaningful images.
* Decorative images should use an empty `alt=""`.

---

# 19. Performance

The HomePage is the first section users see and should load quickly.

Requirements:

* Optimize hero images.
* Prefer SVG for technical illustrations when possible.
* Avoid unnecessarily large assets.
* Avoid heavy JavaScript animations.
* Lazy-load assets that are not required for the initial viewport.
* Keep JavaScript modules focused.
* Avoid unnecessary third-party dependencies.

The hero visualization should not significantly delay the first meaningful
render.

---

# 20. Component Suggestions

The implementation can be organized into reusable components/modules:

```text
HomePage
├── Header
│   ├── Logo
│   ├── Navigation
│   └── ThemeToggle
│
├── Hero
│   ├── HeroContent
│   │   ├── Greeting
│   │   ├── HeroTitle
│   │   ├── HeroSubtitle
│   │   ├── HeroDescription
│   │   ├── HeroActions
│   │   └── SocialLinks
│   │
│   └── HeroVisualization
│       ├── RoboticArm
│       ├── BackgroundEffects
│       └── TechnologyTags
│
└── BackToTop
```

Because the project uses Vanilla JavaScript, these components do not need to
be implemented as framework components.

They can be represented through:

* HTML sections
* Reusable JavaScript modules
* CSS component classes

---

# 21. Suggested HTML Structure

The resulting structure should approximately follow:

```html
<main id="home" class="home-page">

    <header class="site-header">
        ...
    </header>

    <section class="hero" aria-labelledby="hero-title">

        <div class="hero__content">

            <p class="hero__greeting">
                Hi, I'm
            </p>

            <h1 id="hero-title">
                Gabriel Couto
            </h1>

            <p class="hero__subtitle">
                Mechatronics Engineer • Full Stack Developer
            </p>

            <p class="hero__description">
                I build intelligent systems that combine embedded hardware,
                AI, and modern web technologies to solve real-world problems.
            </p>

            <div class="hero__actions">
                ...
            </div>

            <nav class="hero__social-links" aria-label="Social links">
                ...
            </nav>

        </div>

        <div class="hero__visualization" aria-hidden="true">
            ...
        </div>

    </section>

    <a class="back-to-top" href="#home" aria-label="Back to top">
        ...
    </a>

</main>
```

The exact class naming convention may be adapted to the project's existing
CSS architecture, but the semantic structure should be preserved.

---

# 22. Content Source

Static content should not be duplicated across multiple JavaScript files.

If portfolio content becomes dynamic in the future, the HomePage should
retrieve the appropriate data through the backend API.

For the initial implementation, the following content is required:

```text
Name:
Gabriel Couto

Greeting:
Hi, I'm

Title:
Mechatronics Engineer • Full Stack Developer

Description:
I build intelligent systems that combine embedded hardware, AI, and modern
web technologies to solve real-world problems.

Primary CTA:
View My Projects

Secondary CTA:
Get In Touch

Technology Tags:
AI
Robotics
Embedded Systems
Web Development
```

---

# 23. Implementation Priority

Implement the HomePage in the following order:

### Phase 1 — Structure

* [ ] Create HomePage HTML structure.
* [ ] Implement header.
* [ ] Implement hero content.
* [ ] Implement CTA buttons.
* [ ] Implement social links.
* [ ] Implement visualization container.

### Phase 2 — Styling

* [ ] Implement dark theme.
* [ ] Implement typography.
* [ ] Implement spacing.
* [ ] Implement buttons.
* [ ] Implement navigation states.
* [ ] Implement technology tags.
* [ ] Implement borders and visual effects.

### Phase 3 — Hero Visualization

* [ ] Add robotic arm asset.
* [ ] Add background technical effects.
* [ ] Position technology tags.
* [ ] Ensure visualization scales correctly.

### Phase 4 — Interaction

* [ ] Implement navigation scrolling.
* [ ] Implement CTA navigation.
* [ ] Implement theme toggle.
* [ ] Implement hover states.
* [ ] Implement back-to-top behavior.
* [ ] Add subtle entrance animations.

### Phase 5 — Responsive

* [ ] Test desktop.
* [ ] Test laptop.
* [ ] Test tablet.
* [ ] Test mobile.
* [ ] Verify no horizontal overflow.
* [ ] Verify navigation behavior on mobile.

### Phase 6 — Quality

* [ ] Verify accessibility.
* [ ] Verify keyboard navigation.
* [ ] Verify reduced-motion behavior.
* [ ] Optimize assets.
* [ ] Verify loading performance.
* [ ] Compare implementation against the reference image.

---

# 24. Acceptance Criteria

The HomePage is considered complete when:

* [ ] The implementation visually matches the provided reference.
* [ ] The header contains the logo, navigation, and theme toggle.
* [ ] "Gabriel Couto" is the primary visual heading.
* [ ] The professional title and description are displayed correctly.
* [ ] Both CTA buttons work.
* [ ] Social links are functional and accessible.
* [ ] The robotic arm is displayed as the primary hero visualization.
* [ ] All four technology tags are displayed.
* [ ] Technology tags remain correctly positioned across supported desktop
  resolutions.
* [ ] The HomePage is responsive.
* [ ] There is no horizontal overflow on mobile.
* [ ] Navigation scrolls to the corresponding sections.
* [ ] The theme toggle works according to the project's theme implementation.
* [ ] Animations are subtle and do not interfere with usability.
* [ ] Reduced-motion preferences are respected.
* [ ] Interactive elements have visible focus states.
* [ ] The implementation does not introduce unnecessary dependencies.
* [ ] The implementation follows the architecture defined in `AGENTS.md`.

---

# 25. Reference

The provided image is the visual reference for the HomePage.

The implementation should reproduce the **visual hierarchy, layout,
proportions, spacing, typography, colors, component positioning, and overall
visual language** of the reference.

The image should be treated as a design reference, not as a fixed pixel
layout.

Responsive behavior, accessibility, semantic HTML, and maintainable CSS take
priority over reproducing individual pixel positions.
