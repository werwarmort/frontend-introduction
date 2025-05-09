'use client';

import { useRouter, useParams } from 'next/navigation';
import { labsHtml } from '@/shared/labs';
import parse from 'html-react-parser';
import styles from './LabPage.module.scss';
import { useEffect, useState } from 'react';
export default function LabPage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const labContent = id && id in labsHtml ? labsHtml[id as keyof typeof labsHtml] : null;

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!labContent) {
    return <p>Лабораторная работа не найдена</p>;
  }

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else if (id) {
      router.push(`/lectures/${id}`);
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
