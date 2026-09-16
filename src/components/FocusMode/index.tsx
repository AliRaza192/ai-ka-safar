import {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function FocusMode(): JSX.Element {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) {
        setActive(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [active]);

  useEffect(() => {
    if (active) {
      document.body.classList.add('focus-mode');
    } else {
      document.body.classList.remove('focus-mode');
    }
  }, [active]);

  return (
    <button
      className={`${styles.focusBtn} ${active ? styles.active : ''}`}
      onClick={() => setActive(!active)}
      title={active ? 'Focus Mode band karo (ESC)' : 'Focus Mode on karo'}
      aria-label="Focus Mode toggle"
    >
      {active ? '✕' : '◎'}
    </button>
  );
}
