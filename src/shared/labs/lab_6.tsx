export const lab_6 = `
<h1>Лабораторная работа: Серверный рендеринг и гибридные приложения в Next.js и Nuxt.js</h1>

<p>Цель: На практике освоить принципы серверного рендеринга, статической генерации и гибридного подхода к созданию производительных и SEO-дружественных приложений с помощью Next.js и Nuxt.js.</p>

<p><strong>1)</strong> Создайте новый проект на <a href="https://stackblitz.com/fork/nextjs">Next.js</a> или <a href="https://stackblitz.com/fork/nuxt">Nuxt.js</a> в StackBlitz. Убедитесь, что проект запускается и отображается стартовая страница.</p>

<p><strong>2)</strong> В Next.js: создайте страницу <code>pages/about.js</code> и добавьте простой компонент с текстом. В Nuxt.js: добавьте файл <code>pages/about.vue</code>. Это демонстрирует базовый CSR.</p>

<p><strong>3)</strong> Добавьте навигацию между страницами с помощью <code>Link</code> (Next.js) или <code>&lt;NuxtLink&gt;</code> (Nuxt.js).</p>

<p><strong>4)</strong> В Next.js создайте страницу <code>pages/ssr.js</code> с функцией <code>getServerSideProps</code>, возвращающей текущее время. Отобразите его в компоненте. Это демонстрация SSR.</p>

<p><strong>5)</strong> В Nuxt.js создайте страницу <code>pages/ssr.vue</code>, используйте <code>asyncData</code> для получения текущего времени.</p>

<p><strong>6)</strong> Создайте страницу, использующую статическую генерацию. В Next.js — с помощью <code>getStaticProps</code>. В Nuxt.js — просто <code>pages/static.vue</code> без <code>asyncData</code>.</p>

<p><strong>7)</strong> Добавьте вывод времени генерации страницы. Пересоберите проект и убедитесь, что страница не обновляется при переходах (SSG).</p>

<p><strong>8)</strong> Добавьте метатеги <code>&lt;title&gt;</code> и <code>meta description</code> на каждую страницу. В Next.js — через <code>Head</code>, в Nuxt.js — через <code>head()</code>.</p>

<p><strong>9)</strong> В Next.js реализуйте ISR с помощью <code>revalidate</code> в <code>getStaticProps</code>. Убедитесь, что страница пересоздаётся по таймеру.</p>

<p><strong>10)</strong> Создайте глобальный макет (layout) для приложения. В Nuxt.js — файл <code>layouts/default.vue</code>. В Next.js — создайте компонент-обёртку <code>Layout.js</code>.</p>

<p><strong>11)</strong> Добавьте общую шапку и футер в макет.</p>

<p><strong>12)</strong> Вставьте компонент, который показывает дату и время с сервера на момент рендера (через SSR).</p>

<p><strong>13)</strong> Добавьте страницу с формой, отправляющей данные на сервер. Используйте <code>API Routes</code> в Next.js или серверную функцию <code>server/api/</code> в Nuxt 3.</p>

<p><strong>14)</strong> Отобразите результат обработки формы на странице. Проверьте поведение как при CSR, так и при SSR.</p>

<p><strong>15)</strong> Настройте маршруты с параметрами. Пример: <code>/blog/[slug].js</code> (Next.js), <code>/blog/_slug.vue</code> (Nuxt.js).</p>

<p><strong>16)</strong> Используйте <code>getStaticPaths</code> (Next.js) или <code>generate.routes</code> (Nuxt) для генерации списка статических страниц.</p>

<p><strong>17)</strong> Добавьте 404-страницу: <code>pages/404.js</code> (Next.js), <code>layouts/error.vue</code> (Nuxt.js).</p>

<p><strong>18)</strong> Проанализируйте поведение краулеров: откройте DevTools → Network, посмотрите ответ страницы до загрузки JS. Убедитесь, что контент виден.</p>

<p><strong>19)</strong> Установите Lighthouse (в Chrome DevTools), проанализируйте FCP, SEO и TTI.</p>

<p><strong>20)</strong> Добавьте страницу <code>about</code> с длинным текстом и убедитесь, что он полностью отображается в исходном HTML.</p>

<p><strong>21)</strong> Добавьте sitemap с помощью модуля <code>next-sitemap</code> или <code>@nuxtjs/sitemap</code>. Убедитесь, что роуты попали в карту сайта.</p>

<p><strong>22)</strong> Добавьте страницу <code>blog</code> и выведите список постов с API (например, <code>jsonplaceholder.typicode.com/posts</code>) через SSR.</p>

<p><strong>23)</strong> Реализуйте клиентскую пагинацию и сравните поведение с SSR/SSG-страницами.</p>

<p><strong>24)</strong> Протестируйте сборку: <code>next build</code>/<code>nuxt build</code>. Проанализируйте размер бандла и логи.</p>

<p><strong>25)</strong> Итог: оформите README с описанием рендеринга на каждой странице, результатами Lighthouse и ссылкой на развёрнутое приложение (Vercel или Netlify).</p>`;
