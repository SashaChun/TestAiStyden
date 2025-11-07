<!--
Sync Impact Report:
- Version change: INITIAL → 1.0.0
- New constitution created for UniPortal Student Cabinet
- Principles defined: Component Architecture, TypeScript-First, Design System Consistency, Separation of Concerns, Code Reusability
- Templates requiring updates: ✅ All templates will be aligned with these principles
- Follow-up TODOs: None
-->

# UniPortal Student Cabinet Constitution

## Core Principles

### I. Component Architecture
**MUST** follow atomic design principles with clear component hierarchy:
- Atoms: Basic UI elements (buttons, inputs, icons)
- Molecules: Simple component groups (stat cards, navigation items)
- Organisms: Complex components (sidebar, header, schedule section)
- Templates: Page layouts
- Pages: Complete views with data integration

**Rationale**: Ensures scalability, maintainability, and consistent reusability across the application.

### II. TypeScript-First (NON-NEGOTIABLE)
**MUST** use TypeScript for all code with strict type checking:
- All components MUST have explicit prop types
- No `any` types unless absolutely justified with comments
- Interfaces for all data models (Student, Schedule, Grade, Message, etc.)
- Type guards for runtime validation where needed
- Utility types for common patterns (Pick, Omit, Partial)

**Rationale**: Type safety prevents runtime errors, improves developer experience, and serves as living documentation.

### III. Design System Consistency
**MUST** maintain pixel-perfect consistency with Figma designs:
- Use design tokens for colors, spacing, typography, shadows
- Component variants MUST match Figma component states
- Responsive breakpoints defined in design system
- Accessibility standards (WCAG 2.1 AA minimum)
- Icon system with consistent sizing and colors

**Rationale**: Ensures professional UI/UX, brand consistency, and reduces design-development friction.

### IV. Separation of Concerns
**MUST** separate business logic from presentation:
- Custom hooks for data fetching and state management
- Pure presentation components (UI layer)
- Service layer for API calls
- Utility functions in separate modules
- Constants and configuration in dedicated files

**Rationale**: Improves testability, reusability, and makes codebase easier to understand and maintain.

### V. Code Reusability
**MUST** prioritize DRY (Don't Repeat Yourself) principles:
- Shared components in `/components/shared` or `/components/ui`
- Custom hooks for repeated logic patterns
- Utility functions for common operations
- Composition over inheritance
- Props spreading and component composition patterns

**Rationale**: Reduces code duplication, ensures consistency, and speeds up development.

## Technology Stack

### Required Technologies
- **Framework**: React 18+ with functional components and hooks
- **Language**: TypeScript 5+ with strict mode enabled
- **Styling**: CSS Modules or Styled Components (NO Tailwind unless explicitly requested)
- **State Management**: React Context API + hooks (or Zustand for complex state)
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm or pnpm

### Code Quality Tools
- **Linting**: ESLint with TypeScript and React plugins
- **Formatting**: Prettier with consistent configuration
- **Type Checking**: TypeScript compiler with strict flags
- **Testing**: Vitest + React Testing Library (when implemented)

## Development Standards

### File Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components (atoms, molecules)
│   ├── layout/       # Layout components (Sidebar, Header)
│   └── features/     # Feature-specific components
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── services/         # API and data services
├── utils/            # Utility functions
├── constants/        # Constants and configuration
├── assets/           # Images, fonts, icons
└── styles/           # Global styles and design tokens
```

### Naming Conventions
- **Components**: PascalCase (e.g., `StatCard.tsx`, `NavigationSidebar.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useStudentData.ts`)
- **Types/Interfaces**: PascalCase with descriptive names (e.g., `StudentInfo`, `ScheduleItem`)
- **Files**: Match component/hook name exactly
- **CSS Modules**: kebab-case (e.g., `stat-card.module.css`)

### Code Review Requirements
- All components MUST be reviewed for type safety
- Design consistency verification against Figma
- Performance considerations (memoization, lazy loading)
- Accessibility compliance check
- Code reusability assessment

## Governance

This constitution supersedes all other development practices for the UniPortal Student Cabinet project. All code contributions MUST comply with these principles.

**Amendment Process**:
- Proposed changes require documented justification
- Major principle changes require team consensus
- Version bump follows semantic versioning
- Migration plan required for breaking changes

**Compliance**:
- All pull requests MUST verify adherence to these principles
- Complexity MUST be justified with comments and documentation
- Deviations require explicit approval and documentation

**Version**: 1.0.0 | **Ratified**: 2025-11-08 | **Last Amended**: 2025-11-08
