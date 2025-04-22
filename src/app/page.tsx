import Link from 'next/link'
import lectures from "@/widgets/LectureContent/config/lecturesConfig";

export default function HomePage() {
  return (
    <main>
      <h1>Лекции</h1>
      <ul>
        {lectures.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/lectures/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
