/**
 * ScheduleCard Component - Schedule item card
 * Used in User Story 2 (US2)
 */

import type { ScheduleItem } from '../../../types';
import { Icon } from '../Icon';
import { Button } from '../Button';
import styles from './ScheduleCard.module.css';

export interface ScheduleCardProps {
  item: ScheduleItem;
  onZoomClick?: () => void;
}

export const ScheduleCard = ({ item, onZoomClick }: ScheduleCardProps) => {
  const handleZoomClick = () => {
    if (item.zoomLink && onZoomClick) {
      onZoomClick();
    } else if (item.zoomLink) {
      window.open(item.zoomLink, '_blank');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon name={item.format === 'online' ? 'video' : 'book'} size={24} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.subject}>{item.subject}</h3>
        <p className={styles.teacher}>{item.teacher}</p>
        <p className={styles.room}>{item.room}</p>
      </div>

      <div className={styles.timeWrapper}>
        <p className={styles.time}>
          {item.startTime} - {item.endTime}
        </p>
        {item.format === 'online' && item.zoomLink ? (
          <Button variant="link" size="sm" onClick={handleZoomClick}>
            <Icon name="video" size={16} />
            Zoom
          </Button>
        ) : (
          <span className={styles.format}>Очно</span>
        )}
      </div>
    </div>
  );
};
