import React, {useState} from 'react';
import styles from './styles.module.css';

interface FlashcardProps {
  question: string;
  answer: string;
}

export default function Flashcard({question, answer}: FlashcardProps): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      aria-label={isFlipped ? 'Answer shown. Click to see question.' : 'Question shown. Click to reveal answer.'}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardLabel}>Sawal</div>
          <div className={styles.cardContent}>{question}</div>
          <div className={styles.cardHint}>Click karo jawab dekhne ke liye</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardLabel}>Jawab</div>
          <div className={styles.cardContent}>{answer}</div>
          <div className={styles.cardHint}>Click karo sawal dekhne ke liye</div>
        </div>
      </div>
    </div>
  );
}
