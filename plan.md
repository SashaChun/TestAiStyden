# Implementation Plan: UniPortal Student Cabinet

**Branch**: `001-student-cabinet-frontend` | **Date**: 2025-11-08 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `spec.md`

## Summary

Створення фронтенд додатку для студентського кабінету UniPortal з використанням React 18+ та TypeScript 5+. Додаток включає головну панель з статистикою студента, розкладом занять, повідомленнями та навігацією. Дизайн базується на Figma макетах з pixel-perfect реалізацією. Архітектура побудована на принципах atomic design з чітким розділенням UI та бізнес-логіки.

## Technical Context

**Language/Version**: TypeScript 5.5+ (strict mode enabled)  
**Primary Dependencies**: React 18.3+, React DOM 18.3+  
**Styling**: CSS Modules (NO Tailwind)  
**State Management**: React Context API + Custom Hooks  
**Build Tool**: Vite 5.3+  
**Package Manager**: npm або pnpm  
**Testing**: Vitest + React Testing Library (Phase 3)  
**Target Platform**: Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)  
**Project Type**: Single-page web application (SPA)  
**Performance Goals**: 
- Initial load < 2s
- Time to Interactive (TTI) < 3s
- First Contentful Paint (FCP) < 1.5s
- Component re-render < 16ms (60 fps)

**Constraints**: 
- Pixel-perfect відповідність Figma дизайну (95%+ accuracy)
- No `any` types in TypeScript
- WCAG 2.1 AA accessibility compliance
- Responsive design (320px - 1920px)
- Bundle size < 500KB (gzipped)

**Scale/Scope**: 
- ~15-20 reusable components
- 6-7 page views
- 4-5 custom hooks
- Mock data для ~5 entities

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

✅ **I. Component Architecture**: Plan follows atomic design (atoms → molecules → organisms → templates → pages)  
✅ **II. TypeScript-First**: All code will use TypeScript with strict mode, explicit types  
✅ **III. Design System Consistency**: Figma design tokens will be extracted and used  
✅ **IV. Separation of Concerns**: Custom hooks for logic, pure components for UI  
✅ **V. Code Reusability**: Shared components in `/components/ui`, composition patterns  

**No violations** - all principles will be followed.

## Project Structure

### Documentation (this feature)

```text
my-spec/
├── spec.md              # Feature specification (completed)
├── plan.md              # This file - implementation plan
├── tasks.md             # Detailed task breakdown (to be created)
├── constitution.md      # Project constitution (completed)
└── .specify/
    ├── memory/
    │   └── constitution.md
    └── templates/
```

### Source Code (repository root)

```text
my-spec/
├── src/
│   ├── components/
│   │   ├── ui/                    # Atoms & Molecules
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── StatCard/
│   │   │   │   ├── StatCard.tsx
│   │   │   │   ├── StatCard.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Icon/
│   │   │   ├── Badge/
│   │   │   └── Avatar/
│   │   ├── layout/                # Organisms
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Sidebar.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Header/
│   │   │   └── MainLayout/
│   │   └── features/              # Feature-specific organisms
│   │       ├── StatsGrid/
│   │       ├── ScheduleSection/
│   │       ├── MessagesWidget/
│   │       └── GradesTable/
│   ├── pages/                     # Pages (templates + data)
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Dashboard.module.css
│   │   │   └── index.ts
│   │   ├── Schedule/
│   │   ├── Grades/
│   │   └── Messages/
│   ├── hooks/                     # Custom React hooks
│   │   ├── useStudentData.ts
│   │   ├── useSchedule.ts
│   │   ├── useMessages.ts
│   │   └── useGrades.ts
│   ├── types/                     # TypeScript definitions
│   │   ├── student.ts
│   │   ├── schedule.ts
│   │   ├── message.ts
│   │   ├── grade.ts
│   │   └── index.ts
│   ├── services/                  # Data services (mock for now)
│   │   ├── studentService.ts
│   │   ├── scheduleService.ts
│   │   ├── messageService.ts
│   │   └── gradeService.ts
│   ├── utils/                     # Utility functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── dateHelpers.ts
│   ├── constants/                 # Constants & config
│   │   ├── routes.ts
│   │   ├── navigation.ts
│   │   └── config.ts
│   ├── styles/                    # Global styles & tokens
│   │   ├── tokens.css            # Design tokens from Figma
│   │   ├── global.css            # Global styles
│   │   └── reset.css             # CSS reset
│   ├── assets/                    # Static assets
│   │   ├── icons/                # SVG icons
│   │   └── images/               # Images
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts             # Vite types
├── public/                        # Public assets
│   └── favicon.ico
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite config
├── .eslintrc.cjs                  # ESLint config
├── .prettierrc                    # Prettier config
└── README.md                      # Project documentation
```

**Structure Decision**: Single-page web application structure chosen because this is a frontend-only project. The structure follows atomic design principles as mandated by the constitution, with clear separation between UI components (`/components`), business logic (`/hooks`, `/services`), and type definitions (`/types`).

## Complexity Tracking

> **No violations** - this implementation fully complies with the constitution.

## Implementation Phases

### Phase 0: Project Setup & Research ✓

**Goal**: Initialize project structure, extract design tokens from Figma, set up tooling.

**Deliverables**:
- ✅ `package.json` with all dependencies
- ✅ `tsconfig.json` with strict TypeScript configuration
- ✅ `vite.config.ts` for build configuration
- ✅ ESLint + Prettier configuration
- ✅ Folder structure created
- ✅ Design tokens extracted from Figma (`styles/tokens.css`)
- ✅ Global styles and CSS reset

**Research Questions**:
1. Which specific colors, fonts, spacing values are used in Figma? → Extract to `tokens.css`
2. What are the exact breakpoints for responsive design? → Document in `tokens.css`
3. Which icons are needed and in what format? → Create SVG components
4. What are the shadow/border-radius values? → Extract to tokens

**Duration**: 1-2 days

---

### Phase 1: Core Type Definitions & Mock Data

**Goal**: Define all TypeScript interfaces and create mock data services.

**Deliverables**:
- `types/student.ts` - Student interface
- `types/schedule.ts` - ScheduleItem interface
- `types/message.ts` - Message interface
- `types/grade.ts` - Grade interface
- `types/navigation.ts` - NavigationItem interface
- `services/studentService.ts` - Mock student data
- `services/scheduleService.ts` - Mock schedule data
- `services/messageService.ts` - Mock messages
- `services/gradeService.ts` - Mock grades
- `constants/navigation.ts` - Navigation menu items

**Contracts** (Type Definitions):

```typescript
// types/student.ts
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  photo?: string;
  group: string;
  course: number;
  faculty: string;
  stats: StudentStats;
}

export interface StudentStats {
  averageGrade: number;
  creditsEarned: number;
  creditsTotal: number;
  absences: number;
  debts: number;
}

// types/schedule.ts
export interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
  format: 'online' | 'offline';
  zoomLink?: string;
  date: string;
}

// types/message.ts
export interface Message {
  id: string;
  subject: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
  content: string;
}

// types/grade.ts
export interface Grade {
  id: string;
  subject: string;
  teacher: string;
  score: number;
  maxScore: number;
  credits: number;
}

// types/navigation.ts
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}
```

**Duration**: 1 day

---

### Phase 2: Atomic Components (UI Layer)

**Goal**: Build reusable UI components (atoms & molecules) following Figma design.

**Deliverables**:
- `components/ui/Button/` - Reusable button component
- `components/ui/Icon/` - Icon wrapper component
- `components/ui/Badge/` - Notification badge
- `components/ui/Avatar/` - User avatar with fallback
- `components/ui/StatCard/` - Statistics card molecule
- `components/ui/ScheduleCard/` - Schedule item card
- `components/ui/MessageCard/` - Message preview card
- `components/ui/CircularProgress/` - Circular grade indicator

**Component Specifications**:

```typescript
// StatCard props
interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  iconColor: 'green' | 'blue' | 'orange' | 'purple';
}

// ScheduleCard props
interface ScheduleCardProps {
  item: ScheduleItem;
  onZoomClick?: () => void;
}

// MessageCard props
interface MessageCardProps {
  message: Message;
  onClick?: () => void;
}
```

**Duration**: 2-3 days

---

### Phase 3: Organism Components (Complex UI)

**Goal**: Build complex components by composing atoms and molecules.

**Deliverables**:
- `components/features/StatsGrid/` - Grid of 4 stat cards
- `components/features/ScheduleSection/` - Today's schedule with header
- `components/features/MessagesWidget/` - Messages list with badge
- `components/features/GradesTable/` - Grades table with circular indicators
- `components/layout/Sidebar/` - Navigation sidebar with profile
- `components/layout/Header/` - Page header
- `components/layout/MainLayout/` - Main layout wrapper

**Duration**: 3-4 days

---

### Phase 4: Custom Hooks (Business Logic)

**Goal**: Extract data fetching and state management into custom hooks.

**Deliverables**:
- `hooks/useStudentData.ts` - Fetch and manage student data
- `hooks/useSchedule.ts` - Fetch schedule for specific date
- `hooks/useMessages.ts` - Fetch messages with unread count
- `hooks/useGrades.ts` - Fetch current grades
- `hooks/useNavigation.ts` - Handle navigation state

**Hook Specifications**:

```typescript
// useStudentData
export function useStudentData(): {
  student: Student | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

// useSchedule
export function useSchedule(date: string): {
  items: ScheduleItem[];
  isLoading: boolean;
  error: Error | null;
}

// useMessages
export function useMessages(): {
  messages: Message[];
  unreadCount: number;
  isLoading: boolean;
  error: Error | null;
  markAsRead: (id: string) => void;
}
```

**Duration**: 2 days

---

### Phase 5: Pages & Routing

**Goal**: Compose pages from organisms and connect with hooks.

**Deliverables**:
- `pages/Dashboard/` - Main dashboard page (P1 user stories)
- `pages/Schedule/` - Full schedule page
- `pages/Grades/` - Grades page
- `pages/Messages/` - Messages page
- `pages/Profile/` - Profile page
- `App.tsx` - Routing setup
- Error boundaries for graceful error handling

**Duration**: 2-3 days

---

### Phase 6: Polish & Optimization

**Goal**: Responsive design, accessibility, performance optimization.

**Deliverables**:
- Responsive breakpoints implementation
- Keyboard navigation support
- ARIA labels and roles
- Loading states and skeletons
- Error states with retry
- Performance optimization (React.memo, useMemo, useCallback)
- Bundle size optimization

**Duration**: 2-3 days

---

### Phase 7: Testing & Documentation

**Goal**: Add tests and comprehensive documentation.

**Deliverables**:
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for pages
- README.md with setup instructions
- Component documentation (Storybook optional)
- Type coverage report

**Duration**: 3-4 days

---

## Total Estimated Timeline

**Total**: 16-22 days (3-4 weeks)

**Critical Path**:
1. Phase 0 (Setup) → Phase 1 (Types) → Phase 2 (Atoms) → Phase 3 (Organisms) → Phase 4 (Hooks) → Phase 5 (Pages)
2. Phase 6 (Polish) and Phase 7 (Testing) can partially overlap with Phase 5

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Figma design tokens extraction complexity | Medium | Use Figma API or manual extraction with documentation |
| CSS Modules learning curve (if team unfamiliar) | Low | Provide examples and patterns in first components |
| TypeScript strict mode errors | Low | Start with strict mode from day 1, fix incrementally |
| Performance issues with large lists | Medium | Implement virtualization if needed (react-window) |
| Responsive design edge cases | Medium | Test on multiple devices early, use browser dev tools |
| Icon asset preparation | Low | Extract SVGs from Figma, create Icon component wrapper |

## Success Metrics

- ✅ All TypeScript code passes `tsc --noEmit` without errors
- ✅ ESLint shows 0 warnings
- ✅ Visual regression tests show 95%+ match with Figma
- ✅ Lighthouse score: Performance 90+, Accessibility 95+
- ✅ All P1 user stories fully functional
- ✅ Responsive on 3+ breakpoints (mobile, tablet, desktop)
- ✅ Code review approval from team

## Next Steps

1. ✅ Create `tasks.md` using `/speckit.tasks` command
2. Begin Phase 0: Project setup
3. Extract design tokens from Figma
4. Set up development environment
5. Create first component (Button) as template for others
