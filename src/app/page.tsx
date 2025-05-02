import Link from 'next/link'
import lectures from "@/widgets/LectureContent/config/lecturesConfig";
import styles from './mainPage.module.scss'

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.mainTitle}>Лекции</h1>
      <ul>
        {lectures.map(({ id, title }) => (
          <li key={id} className={styles.lectureLi}>
            <span className={styles.index}>{id}</span><Link className={styles.lectureLink} href={`/lectures/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
