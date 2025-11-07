# Research: UniPortal Student Cabinet

**Phase**: 0 - Outline & Research  
**Date**: 2025-11-08  
**Status**: Complete

## Overview

This document consolidates research findings for all technical decisions and clarifications needed for the UniPortal Student Cabinet implementation.

## Research Tasks

### 1. Design Token Extraction from Figma

**Decision**: Manual extraction of design tokens from Figma to CSS custom properties

**Rationale**:
- Figma design is already available with specific node IDs
- CSS custom properties provide runtime flexibility
- No build-time processing needed
- Easy to maintain and update

**Alternatives Considered**:
- Figma API automated extraction → Rejected: Adds complexity, requires authentication
- Figma Tokens plugin → Rejected: Not necessary for single design file
- Hardcoded values → Rejected: Violates DRY principle, hard to maintain

**Implementation**:
```css
/* tokens.css */
:root {
  /* Colors - from Figma */
  --color-green-100: #d1f4e0;
  --color-blue-100: #dbeafe;
  --color-orange-100: #fed7aa;
  --color-purple-100: #e9d5ff;
  --color-red-500: #ef4444;
  --color-gray-50: #f9fafb;
  --color-gray-200: #e5e7eb;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-900: #111827;
  --color-white: #ffffff;
  
  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 28px;
  --font-size-3xl: 32px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  
  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Layout */
  --sidebar-width: 256px;
  --header-height: 88px;
  --stat-card-width: 266px;
  --stat-card-height: 106px;
  --icon-size: 48px;
}
```

---

### 2. CSS Modules vs Styled Components

**Decision**: CSS Modules

**Rationale**:
- Zero runtime overhead (styles extracted at build time)
- Familiar CSS syntax
- Automatic scoping prevents conflicts
- Better performance than CSS-in-JS
- Easier to integrate with design tokens
- Simpler debugging (styles visible in DevTools)

**Alternatives Considered**:
- Styled Components → Rejected: Runtime overhead, larger bundle, more complex
- Emotion → Rejected: Similar issues to Styled Components
- Plain CSS → Rejected: No scoping, naming conflicts
- Tailwind → Rejected: User explicitly requested NO Tailwind

**Implementation Pattern**:
```typescript
// Button.module.css
.button {
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-primary);
}

// Button.tsx
import styles from './Button.module.css';

export const Button = () => <button className={styles.button}>Click</button>;
```

---

### 3. State Management Approach

**Decision**: React Context API + Custom Hooks (no external library initially)

**Rationale**:
- Built-in React solution, no extra dependencies
- Sufficient for current scope (mock data, no complex state)
- Custom hooks encapsulate logic cleanly
- Easy to migrate to Zustand/Redux later if needed
- Follows "Separation of Concerns" principle

**Alternatives Considered**:
- Zustand → Deferred: Can add later if state complexity grows
- Redux Toolkit → Rejected: Overkill for current scope
- Jotai/Recoil → Rejected: Unnecessary complexity
- Props drilling → Rejected: Violates best practices

**Implementation Pattern**:
```typescript
// useStudentData.ts
export function useStudentData() {
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Fetch from service
    studentService.getStudent()
      .then(setStudent)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);
  
  return { student, isLoading, error, refetch: () => {} };
}
```

---

### 4. Icon System Implementation

**Decision**: SVG React Components with Icon wrapper

**Rationale**:
- Full control over styling (color, size)
- No external icon library dependency
- Tree-shakeable (only used icons bundled)
- Type-safe icon names
- Consistent sizing via wrapper component

**Alternatives Considered**:
- React Icons library → Rejected: Large bundle, many unused icons
- Font icons → Rejected: Accessibility issues, flash of unstyled content
- Image files → Rejected: Not scalable, hard to style

**Implementation Pattern**:
```typescript
// Icon.tsx
interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = 'currentColor' }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent width={size} height={size} fill={color} />;
};

// Usage
<Icon name="star" size={20} color="var(--color-green-100)" />
```

---

### 5. Responsive Design Strategy

**Decision**: Mobile-first CSS with breakpoint mixins

**Rationale**:
- Mobile-first ensures core functionality on all devices
- CSS media queries are standard and performant
- No JavaScript needed for responsive behavior
- Easy to test and debug

**Breakpoints**:
```css
/* tokens.css */
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
}
```

**Implementation Pattern**:
```css
/* Mobile first */
.statsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

/* Tablet */
@media (min-width: 768px) {
  .statsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .statsGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

### 6. Routing Strategy

**Decision**: React Router v6 (hash routing for simplicity)

**Rationale**:
- Industry standard for React SPAs
- Type-safe with TypeScript
- Hash routing works without server configuration
- Supports nested routes for future expansion
- Good documentation and community support

**Alternatives Considered**:
- No routing (state-based) → Rejected: Not scalable, no deep linking
- TanStack Router → Rejected: Too new, less documentation
- Wouter → Rejected: Limited features

**Implementation Pattern**:
```typescript
// App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/grades" element={<Grades />} />
        {/* ... */}
      </Routes>
    </HashRouter>
  );
}
```

---

### 7. Mock Data Strategy

**Decision**: In-memory mock services with TypeScript interfaces

**Rationale**:
- Easy to replace with real API later
- Type-safe data contracts
- Simulates async behavior (Promises)
- No backend dependency for development
- Can add delay to simulate network

**Implementation Pattern**:
```typescript
// studentService.ts
const MOCK_STUDENT: Student = {
  id: '1',
  firstName: 'Марія',
  lastName: 'Коваленко',
  fullName: 'Марія Коваленко',
  group: 'ІТ-21',
  course: 3,
  faculty: 'Факультет інформатики',
  stats: {
    averageGrade: 4.8,
    creditsEarned: 48,
    creditsTotal: 60,
    absences: 2,
    debts: 0
  }
};

export const studentService = {
  async getStudent(): Promise<Student> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return MOCK_STUDENT;
  }
};
```

---

### 8. Accessibility Implementation

**Decision**: WCAG 2.1 AA compliance with semantic HTML and ARIA

**Rationale**:
- Required by constitution
- Improves usability for all users
- Better SEO
- Legal compliance in many jurisdictions

**Key Practices**:
- Semantic HTML (`<nav>`, `<main>`, `<header>`, `<button>`)
- ARIA labels for icon-only buttons
- Keyboard navigation support (Tab, Enter, Escape)
- Focus visible styles
- Color contrast ratios ≥ 4.5:1
- Skip-to-content link

**Implementation Checklist**:
```typescript
// Example: Accessible button
<button
  type="button"
  aria-label="Підключитися до Zoom"
  onClick={handleZoomClick}
>
  <Icon name="video" />
  <span>Zoom</span>
</button>
```

---

### 9. Performance Optimization Strategy

**Decision**: Code splitting, lazy loading, and React optimization hooks

**Rationale**:
- Meets performance goals (<2s initial load)
- Reduces initial bundle size
- Improves Time to Interactive
- Standard React patterns

**Techniques**:
1. **Code Splitting**: `React.lazy()` for pages
2. **Memoization**: `React.memo()` for expensive components
3. **Callback Optimization**: `useCallback()` for event handlers
4. **Value Memoization**: `useMemo()` for expensive calculations
5. **Image Optimization**: WebP format, lazy loading
6. **Bundle Analysis**: Vite bundle analyzer

**Implementation Example**:
```typescript
// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Schedule = lazy(() => import('./pages/Schedule'));

// Memoize expensive component
export const StatsGrid = memo(({ stats }: StatsGridProps) => {
  // ...
});

// Memoize callback
const handleClick = useCallback(() => {
  // ...
}, [dependency]);
```

---

### 10. Error Handling Strategy

**Decision**: Error boundaries + user-friendly error states

**Rationale**:
- Prevents app crashes
- Provides recovery options
- Better UX than white screen
- Follows React best practices

**Implementation**:
```typescript
// ErrorBoundary.tsx
class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

// Usage in components
if (error) {
  return (
    <div className={styles.error}>
      <p>Помилка завантаження даних</p>
      <button onClick={refetch}>Спробувати знову</button>
    </div>
  );
}
```

---

## Summary

All technical decisions have been made and documented. No "NEEDS CLARIFICATION" items remain. The implementation can proceed to Phase 1 (Design & Contracts).

**Key Decisions**:
1. ✅ CSS Modules for styling
2. ✅ Design tokens in CSS custom properties
3. ✅ React Context + Custom Hooks for state
4. ✅ SVG React Components for icons
5. ✅ Mobile-first responsive design
6. ✅ React Router v6 (hash routing)
7. ✅ In-memory mock services
8. ✅ WCAG 2.1 AA accessibility
9. ✅ Code splitting + React optimization
10. ✅ Error boundaries + error states

**Next Phase**: Phase 1 - Generate data-model.md and contracts/
