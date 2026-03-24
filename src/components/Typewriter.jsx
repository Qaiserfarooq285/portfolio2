'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ texts, speed = 100, delayBetweenTexts = 2000 }) {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      }
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, delayBetweenTexts]);

  return (
    <span className="text-2xl md:text-3xl font-bold text-white">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
