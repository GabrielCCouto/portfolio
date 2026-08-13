# EducationPage — Frontend Specification

## 1. Overview

The EducationPage presents Gabriel Couto's academic background, professional
development, and continuous learning journey.

The page should communicate:

* Formal education
* Technical specialization
* Continuous learning
* Academic progression
* Interest in emerging technologies

The implementation must follow the provided visual reference.

The page should maintain the same visual identity established by:

* HomePage
* AboutPage
* SkillsPage

The visual style should remain:

* Dark
* Modern
* Technical
* Minimalist
* Professional
* Futuristic

The primary visual element of this page is a **vertical education timeline**.

---

# 2. Page Structure

The EducationPage consists of:

```text
EducationPage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Theme Toggle
│
├── Education Introduction
│   ├── Section Label
│   ├── Main Heading
│   └── Description
│
├── Education Timeline
│   ├── Bachelor's Degree
│   ├── Continuous Learning
│   └── Specialization
│
├── Social Links
│   ├── GitHub
│   ├── LinkedIn
│   └── Email
│
└── Back To Top Button
```

---

# 3. Global Visual Language

The EducationPage must use the same design system as the other portfolio
pages.

Do not introduce a new visual language.

Use:

* Dark background
* Near-black/navy surfaces
* Green accent color
* White/off-white primary text
* Muted gray secondary text
* Thin borders
* Subtle green glow
* Rounded cards
* Minimal shadows

The timeline should use the green accent as its main visual indicator.

---

# 4. Main Container

The page should use the same main container used by the other pages.

The container should:

* Occupy most of the viewport
* Maintain consistent horizontal margins
* Have a subtle border
* Have slightly rounded corners
* Use the global dark background
* Maintain consistent internal spacing

Do not reproduce the screenshot using fixed pixel coordinates.

The layout must adapt to different viewport sizes.

---

# 5. Header

The Header must be reused from the existing portfolio implementation.

Structure:

```text
<Dev/Portfolio>       Home  About  Skills  Projects  Education  Contact   ☼
```

---

## 5.1 Logo

Text:

```text
<Dev/Portfolio>
```

Requirements:

* Green accent
* Developer-oriented typography
* Medium/bold weight
* Left aligned
* Clickable
* Navigates to `#home`

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

The `Education` item must be highlighted because it represents the current
section.

### Active state

Use:

* Green text
* Slightly stronger visual weight

Inactive items should remain muted.

Hover behavior must match the other pages.

---

## 5.3 Theme Toggle

Reuse the existing ThemeToggle component.

Requirements:

* Lucide icon
* Accessible `aria-label`
* Keyboard accessible
* Visible focus state
* Same dimensions and positioning as other pages

Do not create a page-specific theme implementation.

---

# 6. Education Introduction

The introduction is positioned near the top-left of the content area.

Structure:

```text
My Background

Education

My academic journey and continuous learning.
```

---

## 6.1 Section Label

Text:

```text
My Background
```

Styling:

* Green accent
* Small font
* Medium/bold weight
* Positioned above the main heading

This is the page's eyebrow/section label.

---

## 6.2 Main Heading

Text:

```text
Education
```

Requirements:

* Use `<h1>`
* Large typography
* Bold
* High contrast
* Same typography system as the other pages

There must be only one `<h1>` on the page.

---

## 6.3 Description

Text:

```text
My academic journey and continuous learning.
```

The description should:

* Use muted gray text
* Have comfortable line-height
* Remain visually secondary
* Naturally wrap on smaller screens

Do not hardcode the line break from the reference image.

---

# 7. Education Timeline

The main content is a vertical timeline.

Desktop structure:

```text
Timeline

●────── 2018 - 2022 ──────┌──────────────────────────────┐
│                         │ Bachelor's in Mechatronics   │
│                         │ Engineering                  │
│                         │                              │
│                         │ Federal University of        │
│                         │ Technology - Paraná, Brazil  │
│                         │                              │
│                         │ Focused on robotics, control │
│                         │ systems, electronics,        │
│                         │ programming and automation.  │
│                         └──────────────────────────────┘
│
●────── 2022 - Present ───┌──────────────────────────────┐
│                         │ Continuous Learning          │
│                         │                              │
│                         │ Always learning new           │
│                         │ technologies and improving    │
│                         │ my skills through courses,    │
│                         │ certifications and            │
│                         │ hands-on projects.             │
│                         └──────────────────────────────┘
│
●────── 2024 ─────────────┌──────────────────────────────┐
                          │ Specialization (In Progress) │
                          │                              │
                          │ Focused on Artificial        │
                          │ Intelligence and Machine     │
                          │ Learning applied to robotics │
                          │ and embedded systems.        │
                          └──────────────────────────────┘
```

The timeline is the central component of the page.

---

# 8. Timeline Layout

The timeline should use three visual areas:

```text
Timeline
│
├── Date
│
├── Timeline Indicator
│
└── Education Card
```

Recommended desktop structure:

```text
┌──────────────┬──────┬────────────────────────────────────┐
│ Date         │  ●   │ Education Card                     │
│              │  │   │                                    │
│ 2018 - 2022  │  │   │ Bachelor's in Mechatronics         │
│              │  │   │ Engineering                        │
└──────────────┴──────┴────────────────────────────────────┘
```

The date should remain visually separate from the card.

---

# 9. Timeline Indicator

Each timeline entry contains:

* Green circular marker
* Vertical connecting line

Example:

```text
●
│
●
│
●
```

The timeline line should connect the entries.

---

## 9.1 Timeline Dot

Each entry should have a small green circular indicator.

Recommended conceptual CSS:

```css
.timeline__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-accent);
}
```

The exact dimensions should follow the visual reference.

The dot may have a very subtle glow.

Do not make the dots excessively large.

---

## 9.2 Timeline Line

The connecting line should be:

* Thin
* Subtle
* Dark gray/green
* Continuous between entries

The line should visually connect the timeline entries without competing with
the cards.

Use CSS rather than additional DOM elements where practical.

For example, the timeline container may use a pseudo-element:

```css
.timeline::before {
    content: "";
    position: absolute;
    ...
}
```

Avoid manually creating multiple line elements.

---

# 10. Timeline Date

Each entry has a date or period.

Dates:

```text
2018 - 2022
2022 - Present
2024
```

The date should:

* Use the green accent
* Have medium/bold weight
* Be visually smaller than the card title
* Remain aligned with the corresponding timeline marker

The date must remain readable on mobile.

---

# 11. Education Card

Each timeline entry contains an information card.

Recommended structure:

```text
EducationEntry
├── Date
├── TimelineIndicator
└── EducationCard
    ├── Title
    ├── Institution / Description
    └── Details
```

Example:

```html
<article class="education-entry">

    <time class="education-entry__date">
        2018 - 2022
    </time>

    <div class="education-entry__marker">
        ...
    </div>

    <div class="education-card">
        <h2>
            Bachelor's in Mechatronics Engineering
        </h2>

        <p>
            Federal University of Technology - Paraná, Brazil
        </p>

        <p>
            Focused on robotics, control systems, electronics,
            programming and automation.
        </p>
    </div>

</article>
```

Use semantic `<article>` because each entry represents an independent stage
of the educational journey.

---

# 12. Education Card Styling

Cards should use:

* Dark slightly elevated background
* Thin border
* Rounded corners
* Subtle shadow or glow
* Internal padding
* Light primary text
* Muted secondary text

The card should visually stand out from the background without appearing
heavy.

---

# 13. Bachelor's Degree

## Date

```text
2018 - 2022
```

## Title

```text
Bachelor's in Mechatronics Engineering
```

## Institution

```text
Federal University of Technology - Paraná, Brazil
```

## Description

```text
Focused on robotics, control systems, electronics,
programming and automation.
```

The title should be the strongest element inside the card.

The institution should be visually secondary.

The description should use smaller muted text.

---

# 14. Continuous Learning

## Date

```text
2022 - Present
```

## Title

```text
Continuous Learning
```

## Description

```text
Always learning new technologies and improving my skills
through courses, certifications and hands-on projects.
```

This entry represents ongoing professional and technical development.

It should not be presented as a traditional academic degree.

---

# 15. Specialization

## Date

```text
2024
```

## Title

```text
Specialization (In Progress)
```

## Description

```text
Focused on Artificial Intelligence and Machine Learning
applied to robotics and embedded systems.
```

The status "(In Progress)" should remain visible.

It should communicate that the specialization is currently ongoing.

---

# 16. Timeline Content Structure

The entries should preferably be represented as data.

Conceptual structure:

```javascript
const education = [
    {
        period: "2018 - 2022",
        title: "Bachelor's in Mechatronics Engineering",
        institution:
            "Federal University of Technology - Paraná, Brazil",
        description:
            "Focused on robotics, control systems, electronics, programming and automation."
    },
    {
        period: "2022 - Present",
        title: "Continuous Learning",
        description:
            "Always learning new technologies and improving my skills through courses, certifications and hands-on projects."
    },
    {
        period: "2024",
        title: "Specialization (In Progress)",
        description:
            "Focused on Artificial Intelligence and Machine Learning applied to robotics and embedded systems."
    }
];
```

The exact data structure may differ, but the UI should be generated from a
consistent model rather than manually duplicating markup for every entry.

---

# 17. Timeline Ordering

Entries must appear chronologically from oldest to newest.

Current order:

```text
2018 - 2022
        ↓
2022 - Present
        ↓
2024
```

When new educational experiences are added in the future, preserve the
chronological order unless there is a clear reason to prioritize another
ordering.

---

# 18. Responsive Behavior

The desktop reference uses a horizontal relationship between:

```text
Date → Timeline → Card
```

On smaller screens, the timeline should adapt without losing its visual
identity.

---

## Tablet

Maintain the three-part structure if there is enough horizontal space:

```text
Date     ●     Card
```

Reduce:

* Horizontal spacing
* Card padding
* Typography where necessary

The cards must remain readable.

---

# 19. Mobile Layout

On mobile, use a more compact timeline.

Recommended structure:

```text
●  2018 - 2022

   ┌─────────────────────────────┐
   │ Bachelor's in Mechatronics  │
   │ Engineering                 │
   │                             │
   │ Federal University...       │
   │                             │
   │ Focused on robotics...      │
   └─────────────────────────────┘

●  2022 - Present

   ┌─────────────────────────────┐
   │ Continuous Learning         │
   │                             │
   │ Always learning new...      │
   └─────────────────────────────┘

●  2024

   ┌─────────────────────────────┐
   │ Specialization (In Progress)│
   │                             │
   │ Focused on AI...            │
   └─────────────────────────────┘
```

The date should appear above or beside the card depending on available width.

A recommended mobile structure is:

```text
Marker
Date
Card
```

This provides a clear reading order.

---

# 20. Mobile Timeline Line

The vertical line must remain visible on mobile.

Example:

```text
●
│
│   Card
│
●
│
│   Card
│
●
│
│   Card
```

The line should align with the center of the timeline markers.

It should not overlap the card content.

---

# 21. Header Responsive Behavior

Reuse the existing responsive Header implementation.

On mobile:

* Desktop navigation collapses.
* Use the existing menu button.
* Menu remains keyboard accessible.
* `Education` remains highlighted when the page is active.

Do not create a page-specific mobile navigation.

---

# 22. Social Links

At the bottom-left of the page, reuse the global social links.

Required:

```text
GitHub
LinkedIn
Email
```

Each link must have:

* Accessible label
* Keyboard focus state
* Hover state
* Correct destination

Reuse the existing `SocialLinks` component.

---

# 23. Back To Top

Reuse the global BackToTop component.

Use:

```text
ArrowUp
```

from Lucide.

Behavior:

```text
Click → #home
```

The component should have the same:

* Size
* Position
* Color
* Border radius
* Hover behavior

as the other portfolio pages.

---

# 24. Animations

Animations should be subtle and consistent with the existing portfolio.

Recommended entrance sequence:

```text
Page Header
    ↓
Education Introduction
    ↓
Timeline Entry 1
    ↓
Timeline Entry 2
    ↓
Timeline Entry 3
```

Timeline entries may appear sequentially as the section becomes visible.

---

## 24.1 Timeline Entry Animation

Recommended behavior:

* Fade in
* Slight horizontal translation
* Short duration
* Small stagger between entries

For example:

```text
Entry 1 → 0ms
Entry 2 → 100ms
Entry 3 → 200ms
```

Exact values are not mandatory.

The animation should never delay access to the content.

---

# 25. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Disable entry animations.
* Disable timeline motion effects.
* Disable unnecessary transforms.
* Keep only essential transitions.

The timeline must remain fully functional without animations.

---

# 26. Accessibility

The EducationPage must use semantic HTML.

Requirements:

* Use a single `<h1>`.
* Use `<h2>` for education entry titles.
* Use `<article>` for each education entry.
* Use `<time>` for dates and periods where appropriate.
* Maintain logical reading order.
* Ensure all interactive elements are keyboard accessible.
* Maintain visible focus states.
* Do not rely exclusively on color.
* Ensure sufficient contrast.

Example:

```html
<section id="education" aria-labelledby="education-title">

    <header class="section-header">
        <p>My Background</p>

        <h1 id="education-title">
            Education
        </h1>

        <p>
            My academic journey and continuous learning.
        </p>
    </header>

    <div class="education-timeline">

        <article class="education-entry">
            ...
        </article>

        <article class="education-entry">
            ...
        </article>

        <article class="education-entry">
            ...
        </article>

    </div>

</section>
```

---

# 27. Date Accessibility

Dates should preferably use semantic `<time>` elements.

Example:

```html
<time datetime="2018/2022">
    2018 - 2022
</time>
```

For ranges where an exact machine-readable format is not appropriate, the
displayed text should still remain accessible and understandable.

---

# 28. Performance

The EducationPage is primarily content-based.

Requirements:

* Avoid unnecessary JavaScript.
* Use CSS for the timeline.
* Use CSS Grid/Flexbox for layout.
* Avoid animation libraries.
* Use Lucide Icons only where required.
* Do not load unnecessary images.
* Keep the page lightweight.

The timeline itself should not require a JavaScript animation engine.

---

# 29. Component Reuse

Reuse the following global components:

```text
Header
Navigation
ThemeToggle
SocialLinks
BackToTop
```

Recommended Education-specific components:

```text
EducationPage
├── SectionHeader
├── EducationTimeline
│   └── EducationEntry
└── ...
```

The `EducationEntry` component should be reusable for future academic or
professional learning entries.

---

# 30. Suggested Component Structure

Conceptually:

```text
EducationPage
│
├── Header
│
├── EducationHeader
│   ├── SectionLabel
│   ├── Title
│   └── Description
│
├── EducationTimeline
│   ├── EducationEntry
│   ├── EducationEntry
│   └── EducationEntry
│
├── SocialLinks
│
└── BackToTop
```

Do not create separate components for individual education entries such as
`BachelorDegree`, `ContinuousLearning`, etc.

Use one reusable `EducationEntry` structure driven by data.

---

# 31. Suggested CSS Architecture

The timeline should preferably use CSS Grid.

Conceptually:

```css
.education-entry {
    display: grid;
    grid-template-columns: 7rem 1.5rem minmax(0, 1fr);
    gap: 1rem;
}
```

The timeline line can be implemented using a pseudo-element.

For example:

```css
.education-timeline {
    position: relative;
}

.education-timeline::before {
    content: "";
    position: absolute;
    ...
}
```

The exact values should be adapted to the project's design tokens.

Avoid absolute positioning of the cards.

Absolute positioning should only be used for decorative elements when
necessary.

---

# 32. Content Source

The initial EducationPage should use static content.

Required content:

```text
Section Label:
My Background

Title:
Education

Description:
My academic journey and continuous learning.
```

---

# 33. Education Data

### Bachelor's Degree

```text
Period:
2018 - 2022

Title:
Bachelor's in Mechatronics Engineering

Institution:
Federal University of Technology - Paraná, Brazil

Description:
Focused on robotics, control systems, electronics, programming and automation.
```

### Continuous Learning

```text
Period:
2022 - Present

Title:
Continuous Learning

Description:
Always learning new technologies and improving my skills through courses,
certifications and hands-on projects.
```

### Specialization

```text
Period:
2024

Title:
Specialization (In Progress)

Description:
Focused on Artificial Intelligence and Machine Learning applied to robotics
and embedded systems.
```

---

# 34. API Considerations

The initial implementation does not require API calls.

The education content may eventually be provided by the backend through:

```text
GET /api/education
```

The frontend should be structured so that static content can later be
replaced with API data without changing the visual component structure.

Do not introduce API complexity for the initial implementation.

---

# 35. Implementation Priority

## Phase 1 — Structure

* [ ] Reuse the existing Header.
* [ ] Create the Education section.
* [ ] Create the section label.
* [ ] Create the `<h1>` title.
* [ ] Add the description.
* [ ] Create the timeline container.
* [ ] Create reusable EducationEntry.
* [ ] Add Bachelor's Degree.
* [ ] Add Continuous Learning.
* [ ] Add Specialization.
* [ ] Reuse SocialLinks.
* [ ] Reuse BackToTop.

## Phase 2 — Styling

* [ ] Match global dark theme.
* [ ] Match typography.
* [ ] Implement timeline.
* [ ] Implement timeline dots.
* [ ] Implement timeline connecting line.
* [ ] Style date indicators.
* [ ] Style education cards.
* [ ] Match spacing and dimensions from the reference.

## Phase 3 — Interaction

* [ ] Implement active Education navigation state.
* [ ] Implement hover states.
* [ ] Implement navigation scrolling.
* [ ] Reuse theme toggle.
* [ ] Reuse BackToTop.
* [ ] Add subtle timeline entrance animations.

## Phase 4 — Responsive

* [ ] Test desktop.
* [ ] Test laptop.
* [ ] Test tablet.
* [ ] Test mobile.
* [ ] Adapt timeline structure for mobile.
* [ ] Verify cards do not overflow.
* [ ] Verify dates remain readable.
* [ ] Verify no horizontal scrolling.

## Phase 5 — Accessibility

* [ ] Verify heading hierarchy.
* [ ] Verify semantic `<time>` elements.
* [ ] Verify keyboard navigation.
* [ ] Verify focus states.
* [ ] Verify color contrast.
* [ ] Verify reduced-motion behavior.

## Phase 6 — Quality

* [ ] Verify timeline alignment.
* [ ] Verify chronological ordering.
* [ ] Verify responsive behavior.
* [ ] Compare implementation against the reference image.
* [ ] Verify consistency with HomePage.
* [ ] Verify consistency with AboutPage.
* [ ] Verify consistency with SkillsPage.
* [ ] Verify no unnecessary dependencies were introduced.

---

# 36. Acceptance Criteria

The EducationPage is considered complete when:

* [ ] The page visually matches the provided reference.
* [ ] The same Header used throughout the portfolio is present.
* [ ] `Education` is visually identified as the active navigation item.
* [ ] "My Background" is displayed as the section label.
* [ ] "Education" is the page `<h1>`.
* [ ] The description is displayed correctly.
* [ ] A vertical education timeline is displayed.
* [ ] Three education entries are displayed.
* [ ] Entries are ordered chronologically.
* [ ] Each entry contains a period/date.
* [ ] Each entry contains a title.
* [ ] Each entry contains the appropriate description/institution.
* [ ] Timeline markers use the project's green accent.
* [ ] Timeline connecting line is visible and aligned.
* [ ] Education cards use the same visual language as the rest of the
  portfolio.
* [ ] GitHub, LinkedIn and Email links are functional.
* [ ] Back To Top is functional.
* [ ] Theme toggle behaves consistently with the other pages.
* [ ] The layout is responsive.
* [ ] Mobile displays a readable vertical timeline.
* [ ] There is no horizontal overflow.
* [ ] All interactive elements are keyboard accessible.
* [ ] Reduced-motion preferences are respected.
* [ ] No unnecessary dependencies are introduced.
* [ ] The implementation follows the architecture defined in `AGENTS.md`.
* [ ] The EducationPage visually belongs to the same design system as the
  HomePage, AboutPage and SkillsPage.
