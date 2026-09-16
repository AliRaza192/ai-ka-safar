import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './whats-new.module.css';

const updates = [
  {
    date: '15 September 2026',
    title: 'Phase 0-2 Complete',
    description: 'MDX fixes, frontmatter, SEO, search, reading progress bar — sab set hai.',
    type: 'major',
  },
  {
    date: '15 September 2026',
    title: 'Homepage Enhanced',
    description: '4 naye sections: Our Mission, AI Maturity Levels, Traditional vs AI-Native, Monetize Expertise.',
    type: 'feature',
  },
  {
    date: '15 September 2026',
    title: 'Authors Page',
    description: 'Musannifeen (authors) ka page add kiya — Zia Khan, Wania Kazmi, Muhammad Junaid, M Rehan ul Haq.',
    type: 'feature',
  },
  {
    date: '15 September 2026',
    title: 'SEO & Performance',
    description: 'JSON-LD structured data, OG tags, robots.txt, sitemap — search engines ke liye optimize.',
    type: 'improvement',
  },
  {
    date: '15 September 2026',
    title: 'Content Complete',
    description: '25 docs translated — 24,000+ lines, 176 code blocks, 83 admonitions, 145 images.',
    type: 'major',
  },
];

export default function WhatsNew(): ReactNode {
  return (
    <Layout title="Naya Kya Hai?" description="AI ka Safar — latest updates aur changes">
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>CHANGELOG</p>
          <h1 className={styles.title}>Naya Kya Hai?</h1>
          <p className={styles.subtitle}>
            Har bada update yahan milta hai. Kya naya add hua, kya fix hua, kya change hua.
          </p>

          <div className={styles.timeline}>
            {updates.map((u, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.dot} data-type={u.type} />
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{u.date}</span>
                    <span className={styles.badge} data-type={u.type}>{u.type}</span>
                  </div>
                  <h3>{u.title}</h3>
                  <p>{u.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
