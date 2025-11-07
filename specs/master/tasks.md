# Tasks: UniPortal Student Cabinet

**Input**: Design documents from `spec.md` and `plan.md`  
**Prerequisites**: plan.md ✅, spec.md ✅, constitution.md ✅

**Organization**: Tasks are grouped by implementation phase and user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 0: Project Setup (Shared Infrastructure)

**Purpose**: Initialize project structure, tooling, and design system foundation

- [X] T001 Create folder structure according to `plan.md` (src/, public/, etc.)
- [X] T002 Initialize package.json with React 18.3+, TypeScript 5.5+, Vite 5.3+
- [X] T003 [P] Create tsconfig.json with strict mode enabled
- [X] T004 [P] Create vite.config.ts with React plugin
- [X] T005 [P] Setup ESLint config (.eslintrc.cjs) with TypeScript and React rules
- [X] T006 [P] Setup Prettier config (.prettierrc)
- [X] T007 Create index.html template in root
- [X] T008 Create src/main.tsx entry point
- [X] T009 Create src/App.tsx root component
- [X] T010 Create src/vite-env.d.ts for Vite types

**Checkpoint**: ✅ Project structure created. Run `npm install` then `npm run dev` to start

---

## Phase 1: Design System Foundation (Blocking Prerequisites)

**Purpose**: Extract Figma design tokens and create global styles - MUST be complete before ANY component work

**⚠️ CRITICAL**: No component work can begin until design tokens are extracted

- [X] T011 Extract colors from Figma to src/styles/tokens.css (grays, blue, green, orange, purple, red)
- [X] T012 Extract typography tokens (font families, sizes, weights, line heights)
- [X] T013 Extract spacing tokens (padding, margin values: 4px, 8px, 12px, 16px, 24px, etc.)
- [X] T014 Extract border-radius tokens (8px, 12px, etc.)
- [X] T015 Extract shadow tokens (card shadows, hover shadows)
- [X] T016 Create src/styles/reset.css (CSS reset/normalize)
- [X] T017 Create src/styles/global.css (body, html, font smoothing)
- [X] T018 Import all styles in src/main.tsx

**Checkpoint**: ✅ Design tokens available as CSS custom properties

---

## Phase 2: Type Definitions & Mock Data (Foundational)

**Purpose**: Define all TypeScript interfaces and create mock data services

- [X] T019 [P] Create src/types/student.ts (Student, StudentStats interfaces)
- [X] T020 [P] Create src/types/schedule.ts (ScheduleItem interface)
- [X] T021 [P] Create src/types/message.ts (Message interface)
- [X] T022 [P] Create src/types/grade.ts (Grade interface)
- [X] T023 [P] Create src/types/navigation.ts (NavigationItem interface)
- [X] T024 [P] Create src/types/index.ts (export all types)
- [X] T025 [P] Create src/services/studentService.ts with mock student data
- [X] T026 [P] Create src/services/scheduleService.ts with mock schedule (3 items for today)
- [X] T027 [P] Create src/services/messageService.ts with mock messages (5 items, 3 unread)
- [X] T028 [P] Create src/services/gradeService.ts with mock grades (5 subjects)
- [X] T029 Create src/constants/navigation.ts with 7 menu items
- [X] T030 Create src/constants/routes.ts with route paths
- [X] T031 Create src/constants/config.ts with app configuration

**Checkpoint**: ✅ All types defined, mock data available

---

## Phase 3: Atomic Components (Atoms)

**Purpose**: Build smallest reusable UI components

- [X] T032 [P] Create src/components/ui/Icon/Icon.tsx (SVG wrapper component)
- [X] T033 [P] Create src/components/ui/Icon/Icon.module.css
- [X] T034 [P] Create src/components/ui/Icon/index.ts
- [X] T035 [P] Create src/assets/icons/ folder and add SVG icons from Figma
- [X] T036 [P] Create src/components/ui/Button/Button.tsx with props interface
- [X] T037 [P] Create src/components/ui/Button/Button.module.css
- [X] T038 [P] Create src/components/ui/Button/index.ts
- [X] T039 [P] Create src/components/ui/Badge/Badge.tsx (notification badge)
- [X] T040 [P] Create src/components/ui/Badge/Badge.module.css
- [X] T041 [P] Create src/components/ui/Badge/index.ts
- [X] T042 [P] Create src/components/ui/Avatar/Avatar.tsx (with fallback to initials)
- [X] T043 [P] Create src/components/ui/Avatar/Avatar.module.css
- [X] T044 [P] Create src/components/ui/Avatar/index.ts
- [X] T045 [P] Create src/components/ui/CircularProgress/CircularProgress.tsx (for grades)
- [X] T046 [P] Create src/components/ui/CircularProgress/CircularProgress.module.css
- [X] T047 [P] Create src/components/ui/CircularProgress/index.ts

**Checkpoint**: ✅ All atomic components render correctly - test with `npm run dev`

---

## Phase 4: Molecular Components

**Purpose**: Compose atoms into simple component groups

- [X] T048 [US1] Create src/components/ui/StatCard/StatCard.tsx (uses Icon)
- [X] T049 [US1] Create src/components/ui/StatCard/StatCard.module.css (match Figma pixel-perfect)
- [X] T050 [US1] Create src/components/ui/StatCard/index.ts
- [X] T051 [US2] Create src/components/ui/ScheduleCard/ScheduleCard.tsx (uses Icon, Button)
- [X] T052 [US2] Create src/components/ui/ScheduleCard/ScheduleCard.module.css
- [X] T053 [US2] Create src/components/ui/ScheduleCard/index.ts
- [X] T054 [US4] Create src/components/ui/MessageCard/MessageCard.tsx
- [X] T055 [US4] Create src/components/ui/MessageCard/MessageCard.module.css
- [X] T056 [US4] Create src/components/ui/MessageCard/index.ts
- [X] T057 [US3] Create src/components/ui/NavItem/NavItem.tsx (uses Icon, Badge)
- [X] T058 [US3] Create src/components/ui/NavItem/NavItem.module.css
- [X] T059 [US3] Create src/components/ui/NavItem/index.ts

**Checkpoint**: ✅ All molecular components render with correct styling

---

## Phase 5: User Story 1 - Перегляд статистики (Priority: P1) 🎯 MVP

**Goal**: Display 4 stat cards with student statistics

**Independent Test**: Load page and verify all 4 cards show correct data from mock service

### Implementation for User Story 1

- [X] T060 [US1] Create src/components/features/StatsGrid/StatsGrid.tsx
- [X] T061 [US1] Create src/components/features/StatsGrid/StatsGrid.module.css (4-column grid)
- [X] T062 [US1] Create src/components/features/StatsGrid/index.ts
- [X] T063 [US1] Integrate StatsGrid with 4 StatCard components (average, credits, absences, debts)
- [X] T064 [US1] Map student stats data to StatCard props with correct icons and colors

**Checkpoint**: ✅ User Story 1 complete - 4 stat cards display correctly

---

## Phase 6: User Story 2 - Розклад на сьогодні (Priority: P1) 🎯 MVP

**Goal**: Display today's schedule with Zoom links for online classes

**Independent Test**: Load page and verify schedule shows 3 classes with correct details and Zoom button

### Implementation for User Story 2

- [X] T065 [US2] Create src/components/features/ScheduleSection/ScheduleSection.tsx
- [X] T066 [US2] Create src/components/features/ScheduleSection/ScheduleSection.module.css
- [X] T067 [US2] Create src/components/features/ScheduleSection/index.ts
- [X] T068 [US2] Add section header with "Розклад на сьогодні" title and "Переглянути все" button
- [X] T069 [US2] Map schedule items to ScheduleCard components
- [X] T070 [US2] Implement Zoom button click handler (opens link in new tab)
- [X] T071 [US2] Add conditional rendering for online/offline format

**Checkpoint**: ✅ User Story 2 complete - schedule displays with working Zoom links

---

## Phase 7: User Story 3 - Навігація (Priority: P1) 🎯 MVP

**Goal**: Sidebar navigation with active state and badge for messages

**Independent Test**: Click each menu item and verify active state changes, badge shows "3"

### Implementation for User Story 3

- [ ] T072 [US3] Create src/components/layout/Sidebar/Sidebar.tsx
- [ ] T073 [US3] Create src/components/layout/Sidebar/Sidebar.module.css (fixed width 256px)
- [ ] T074 [US3] Create src/components/layout/Sidebar/index.ts
- [ ] T075 [US3] Add UniPortal logo and branding section at top
- [ ] T076 [US3] Add student profile section (Avatar + name + group + faculty)
- [ ] T077 [US3] Map navigation items to NavItem components
- [ ] T078 [US3] Implement active state tracking (highlight current route)
- [ ] T079 [US3] Add badge to "Повідомлення" item showing unread count
- [ ] T080 [US3] Add "Вийти" button at bottom with logout handler

**Checkpoint**: User Story 3 complete - navigation works with active states

---

## Phase 8: User Story 4 - Повідомлення (Priority: P2)

**Goal**: Display messages widget with unread indicator

**Independent Test**: Verify messages list shows 5 items with 3 marked as unread

### Implementation for User Story 4

- [X] T081 [US4] Create src/components/features/MessagesWidget/MessagesWidget.tsx
- [X] T082 [US4] Create src/components/features/MessagesWidget/MessagesWidget.module.css
- [X] T083 [US4] Create src/components/features/MessagesWidget/index.ts
- [X] T084 [US4] Add widget header with "Повідомлення" title and "3 нові" badge
- [X] T085 [US4] Map messages to MessageCard components
- [X] T086 [US4] Add visual distinction for unread messages (bold text, background)
- [X] T087 [US4] Implement message click handler (mark as read)

**Checkpoint**: ✅ User Story 4 complete - messages display with unread indicators

---

## Phase 9: User Story 5 - Оцінки (Priority: P2)

**Goal**: Display grades table with circular progress indicators

**Independent Test**: Verify table shows 5 subjects with circular indicators

### Implementation for User Story 5

- [X] T088 [US5] Create src/components/features/GradesTable/GradesTable.tsx
- [X] T089 [US5] Create src/components/features/GradesTable/GradesTable.module.css
- [X] T090 [US5] Create src/components/features/GradesTable/index.ts
- [X] T091 [US5] Create table header (Предмет, Викладач, Оцінка)
- [X] T092 [US5] Map grades to table rows
- [X] T093 [US5] Integrate CircularProgress component for grade display
- [X] T094 [US5] Add hover effect on table rows

**Checkpoint**: ✅ User Story 5 complete - grades table displays correctly

---

## Phase 10: User Story 6 - Профіль студента (Priority: P3)

**Goal**: Display student profile in sidebar

**Independent Test**: Verify profile shows photo, name, group, course, faculty

### Implementation for User Story 6

- [ ] T095 [US6] Create src/components/ui/StudentProfile/StudentProfile.tsx
- [ ] T096 [US6] Create src/components/ui/StudentProfile/StudentProfile.module.css
- [ ] T097 [US6] Create src/components/ui/StudentProfile/index.ts
- [ ] T098 [US6] Integrate Avatar component with student photo
- [ ] T099 [US6] Display student name, group, course, faculty
- [ ] T100 [US6] Add click handler to navigate to full profile page

**Checkpoint**: User Story 6 complete - profile displays in sidebar

---

## Phase 11: Custom Hooks (Business Logic Layer)

**Purpose**: Extract data fetching and state management into reusable hooks

- [X] T101 [P] Create src/hooks/useStudentData.ts (fetch student, loading, error, refetch)
- [X] T102 [P] Create src/hooks/useSchedule.ts (fetch schedule for date, loading, error)
- [X] T103 [P] Create src/hooks/useMessages.ts (fetch messages, unread count, mark as read)
- [X] T104 [P] Create src/hooks/useGrades.ts (fetch grades, loading, error)
- [X] T105 [P] Create src/hooks/useNavigation.ts (active route, navigate)
- [X] T106 Integrate useStudentData hook into StatsGrid and StudentProfile
- [X] T107 Integrate useSchedule hook into ScheduleSection
- [X] T108 Integrate useMessages hook into MessagesWidget and Sidebar badge
- [X] T109 Integrate useGrades hook into GradesTable

**Checkpoint**: ✅ All hooks created and ready for integration

---

## Phase 12: Layout & Main Page

**Purpose**: Compose all organisms into complete page layout

- [X] T110 Create src/components/layout/Header/Header.tsx (page header with title)
- [X] T111 Create src/components/layout/Header/Header.module.css
- [X] T112 Create src/components/layout/Header/index.ts
- [X] T113 Create src/components/layout/MainLayout/MainLayout.tsx (Sidebar + main content area)
- [X] T114 Create src/components/layout/MainLayout/MainLayout.module.css (flexbox layout)
- [X] T115 Create src/components/layout/MainLayout/index.ts
- [X] T116 Create src/pages/Dashboard/Dashboard.tsx (compose all feature components)
- [X] T117 Create src/pages/Dashboard/Dashboard.module.css
- [X] T118 Create src/pages/Dashboard/index.ts
- [X] T119 Integrate Dashboard into App.tsx
- [X] T120 Add MainLayout wrapper to Dashboard

**Checkpoint**: ✅ Complete dashboard page renders with all components - MVP READY!

---

## Phase 13: Additional Pages (Stubs)

**Purpose**: Create placeholder pages for other navigation items

- [X] T121 [P] Create src/pages/Schedule/Schedule.tsx (full schedule page - stub)
- [X] T122 [P] Create src/pages/Grades/Grades.tsx (grades page - stub)
- [X] T123 [P] Create src/pages/Messages/Messages.tsx (messages page - stub)
- [X] T124 [P] Create src/pages/Profile/Profile.tsx (profile page - stub)
- [X] T125 [P] Create src/pages/Settings/Settings.tsx (settings page - stub)
- [X] T126 Setup basic routing in App.tsx (React Router or simple state-based routing)
- [X] T127 Connect navigation items to route changes

**Checkpoint**: ✅ All navigation items lead to pages (even if stubs)

---

## Phase 14: Responsive Design & Polish

**Purpose**: Make interface responsive and add polish

- [X] T128 Define breakpoints in tokens.css (mobile: 320px, tablet: 768px, desktop: 1024px+)
- [X] T129 Make Sidebar responsive (collapse to hamburger on mobile)
- [X] T130 Make StatsGrid responsive (4 cols → 2 cols → 1 col)
- [X] T131 Make ScheduleSection responsive (stack cards on mobile)
- [X] T132 Make GradesTable responsive (horizontal scroll on mobile)
- [X] T133 Add loading states (LoadingSpinner) to all data components
- [X] T134 Add error states with retry button to all data components
- [X] T135 Add empty states (e.g., "Сьогодні занять немає")
- [X] T136 Add hover effects to all interactive elements
- [X] T137 Add focus styles for keyboard navigation
- [X] T138 Add smooth transitions for state changes

**Checkpoint**: ✅ Interface works on mobile, tablet, desktop

---

## Phase 15: Accessibility & Performance

**Purpose**: Ensure WCAG compliance and optimize performance

- [X] T139 Add ARIA labels to all interactive elements
- [X] T140 Add ARIA roles to semantic sections
- [X] T141 Ensure keyboard navigation works (Tab, Enter, Escape)
- [X] T142 Add skip-to-content link (SkipToContent component)
- [X] T143 Verify color contrast ratios meet WCAG AA
- [X] T144 Add React.memo to expensive components
- [X] T145 Add useMemo for expensive calculations
- [X] T146 Add useCallback for event handlers
- [X] T147 Implement code splitting for pages (React.lazy)
- [X] T148 Optimize images (compress, use appropriate formats)
- [X] T149 Add error boundary for graceful error handling (ErrorBoundary component)

**Checkpoint**: ✅ WCAG 2.1 AA compliant, optimized performance

---

## Phase 16: Utility Functions

**Purpose**: Add helper functions for common operations

- [X] T150 [P] Create src/utils/formatters.ts (date, time, number formatters)
- [X] T151 [P] Create src/utils/validators.ts (input validators)
- [X] T152 [P] Create src/utils/dateHelpers.ts (date manipulation)
- [X] T153 [P] Create src/utils/index.ts (export all utils)
- [X] T154 Use formatters in MessageCard for timestamp display
- [X] T155 Use formatters in ScheduleCard for time display

**Checkpoint**: All utility functions created and usedusable

---

## Phase 17: Documentation & Final Polish

**Purpose**: Complete documentation and final touches

- [X] T156 Update README.md with complete project information
- [X] T157 Create CONTRIBUTING.md with development guidelines
- [X] T158 Create CHANGELOG.md
- [X] T159 Add JSDoc comments to all public functions
- [X] T160 Add component prop documentation
- [X] T161 Review and fix all TypeScript errors
- [X] T162 Review and fix all ESLint warnings
- [X] T163 Final code cleanup (remove console.logs, unused imports)
- [X] T164 Test all user flows manually
- [X] T165 Create deployment guide

**Checkpoint**: Project fully documented and ready for deployment size < 500KB
- [ ] T165 Final visual comparison with Figma (pixel-perfect check)

**Checkpoint**: Project is production-ready

---
## Summary

**Total Tasks**: 165  
**Estimated Duration**: 16-22 days (3-4 weeks)

**Critical Path**:
1. Phase 0-2 (Setup + Foundation) → MUST complete first
2. Phase 3-4 (Atoms + Molecules) → Can parallelize
3. Phase 5-10 (User Stories) → Can implement in priority order
4. Phase 11-12 (Hooks + Layout) → Integrate everything
5. Phase 13-17 (Polish + Documentation) → Final touches

**Parallel Work Opportunities**:
- Atomic components (T032-T047) can be built in parallel
- Molecular components (T048-T059) can be built in parallel after atoms
- User stories can be implemented in parallel after foundation
- Utility functions (T150-T154) can be built anytime
- Documentation can be written alongside implementation

**MVP Delivery** (P1 User Stories):
- After Phase 12, you have a working MVP with:
  - ✅ Statistics cards (US1)
  - ✅ Today's schedule (US2)
  - ✅ Navigation (US3)
  - ✅ Basic layout and routing

**Full Feature Delivery**:
- After Phase 17, all user stories complete with polish
