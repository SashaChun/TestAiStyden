# Data Model: UniPortal Student Cabinet

**Phase**: 1 - Design & Contracts  
**Date**: 2025-11-08  
**Status**: Complete

## Overview

This document defines all data entities, their fields, relationships, validation rules, and state transitions for the UniPortal Student Cabinet application.

---

## Entity: Student

**Description**: Represents a student user with personal information and academic statistics.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | string | Yes | Unique student identifier | Non-empty string |
| `firstName` | string | Yes | Student's first name | Non-empty, max 50 chars |
| `lastName` | string | Yes | Student's last name | Non-empty, max 50 chars |
| `fullName` | string | Yes | Full name (computed) | `${firstName} ${lastName}` |
| `photo` | string \| undefined | No | URL to profile photo | Valid URL or undefined |
| `group` | string | Yes | Academic group code | Non-empty, e.g., "ІТ-21" |
| `course` | number | Yes | Current course year | Integer 1-6 |
| `faculty` | string | Yes | Faculty name | Non-empty string |
| `stats` | StudentStats | Yes | Academic statistics | Valid StudentStats object |

### Relationships

- **Has one** `StudentStats` (embedded)
- **Has many** `ScheduleItem` (via schedule service)
- **Has many** `Message` (via message service)
- **Has many** `Grade` (via grade service)

### TypeScript Interface

```typescript
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
```

### Mock Data Example

```typescript
{
  id: "STU001",
  firstName: "Марія",
  lastName: "Коваленко",
  fullName: "Марія Коваленко",
  photo: "/assets/images/avatar-maria.jpg",
  group: "ІТ-21",
  course: 3,
  faculty: "Факультет інформатики",
  stats: {
    averageGrade: 4.8,
    creditsEarned: 48,
    creditsTotal: 60,
    absences: 2,
    debts: 0
  }
}
```

---

## Entity: StudentStats

**Description**: Academic performance statistics for a student.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `averageGrade` | number | Yes | Average grade (GPA) | Number 0-5, max 1 decimal |
| `creditsEarned` | number | Yes | Credits earned so far | Integer ≥ 0 |
| `creditsTotal` | number | Yes | Total credits required | Integer > creditsEarned |
| `absences` | number | Yes | Number of absences | Integer ≥ 0 |
| `debts` | number | Yes | Number of academic debts | Integer ≥ 0 |

### Validation Rules

- `averageGrade` must be between 0 and 5
- `creditsEarned` must be ≤ `creditsTotal`
- All counts must be non-negative integers

### TypeScript Interface

```typescript
export interface StudentStats {
  averageGrade: number;
  creditsEarned: number;
  creditsTotal: number;
  absences: number;
  debts: number;
}
```

---

## Entity: ScheduleItem

**Description**: Represents a single class/lecture in the student's schedule.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | string | Yes | Unique schedule item ID | Non-empty string |
| `subject` | string | Yes | Subject/course name | Non-empty, max 100 chars |
| `teacher` | string | Yes | Teacher's full name | Non-empty, max 100 chars |
| `room` | string | Yes | Room/auditorium number | Non-empty, max 20 chars |
| `startTime` | string | Yes | Start time (HH:mm) | Valid time format "HH:mm" |
| `endTime` | string | Yes | End time (HH:mm) | Valid time, after startTime |
| `format` | 'online' \| 'offline' | Yes | Class format | Must be 'online' or 'offline' |
| `zoomLink` | string \| undefined | No | Zoom meeting URL | Valid URL if format is 'online' |
| `date` | string | Yes | Date (YYYY-MM-DD) | Valid ISO date string |

### Validation Rules

- `endTime` must be after `startTime`
- If `format` is 'online', `zoomLink` should be provided
- If `format` is 'offline', `zoomLink` should be undefined
- `date` must be valid ISO date format

### TypeScript Interface

```typescript
export type ClassFormat = 'online' | 'offline';

export interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
  format: ClassFormat;
  zoomLink?: string;
  date: string;
}
```

### Mock Data Example

```typescript
{
  id: "SCH001",
  subject: "Програмування",
  teacher: "Проф. Петренко А.В.",
  room: "Аудиторія 305",
  startTime: "09:00",
  endTime: "10:30",
  format: "online",
  zoomLink: "https://zoom.us/j/123456789",
  date: "2025-11-08"
}
```

---

## Entity: Message

**Description**: Represents a message/notification sent to the student.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | string | Yes | Unique message ID | Non-empty string |
| `subject` | string | Yes | Message subject/title | Non-empty, max 200 chars |
| `sender` | string | Yes | Sender's name | Non-empty, max 100 chars |
| `timestamp` | string | Yes | Send time (ISO 8601) | Valid ISO datetime string |
| `isRead` | boolean | Yes | Read status | Boolean true/false |
| `content` | string | Yes | Message body | Non-empty string |

### State Transitions

```
[Unread] ---> [Read]
  (user clicks message)
```

**States**:
- `isRead: false` → Message is unread (bold, highlighted)
- `isRead: true` → Message has been read (normal style)

### TypeScript Interface

```typescript
export interface Message {
  id: string;
  subject: string;
  sender: string;
  timestamp: string;
  isRead: boolean;
  content: string;
}
```

### Mock Data Example

```typescript
{
  id: "MSG001",
  subject: "Зміна в розкладі",
  sender: "Деканат",
  timestamp: "2025-11-08T08:30:00Z",
  isRead: false,
  content: "Заняття з математичного аналізу перенесено на 14:00"
}
```

---

## Entity: Grade

**Description**: Represents a grade/score for a specific subject.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | string | Yes | Unique grade ID | Non-empty string |
| `subject` | string | Yes | Subject name | Non-empty, max 100 chars |
| `teacher` | string | Yes | Teacher's name | Non-empty, max 100 chars |
| `score` | number | Yes | Current score/grade | Integer 0-100 |
| `maxScore` | number | Yes | Maximum possible score | Integer, typically 100 |
| `credits` | number | Yes | Course credits | Integer 1-10 |

### Validation Rules

- `score` must be between 0 and `maxScore`
- `maxScore` typically 100
- `credits` must be positive integer

### Computed Fields

- **Percentage**: `(score / maxScore) * 100`
- **Letter Grade**: Based on percentage (A, B, C, D, F)

### TypeScript Interface

```typescript
export interface Grade {
  id: string;
  subject: string;
  teacher: string;
  score: number;
  maxScore: number;
  credits: number;
}
```

### Mock Data Example

```typescript
{
  id: "GRD001",
  subject: "Програмування",
  teacher: "Проф. Петренко А.В.",
  score: 92,
  maxScore: 100,
  credits: 5
}
```

---

## Entity: NavigationItem

**Description**: Represents a menu item in the sidebar navigation.

### Fields

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| `id` | string | Yes | Unique navigation ID | Non-empty string |
| `label` | string | Yes | Display label | Non-empty, max 50 chars |
| `icon` | string | Yes | Icon name | Valid icon name from icon set |
| `path` | string | Yes | Route path | Valid route path (e.g., "/", "/schedule") |
| `badge` | number \| undefined | No | Badge count (e.g., unread) | Integer ≥ 0 or undefined |

### TypeScript Interface

```typescript
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}
```

### Mock Data Example

```typescript
{
  id: "nav-messages",
  label: "Повідомлення",
  icon: "mail",
  path: "/messages",
  badge: 3
}
```

---

## Entity Relationships Diagram

```
Student (1)
  ├── has one StudentStats (embedded)
  ├── has many ScheduleItem (1:N)
  ├── has many Message (1:N)
  └── has many Grade (1:N)

NavigationItem (N)
  └── independent (no relationships)
```

---

## Data Flow

### 1. Student Data Flow

```
studentService.getStudent()
  → useStudentData hook
  → StatsGrid component (displays stats)
  → StudentProfile component (displays profile)
```

### 2. Schedule Data Flow

```
scheduleService.getScheduleForDate(date)
  → useSchedule hook
  → ScheduleSection component
  → ScheduleCard components (one per item)
```

### 3. Messages Data Flow

```
messageService.getMessages()
  → useMessages hook
  → MessagesWidget component
  → MessageCard components (one per message)
  → Sidebar badge (unread count)
```

### 4. Grades Data Flow

```
gradeService.getGrades()
  → useGrades hook
  → GradesTable component
  → CircularProgress components (one per grade)
```

---

## Validation Summary

### Required Validations

1. **Student**:
   - All required fields present
   - `course` between 1-6
   - `photo` is valid URL or undefined

2. **ScheduleItem**:
   - `endTime` > `startTime`
   - If `format` is 'online', `zoomLink` must be valid URL
   - `date` is valid ISO date

3. **Message**:
   - `timestamp` is valid ISO datetime
   - `isRead` is boolean

4. **Grade**:
   - `score` ≤ `maxScore`
   - `score` and `maxScore` are non-negative
   - `credits` is positive integer

5. **StudentStats**:
   - `averageGrade` between 0-5
   - `creditsEarned` ≤ `creditsTotal`
   - All counts are non-negative

---

## Next Steps

- ✅ Data model complete
- ➡️ Generate API contracts (Phase 1 continues)
- ➡️ Create quickstart.md
- ➡️ Update agent context
