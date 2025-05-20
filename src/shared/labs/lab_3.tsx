export const lab_3 = `
<h1>Лабораторная работа: Основы Vue.js — реактивность, шаблоны и компонентный подход</h1>

<p>Цель: На практике освоить основные концепции Vue.js: декларативную разметку, реактивные данные, computed-свойства, наблюдатели (watch), компонентную архитектуру. Работа выполняется поэтапно в <a href='https://codesandbox.io/'>CodeSandbox</a> на шаблоне "Vue 3".</p>

<h2>1: Создание проекта</h2>
<p>Откройте <a href='https://codesandbox.io/'>CodeSandbox</a> → выберите шаблон <strong>Vue 3</strong>. Все дальнейшие шаги выполняются в <code>App.vue</code> и создаваемых компонентах.</p>

<h2>2: Добавление заголовка</h2>
<p>Внутри тега <code>&lt;template&gt;</code> создайте заголовок страницы:</p>
<pre>
&lt;h1&gt;Привет, Vue!&lt;/h1&gt;
</pre>

<h2>3: Реактивные данные с Options API</h2>
<p>В блоке <code>&lt;script&gt;</code> определите объект <code>data()</code> и добавьте переменную <code>message</code>:</p>
<pre>
data() {
  return {
    message: 'Добро пожаловать в мир Vue!'
  };
}
</pre>
<p>Выведите значение <code>message</code> в шаблоне с помощью интерполяции <code>{{ message }}</code>.</p>

<h2>4: Двусторонняя привязка с v-model</h2>
<p>Добавьте input и свяжите его с <code>message</code> с помощью <code>v-model</code>:</p>
<pre>
&lt;input v-model="message" /&gt;
&lt;p&gt;Вы ввели: {{ message }}&lt;/p&gt;
</pre>

<h2>5: Добавление кнопки и обработчика событий</h2>
<p>Добавьте кнопку с обработчиком <code>@click</code>, который изменяет <code>message</code>:</p>
<pre>
&lt;button @click="message = 'Сообщение изменено!'"&gt;Изменить&lt;/button&gt;
</pre>

<h2>6: Использование методов</h2>
<p>В блоке <code>methods</code> определите функцию <code>resetMessage()</code>:</p>
<pre>
methods: {
  resetMessage() {
    this.message = 'Добро пожаловать в мир Vue!';
  }
}
</pre>
<p>Свяжите её с кнопкой:</p>
<pre>
&lt;button @click="resetMessage"&gt;Сбросить&lt;/button&gt;
</pre>

<h2>7: Computed-свойство</h2>
<p>Создайте свойство <code>reversedMessage</code> в <code>computed</code>:</p>
<pre>
computed: {
  reversedMessage() {
    return this.message.split('').reverse().join('');
  }
}
</pre>
<p>Отобразите его в шаблоне:</p>
<pre>
&lt;p&gt;Обратный текст: {{ reversedMessage }}&lt;/p&gt;
</pre>

<h2>8: Watch-наблюдатель</h2>
<p>Добавьте <code>watch</code> для <code>message</code>, который выводит в консоль каждое изменение:</p>
<pre>
watch: {
  message(newVal) {
    console.log('Новое сообщение:', newVal);
  }
}
</pre>

<h2>9: Условный рендеринг с v-if</h2>
<p>Добавьте условный вывод элемента:</p>
<pre>
&lt;p v-if="message.length &gt; 10"&gt;Сообщение длинное&lt;/p&gt;
</pre>

<h2>10: Списки и v-for</h2>
<p>Добавьте массив <code>items</code> и отрисуйте список:</p>
<pre>
data() {
  return {
    items: ['яблоко', 'банан', 'апельсин']
  };
}
...
&lt;ul&gt;
  &lt;li v-for="(item, index) in items" :key="index"&gt;{{ item }}&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h2>11: Создание компонента HelloWorld</h2>
<p>Создайте <code>HelloWorld.vue</code> и добавьте шаблон с <code>&lt;p&gt;Привет, компонент!&lt;/p&gt;</code>.</p>

<h2>12: Использование компонента</h2>
<p>Импортируйте и зарегистрируйте <code>HelloWorld</code> в <code>App.vue</code>, затем используйте тег <code>&lt;HelloWorld /&gt;</code>.</p>

<h2>13: Props</h2>
<p>Добавьте в <code>HelloWorld.vue</code> проп <code>name</code> и отобразите:</p>
<pre>
props: ['name']
...
&lt;p&gt;Привет, {{ name }}!&lt;/p&gt;
</pre>

<h2>14: Передача пропса из App</h2>
<pre>
&lt;HelloWorld name="Алиса" /&gt;
</pre>

<h2>15: Эмиссия событий</h2>
<p>Добавьте кнопку в <code>HelloWorld.vue</code> с <code>@click="$emit('hello')"</code>. В <code>App.vue</code> обработайте это событие: <code>&lt;HelloWorld @hello="handleHello" /&gt;</code></p>

<h2>16: Работа с CSS</h2>
<p>В <code>&lt;style scoped&gt;</code> стилизуйте заголовок и список.</p>

<h2>17: Создание реактивной переменной с Composition API</h2>
<p>Создайте переменную <code>count</code> с <code>ref(0)</code> и увеличивайте по клику.</p>

<h2>18: Использование computed() в Composition API</h2>
<p>Создайте <code>doubleCount</code> — значение, равное <code>count * 2</code>.</p>

<h2>19: Наблюдение с watch()</h2>
<p>Отслеживайте <code>count</code> и выводите в консоль при изменении.</p>

<h2>20: Слот в компоненте</h2>
<p>Добавьте <code>&lt;slot /&gt;</code> в компонент и передайте контент из App.</p>

<h2>21: Provide / Inject</h2>
<p>В родителе: <code>provide('theme', 'dark')</code>. В дочернем: <code>inject('theme')</code>.</p>
<p><strong>Пояснение:</strong> Механизм <em>Dependency Injection</em> (внедрение зависимостей) — это архитектурный шаблон, при котором компоненты получают доступ к внешним данным или функциям не напрямую, а через механизм предоставления. В Vue 3 это реализовано через <code>provide</code> и <code>inject</code>: родительский компонент "предоставляет" значение, а дочерний — его "внедряет".</p>
<p>Это позволяет избежать передачи данных через цепочку вложенных пропсов и улучшает масштабируемость архитектуры. Особенно полезно, когда одни и те же данные (например, тема оформления или настройки пользователя) нужны во многих компонентах, расположенных на разных уровнях вложенности.</p>

<h2>22: Создание маршрутов</h2>
<p>Добавьте <code>vue-router</code>, настройте два маршрута и переключение между ними.</p>

<h2>23: Создание стор с Pinia</h2>
<p>Установите <code>pinia</code>, создайте хранилище и выведите глобальное состояние в шаблоне.</p>

<h2>24: Работа с DevTools</h2>
<p>Установите <strong>Vue DevTools</strong> и изучите реактивные зависимости и события.</p>

<h2>25: Итоги</h2>
<p>Подведите итоги, удалите ненужный код, задокументируйте компоненты и сохраните sandbox-ссылку.</p>`;
