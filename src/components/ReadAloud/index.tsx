import {useCallback, useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function ReadAloud(): JSX.Element {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported('speechSynthesis' in window);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(() => {
    const article = document.querySelector('.markdown');
    if (!article) return;

    const text = article.textContent || '';
    if (!text) return;

    stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }, [stop]);

  if (!supported) return <></>;

  return (
    <button
      className={`${styles.readBtn} ${speaking ? styles.speaking : ''}`}
      onClick={speaking ? stop : speak}
      title={speaking ? 'Padhna band karo' : 'Page parho (Text-to-Speech)'}
      aria-label="Read aloud"
    >
      {speaking ? '■' : '▶'}
    </button>
  );
}
