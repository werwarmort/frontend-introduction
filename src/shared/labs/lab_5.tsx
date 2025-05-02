export const lab_5 = `
<h1>Лабораторная работа: Основы Svelte — реактивность, шаблоны и производительность</h1>

<p>Цель: Освоить базовые принципы фреймворка Svelte: реактивность, шаблонный синтаксис, реактивные выражения и особенности архитектуры без виртуального DOM. Работа выполняется в <a href='https://svelte.dev/repl'>Svelte REPL</a> или в <a href='https://codesandbox.io/'>CodeSandbox</a> (шаблон "Svelte").</p>

<p><strong>1)</strong> Откройте <a href='https://svelte.dev/repl'>Svelte REPL</a> и создайте новый проект. В нём откройте файл <code>App.svelte</code> — это главный компонент.</p>

<p><strong>2)</strong> В секции <code>&lt;script&gt;</code> создайте переменную <code>message</code> со значением <code>'Hello World!'</code>.</p>

<p><strong>3)</strong> Выведите переменную <code>message</code> в шаблоне с помощью интерполяции <code>{message}</code>.</p>

<p><strong>4)</strong> Добавьте <code>&lt;input bind:value={message} /&gt;</code> и ниже отобразите <code>{message}</code> — реализуется двусторонняя привязка.</p>

<p><strong>5)</strong> Создайте кнопку с <code>on:click</code>, которая сбрасывает <code>message</code> в исходное значение.</p>

<p><strong>6)</strong> Добавьте переменную <code>count</code> и кнопку <code>Увеличить</code>, которая увеличивает значение <code>count</code> на 1 при каждом клике.</p>

<p><strong>7)</strong> Создайте реактивное выражение <code>$: doubled = count * 2;</code> и выведите <code>{doubled}</code> в шаблоне.</p>

<p><strong>8)</strong> Добавьте условный вывод <code>&lt;p&gt;Счётчик больше 5&lt;/p&gt;</code>, отображаемый только если <code>count &gt; 5</code>.</p>

<p><strong>9)</strong> Создайте массив <code>items = ['яблоко', 'груша', 'слива']</code> и отобразите его с помощью <code>{#each items as item}</code>.</p>

<p><strong>10)</strong> Добавьте в форму поле для добавления нового элемента в список и кнопку <code>Добавить</code>.</p>

<p><strong>11)</strong> Создайте новый компонент <code>Greeting.svelte</code> и выведите там текст <code>Привет, компонент!</code>.</p>

<p><strong>12)</strong> Импортируйте <code>Greeting</code> в <code>App.svelte</code> и используйте его в шаблоне: <code>&lt;Greeting /&gt;</code>.</p>

<p><strong>13)</strong> Добавьте проп <code>name</code> в компонент <code>Greeting</code> и отобразите <code>Привет, {name}!</code>.</p>

<p><strong>14)</strong> Передайте проп <code>name="Алиса"</code> при использовании компонента.</p>

<p><strong>15)</strong> Добавьте <code>slot</code> в <code>Greeting.svelte</code> и передайте внутрь произвольный HTML-контент из <code>App.svelte</code>.</p>

<p><strong>16)</strong> Создайте компонент <code>Counter.svelte</code> с собственной переменной <code>count</code> и реактивным выражением <code>doubled</code>.</p>

<p><strong>17)</strong> Добавьте стили для <code>Counter</code> внутри <code>&lt;style&gt;</code> — стили изолированы от других компонентов.</p>

<p><strong>18)</strong> Добавьте анимацию <code>transition:fade</code> к элементу, который появляется при <code>show === true</code>.</p>

<p><strong>19)</strong> Подключите <code>onMount</code> из <code>svelte</code> и выведите в консоль <code>Компонент загружен</code>.</p>

<p><strong>20)</strong> Создайте компонент <code>Timer.svelte</code>, который увеличивает счётчик каждую секунду с помощью <code>setInterval</code>.</p>

<p><strong>21)</strong> Реализуйте удаление компонента <code>Timer</code> по кнопке. Обратите внимание, как Svelte корректно удаляет обработчики событий.</p>

<p><strong>22)</strong> Создайте реактивное выражение с зависимостью от нескольких переменных: <code>$: summary = count + items.length;</code> и выведите <code>{summary}</code>.</p>

<p><strong>23)</strong> Добавьте форму с отправкой и обработкой события <code>on:submit</code>.</p>

<p><strong>24)</strong> Добавьте <code>bind:this</code> к DOM-элементу и используйте ссылку на него для прямого доступа.</p>

<p><strong>25)</strong> Завершите работу: удалите лишний код, прокомментируйте компоненты и создайте финальный коммит или ссылку на Svelte REPL.</p>`;
