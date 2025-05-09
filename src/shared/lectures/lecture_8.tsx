export const lecture_8 = `<h1>Архитектура фронтенд-приложений: от компонентов к масштабируемым системам</h1>

<h2>Введение</h2>
<p>Разработка современных фронтенд-приложений давно вышла за пределы простой верстки и манипуляций с DOM. Сегодня фронтенд — это полноценная инженерная дисциплина, требующая глубокого понимания архитектуры, принципов проектирования и масштабирования. Когда проект растёт, увеличивается не только число компонентов и страниц, но и логическая сложность, объём данных, необходимость переиспользования кода, взаимодействие между модулями и требования к производительности.</p>
<p>Грамотная архитектура — это фундамент, который позволяет команде эффективно развивать продукт, адаптировать его под изменения и контролировать рост технического долга. Цель данной лекции — рассмотреть эволюцию архитектуры фронтенда, принципы проектирования масштабируемых систем, особенности современных архитектурных подходов и практические рекомендации по их применению.</p>

<h2>Этапы архитектурного роста: от компонента к системе</h2>

<h3>1. Компонентный подход</h3>
<p>Первоначальная организация фронтенд-кода, как правило, строится на основе компонентов. В рамках React, Vue или Svelte приложение начинается с набора изолированных визуальных элементов. Каждый компонент инкапсулирует логику, представление и, иногда, стили.</p>
<p>Компоненты удобны на старте, однако со временем возникают следующие проблемы:</p>
<ul>
  <li>Усложнение связей между компонентами</li>
  <li>Повторяющийся код и дублирование логики</li>
  <li>Сложность в навигации по проекту</li>
  <li>Отсутствие чёткой иерархии и слоёв</li>
</ul>

<h3>2. Переход к модульной структуре</h3>
<p>Чтобы справиться с усложнением, проект начинают делить на модули. Это могут быть доменные области (<code>auth</code>, <code>profile</code>, <code>dashboard</code>), слои (<code>ui</code>, <code>services</code>, <code>store</code>), или технические области (<code>components</code>, <code>utils</code>, <code>api</code>). Модульность повышает читаемость и позволяет работать над проектом параллельно.</p>
<p>Модули могут быть как физически разделены (по папкам и файлам), так и логически (соглашения, абстракции). На этом этапе появляются:</p>
<ul>
  <li>глобальные состояния (<strong>Redux</strong>, <strong>Vuex</strong>, <strong>Pinia</strong>);</li>
  <li>централизованные маршрутизаторы;</li>
  <li>интерфейсы для взаимодействия между слоями.</li>
</ul>

<h3>3. Архитектурные слои и разграничение ответственности</h3>
<p>Более зрелые проекты вводят архитектурные слои. Это позволяет изолировать ответственность и упростить тестирование. Стандартная структура включает:</p>
<ul>
  <li><strong>UI Layer</strong>: компоненты и стили</li>
  <li><strong>State Layer</strong>: хранилища и подписки</li>
  <li><strong>Domain Layer</strong>: бизнес-логика</li>
  <li><strong>Infrastructure Layer</strong>: работа с API, сторонними библиотеками, хранилищем</li>
</ul>
<p>Такой подход делает код более масштабируемым, модульным и предсказуемым.</p>

<h2>Feature-Sliced Design (FSD): современный архитектурный стандарт</h2>
<p>Одним из наиболее популярных и быстро развивающихся подходов является Feature-Sliced Design. Он ориентирован на создание масштабируемых приложений с независимыми функциональными модулями.</p>

<h3>Принципы FSD:</h3>
<ul>
  <li>Деление проекта на слои и фичи</li>
  <li>Строгие зависимости только "вниз по слоям"</li>
  <li>Выделение бизнес-сущностей отдельно от UI и логики</li>
</ul>

<h3>Слои в FSD:</h3>
<ul>
  <li><code>app/</code> — конфигурация, точки входа, провайдеры</li>
  <li><code>pages/</code> — композиция фич, привязка к маршрутам</li>
  <li><code>features/</code> — законченное прикладное поведение</li>
  <li><code>entities/</code> — бизнес-сущности, данные и модели</li>
  <li><code>shared/</code> — переиспользуемые компоненты и утилиты</li>
</ul>

<p>Этот подход подходит как для SPA, так и для крупных модульных систем. Он упрощает взаимодействие между командами и масштабирование без потери контроля над архитектурой.</p>

<h2>Domain-Driven Design (DDD) во фронтенде</h2>
<p>DDD пришёл из бэкенда, но может эффективно использоваться и во фронтенде, особенно в сложных бизнес-приложениях. Основной принцип — архитектура строится вокруг предметной области, а не UI.</p>
<p>Применение во фронтенде:</p>
<ul>
  <li>Выделение бизнес-сущностей (<strong>entities</strong>)</li>
  <li>Инкапсуляция бизнес-логики в сервисах</li>
  <li>Использование value objects и агрегатов</li>
  <li>Разделение доменной и инфраструктурной логики</li>
</ul>

<p>DDD делает код более выразительным, особенно при разработке сложных бизнес-процессов, например, в банковских, медицинских или корпоративных приложениях.</p>

<h2>Принципы качественной архитектуры</h2>
<p>При выборе архитектурного подхода важно опираться на универсальные принципы проектирования:</p>
<ul>
  <li><strong>SRP</strong> (Принцип единственной ответственности): каждый модуль выполняет одну задачу</li>
  <li><strong>SoC</strong> (Разделение ответственностей): UI, логика и данные разделены</li>
  <li>Инверсия зависимостей: использование абстракций вместо прямых связей</li>
  <li>Явность и читаемость: код должен быть понятен не только автору</li>
  <li>Минимальные зависимости: слабая связанность между модулями</li>
  <li>Предсказуемость и воспроизводимость: одинаковые паттерны повсюду</li>
</ul>

<h2>Инструменты и практики архитектурного контроля</h2>
<p>Современные инструменты помогают внедрять архитектурные принципы в кодовую базу:</p>
<ul>
  <li>ESLint + архитектурные плагины (например, <strong>eslint-plugin-boundaries</strong>, <strong>eslint-plugin-fsd</strong>)</li>
  <li>Codegen (<strong>Plop</strong>, <strong>Hygen</strong>) для генерации шаблонов</li>
  <li>Storybook — визуальное тестирование компонентов</li>
  <li>Vitest / Jest / Testing Library — модульное и интеграционное тестирование</li>
  <li>Документация архитектуры — <code>ARCHITECTURE.md</code>, схемы, схемы зависимостей</li>
</ul>

<p>Применение этих инструментов стандартизирует работу и снижает вероятность архитектурных нарушений.</p>

<h2>Практические советы при внедрении архитектуры</h2>
<ul>
  <li>Начинайте с базовой структуры, но с возможностью роста</li>
  <li>Не бойтесь рефакторинга при изменении требований</li>
  <li>Внедряйте слои постепенно: UI → Store → Logic → Domain</li>
  <li>Документируйте принятые решения и ограничения</li>
  <li>Проводите архитектурные ревью при масштабных изменениях</li>
</ul>

<h2>Заключение</h2>
<p>Архитектура фронтенд-приложений — это не абстрактное понятие, а практический инструмент для создания устойчивых, масштабируемых и понятных систем. От простого компонента до полной фичи, от бизнес-логики до UI — всё должно быть выстроено по принципам, позволяющим эффективно управлять изменениями и ростом кода.</p>
<p>Использование подходов вроде Feature-Sliced Design или Domain-Driven Design позволяет адаптировать архитектуру под реальную бизнес-логику и нагрузку. Главное — стремиться к разделению ответственности, снижению связанности и предсказуемости кода.</p>
<p>В эпоху микрофронтендов, быстрой доставки и DevOps-культуры грамотная архитектура становится конкурентным преимуществом команды. Внедряя архитектурные принципы на всех уровнях, мы создаём не просто интерфейсы — мы строим инженерные системы.</p>

<h2>Вопросы для самопроверки и обсуждения</h2>
<ul>
  <li>Каковы основные этапы эволюции архитектуры фронтенда от компонентного подхода к многослойной системе?</li>
  <li>Какие архитектурные проблемы возникают при масштабировании простого компонентного приложения?</li>
  <li>В чём суть архитектурного подхода Feature-Sliced Design и какие уровни он выделяет?</li>
  <li>Как обеспечивается слабая связанность между слоями в FSD и зачем это важно?</li>
  <li>Какие преимущества даёт применение принципов Domain-Driven Design во фронтенде?</li>
  <li>Что такое архитектурные слои и какую роль они играют в проектировании масштабируемого приложения?</li>
  <li>Как принципы SRP и SoC способствуют улучшению читаемости и сопровождаемости кода?</li>
  <li>Какие инструменты можно использовать для архитектурного контроля и валидации структуры проекта?</li>
  <li>В каких случаях стоит использовать DDD, а в каких FSD — и могут ли они сочетаться?</li>
  <li>Какие практические шаги можно предпринять для внедрения архитектуры в существующий проект без полного рефакторинга?</li>
</ul>
`