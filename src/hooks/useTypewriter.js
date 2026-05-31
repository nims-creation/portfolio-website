import { useState, useEffect } from 'react';

export function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [phase, setPhase]         = useState('typing');

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), deletingSpeed);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}
