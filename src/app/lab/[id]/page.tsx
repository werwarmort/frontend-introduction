'use client';

import { useRouter } from 'next/navigation';
import { labsHtml } from '@/shared/labs';
import parse from 'html-react-parser';
import styles from './LabPage.module.scss';
import { useEffect, useState } from 'react';

export default function LabPage({ params }: { params: { id: string } }) {
  const labContent = labsHtml[params.id];
  const router = useRouter();

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!labContent) {
    return <p>Лабораторная работа не найдена</p>;
  }

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(`/lectures/${params.id}`);
    }
  };

  return (
    <main className={styles.labWrapper}>
      <div>{parse(labContent)}</div>

      <button onClick={handleBackClick} className={styles.backButton}>
        ←
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`${styles.scrollTopButton} ${showScrollTopButton ? styles.show : ''}`}
      >
        ↑
      </button>
    </main>
  );
}
