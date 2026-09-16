import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './leaderboard.module.css';

type Stats = {
  flashcardsReviewed: number;
  flashcardsCorrect: number;
  docsCompleted: number;
  streakDays: number;
};

const defaultStats: Stats = {
  flashcardsReviewed: 0,
  flashcardsCorrect: 0,
  docsCompleted: 0,
  streakDays: 0,
};

function getRank(stats: Stats): {rank: string; color: string; next: string; progress: number} {
  const score = stats.flashcardsReviewed + stats.docsCompleted * 10;
  if (score >= 500) return {rank: 'Platinum', color: '#a78bfa', next: 'Max Level!', progress: 100};
  if (score >= 200) return {rank: 'Gold', color: '#f59e0b', next: 'Platinum', progress: (score / 500) * 100};
  if (score >= 50) return {rank: 'Silver', color: '#94a3b8', next: 'Gold', progress: (score / 200) * 100};
  return {rank: 'Bronze', color: '#cd7f32', next: 'Silver', progress: (score / 50) * 100};
}

export default function Leaderboard(): ReactNode {
  const [stats, setStats] = useState<Stats>(defaultStats);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai-ka-safar-stats');
      if (saved) setStats(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const rank = getRank(stats);
  const accuracy = stats.flashcardsReviewed > 0
    ? Math.round((stats.flashcardsCorrect / stats.flashcardsReviewed) * 100)
    : 0;

  return (
    <Layout title="Leaderboard" description="Apna progress track karo">
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>YOUR PROGRESS</p>
          <h1 className={styles.title}>Leaderboard</h1>

          {!loaded ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            <>
              <div className={styles.rankCard} style={{borderColor: rank.color}}>
                <div className={styles.rankBadge} style={{background: rank.color}}>
                  {rank.rank}
                </div>
                <div className={styles.rankInfo}>
                  <h2>{rank.rank} Level</h2>
                  {rank.next !== 'Max Level!' && (
                    <p>Agla level: <strong>{rank.next}</strong></p>
                  )}
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: `${rank.progress}%`, background: rank.color}} />
                  </div>
                </div>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>{stats.flashcardsReviewed}</div>
                  <div className={styles.statLabel}>Flashcards Reviewed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>{accuracy}%</div>
                  <div className={styles.statLabel}>Accuracy</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>{stats.docsCompleted}</div>
                  <div className={styles.statLabel}>Docs Completed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>{stats.streakDays}</div>
                  <div className={styles.statLabel}>Day Streak</div>
                </div>
              </div>

              <div className={styles.resetSection}>
                <button
                  className={styles.resetBtn}
                  onClick={() => {
                    if (confirm('Saara progress reset ho jayega. Confirm?')) {
                      localStorage.removeItem('ai-ka-safar-stats');
                      setStats(defaultStats);
                    }
                  }}
                >
                  Progress Reset Karein
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
