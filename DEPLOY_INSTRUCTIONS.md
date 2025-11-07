# 🚀 Інструкція з Deployment на GitHub Pages

## Крок 1: Підготовка

Переконайтесь що всі залежності встановлені:
```bash
npm install
```

## Крок 2: Створення GitHub репозиторію

1. Створіть новий репозиторій на GitHub з назвою `windsurf-project-7`
2. Ініціалізуйте git в проекті:

```bash
cd c:\Users\cunsa\CascadeProjects\windsurf-project-7\my-spec
git init
git add .
git commit -m "Initial commit: UniPortal Student Cabinet"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/windsurf-project-7.git
git push -u origin main
```

## Крок 3: Налаштування GitHub Pages

1. Перейдіть в Settings вашого репозиторію
2. Знайдіть розділ "Pages" в лівому меню
3. В "Source" виберіть **"GitHub Actions"**
4. Збережіть налаштування

## Крок 4: Автоматичний Deploy

GitHub Actions автоматично задеплоїть сайт після push!

Файл `.github/workflows/deploy.yml` вже створений і налаштований.

## Крок 5: Перевірка

Після успішного deploy (2-3 хвилини) ваш сайт буде доступний за адресою:

```
https://YOUR_USERNAME.github.io/windsurf-project-7/
```

---

## 🔄 Оновлення сайту

Просто робіть push в main branch:
```bash
git add .
git commit -m "Update: опис змін"
git push
```

GitHub Actions автоматично оновить сайт!

---

## 📦 Ручний Deploy (альтернатива)

Якщо потрібно задеплоїти вручну без GitHub Actions:

```bash
npm run deploy
```

Це збілдить проект та задеплоїть в gh-pages branch.

---

## ⚙️ Налаштування (вже зроблено)

✅ `vite.config.ts` - base URL встановлено на `/windsurf-project-7/`
✅ `package.json` - додано deploy скрипти
✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
✅ HashRouter - працює без серверної конфігурації

---

## 🎯 URL Structure

### Головна:
```
https://YOUR_USERNAME.github.io/windsurf-project-7/
```

### Інші сторінки (через HashRouter):
```
https://YOUR_USERNAME.github.io/windsurf-project-7/#/schedule
https://YOUR_USERNAME.github.io/windsurf-project-7/#/grades
https://YOUR_USERNAME.github.io/windsurf-project-7/#/messages
https://YOUR_USERNAME.github.io/windsurf-project-7/#/profile
https://YOUR_USERNAME.github.io/windsurf-project-7/#/settings
```

---

## 🛠 Troubleshooting

### Білий екран після deploy?
- Перевірте що base URL в `vite.config.ts` співпадає з назвою репозиторію
- Перевірте що використовується HashRouter (вже налаштовано)

### GitHub Action не запускається?
- Перевірте що Pages увімкнено в Settings
- Перевірте що Source = "GitHub Actions"
- Подивіться логи в вкладці Actions

### 404 помилка?
- HashRouter вирішує цю проблему автоматично
- Всі routes працюють через `#/`

---

## ✅ Checklist

- [ ] Git репозиторій створено
- [ ] Код запушено на GitHub
- [ ] GitHub Pages увімкнено (Source: GitHub Actions)
- [ ] GitHub Action успішно виконався
- [ ] Сайт доступний за URL

---

## 🎉 Готово!

Після виконання всіх кроків ваш UniPortal Student Cabinet буде доступний онлайн!

**Бордова кольорова схема Волинського Університету вже застосована! 🎨**
