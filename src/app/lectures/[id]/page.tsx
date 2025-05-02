'use client'

import { useState, useEffect } from 'react'
import { lecturesHtml } from '@/shared/lectures'
import styles from './LecturePage.module.scss'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'

export default function LecturePage({ params }: { params: { id: string } }) {
  const html = lecturesHtml[params.id]
  const router = useRouter()

  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTopButton(true)
    } else {
      setShowScrollTopButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!html) return <p>Лекция не найдена</p>

  return (
    <main className={styles.LecturePageWrapper}>
      <button onClick={() => router.back()} className={styles.backButton}>←</button>
      <div className={styles.lessonWrapper}>{parse(html)}</div>

      <button
        onClick={() => router.push(`/lab/${params.id}`)}
        className={styles.labButton}
      >
        Перейти к лабораторной работе
      </button>

      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className={`${styles.scrollTopButton} ${showScrollTopButton ? styles.show : ''}`}
      >
        ↑
      </button>
    </main>
  )
}
