'use client';

import React from 'react';
import questionsConfig from '@/shared/questions/questionsConfig';
import parse from 'html-react-parser';
import styles from './questonPage.module.scss';
import { useRouter } from 'next/navigation';

const QuestionsPage = () => {
  const router = useRouter();

  return (
    <div className={styles.questonPage}>
      <button onClick={() => router.back()} className={styles.backButton}>
        ←
      </button>
      {parse(questionsConfig)}
    </div>
  );
};

export default QuestionsPage;
