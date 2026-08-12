# AboutPage — Frontend Specification

## 1. Overview

The AboutPage presents Gabriel Couto's professional profile, background,
experience, motivations, and primary areas of focus.

The page should provide more context about Gabriel than the HomePage while
maintaining the same visual identity established throughout the portfolio.

The implementation must follow the provided visual reference.

The page should feel:

* Professional
* Personal
* Technical
* Modern
* Minimalist
* Futuristic
* Trustworthy

The main objective is to answer three questions for a recruiter or visitor:

1. Who is Gabriel?
2. What has Gabriel done?
3. What areas does Gabriel focus on?

---

# 2. Page Structure

The AboutPage consists of:

```text
AboutPage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Theme Toggle
│
├── Main Content
│   │
│   ├── About Introduction
│   │   ├── Section Label
│   │   ├── Main Heading
│   │   └── Professional Description
│   │
│   ├── Professional Highlights
│   │   ├── Education
│   │   ├── Experience
│   │   ├── Projects
│   │   └── Continuous Learning
│   │
│   ├── What Drives Me
│   │   └── Personal Statement
│   │
│   └── Profile Panel
│       ├── Profile Image
│       ├── Location
│       ├── Email
│       ├── Availability
│       └── Languages
│
├── Focus Areas
│   ├── Robotics
│   ├── Embedded Systems
│   ├── Artificial Intelligence
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

# 3. Global Visual Language

The AboutPage must use the same design system as the HomePage and SkillsPage.

Do not create a new visual language specifically for this page.

The page should use:

* Dark background
* Near-black/navy surfaces
* Green accent color
* White/off-white primary text
* Muted gray secondary text
* Thin borders
* Subtle green glow
* Rounded cards
* Minimal shadows
* Technical decorative elements

The visual hierarchy should prioritize:

1. "Who I Am"
2. Professional description
3. Profile image
4. Professional highlights
5. Focus areas

---

# 4. Main Container

The page should use the same main container system as the HomePage and
SkillsPage.

The container should:

* Occupy most of the viewport width
* Maintain consistent margins
* Use a subtle border
* Have slightly rounded corners
* Use the global dark background
* Maintain consistent internal padding

The layout should be based on responsive dimensions.

Do not reproduce the reference image using fixed pixel positioning.

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

The `About` navigation item must be visually highlighted.

### Active state

Use:

* Green text
* Slightly stronger visual weight

Inactive navigation items remain muted.

Hover behavior should be consistent with the HomePage and SkillsPage.

---

## 5.3 Theme Toggle

Reuse the existing ThemeToggle component.

Requirements:

* Lucide icon
* Accessible `aria-label`
* Keyboard accessible
* Visible focus state
* Same dimensions and positioning as other pages

Do not implement a separate theme system for AboutPage.

---

# 6. Main About Layout

The main content uses a two-column layout.

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ABOUT CONTENT                         PROFILE PANEL        │
│                                                             │
│  About Me                              ┌───────────────┐     │
│  Who I Am                              │               │     │
│                                        │ Profile Image │     │
│  Professional description              │               │     │
│                                        └───────────────┘     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐          Location             │
│  │    │ │    │ │    │ │    │          Email                │
│  │    │ │    │ │    │ │    │          Availability         │
│  └────┘ └────┘ └────┘ └────┘          Languages             │
│                                                             │
│  What Drives Me                                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Personal statement                                     │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

On desktop:

* Left column contains the introduction and highlights.
* Right column contains the profile panel.
* Focus Areas appears below the profile panel.

The layout should use CSS Grid.

Do not use absolute positioning for the main page structure.

---

# 7. About Introduction

The introduction is positioned in the upper-left area.

Structure:

```text
About Me

Who I Am

I'm a Mechatronics Engineer and Full Stack Developer passionate
about building intelligent systems that connect hardware and
software to solve real-world problems.

I love turning ideas into functional solutions through robotics,
embedded systems, AI, and modern web technologies.
```

---

## 7.1 Section Label

Text:

```text
About Me
```

Styling:

* Green accent
* Small font
* Medium/bold weight
* Positioned above the main heading

---

## 7.2 Main Heading

Text:

```text
Who I Am
```

Requirements:

* Use `<h1>`
* Large typography
* Bold
* High contrast
* Same typography family as HomePage and SkillsPage

There must be only one `<h1>` on the page.

---

# 8. Professional Description

The description communicates Gabriel's professional profile.

Content:

```text
I'm a Mechatronics Engineer and Full Stack Developer passionate
about building intelligent systems that connect hardware and
software to solve real-world problems.

I love turning ideas into functional solutions through robotics,
embedded systems, AI, and modern web technologies.
```

The frontend should treat this as two logical paragraphs.

Recommended structure:

```html
<p>
    I'm a Mechatronics Engineer and Full Stack Developer passionate
    about building intelligent systems that connect hardware and
    software to solve real-world problems.
</p>

<p>
    I love turning ideas into functional solutions through robotics,
    embedded systems, AI, and modern web technologies.
</p>
```

Do not hardcode line breaks from the reference image.

---

# 9. Professional Highlights

Below the introduction, display four compact information cards.

Desktop layout:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ Education│ │Experience│ │ Projects │ │ Learning │
└──────────┘ └──────────┘ └──────────┘ └──────────┘
```

The cards should be visually smaller than the main skill cards used on the
SkillsPage.

They are intended to communicate key facts quickly.

---

# 10. Highlight Card Component

Each card should contain:

```text
Icon

Value

Description
```

Example:

```html
<article class="highlight-card">

    <div class="highlight-card__icon">
        ...
    </div>

    <strong class="highlight-card__value">
        2022
    </strong>

    <p class="highlight-card__label">
        Bachelor's Degree
        Mechatronics Engineering
    </p>

</article>
```

All cards must share the same structure.

---

# 11. Education Highlight

## Icon

Use a Lucide education/graduation icon.

## Value

```text
2022
```

## Description

```text
Bachelor's Degree
Mechatronics Engineering
```

The value should be visually prominent.

---

# 12. Experience Highlight

## Icon

Use a Lucide briefcase/work icon.

## Value

```text
2+
```

## Description

```text
Years Experience
AI, Embedded & Software
```

The card should communicate professional experience without requiring a large
amount of text.

---

# 13. Projects Highlight

## Icon

Use a Lucide code/development icon.

## Value

```text
20+
```

## Description

```text
Projects
Robotics, AI, Web
& Embedded
```

The line wrapping may adapt naturally according to available space.

---

# 14. Continuous Learning Highlight

## Icon

Use a Lucide target/focus icon.

## Value

```text
Always
```

## Description

```text
Learning
Exploring new
technologies
```

This card represents continuous technical development rather than a numeric
metric.

---

# 15. Highlight Card Styling

Cards should use:

* Dark slightly elevated surface
* Thin border
* Rounded corners
* Green icon
* Large white value
* Muted description

The cards should have equal heights.

Use CSS Grid or Flexbox.

Do not manually position text.

---

# 16. What Drives Me

Below the highlight cards, create a section titled:

```text
What Drives Me
```

Use:

```html
<h2>What Drives Me</h2>
```

---

# 17. Personal Statement

The section contains a quote-style card.

Visual structure:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   “       I believe technology can make a real impact.      │
│           I'm driven by curiosity, challenge, and the       │
│           desire to create solutions that improve          │
│           people's lives.                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Content:

```text
I believe technology can make a real impact.
I'm driven by curiosity, challenge, and the desire to create
solutions that improve people's lives.
```

---

## 17.1 Quote Icon

Use a large decorative quotation mark on the left.

The quote mark should:

* Use the green accent
* Be significantly larger than the text
* Be decorative
* Not interfere with screen readers

If implemented as an icon or decorative element:

```html
aria-hidden="true"
```

---

## 17.2 Quote Card Styling

Use:

* Dark background
* Thin border
* Rounded corners
* Large internal padding
* Green quotation mark
* Muted/light text

The card should span the available width of the left column.

---

# 18. Profile Panel

The right side of the page contains the main personal profile panel.

This is one of the most visually important elements of the AboutPage.

Structure:

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                    PROFILE IMAGE                            │
│                                                            │
│                                                            │
│────────────────────────────────────────────────────────────│
│                                                            │
│  Location              Curitiba, Brazil                    │
│  Email                 gabrielcouto.dev@gmail.com          │
│  Availability          Open to opportunities                │
│  Languages             Portuguese (Native)                 │
│                        English (Advanced)                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

The reference uses a combined image and information panel.

---

# 19. Profile Image

The profile image should occupy the upper portion of the profile panel.

The image should visually represent Gabriel in a professional but modern
technical environment.

### Image requirements

* High-quality portrait
* Professional appearance
* Dark visual treatment
* Green accent lighting may be used
* Background should blend with the portfolio aesthetic

The image should not overpower the surrounding information.

---

## 19.1 Image Container

The image container should:

* Have rounded corners
* Use a subtle green border
* Clip overflow
* Maintain the image aspect ratio
* Use `object-fit: cover`

Example:

```css
.profile-image {
    width: 100%;
    aspect-ratio: 1.5 / 1;
    object-fit: cover;
}
```

The exact aspect ratio may be adjusted to the final asset.

---

# 20. Profile Information

Below or alongside the image, display four information groups.

Each group contains:

```text
Icon
Label
Value
```

---

# 21. Location

## Icon

Use:

```text
MapPin
```

from Lucide.

## Label

```text
Location
```

## Value

```text
Curitiba, Brazil
```

---

# 22. Email

## Icon

Use:

```text
Mail
```

from Lucide.

## Label

```text
Email
```

## Value

```text
gabrielcouto.dev@gmail.com
```

The email should be clickable.

Use:

```text
mailto:gabrielcouto.dev@gmail.com
```

The email should not be displayed as a generic button.

---

# 23. Availability

## Icon

Use a Lucide user/profile icon.

## Label

```text
Availability
```

## Value

```text
Open to opportunities
```

This information should be visually clear but should not dominate the profile
panel.

---

# 24. Languages

## Icon

Use:

```text
Globe
```

from Lucide.

## Label

```text
Languages
```

## Values

```text
Portuguese (Native)
English (Advanced)
```

Each language may be displayed on its own line.

---

# 25. Profile Information Layout

Each information item should use a horizontal layout:

```text
┌──────┬───────────────────────────┐
│ ICON │ Label                     │
│      │ Value                     │
└──────┴───────────────────────────┘
```

The icon should:

* Use green accent
* Have consistent dimensions
* Be vertically aligned with the content

The label should be muted.

The value should have stronger contrast.

---

# 26. Focus Areas

Below the profile panel, create the:

```text
My Focus Areas
```

section.

Use:

```html
<h2>My Focus Areas</h2>
```

The section should contain four focus areas in a horizontal grid on desktop.

```text
┌────────────┬──────────────┬───────────────┬──────────────────┐
│ Robotics   │ Embedded     │ Artificial    │ Full Stack       │
│            │ Systems      │ Intelligence  │ Development      │
└────────────┴──────────────┴───────────────┴──────────────────┘
```

---

# 27. Focus Area Component

Each focus area should contain:

```text
Icon
Title
Short Description
```

Example:

```html
<article class="focus-area">
    <div class="focus-area__icon">
        ...
    </div>

    <h3>Robotics</h3>

    <p>
        Design, control and automation systems
    </p>
</article>
```

Use `<h3>` because these are subsections of `My Focus Areas`.

---

# 28. Robotics Focus Area

## Icon

Use a Lucide robotics/mechanical icon.

## Title

```text
Robotics
```

## Description

```text
Design, control and
automation systems
```

The text may naturally wrap based on the viewport.

---

# 29. Embedded Systems Focus Area

## Icon

Use a Lucide microchip icon.

## Title

```text
Embedded Systems
```

## Description

```text
Low-level programming
and hardware integration
```

---

# 30. Artificial Intelligence Focus Area

## Icon

Use a Lucide brain/AI icon.

## Title

```text
Artificial Intelligence
```

## Description

```text
Machine learning and
intelligent applications
```

---

# 31. Full Stack Development Focus Area

## Icon

Use a Lucide code/web-development icon.

## Title

```text
Full Stack Development
```

## Description

```text
Building scalable and
modern web solutions
```

---

# 32. Focus Area Styling

The focus-area container should:

* Use a dark elevated background
* Have a subtle border
* Have rounded corners
* Use green icons
* Use light titles
* Use muted descriptions

The four areas should visually feel like one cohesive panel rather than four
completely independent cards.

Recommended structure:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [icon]          [icon]          [icon]          [icon]    │
│   Robotics        Embedded        Artificial      Full      │
│                   Systems         Intelligence    Stack     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Use CSS Grid.

---

# 33. Social Links

At the bottom-left of the page, reuse the social links from the HomePage.

Required:

```text
GitHub
LinkedIn
Email
```

Each must have:

* Accessible label
* Keyboard focus state
* Hover state
* Correct destination

Do not implement a separate social-link component specifically for AboutPage.

Reuse the existing component.

---

# 34. Back To Top

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

The button should use the same dimensions, colors, and interaction behavior
as the HomePage and SkillsPage.

---

# 35. Responsive Behavior

The desktop layout should use two main columns.

```text
Desktop:

┌─────────────────────────────┬─────────────────────────────┐
│ About Introduction          │ Profile Panel               │
│                             │                             │
│ Highlight Cards             │ Profile Image               │
│                             │ Profile Information          │
│ What Drives Me              │                             │
│                             │ Focus Areas                  │
└─────────────────────────────┴─────────────────────────────┘
```

---

## Tablet

On tablet-sized screens:

* Reduce column gap.
* Reduce card padding.
* Reduce heading size.
* Keep two columns if enough space exists.
* Allow focus areas to wrap.
* Ensure profile information remains readable.

If the two-column layout becomes cramped, switch to a single-column layout.

---

# 36. Mobile Layout

On mobile, the page should become a single vertical flow.

Recommended order:

```text
Header

About Me

Who I Am

Description

Professional Highlights

What Drives Me

Personal Statement

Profile Image

Profile Information

My Focus Areas

Focus Areas

Social Links

Back To Top
```

The profile section should not remain beside the text on narrow screens.

---

# 37. Mobile Highlight Cards

The four highlight cards may use:

```text
2 columns × 2 rows
```

if sufficient width exists.

For very narrow screens, use:

```text
1 column
```

The implementation should prioritize readability.

---

# 38. Mobile Focus Areas

Focus areas should use:

```text
1 column
```

or:

```text
2 columns
```

depending on the available width.

Do not allow long titles such as:

```text
Artificial Intelligence
Full Stack Development
```

to overflow.

---

# 39. Mobile Profile Panel

On mobile:

* Profile image should span the available width.
* Information groups should stack vertically.
* Email should wrap naturally.
* No horizontal overflow should occur.
* Decorative background elements should be reduced.

---

# 40. Animations

Animations should be consistent with the existing portfolio.

Recommended entrance sequence:

```text
About Introduction
        ↓
Highlight Cards
        ↓
Profile Panel
        ↓
Focus Areas
```

Use subtle fade/translate animations.

Avoid excessive movement.

---

## 40.1 Highlight Cards

Cards may appear with a subtle stagger.

Example:

```text
Education       → 0ms
Experience      → 75ms
Projects        → 150ms
Learning        → 225ms
```

Exact timing is not mandatory.

---

## 40.2 Profile Panel

The profile panel may fade in slightly after the introduction.

The image should not continuously animate.

---

## 40.3 Focus Areas

Focus areas may use a small entrance animation when the section enters the
viewport.

---

# 41. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Disable entrance animations.
* Disable stagger animations.
* Disable decorative motion.
* Keep only essential transitions.

The page must remain fully functional without animations.

---

# 42. Accessibility

The AboutPage must use semantic HTML.

Requirements:

* One `<h1>` only.
* `<h2>` for "What Drives Me" and "My Focus Areas".
* `<h3>` for individual focus areas.
* Use `<article>` for highlight and focus-area components.
* Use semantic paragraphs for descriptions.
* Use accessible labels for icon-only controls.
* Provide `alt` text for the profile image.
* Maintain visible keyboard focus.
* Ensure sufficient color contrast.
* Do not use color as the only information indicator.

Recommended semantic structure:

```html
<section id="about" aria-labelledby="about-title">

    <div class="about-layout">

        <div class="about-content">

            <header class="section-header">
                <p>About Me</p>
                <h1 id="about-title">Who I Am</h1>
                ...
            </header>

            <section aria-labelledby="highlights-title">
                ...
            </section>

            <section aria-labelledby="drives-title">
                <h2 id="drives-title">What Drives Me</h2>
                ...
            </section>

        </div>

        <aside class="profile-panel" aria-label="Profile information">
            ...
        </aside>

    </div>

    <section aria-labelledby="focus-title">
        <h2 id="focus-title">My Focus Areas</h2>
        ...
    </section>

</section>
```

---

# 43. Profile Image Accessibility

The profile image is meaningful content and should have descriptive `alt`
text.

Example:

```html
<img
    src="..."
    alt="Gabriel Couto, Mechatronics Engineer and Full Stack Developer"
/>
```

Do not use:

```text
alt="image"
```

or:

```text
alt="profile"
```

---

# 44. Performance

The AboutPage should remain lightweight.

Requirements:

* Optimize profile image.
* Prefer WebP/AVIF when appropriate.
* Avoid unnecessarily large image files.
* Use CSS for decorative effects.
* Use Lucide Icons instead of image-based icons.
* Avoid animation libraries.
* Lazy-load assets that are not required for the initial viewport.

The profile image should be optimized without noticeably reducing visual
quality.

---

# 45. Component Reuse

Reuse the existing global components:

```text
Header
Navigation
ThemeToggle
SocialLinks
BackToTop
```

Recommended page-specific components:

```text
AboutPage
├── AboutIntroduction
├── HighlightGrid
│   └── HighlightCard
├── MotivationSection
│   └── QuoteCard
├── ProfilePanel
│   └── ProfileInfoItem
└── FocusAreas
    └── FocusArea
```

---

# 46. Suggested Data Structure

Repeated content should preferably be data-driven.

Example:

```javascript
const highlights = [
    {
        icon: "graduation-cap",
        value: "2022",
        description: [
            "Bachelor's Degree",
            "Mechatronics Engineering"
        ]
    },
    {
        icon: "briefcase",
        value: "2+",
        description: [
            "Years Experience",
            "AI, Embedded & Software"
        ]
    },
    {
        icon: "code",
        value: "20+",
        description: [
            "Projects",
            "Robotics, AI, Web & Embedded"
        ]
    },
    {
        icon: "target",
        value: "Always",
        description: [
            "Learning",
            "Exploring new technologies"
        ]
    }
];
```

Focus areas should follow the same principle:

```javascript
const focusAreas = [
    {
        title: "Robotics",
        description: "Design, control and automation systems"
    },
    {
        title: "Embedded Systems",
        description: "Low-level programming and hardware integration"
    },
    {
        title: "Artificial Intelligence",
        description: "Machine learning and intelligent applications"
    },
    {
        title: "Full Stack Development",
        description: "Building scalable and modern web solutions"
    }
];
```

The exact data representation may change, but repeated UI structures should
not be unnecessarily duplicated.

---

# 47. Content Source

The initial AboutPage may use static content.

Required content:

```text
Section Label:
About Me

Title:
Who I Am

Description:
I'm a Mechatronics Engineer and Full Stack Developer passionate
about building intelligent systems that connect hardware and
software to solve real-world problems.

I love turning ideas into functional solutions through robotics,
embedded systems, AI, and modern web technologies.
```

---

# 48. Profile Information

Current profile information:

```text
Location:
Curitiba, Brazil

Email:
gabrielcouto.dev@gmail.com

Availability:
Open to opportunities

Languages:
Portuguese (Native)
English (Advanced)
```

If these values later become dynamic, they may be provided by the backend API.

The visual structure should not depend on the data source.

---

# 49. API Considerations

The initial implementation does not require API calls.

The following data may eventually be provided by the backend:

```text
GET /api/profile
GET /api/about
GET /api/focus-areas
```

The frontend should be designed so that static content can later be replaced
with API data without changing the visual components.

Do not introduce API complexity for the initial implementation.

---

# 50. Implementation Priority

## Phase 1 — Structure

* [ ] Reuse the existing Header.
* [ ] Create the About section.
* [ ] Create the About introduction.
* [ ] Create the professional description.
* [ ] Create highlight cards.
* [ ] Create "What Drives Me".
* [ ] Create profile panel.
* [ ] Add profile image.
* [ ] Add profile information.
* [ ] Create Focus Areas.
* [ ] Reuse SocialLinks.
* [ ] Reuse BackToTop.

## Phase 2 — Styling

* [ ] Match global dark theme.
* [ ] Match typography.
* [ ] Implement two-column desktop layout.
* [ ] Style highlight cards.
* [ ] Style quote card.
* [ ] Style profile panel.
* [ ] Style profile information.
* [ ] Style focus areas.
* [ ] Match borders, spacing and accent colors.

## Phase 3 — Interaction

* [ ] Implement active navigation state.
* [ ] Implement hover states.
* [ ] Implement email link.
* [ ] Implement navigation scrolling.
* [ ] Reuse theme toggle.
* [ ] Reuse BackToTop.

## Phase 4 — Responsive

* [ ] Test desktop.
* [ ] Test laptop.
* [ ] Test tablet.
* [ ] Test mobile.
* [ ] Stack columns when necessary.
* [ ] Adapt highlight cards.
* [ ] Adapt focus areas.
* [ ] Verify profile image scaling.
* [ ] Verify email wrapping.
* [ ] Verify no horizontal overflow.

## Phase 5 — Accessibility

* [ ] Verify heading hierarchy.
* [ ] Verify keyboard navigation.
* [ ] Verify focus states.
* [ ] Verify profile image alt text.
* [ ] Verify icon accessibility.
* [ ] Verify contrast.
* [ ] Verify reduced-motion behavior.

## Phase 6 — Quality

* [ ] Optimize profile image.
* [ ] Verify page performance.
* [ ] Compare implementation against the reference image.
* [ ] Verify consistency with HomePage.
* [ ] Verify consistency with SkillsPage.
* [ ] Verify no unnecessary dependencies were introduced.

---

# 51. Acceptance Criteria

The AboutPage is considered complete when:

* [ ] The page visually matches the provided reference.
* [ ] The same Header used throughout the portfolio is present.
* [ ] `About` is visually identified as the active navigation item.
* [ ] "About Me" is displayed as the section label.
* [ ] "Who I Am" is the page `<h1>`.
* [ ] The professional description is displayed correctly.
* [ ] Four professional highlight cards are displayed.
* [ ] Highlight cards contain the correct values and descriptions.
* [ ] "What Drives Me" is displayed.
* [ ] The personal statement is displayed inside a quote card.
* [ ] The profile image is displayed correctly.
* [ ] The profile panel contains location, email, availability and languages.
* [ ] The email is clickable.
* [ ] "My Focus Areas" is displayed.
* [ ] Four focus areas are displayed.
* [ ] Each focus area contains an icon, title and description.
* [ ] GitHub, LinkedIn and Email links are functional.
* [ ] Back To Top is functional.
* [ ] Theme toggle behaves consistently with the other pages.
* [ ] The layout is responsive.
* [ ] Mobile uses a single-column layout when necessary.
* [ ] There is no horizontal overflow.
* [ ] All interactive elements are keyboard accessible.
* [ ] The profile image has appropriate alt text.
* [ ] Reduced-motion preferences are respected.
* [ ] No unnecessary dependencies are introduced.
* [ ] The implementation follows the architecture defined in `AGENTS.md`.
* [ ] The AboutPage visually belongs to the same design system as HomePage
  and SkillsPage.
