import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './authors.module.css';

const authors = [
  {
    initials: 'ZK',
    name: 'Zia Khan',
    role: 'Co-Author & Lead',
    bio: 'AI-Native architecture aur agent systems ke baare mein likha hai. Panaversity ke founder.',
    color: '#25c2a0',
  },
  {
    initials: 'WK',
    name: 'Wania Kazmi',
    role: 'Co-Author',
    bio: 'AI prompting aur practical use cases pe contribution diya hai.',
    color: '#6366f1',
  },
  {
    initials: 'MJ',
    name: 'Muhammad Junaid',
    role: 'Co-Author',
    bio: 'Production systems aur deployment strategies pe kaam kiya hai.',
    color: '#f59e0b',
  },
  {
    initials: 'MR',
    name: 'M Rehan ul Haq',
    role: 'Co-Author',
    bio: 'Agentic engineering aur workflow design pe contributions.',
    color: '#ef4444',
  },
];

export default function Authors(): ReactNode {
  return (
    <Layout title="Authors — Musannifeen" description="AI ka Safar kitab ke musannifeen ke baare mein">
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>TEAM</p>
          <h1 className={styles.title}>Musannifeen (Authors)</h1>
          <p className={styles.subtitle}>
            Yeh kitaab AI agents aur AI-Native companies ke baare mein likhi gayi hai — 
            professionals ke liye jo agle daur ki workforce banana chahte hain.
          </p>

          <div className={styles.grid}>
            {authors.map((a) => (
              <div key={a.initials} className={styles.card}>
                <div className={styles.avatar} style={{background: a.color}}>
                  {a.initials}
                </div>
                <h3 className={styles.name}>{a.name}</h3>
                <p className={styles.role}>{a.role}</p>
                <p className={styles.bio}>{a.bio}</p>
              </div>
            ))}
          </div>

          <div className={styles.aiCard}>
            <div className={styles.aiIcon}>🤖</div>
            <h3>AI Agents — Co-Authors</h3>
            <p>
              Is kitaab mein AI agents ne bhi contribution diya hai. 
              Claude, ChatGPT, aur Gemini ne writing, editing, aur 
              research mein madad ki. Yeh pehli kitaab hai jismein 
              AI agents as co-authors shamil hain.
            </p>
          </div>

          <div className={styles.aboutSection}>
            <h2>Yeh Kitaab Kyun Likhi Gayi?</h2>
            <p>
              2026 mein AI agents sirf tools nahi rahe — woh workforce ban gaye hain. 
              Har company ko AI-Native banana padega. Yeh kitaab us safar ka guide hai.
            </p>
            <p>
              Original book <a href="https://agentfactory.panaversity.org/" target="_blank" rel="noopener noreferrer">Agent Factory</a> 
              {' '}English mein hai. Humne iska complete Roman Urdu tarjuma kiya hai taake 
              Pakistani students aur professionals bhi yeh knowledge haasil kar sakein.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
