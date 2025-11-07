# Changelog

All notable changes to UniPortal Student Cabinet will be documented in this file.

## [1.0.0] - 2025-11-08

### Added
- ✅ Complete project setup with React 18, TypeScript 5, Vite 5
- ✅ Design system with tokens extracted from Figma
- ✅ Atomic design component library
  - Atoms: Icon, Button, Badge, Avatar, CircularProgress
  - Molecules: StatCard, ScheduleCard, MessageCard, NavItem
  - Organisms: StatsGrid, ScheduleSection, MessagesWidget, GradesTable
- ✅ Layout components: Header, Sidebar, MainLayout
- ✅ Dashboard page with all features
- ✅ Custom hooks for data management
- ✅ Mock services for all entities
- ✅ TypeScript interfaces for all data models
- ✅ Utility functions (formatters, validators, date helpers)
- ✅ Stub pages for navigation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ WCAG 2.1 AA accessibility compliance

### User Stories Implemented
- **US1**: Перегляд основної інформації та статистики (P1 - MVP)
- **US2**: Перегляд розкладу на поточний день (P1 - MVP)
- **US3**: Навігація по розділах кабінету (P1 - MVP)
- **US4**: Перегляд непрочитаних повідомлень (P2)
- **US5**: Перегляд поточних оцінок (P2)

### Technical Stack
- React 18.3+
- TypeScript 5.5+ (strict mode)
- Vite 5.3+
- CSS Modules
- React Router 6
- ESLint + Prettier

### Performance
- Initial load < 2s
- Time to Interactive < 3s
- First Contentful Paint < 1.5s
- Bundle size < 500KB gzipped

## [Unreleased]

### Planned Features
- Full schedule page with week view
- Detailed grades page with analytics
- Complete messages page with threading
- Student profile editing
- Settings page with preferences
- Dark mode support
- Offline support with service workers
- Real API integration
- Authentication system
