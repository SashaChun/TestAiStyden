# Contributing to UniPortal Student Cabinet

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Atomic & Molecular components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
├── services/         # Data services
├── utils/            # Utility functions
├── constants/        # Constants
├── styles/           # Global styles & tokens
└── assets/           # Static assets
```

## Code Style

### TypeScript
- Use strict mode
- No `any` types
- Explicit return types for functions
- Interfaces for all data models

### Components
- Functional components with hooks
- Props interfaces exported
- CSS Modules for styling
- Atomic design pattern

### Naming Conventions
- Components: PascalCase (e.g., `Button.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useStudentData.ts`)
- Utils: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `ROUTES`)

## Testing

```bash
npm run type-check  # TypeScript type checking
npm run lint        # ESLint
```

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Run linting and type checking
4. Submit PR with description

## Design Principles

1. **Component Reusability** - Build reusable, composable components
2. **Separation of Concerns** - Keep logic separate from UI
3. **Type Safety** - Use TypeScript strictly
4. **Accessibility** - Follow WCAG 2.1 AA standards
5. **Performance** - Optimize for fast load times
