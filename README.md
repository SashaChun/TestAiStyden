# UniPortal - Студентський кабінет

Сучасний фронтенд додаток для студентського кабінету UniPortal, побудований з використанням React 18+, TypeScript 5+ та Vite.

## ✨ Особливості

- 📊 **Статистика студента** - середній бал, кредити, пропуски, заборгованості
- 📅 **Розклад занять** - розклад на сьогодні з Zoom посиланнями
- 📧 **Повідомлення** - непрочитані повідомлення з індикаторами
- 📈 **Оцінки** - таблиця оцінок з круговими індикаторами прогресу
- 🎨 **Pixel-perfect дизайн** - відповідає Figma макетам
- 📱 **Responsive** - працює на всіх пристроях
- ♿ **Accessible** - WCAG 2.1 AA compliance
- ⚡ **Швидкий** - < 2s initial load

## 🚀 Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Запуск dev сервера

```bash
npm run dev
```

Додаток буде доступний за адресою: http://localhost:3000

### Збірка для production

```bash
npm run build
```

### Перегляд production збірки

```bash
npm run preview
```

## 📋 Доступні команди

- `npm run dev` - Запуск dev сервера з hot reload
- `npm run build` - Збірка для production (TypeScript + Vite)
- `npm run preview` - Перегляд production збірки
- `npm run lint` - Перевірка коду з ESLint
- `npm run type-check` - Перевірка типів TypeScript

## 🛠 Технології

### Core
- **React 18.3+** - UI бібліотека з hooks
- **TypeScript 5.5+** - Типізація (strict mode, no any)
- **Vite 5.3+** - Build tool для швидкої розробки
- **React Router 6** - Маршрутизація

### Styling
- **CSS Modules** - Scoped styles
- **Design Tokens** - CSS custom properties з Figma
- **Google Fonts** - Inter font family

### Code Quality
- **ESLint** - Linting з TypeScript та React rules
- **Prettier** - Code formatting
- **TypeScript strict mode** - Максимальна type safety

## 📁 Структура проекту

```
src/
├── components/
│   ├── ui/                    # Atomic & Molecular components
│   │   ├── Icon/             # SVG icon wrapper
│   │   ├── Button/           # Button variants
│   │   ├── Badge/            # Notification badge
│   │   ├── Avatar/           # User avatar
│   │   ├── CircularProgress/ # Grade indicator
│   │   ├── StatCard/         # Statistics card
│   │   ├── ScheduleCard/     # Schedule item
│   │   ├── MessageCard/      # Message preview
│   │   └── NavItem/          # Navigation item
│   ├── layout/               # Layout components
│   │   ├── Header/           # Page header
│   │   ├── Sidebar/          # Navigation sidebar
│   │   └── MainLayout/       # Main layout wrapper
│   └── features/             # Feature-specific organisms
│       ├── StatsGrid/        # 4 stat cards grid
│       ├── ScheduleSection/  # Today's schedule
│       ├── MessagesWidget/   # Messages list
│       └── GradesTable/      # Grades table
├── pages/                    # Page components
│   ├── Dashboard/            # Main dashboard (MVP)
│   ├── Schedule/             # Full schedule (stub)
│   ├── Grades/               # Grades page (stub)
│   ├── Messages/             # Messages page (stub)
│   ├── Profile/              # Profile page (stub)
│   └── Settings/             # Settings page (stub)
├── hooks/                    # Custom React hooks
│   ├── useStudentData.ts     # Student data hook
│   ├── useSchedule.ts        # Schedule hook
│   ├── useMessages.ts        # Messages hook
│   ├── useGrades.ts          # Grades hook
│   └── useNavigation.ts      # Navigation hook
├── types/                    # TypeScript definitions
│   ├── student.ts            # Student & StudentStats
│   ├── schedule.ts           # ScheduleItem
│   ├── message.ts            # Message
│   ├── grade.ts              # Grade
│   └── navigation.ts         # NavigationItem
├── services/                 # Data services (mock)
│   ├── studentService.ts     # Student API
│   ├── scheduleService.ts    # Schedule API
│   ├── messageService.ts     # Messages API
│   └── gradeService.ts       # Grades API
├── utils/                    # Utility functions
│   ├── formatters.ts         # Date, time, text formatters
│   ├── validators.ts         # Input validators
│   └── dateHelpers.ts        # Date manipulation
├── constants/                # Constants & config
│   ├── routes.ts             # Route paths
│   ├── navigation.ts         # Menu items
│   └── config.ts             # App configuration
├── styles/                   # Global styles
│   ├── tokens.css            # Design tokens from Figma
│   ├── global.css            # Global styles
│   └── reset.css             # CSS reset
└── assets/                   # Static assets
    └── icons/                # SVG icons
```

## 🎨 Дизайн

### Design System
- **Atomic Design** - Atoms → Molecules → Organisms → Templates → Pages
- **Design Tokens** - Кольори, типографіка, відступи з Figma
- **Responsive** - Mobile-first підхід (320px - 1920px)
- **Accessibility** - WCAG 2.1 AA стандарти

### Кольорова палітра
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#22c55e)
- **Warning**: Orange (#f97316)
- **Danger**: Red (#ef4444)
- **Info**: Purple (#a855f7)

## 📝 Документація

Детальна документація знаходиться в папці `specs/master/`:
- **spec.md** - Feature specification з user stories
- **plan.md** - Implementation plan
- **tasks.md** - Task breakdown (165 tasks)
- **research.md** - Technical decisions
- **data-model.md** - Data models та relationships

Додаткова документація:
- **CONTRIBUTING.md** - Гайд для розробників
- **CHANGELOG.md** - Історія змін

## 🎯 Реалізовані User Stories

### MVP (Priority 1)
- ✅ **US1**: Перегляд основної інформації та статистики
- ✅ **US2**: Перегляд розкладу на поточний день
- ✅ **US3**: Навігація по розділах кабінету

### Priority 2
- ✅ **US4**: Перегляд непрочитаних повідомлень
- ✅ **US5**: Перегляд поточних оцінок

## 🚧 Roadmap

### v1.1 (Planned)
- [ ] Повна сторінка розкладу з тижневим view
- [ ] Детальна сторінка оцінок з аналітикою
- [ ] Повна сторінка повідомлень з threading
- [ ] Редагування профілю студента
- [ ] Сторінка налаштувань

### v2.0 (Future)
- [ ] Dark mode
- [ ] Offline support (Service Workers)
- [ ] Real API integration
- [ ] Authentication system
- [ ] Push notifications
- [ ] Mobile app (React Native)

## 🧪 Тестування

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📊 Performance

- **Initial Load**: < 2s
- **Time to Interactive**: < 3s
- **First Contentful Paint**: < 1.5s
- **Bundle Size**: < 500KB gzipped

## 🤝 Contributing

Дивіться [CONTRIBUTING.md](./CONTRIBUTING.md) для деталей.

## 📄 Ліцензія

Private project - UniPortal Student Cabinet

## 👥 Автори

Розроблено з використанням:
- Figma для дизайну
- Windsurf IDE для розробки
- Spec-kit для документації
