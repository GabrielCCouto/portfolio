# SkillsPage — Frontend Specification

## 1. Overview

The SkillsPage presents Gabriel Couto's main technical skills and areas of
expertise.

The page should communicate technical breadth while keeping the visual
language consistent with the HomePage.

The implementation must follow the provided visual reference.

The page should feel:

* Technical
* Modern
* Clean
* Structured
* Minimalist
* Professional
* Consistent with the portfolio's dark futuristic aesthetic

The primary objective is to allow recruiters and technical visitors to
quickly understand Gabriel's core areas of expertise.

---

# 2. Page Structure

The SkillsPage consists of:

```text
SkillsPage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Theme Toggle
│
├── Skills Introduction
│   ├── Section Label
│   ├── Page Title
│   └── Description
│
├── Skills Grid
│   ├── Robotics & Control
│   ├── AI & Computer Vision
│   ├── Embedded Systems
│   └── Full Stack Development
│
├── Social Links
│   ├── GitHub
│   ├── LinkedIn
│   └── Email
│
└── Back To Top Button
```

---

# 3. Global Layout

The SkillsPage must use the same global container and visual language as the
HomePage.

The page should be displayed inside the portfolio's main visual container.

The container should have:

* Dark background
* Subtle border
* Slightly rounded corners
* Consistent horizontal padding
* Consistent vertical spacing
* Minimum viewport-height behavior

The SkillsPage must not feel like a separate website.

It should visually belong to the same portfolio system.

---

# 4. Header

The header must be consistent with the HomePage.

Structure:

```text
<Dev/Portfolio>       Home  About  Skills  Projects  Education  Contact   ☼
```

---

## 4.1 Logo

Text:

```text
<Dev/Portfolio>
```

Requirements:

* Green accent color
* Developer-oriented typography
* Medium/bold weight
* Left aligned
* Clickable
* Links to `#home`

---

## 4.2 Navigation

Navigation items:

```text
Home
About
Skills
Projects
Education
Contact
```

The `Skills` navigation item must be visually highlighted because the user
is currently on the Skills section/page.

### Active state

Use:

* Green accent color
* Slightly stronger visual weight

Inactive items should remain muted.

### Interaction

On hover:

* Transition toward the accent color
* Use a short and subtle transition

Navigation must use the same behavior implemented on the HomePage.

---

## 4.3 Theme Toggle

Use the same theme toggle implementation as the HomePage.

Requirements:

* Use Lucide Icons
* Icon-only button
* Accessible `aria-label`
* Visible keyboard focus state
* Same position and dimensions as the HomePage

---

# 5. Skills Introduction

The introduction is positioned near the top-left of the content area.

Structure:

```text
What I Do

Skills

Technologies and tools I work with to build
intelligent and efficient solutions.
```

---

## 5.1 Section Label

Text:

```text
What I Do
```

### Styling

* Green accent color
* Small font
* Medium/bold weight
* Positioned above the main heading
* Slight letter spacing may be used

This acts as the section eyebrow/label.

---

## 5.2 Main Heading

Text:

```text
Skills
```

This is the primary heading of the page.

Requirements:

* Use `<h1>`
* Large font
* Bold
* High contrast
* Consistent typography with the HomePage title

Example:

```html
<h1>Skills</h1>
```

There must be only one `<h1>` on the page.

---

## 5.3 Description

Text:

```text
Technologies and tools I work with to build
intelligent and efficient solutions.
```

The description should:

* Use muted gray text
* Have comfortable line-height
* Have a limited maximum width
* Remain visually secondary to the heading

On mobile, the text should naturally wrap.

Do not hardcode the line break from the reference image.

---

# 6. Skills Grid

The main content consists of four skill cards.

Desktop layout:

```text
┌──────────────────────────┐  ┌──────────────────────────┐
│ Robotics & Control       │  │ AI & Computer Vision     │
│                          │  │                          │
│ • C / C++                │  │ • Python                 │
│ • Motor Control          │  │ • TensorFlow / Keras     │
│ • PID Control            │  │ • TensorFlow Lite        │
│ • Sensors (I2C, UART)   │  │ • OpenCV                 │
│ • ROS / RoboDK           │  │ • YOLOv8                 │
└──────────────────────────┘  └──────────────────────────┘

┌──────────────────────────┐  ┌──────────────────────────┐
│ Embedded Systems         │  │ Full Stack Development   │
│                          │  │                          │
│ • ESP32 / ESP8266        │  │ • React / Next.js        │
│ • Raspberry Pi / Pico    │  │ • Node.js / Express      │
│ • FreeRTOS               │  │ • MongoDB / MySQL        │
│ • Embedded C / C++       │  │ • REST APIs              │
│ • GPIO, PWM, ADC         │  │ • Docker / Git           │
└──────────────────────────┘  └──────────────────────────┘
```

The cards should form a 2 × 2 grid on desktop.

---

# 7. Skill Card

All four cards must use the same component structure and styling.

Recommended structure:

```text
SkillCard
├── Icon
├── Content
│   ├── Title
│   └── Skill List
```

Example:

```html
<article class="skill-card">
    <div class="skill-card__icon">
        ...
    </div>

    <div class="skill-card__content">
        <h2>Robotics & Control</h2>

        <ul>
            <li>C / C++</li>
            <li>Motor Control</li>
            <li>PID Control</li>
            <li>Sensors (I2C, UART)</li>
            <li>ROS / RoboDK</li>
        </ul>
    </div>
</article>
```

Use `<article>` because each card represents an independent area of
expertise.

---

# 8. Skill Card Visual Design

Each card should have:

* Dark slightly elevated background
* Subtle border
* Rounded corners
* Consistent internal padding
* Green accent icon
* White/light title
* Muted skill text
* Small green bullet indicators

The cards should visually separate themselves from the page background without
using heavy shadows.

---

## 8.1 Card Hover

Cards may have a subtle hover effect.

Recommended behavior:

* Border becomes slightly more visible
* Card moves upward by a very small amount
* Icon becomes slightly brighter
* Subtle accent glow

The effect should be restrained.

The portfolio should remain professional rather than looking like a gaming
interface.

---

# 9. Robotics & Control

## Icon

Use a Lucide icon that visually represents robotics or mechanical systems.

If an exact robotic-arm icon is unavailable in Lucide, use the closest
appropriate technical/mechanical icon.

Do not introduce an additional icon library.

## Title

```text
Robotics & Control
```

## Skills

```text
C / C++
Motor Control
PID Control
Sensors (I2C, UART)
ROS / RoboDK
```

### Example structure

```html
<ul>
    <li>C / C++</li>
    <li>Motor Control</li>
    <li>PID Control</li>
    <li>Sensors (I2C, UART)</li>
    <li>ROS / RoboDK</li>
</ul>
```

---

# 10. AI & Computer Vision

## Icon

Use a Lucide icon representing:

* Artificial intelligence
* Neural networks
* Brain
* Computer vision

The icon should use the same visual treatment as the other cards.

## Title

```text
AI & Computer Vision
```

## Skills

```text
Python
TensorFlow / Keras
TensorFlow Lite
OpenCV
YOLOv8
```

---

# 11. Embedded Systems

## Icon

Use a Lucide icon representing:

* Microcontrollers
* Embedded hardware
* Computer chips

## Title

```text
Embedded Systems
```

## Skills

```text
ESP32 / ESP8266
Raspberry Pi / Pico
FreeRTOS
Embedded C / C++
GPIO, PWM, ADC
```

---

# 12. Full Stack Development

## Icon

Use a Lucide icon representing:

* Software development
* Programming
* Web development

## Title

```text
Full Stack Development
```

## Skills

```text
React / Next.js
Node.js / Express
MongoDB / MySQL
REST APIs
Docker / Git
```

The frontend is currently implemented using Vanilla JavaScript according to
the project's architecture.

The technologies listed here represent Gabriel's professional skills and
experience, not necessarily technologies that must be introduced into this
portfolio project.

Do not add React, Next.js, Node.js, Express, or any other framework to the
portfolio implementation solely because they appear in this content.

---

# 13. Skill List Styling

Each skill should be displayed as a compact list item.

Reference:

```text
• C / C++
• Motor Control
• PID Control
• Sensors (I2C, UART)
• ROS / RoboDK
```

The bullet should use the project's green accent.

Recommended implementation:

```css
.skill-card__list li::before {
    content: "•";
}
```

The text should remain muted.

Skill items should have consistent vertical spacing.

Avoid oversized typography.

The skill list is supporting information and should not compete with the card
title.

---

# 14. Card Layout

Desktop cards should use a horizontal internal structure:

```text
┌──────────────────────────────────────┐
│                                      │
│   [ICON]     Card Title              │
│              • Skill                 │
│              • Skill                 │
│              • Skill                 │
│              • Skill                 │
│                                      │
└──────────────────────────────────────┘
```

The icon should occupy a fixed-width visual area.

The content area should expand naturally.

The card height should be consistent across the four cards.

Avoid manually positioning individual skill items.

Use CSS Grid or Flexbox for layout.

---

# 15. Skills Grid CSS

The desktop implementation should use CSS Grid.

Suggested conceptual structure:

```css
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
```

The exact spacing should be adjusted according to the project's design tokens.

Do not use absolute positioning for the four cards.

---

# 16. Responsive Behavior

The desktop reference uses a 2 × 2 grid.

The layout must adapt to smaller screens.

---

## Desktop

Use:

```text
2 columns × 2 rows
```

The four cards should occupy the available content width evenly.

---

## Tablet

Depending on available width:

```text
2 columns
```

Cards should become slightly more compact.

Reduce:

* Card padding
* Icon size if necessary
* Typography size
* Grid gap

Do not allow the card content to become cramped.

---

## Mobile

Switch to a single-column layout:

```text
┌────────────────────────────┐
│ Robotics & Control         │
│ • C / C++                  │
│ • Motor Control            │
│ ...                        │
└────────────────────────────┘

┌────────────────────────────┐
│ AI & Computer Vision       │
│ • Python                   │
│ • TensorFlow / Keras       │
│ ...                        │
└────────────────────────────┘

┌────────────────────────────┐
│ Embedded Systems            │
│ ...                        │
└────────────────────────────┘

┌────────────────────────────┐
│ Full Stack Development     │
│ ...                        │
└────────────────────────────┘
```

Requirements:

* No horizontal scrolling
* Cards occupy available width
* Text remains readable
* Icons remain visible
* Adequate spacing between cards
* Touch targets remain accessible

---

# 17. Header Responsive Behavior

The Header must behave consistently with the HomePage.

On mobile:

* Desktop navigation should collapse.
* Use a menu button.
* Menu button must have an accessible label.
* Navigation must remain keyboard accessible.
* The active `Skills` item must remain visually identifiable.

Do not duplicate the navigation implementation specifically for the
SkillsPage.

Reuse the existing Header implementation.

---

# 18. Social Links

The bottom-left area contains social links consistent with the HomePage.

Required links:

```text
GitHub
LinkedIn
Email
```

Use icon-only links.

Each link must have:

* Accessible `aria-label`
* Keyboard focus state
* Hover state
* Correct destination

Example:

```html
<nav class="social-links" aria-label="Social links">
    ...
</nav>
```

The visual styling should be shared with the HomePage.

---

# 19. Back To Top

The bottom-right area contains the circular green Back To Top button.

Use the Lucide:

```text
ArrowUp
```

Behavior:

```text
Click → scroll to #home
```

The button should use the same component and styling as the HomePage.

Do not implement a separate Back To Top component specifically for SkillsPage
if the HomePage implementation can be reused.

---

# 20. Animations

Animations should be subtle and consistent with the HomePage.

Recommended:

### Page entrance

The section can fade/slide into view when it becomes visible.

### Skill cards

Cards may appear sequentially with a very small stagger.

Example:

```text
Robotics & Control       → 0ms
AI & Computer Vision     → 75ms
Embedded Systems         → 150ms
Full Stack Development   → 225ms
```

The exact timing is not mandatory.

The animation must remain fast and subtle.

### Hover

Cards may have a small hover transition.

Avoid:

* Large scaling
* Excessive movement
* Continuous animations
* Flashing effects

---

# 21. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

* Disable card entrance animations.
* Disable floating effects.
* Disable unnecessary transforms.
* Keep only essential state transitions.

The page must remain fully functional without animations.

---

# 22. Accessibility

The SkillsPage must use semantic HTML.

Requirements:

* Use a single `<h1>`.
* Use `<h2>` for each skill card title.
* Use `<section>` for the Skills content.
* Use `<article>` for each skill card.
* Use `<ul>` and `<li>` for skill lists.
* All interactive elements must be keyboard accessible.
* Maintain visible focus states.
* Provide accessible labels for icon-only buttons.
* Do not rely only on color to communicate meaning.
* Ensure adequate color contrast.

Recommended structure:

```html
<section id="skills" aria-labelledby="skills-title">

    <header class="section-header">
        <p>What I Do</p>
        <h1 id="skills-title">Skills</h1>
        <p>
            Technologies and tools I work with to build
            intelligent and efficient solutions.
        </p>
    </header>

    <div class="skills-grid">

        <article class="skill-card">
            ...
        </article>

        <article class="skill-card">
            ...
        </article>

        <article class="skill-card">
            ...
        </article>

        <article class="skill-card">
            ...
        </article>

    </div>

</section>
```

---

# 23. Performance

The SkillsPage is primarily content-based and should require very little
JavaScript.

Requirements:

* Avoid unnecessary JavaScript.
* Avoid heavy animation libraries.
* Use CSS for card transitions.
* Use Lucide Icons instead of large icon images.
* Do not load unnecessary assets.
* Keep the page lightweight.

The four skill cards should not require individual JavaScript components if
simple HTML/CSS is sufficient.

---

# 24. Component Reuse

The following components should be shared with the HomePage whenever
possible:

```text
Header
Navigation
ThemeToggle
SocialLinks
BackToTop
```

The SkillsPage should only introduce page-specific components where necessary.

Suggested structure:

```text
SkillsPage
├── SectionHeader
├── SkillsGrid
│   └── SkillCard
├── SocialLinks
└── BackToTop
```

`SkillCard` should be reusable and data-driven.

---

# 25. Suggested Data Structure

Because all four cards share the same structure, the content should
preferably be represented as data rather than duplicated manually in
JavaScript.

Conceptually:

```javascript
const skills = [
    {
        title: "Robotics & Control",
        icon: "...",
        items: [
            "C / C++",
            "Motor Control",
            "PID Control",
            "Sensors (I2C, UART)",
            "ROS / RoboDK"
        ]
    },
    {
        title: "AI & Computer Vision",
        icon: "...",
        items: [
            "Python",
            "TensorFlow / Keras",
            "TensorFlow Lite",
            "OpenCV",
            "YOLOv8"
        ]
    },
    {
        title: "Embedded Systems",
        icon: "...",
        items: [
            "ESP32 / ESP8266",
            "Raspberry Pi / Pico",
            "FreeRTOS",
            "Embedded C / C++",
            "GPIO, PWM, ADC"
        ]
    },
    {
        title: "Full Stack Development",
        icon: "...",
        items: [
            "React / Next.js",
            "Node.js / Express",
            "MongoDB / MySQL",
            "REST APIs",
            "Docker / Git"
        ]
    }
];
```

The exact implementation can differ, but the principle should be preserved:

**Skill cards should have a consistent structure and data source.**

---

# 26. Content Rules

The text displayed on the SkillsPage should match the approved portfolio
content.

Current content:

```text
Section Label:
What I Do

Title:
Skills

Description:
Technologies and tools I work with to build intelligent and efficient
solutions.
```

### Categories

```text
Robotics & Control
AI & Computer Vision
Embedded Systems
Full Stack Development
```

### Robotics & Control

```text
C / C++
Motor Control
PID Control
Sensors (I2C, UART)
ROS / RoboDK
```

### AI & Computer Vision

```text
Python
TensorFlow / Keras
TensorFlow Lite
OpenCV
YOLOv8
```

### Embedded Systems

```text
ESP32 / ESP8266
Raspberry Pi / Pico
FreeRTOS
Embedded C / C++
GPIO, PWM, ADC
```

### Full Stack Development

```text
React / Next.js
Node.js / Express
MongoDB / MySQL
REST APIs
Docker / Git
```

Do not change the displayed terminology without a design/content request.

---

# 27. API Considerations

The initial SkillsPage can use static content.

There is no requirement to request skills from the backend API during the
initial implementation.

If the portfolio later becomes CMS/API-driven, skills may be retrieved from
an endpoint such as:

```text
GET /api/skills
```

The frontend should then map the returned data into the existing `SkillCard`
structure.

The visual implementation should not depend on MongoDB.

---

# 28. Implementation Priority

Implement the SkillsPage in the following order:

## Phase 1 — Structure

* [ ] Reuse the existing Header.
* [ ] Create the Skills section.
* [ ] Create the section label.
* [ ] Create the `<h1>` title.
* [ ] Add the description.
* [ ] Create the skills grid.
* [ ] Create the reusable SkillCard structure.
* [ ] Add all four skill categories.
* [ ] Add social links.
* [ ] Reuse Back To Top.

## Phase 2 — Styling

* [ ] Match the global dark theme.
* [ ] Match typography.
* [ ] Implement 2 × 2 desktop grid.
* [ ] Implement card borders.
* [ ] Implement card backgrounds.
* [ ] Implement green accent icons.
* [ ] Implement skill bullets.
* [ ] Match spacing and dimensions from the reference.

## Phase 3 — Interaction

* [ ] Implement navigation state.
* [ ] Implement card hover effects.
* [ ] Implement navigation scrolling.
* [ ] Ensure theme toggle works.
* [ ] Ensure Back To Top works.

## Phase 4 — Responsive

* [ ] Test desktop.
* [ ] Test laptop.
* [ ] Test tablet.
* [ ] Test mobile.
* [ ] Switch grid to one column when required.
* [ ] Verify no horizontal overflow.
* [ ] Verify mobile navigation.

## Phase 5 — Accessibility & Quality

* [ ] Verify heading hierarchy.
* [ ] Verify keyboard navigation.
* [ ] Verify focus states.
* [ ] Verify icon accessibility.
* [ ] Verify color contrast.
* [ ] Verify reduced-motion behavior.
* [ ] Verify performance.
* [ ] Compare implementation against the reference image.

---

# 29. Acceptance Criteria

The SkillsPage is considered complete when:

* [ ] The visual design matches the provided reference.
* [ ] The same Header used by the HomePage is present.
* [ ] `Skills` is visually identified as the active navigation item.
* [ ] The "What I Do" label is displayed.
* [ ] "Skills" is the page's `<h1>`.
* [ ] The description is displayed correctly.
* [ ] Four skill cards are displayed.
* [ ] Cards use a consistent reusable structure.
* [ ] The desktop layout uses a 2 × 2 grid.
* [ ] Each card contains the correct icon, title, and five skills.
* [ ] Skill bullets use the project's green accent.
* [ ] Cards have subtle borders and dark backgrounds.
* [ ] Cards have appropriate hover states.
* [ ] GitHub, LinkedIn, and Email links are functional.
* [ ] Back To Top is functional.
* [ ] Theme toggle works consistently with the rest of the portfolio.
* [ ] The layout is responsive.
* [ ] Mobile uses a single-column card layout.
* [ ] There is no horizontal overflow.
* [ ] All interactive elements are keyboard accessible.
* [ ] Reduced-motion preferences are respected.
* [ ] No unnecessary dependencies are introduced.
* [ ] The implementation follows the architecture defined in `AGENTS.md`.
* [ ] The page visually feels like part of the same portfolio as the
  HomePage.
