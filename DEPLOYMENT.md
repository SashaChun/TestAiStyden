# Deployment Guide - GitHub Pages

## 🚀 Автоматичний Deployment

Проект налаштований для автоматичного deployment на GitHub Pages через GitHub Actions.

### Налаштування:

1. **Створіть GitHub репозиторій** (якщо ще не створено):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UniPortal Student Cabinet"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/windsurf-project-7.git
   git push -u origin main
   ```

2. **Увімкніть GitHub Pages**:
   - Перейдіть в Settings → Pages
   - Source: GitHub Actions
   - Збережіть налаштування

3. **Автоматичний deploy**:
   - При кожному push в `main` або `master` branch
   - Автоматично запуститься GitHub Action
   - Сайт буде доступний за адресою: `https://YOUR_USERNAME.github.io/windsurf-project-7/`

---

## 📦 Ручний Deployment (опціонально)

Якщо потрібно задеплоїти вручну:

### Встановіть gh-pages:
```bash
npm install --save-dev gh-pages
```

### Задеплойте:
```bash
npm run deploy
```

---

## ⚙️ Конфігурація

### Vite Config
- **Base URL**: `/windsurf-project-7/`
- **Build Output**: `dist/`
- **Source Maps**: Вимкнено для production

### GitHub Actions
- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to main/master або manual dispatch
- **Node Version**: 18
- **Build Command**: `npm run build`

---

## 🔗 URL Structure

### Production:
```
https://YOUR_USERNAME.github.io/windsurf-project-7/
```

### Routes (HashRouter):
```
https://YOUR_USERNAME.github.io/windsurf-project-7/#/
https://YOUR_USERNAME.github.io/windsurf-project-7/#/schedule
https://YOUR_USERNAME.github.io/windsurf-project-7/#/grades
https://YOUR_USERNAME.github.io/windsurf-project-7/#/messages
https://YOUR_USERNAME.github.io/windsurf-project-7/#/profile
https://YOUR_USERNAME.github.io/windsurf-project-7/#/settings
```

---

## 🛠 Troubleshooting

### Проблема: 404 при переході по routes
**Рішення**: Використовується HashRouter, тому всі routes працюють через `#/`

### Проблема: Білий екран після deploy
**Рішення**: 
1. Перевірте `base` в `vite.config.ts`
2. Перевірте що назва репозиторію співпадає з `base`

### Проблема: GitHub Action fails
**Рішення**:
1. Перевірте що Pages увімкнено в Settings
2. Перевірте що Source встановлено на "GitHub Actions"
3. Перевірте логи в Actions tab

---

## 📊 Build Stats

### Оптимізації:
- ✅ Code splitting (vendor chunk)
- ✅ Tree shaking
- ✅ Minification
- ✅ CSS optimization
- ✅ Asset optimization

### Очікуваний розмір:
- **Total**: ~200-300 KB (gzipped)
- **Vendor chunk**: ~150 KB
- **App chunk**: ~50-100 KB
- **CSS**: ~20-30 KB

---

## 🔄 Оновлення сайту

Просто зробіть push в main branch:
```bash
git add .
git commit -m "Update: ваші зміни"
git push
```

GitHub Actions автоматично задеплоїть нову версію за ~2-3 хвилини.

---

## 📝 Checklist перед deploy

- [ ] `npm run build` працює без помилок
- [ ] `npm run type-check` проходить
- [ ] `npm run lint` не має критичних помилок
- [ ] Всі routes працюють локально
- [ ] Base URL в vite.config.ts правильний
- [ ] .gitignore налаштований
- [ ] README.md оновлений

---

## 🎉 Готово!

Після успішного deploy ваш сайт буде доступний публічно!

**Live URL**: `https://YOUR_USERNAME.github.io/windsurf-project-7/`
