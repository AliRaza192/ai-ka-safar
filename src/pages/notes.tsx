import {useCallback, useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './notes.module.css';

type Note = {
  id: string;
  text: string;
  source: string;
  tag: string;
  createdAt: string;
};

const defaultNotes: Note[] = [];

export default function Notes(): ReactNode {
  const [notes, setNotes] = useState<Note[]>(defaultNotes);
  const [newNote, setNewNote] = useState('');
  const [newSource, setNewSource] = useState('');
  const [newTag, setNewTag] = useState('question');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai-ka-safar-notes');
      if (saved) setNotes(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const saveNotes = useCallback((updated: Note[]) => {
    setNotes(updated);
    localStorage.setItem('ai-ka-safar-notes', JSON.stringify(updated));
  }, []);

  const addNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: Date.now().toString(),
      text: newNote.trim(),
      source: newSource.trim() || 'Unknown',
      tag: newTag,
      createdAt: new Date().toLocaleDateString('en-PK'),
    };
    saveNotes([note, ...notes]);
    setNewNote('');
    setNewSource('');
  };

  const deleteNote = (id: string) => {
    saveNotes(notes.filter((n) => n.id !== id));
  };

  const exportNotes = () => {
    const data = JSON.stringify(notes, null, 2);
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-ka-safar-notes.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const tagColors: Record<string, string> = {
    question: '#6366f1',
    correction: '#ef4444',
    example: '#22c55e',
    bridge: '#f59e0b',
    idea: '#8b5cf6',
  };

  return (
    <Layout title="Notes & Highlights" description="Apne notes aur highlights manage karo">
      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.label}>MY NOTES</p>
          <h1 className={styles.title}>Notes & Highlights</h1>

          <div className={styles.addSection}>
            <textarea
              className={styles.textarea}
              placeholder="Apna note yahan likhein..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={3}
            />
            <div className={styles.addRow}>
              <input
                className={styles.input}
                placeholder="Source (e.g. build-agents Ch 3)"
                value={newSource}
                onChange={(e) => setNewSource(e.target.value)}
              />
              <select
                className={styles.select}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              >
                <option value="question">❓ Question</option>
                <option value="correction">✏️ Correction</option>
                <option value="example">💡 Example</option>
                <option value="bridge">🌉 Bridge</option>
                <option value="idea">🚀 Idea</option>
              </select>
              <button className={styles.addBtn} onClick={addNote}>Add Note</button>
            </div>
          </div>

          <div className={styles.actions}>
            <span className={styles.count}>{notes.length} notes</span>
            <button className={styles.exportBtn} onClick={exportNotes} disabled={notes.length === 0}>
              Export JSON
            </button>
          </div>

          {!loaded ? (
            <p className={styles.loading}>Loading...</p>
          ) : notes.length === 0 ? (
            <div className={styles.empty}>
              <p>Abhi koi note nahi hai.</p>
              <p>Upar note likho aur add karo!</p>
            </div>
          ) : (
            <div className={styles.notesList}>
              {notes.map((note) => (
                <div key={note.id} className={styles.noteCard}>
                  <div className={styles.noteHeader}>
                    <span
                      className={styles.tag}
                      style={{background: tagColors[note.tag] || '#94a3b8'}}
                    >
                      {note.tag}
                    </span>
                    <span className={styles.source}>{note.source}</span>
                    <span className={styles.date}>{note.createdAt}</span>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteNote(note.id)}
                    >
                      ✕
                    </button>
                  </div>
                  <p className={styles.noteText}>{note.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
