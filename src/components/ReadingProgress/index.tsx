import {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function ReadingProgress(): JSX.Element | null {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener('scroll', updateProgress, {passive: true});
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (progress < 1) return null;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{width: `${progress}%`}}
      />
    </div>
  );
}
