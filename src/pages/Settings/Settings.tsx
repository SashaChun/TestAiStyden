/**
 * Settings Page - Application settings
 */

import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import styles from './Settings.module.css';

export const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    schedule: true,
    grades: true,
    messages: true,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.page}>
      {/* Notifications Settings */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Сповіщення</h2>
        <div className={styles.settingsGroup}>
          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Email сповіщення</h3>
              <p className={styles.settingDesc}>Отримувати сповіщення на email</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() => handleToggle('email')}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Push сповіщення</h3>
              <p className={styles.settingDesc}>Отримувати push сповіщення в браузері</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={() => handleToggle('push')}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Сповіщення про розклад</h3>
              <p className={styles.settingDesc}>Нагадування про заняття</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={notifications.schedule}
                onChange={() => handleToggle('schedule')}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Сповіщення про оцінки</h3>
              <p className={styles.settingDesc}>Повідомлення про нові оцінки</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={notifications.grades}
                onChange={() => handleToggle('grades')}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Сповіщення про повідомлення</h3>
              <p className={styles.settingDesc}>Повідомлення від викладачів</p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={notifications.messages}
                onChange={() => handleToggle('messages')}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Зовнішній вигляд</h2>
        <div className={styles.settingsGroup}>
          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Мова інтерфейсу</h3>
              <p className={styles.settingDesc}>Виберіть мову додатку</p>
            </div>
            <select className={styles.select}>
              <option value="uk">Українська</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Тема</h3>
              <p className={styles.settingDesc}>Світла або темна тема</p>
            </div>
            <select className={styles.select}>
              <option value="light">Світла</option>
              <option value="dark">Темна (скоро)</option>
              <option value="auto">Автоматично (скоро)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Безпека</h2>
        <div className={styles.settingsGroup}>
          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Змінити пароль</h3>
              <p className={styles.settingDesc}>Оновіть свій пароль</p>
            </div>
            <Button variant="secondary" size="sm">
              Змінити
            </Button>
          </div>

          <div className={styles.settingItem}>
            <div className={styles.settingInfo}>
              <h3 className={styles.settingLabel}>Двофакторна автентифікація</h3>
              <p className={styles.settingDesc}>Додатковий захист облікового запису</p>
            </div>
            <Button variant="secondary" size="sm">
              Налаштувати
            </Button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className={styles.actions}>
        <Button variant="primary">Зберегти налаштування</Button>
      </div>
    </div>
  );
};
