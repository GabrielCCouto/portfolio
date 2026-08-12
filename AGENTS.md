# AGENTS.md

## Project Overview

This project is an interactive personal portfolio for Gabriel Couto.

The portfolio presents Gabriel's professional background, technical skills,
projects, education, and contact information through a modern, interactive
landing-page experience.

The website should communicate expertise in:

* Robotics
* Embedded Systems
* Artificial Intelligence
* Computer Vision
* Software Development
* Full-Stack Development
* UI/UX Design

The primary goal is to create a professional portfolio for technical
recruiters and engineering opportunities.

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Lucide Icons

### Development

* Git
* GitHub

Do not introduce additional frameworks or libraries without a clear reason.

---

## Architecture

The project is a static frontend-only portfolio.

The frontend is responsible for:

* User interface
* Animations and interactions
* Responsive layout
* Presentation of portfolio content

The frontend must use HTML5, CSS3, and Vanilla JavaScript.

Do not introduce frontend frameworks such as React, Vue, Angular, or similar
libraries unless explicitly approved.

---

## Project Structure

```text
/
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── css/
│   ├── js/
│   ├── assets/
│   └── index.html
│
├── docs/
├── AGENTS.md
└── README.md
```

### Frontend Directories

#### `frontend/pages/`

Contains page-level HTML content or page-specific structures.

#### `frontend/components/`

Contains reusable UI components implemented using HTML, CSS, and Vanilla
JavaScript.

#### `frontend/css/`

Contains global styles, component styles, responsive rules, animations, and
design tokens.

#### `frontend/js/`

Contains frontend logic, data handling, interactions, animations, and state
management.

#### `frontend/assets/`

Contains images, icons, fonts, and other static resources.

---

## Frontend Rules

* Use HTML5 semantic elements.
* Use CSS3 without frontend CSS frameworks unless explicitly approved.
* Use Vanilla JavaScript ES6+.
* Keep JavaScript modular and organized.
* Avoid unnecessary global variables.
* Keep data handling separate from UI logic.
* Ensure responsive behavior across desktop and mobile layouts.
* Prioritize accessibility.
* Use Lucide Icons for interface icons.

---

## Development Rules

* Keep the architecture simple.
* Avoid premature abstractions.
* Avoid unnecessary dependencies.
* Do not introduce frameworks without a clear technical reason.
* Prefer standard language features and well-established libraries.
* New dependencies must be justified in the project documentation.
* Changes should preserve existing functionality unless the task explicitly
  requires otherwise.

---

## Git Rules

Use clear and descriptive commit messages.

Preferred format:

```text
type: short description
```

Examples:

```text
feat: add projects section
fix: correct mobile navigation
refactor: simplify hero animation
docs: update project structure
```

Keep commits focused on a single logical change whenever possible.

---

## Documentation

Documentation should be maintained in:

```text
docs/
```

The `README.md` should contain:

* Project overview
* Technology stack
* Development setup
* How to run the frontend

Architecture decisions that significantly affect the project should be
documented.

---

## Agent Behavior

When modifying the project:

1. Inspect the existing implementation before making changes.
2. Preserve the established architecture.
3. Prefer small, focused changes.
4. Do not introduce new dependencies without justification.
5. Do not replace existing technologies unless explicitly requested.
6. Follow the project structure defined in this document.
7. Update documentation when architectural behavior changes.
8. Do not generate unnecessary files.
9. Prioritize maintainability, clarity, and simplicity.
