export const lab_2 = `
<h1>Лабораторная работа: React — виртуальный DOM, хуки и компонентный подход</h1>

<p>Цель этой лабораторной работы — пошагово освоить работу с основами React: виртуальным DOM, хуками <code>useState</code>, <code>useEffect</code>, <code>useContext</code> и современными подходами к построению компонентов.</p>

<p><strong>Где выполнять:</strong> откройте <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a> и создайте новый проект на базе шаблона <strong>React</strong>. Все шаги лабораторной работы нужно выполнять в этом проекте. CodeSandbox автоматически создаёт необходимые файлы и предоставляет рабочее окружение для React.</p>

<h2>1: Создание базового приложения</h2>
<p>Создайте файл <code>index.jsx</code> и подключите React и ReactDOM.</p>
<pre><code>import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);</code></pre>

<h2>2: Создание главного компонента</h2>
<p>Создайте компонент <code>App</code> в файле <code>App.jsx</code>. Возвращайте корневой тег <code>&lt;div&gt;</code>.</p>
<pre><code>export default function App() {
  return <div>Привет, React!</div>;
}</code></pre>

<h2>3: Добавление заголовка</h2>
<p>Внутри компонента <code>App</code> добавьте тег <code>&lt;h1&gt;</code> с текстом "React — современный подход".</p>
<pre><code>&lt;h1&gt;React — современный подход&lt;/h1&gt;</code></pre>

<h2>4: Создание компонента Header</h2>
<p>Создайте компонент <code>Header</code>, возвращающий <code>&lt;h2&gt;Виртуальный DOM&lt;/h2&gt;</code>.</p>

<h2>5: Вставка компонента Header в App</h2>
<p>Импортируйте и используйте компонент <code>&lt;Header /&gt;</code> внутри <code>App</code>.</p>

<h2>6: Добавление кнопки</h2>
<p>Добавьте кнопку с текстом "Кликни меня" и привяжите к ней обработчик нажатия.</p>

<h2>7: Использование useState</h2>
<p>Импортируйте и используйте хук <code>useState</code> для отслеживания количества кликов.</p>
<pre><code>const [count, setCount] = useState(0);</code></pre>

<h2>8: Отображение счётчика</h2>
<p>Добавьте <code>&lt;p&gt;</code> с текстом "Вы кликнули {count} раз".</p>

<h2>9: Реализация сброса счётчика</h2>
<p>Добавьте кнопку "Сброс" и обработчик <code>setCount(0)</code>.</p>

<h2>10: Использование useEffect</h2>
<p>Импортируйте <code>useEffect</code> и выведите сообщение в консоль при первом рендере.</p>
<pre><code>useEffect(() => {
  console.log('Компонент отрендерился');
}, []);</code></pre>

<h2>11: Отслеживание изменения счётчика</h2>
<p>Добавьте зависимость <code>[count]</code> и обновляйте <code>document.title</code>.</p>

<h2>12: Создание контекста</h2>
<p>Создайте <code>ThemeContext</code> с помощью <code>React.createContext</code>.</p>

<h2>13: Провайдер темы</h2>
<p>Оборачивайте <code>App</code> в <code>&lt;ThemeContext.Provider value="light"&gt;</code>.</p>

<h2>14: Использование useContext</h2>
<p>Создайте компонент <code>ThemeLabel</code> и получайте тему через <code>useContext</code>.</p>

<h2>15: Переключение темы</h2>
<p>Добавьте <code>useState</code> для переключения между <code>light</code> и <code>dark</code>.</p>

<h2>16: Компонент Card</h2>
<p>Создайте переиспользуемый компонент <code>Card</code> с пропсами <code>title</code> и <code>children</code>.</p>

<h2>17: Использование нескольких Card</h2>
<p>Создайте 3 карточки с разными данными внутри <code>App</code>.</p>

<h2>18: Форма с input</h2>
<p>Создайте <code>&lt;input&gt;</code> и привяжите к нему <code>useState</code>.</p>

<h2>19: Отображение введённого значения</h2>
<p>Выводите введённый текст в <code>&lt;p&gt;</code> ниже input.</p>

<h2>20: useEffect при вводе</h2>
<p>Добавьте <code>useEffect</code>, логирующий ввод.</p>

<h2>21: Имитируем useOptimistic</h2>
<p>Добавьте "мгновенное" отображение отправленного значения с задержкой через <code>setTimeout</code>.</p>

<h2>22: Стилизация</h2>
<p>Примените базовые стили для темы с помощью <code>className</code>.</p>

<h2>23: Мета-теги</h2>
<p>Добавьте <code>&lt;title&gt;</code> и <code>&lt;meta&gt;</code> через <code>react-helmet</code> или встроенный механизм Next.js.</p>

<h2>24: Компонентная декомпозиция</h2>
<p>Вынесите форму и счётчик в отдельные компоненты.</p>

<h2>25: Итоги</h2>
<p>Проверьте все компоненты, удалите лишние console.log и оформите итоговую структуру.</p>
`;
