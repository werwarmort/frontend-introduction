import Link from 'next/link';
import lectures from '@/widgets/LectureContent/config/lecturesConfig';
import labs from '@/widgets/LectureContent/config/labsConfig';
import styles from './mainPage.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.mainTitle}>
        Курс: Современные фронтенд-фреймворки, архитектура фронтенд-приложений
      </h1>
      <span className={styles.anotation}>
        Аннотация: Курс посвящён современным фронтенд-фреймворков и архитектурным подходам к
        построению клиентских веб-приложений. В ходе обучения будут рассмотрены сравнительный анализ
        React, Angular, Vue.js и Svelte а так же Next.js, принципы модульности, управления
        состоянием и маршрутизацией, а также методы обеспечения масштабируемости и поддерживаемости
        программных продуктов.
      </span>
      <ul>
        {lectures.map(({ id, title }) => (
          <li key={id} className={styles.lectureLi}>
            <span className={styles.index}>{id}</span>
            <Link className={styles.lectureLink} href={`/lectures/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <h1 className={styles.mainTitle}>Лабораторные работы</h1>
      <ul>
        {labs.map(({ id, title }) => (
          <li key={id} className={styles.lectureLi}>
            <span className={styles.index}>{id}</span>
            <Link className={styles.lectureLink} href={`/lab/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.finalBlock}>
        <a
          className={styles.link}
          href="https://distedu.vsau.ru/quest/preview/start/quest_id/28881/subject_id/9127/redirect_url/%252Fquest%252Fsubject%252Ftest%252Fsubject_id%252F9127"
        >
          ссылка на тест
        </a>
        <Link className={styles.questions} href="/questions">
          вопросы
        </Link>
      </div>
    </main>
  );
}
