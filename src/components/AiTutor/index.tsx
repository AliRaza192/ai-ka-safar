import {useState} from 'react';
import styles from './styles.module.css';

export default function AiTutor(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <button
        className={`${styles.tutorBtn} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
        title="Zia Tutor AI — Sawaal poochein"
        aria-label="AI Tutor"
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span className={styles.headerTitle}>Zia Tutor AI</span>
            <span className={styles.headerBadge}>AI Assistant</span>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.welcomeMsg}>
              <p><strong>Salam!</strong></p>
              <p>Mein Zia Tutor AI hoon. AI ka Safar kitab ke baare mein koi bhi sawal poochein.</p>
              <p className={styles.hint}>Examples:</p>
              <ul>
                <li>"Agent kya hai?"</li>
                <li>"Digital FTE kaise banayein?"</li>
                <li>"Claude Code kya karta hai?"</li>
              </ul>
            </div>
          </div>
          <div className={styles.chatFooter}>
            <input
              className={styles.chatInput}
              placeholder="Apna sawal likhein..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && message.trim()) {
                  setMessage('');
                }
              }}
            />
            <button
              className={styles.sendBtn}
              disabled={!message.trim()}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
