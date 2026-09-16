import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './factory.module.css';

type Project = {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'locked';
  description: string;
};

const checkpoints: Project[] = [
  {id: 'A1', name: 'First Agent', status: 'completed', description: 'Pehla agent banao jo kuch kaam kare'},
  {id: 'A2', name: 'Tool Integration', status: 'completed', description: 'Agents ko tools do (APIs, files, databases)'},
  {id: 'A3', name: 'Multi-Turn Agent', status: 'active', description: 'Agent jo yaad rakhe kya hua hai'},
  {id: 'B1', name: 'Worker v1', status: 'locked', description: 'Pehla complete Digital FTE'},
  {id: 'B2', name: 'Governed Worker', status: 'locked', description: 'Worker jo rules follow kare'},
  {id: 'B3', name: 'Production Deploy', status: 'locked', description: 'Cloud pe deploy karo'},
  {id: 'C1', name: 'Multi-Worker System', status: 'locked', description: 'Kai workers mil ke kaam karein'},
  {id: 'C2', name: 'AI-Native Company', status: 'locked', description: 'Pehli AI-Native company'},
  {id: 'D1', name: 'Scale & Monetize', status: 'locked', description: 'Scale karo aur paisa kamao'},
];

export default function Factory(): ReactNode {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai-ka-factory-checkpoints');
      if (saved) setCompleted(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleCheckpoint = (id: string) => {
    setCompleted((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('ai-ka-factory-checkpoints', JSON.stringify(next));
      return next;
    });
  };

  const progress = Math.round((completed.length / checkpoints.length) * 100);

  return (
    <Layout title="Factory Dashboard" description="Apna AI Worker progress track karo">
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>FACTORY DASHBOARD</p>
          <h1 className={styles.title}>Worker Factory</h1>
          <p className={styles.subtitle}>
            Tumhara safar — pehle agent se lekar AI-Native company tak. 
            Har checkpoint complete karo aur dekho kitna tayyar hai.
          </p>

          <div className={styles.progressSection}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{width: `${progress}%`}} />
            </div>
            <p className={styles.progressText}>{completed.length}/{checkpoints.length} checkpoints — {progress}%</p>
          </div>

          <div className={styles.grid}>
            {checkpoints.map((cp) => {
              const isCompleted = completed.includes(cp.id);
              const statusClass = isCompleted ? styles.completed : cp.status === 'locked' ? styles.locked : styles.active;
              return (
                <div
                  key={cp.id}
                  className={`${styles.card} ${statusClass}`}
                  onClick={() => toggleCheckpoint(cp.id)}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardId}>{cp.id}</span>
                    <span className={styles.cardStatus}>
                      {isCompleted ? '✓ Done' : cp.status === 'locked' ? '🔒' : '→'}
                    </span>
                  </div>
                  <h3>{cp.name}</h3>
                  <p>{cp.description}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.footer}>
            <p>Click karke checkpoints mark karo. Data sirf tumhare browser mein save hota hai.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
