export const lecture_3 = `
<h1>Vue.js: декларативный подход и реактивность</h1>

<p>Современные веб-приложения предъявляют высокие требования не только к внешнему виду, но и к интерактивности, отзывчивости и удобству поддержки. В условиях растущей сложности пользовательских интерфейсов разработчики стремятся использовать инструменты, которые обеспечивают высокую производительность, простоту сопровождения и логическую ясность архитектуры. Одним из таких инструментов является <strong>Vue.js</strong> — современный фронтенд-фреймворк, который сочетает в себе мощные возможности, простоту освоения и элегантность синтаксиса.</p>

<p>В этой лекции мы проанализируем ключевые концепции, лежащие в основе Vue.js: <strong>декларативный подход, реактивность, компонентную архитектуру</strong> и инструменты, способствующие удобству разработки. Особое внимание будет уделено сравнению императивного и декларативного стилей программирования, а также объяснению фундаментальных понятий, таких как "фреймворк", "computed-свойства" и "watch-наблюдатели", то есть то, что и отличает Vue от Rect-a</p>

<p>Для начала разберем понятие фреймворка, так как Vue, в отличие от React-а им и является</p>
<p><strong>Фреймворк</strong> (от англ. <em>framework</em>) — это структурный каркас для разработки программного обеспечения, предоставляющий набор готовых компонентов, инструментов и соглашений, позволяющих ускорить и упростить процесс создания приложения. В отличие от библиотек, фреймворки часто диктуют архитектурный стиль проекта и определяют поток управления. Это и является одним из ключевых отличий от React-а. Vue.js, как фронтенд-фреймворк, предоставляет полный набор решений для построения интерфейсов, включая рендеринг, маршрутизацию, управление состоянием и сборку проекта. В Recat-e же зачастую приходится устанавливать дополнительные библиотеки, для того чтобы, к примеру, более удобно работать с маршрутизацией</p>

<p>Далее перейдем к разбору понятия декларативности, так как во Vue.js это один из подходов работы с кодом</p>
<p>Во Vue.js реализуется декларативный стиль построения пользовательских интерфейсов. Это означает, что разработчик описывает, что должно отображаться в зависимости от состояния данных, а не то, как именно это должно быть реализовано в терминах манипуляций с DOM. Представьте себе термостат: вы не вручную открываете и закрываете каждый радиатор в комнате, а просто задаёте нужную температуру. Система сама рассчитывает, какие вентили и когда нужно открыть, чтобы поддерживать комфортный климат. Аналогично, во Vue вы говорите «покажи этот список, когда данные загружены», а фреймворк сам решает, какие элементы добавить или удалить в DOM, чтобы получить нужный результат.</p>

<p>Для контраста рассмотрим императивный подход, при котором программист вручную описывает все шаги: найти элемент в DOM, изменить его содержимое, прикрепить обработчики событий и следить за тем, чтобы всё работало. Во Vue.js же используется декларативная модель: вы просто обновляете данные, а фреймворк сам «реагирует» на эти изменения (реактивность) и автоматически вносит нужные правки в DOM. Это похоже на фотоаппарат: вместо того чтобы вручную подбирать каждый параметр съёмки, вы выбираете режим («портрет», «пейзаж»), а камера сама подбирает ISO, выдержку и диафрагму.</p>
<img src="https://otus.ru/journal/wp-content/uploads/2021/05/9e3fae39.png" alt="">
<h3>Срезюмируем преимущества декларативного подхода:</h3>
<ul>
  <li>Повышение читаемости и поддерживаемости кода.</li>
  <li>Снижение количества ошибок, связанных с ручным управлением DOM. (за счет того что разработчику не нужно держать в голове то, как и когда какой узел DOM-а надо обновить)</li>
  <li>Более быстрая и интуитивно понятная разработка.</li>
</ul>

<p>В Vue.js данный подход реализуется через шаблонный синтаксис, реактивные данные и автоматическое обновление интерфейса, что делает процесс разработки более эффективным, особенно для начинающих специалистов и при работе в командах.</p>

<h2>Реактивность во Vue.js</h2>
<p>Реактивность стала определённым стандартом для современных фреймворков и библиотек по типу реакта</p>
<p>Таким обрахом во Vue реализована такая же реактивная система, которая позволяет интерфейсу автоматически обновляться при изменении данных. Иными словами, данные становятся «живыми» — при любом изменении интерфейс перерисовывается без участия разработчика, собственно как это и происходит в том же самом реакте.</p>
<p>Механизм реактивности во Vue реализуется через наблюдение за изменениями значений переменных, использующихся в интерфейсе. Когда значение изменяется, Vue отслеживает это изменение и инициирует обновление только той части DOM, которая зависит от данных, подвергшихся модификации.</p>

<h3>Реализация реактивности:</h3>
<ul>
  <li>
    <strong>Options API</strong> (традиционный способ: все параметры компонента — данные, методы, вычисляемые свойства — задаются в едином объекте):
    <pre><code>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
    </code></pre>
  </li>
  <li>
    <strong>Composition API</strong> (новый способ: логика компонента разбивается на функции внутри <code>setup</code>, что упрощает повторное использование):
    <pre><code>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const state = reactive({ text: 'Привет' })

    function increment() {
      count.value++
    }

    return { count, state, increment }
  }
}
    </code></pre>
  </li>
  <li>
    Во Vue реализован также виртуальный DOM и алгоритм сравнения (<em>diffing</em>), чтобы минимизировать объём реальных изменений в DOM и повысить производительность интерфейса.
  </li>
</ul>

<p>После того как мы разобрали способы объявления реактивных данных и поняли, как Vue автоматически отслеживает их изменения, становится важно уметь эффективно вычислять производные значения без лишней нагрузки. Именно здесь на помощь приходят computed-свойства, которые позволяют «кешировать» (то есть запоминать в оперативной памяти) результат сложных вычислений и обновлять его только при необходимости (а не при каждой перерисовке интерфейса) — это повышает отзывчивость и снижает количество ненужных операций.</p>

<h3>Computed-свойства</h3>
<p><strong>Computed-свойства</strong> — это вычисляемые значения, зависящие от других реактивных данных. Их основное преимущество в том, что результат вычисляется только в том случае, если одна из зависимостей изменилась. Это позволяет сократить ненужные вычисления и повысить производительность.</p>

<p>Computed-свойства отлично подходят для получения производных значений без лишних вычислений, однако если нам нужно не просто вернуть значение, а выполнить какое-то действие при его изменении, то в таких ситуациях нам необходимы watch-наблюдатели, которые позволяют «следить» за реактивными данными и запускать код при их обновлении.</p>

<h3>Watch-наблюдатели</h3>
<p><strong>Watch-наблюдатели</strong> дают возможность реагировать на изменения реактивных переменных и выполнять любые побочные действия. В отличие от computed-свойств, которые всегда возвращают значение и «кешируются», watch запускается при каждом изменении и подходит для задач вроде валидации, синхронизации с сервером или логирования.</p>

<pre>
  <code>
    import { ref, watch } from 'vue'
 
    export default {
      setup() {
        const searchQuery = ref('')
    
        // как только searchQuery изменится, выполнится эта функция
        watch(searchQuery, (newVal, oldVal) => {
          console.log(\`Поиск изменился с "oldVal" на "newVal"\`)
          // тут можно, например, отправить запрос на сервер
          fetchResults(newVal)
        })
    
        return { searchQuery }
      }
    }
  </code>
</pre>


<p>Таким образом, <strong>watch</strong> используется там, где требуется отслеживать изменение состояния и выполнять дополнительную логику, не связанную напрямую с визуализацией.</p>

<h3>Срезюмируем ключевые преимущества реактивности Vue, которые улучшают и упрощают повседневную разработку:</h3>
<ul>
  <li>Автоматическое обновление интерфейса при изменении данных.</li>
  <li>Повышенная производительность за счёт частичного обновления DOM.</li>
  <li>Простота управления состоянием.</li>
  <li>Гибкость в работе как с локальным, так и с глобальным состоянием (через Vuex, Pinia или механизм provide/inject).</li>
  <li>Отложенные вычисления и контроль над побочными эффектами с помощью <code>computed</code> и <code>watch</code>.</li>
</ul>

<p>Все эти механизмы реактивности — от автоматического обновления интерфейса до отложенных вычислений и контроля побочных эффектов — позволяют создавать гибкие и отзывчивые приложения. Перейдём от внутренней работы реактивных данных к тому, как организовать структуру проекта и повторно использовать части интерфейса с помощью компонентного подхода во Vue.js.</p>

<h3>Компонентный подход во Vue.js</h3>

<p>Одним из главных достоинств Vue является его компонентная архитектура. Каждый компонент — это самостоятельный блок, который содержит шаблон разметки, логику и стили. Это похоже на набор строительных блоков LEGO: вы создаёте маленькие, переиспользуемые части и собираете из них сложную систему.</p>

<h3>Структура single-file компонента</h3>
<p>В файлах с расширением <code>.vue</code> компоненты обычно организованы так:</p>
<pre><code>&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;h2&gt;{{ title }}&lt;/h2&gt;
    &lt;slot&gt;— содержимое по умолчанию —&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Заголовок'
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
}
&lt;/style&gt;
</code></pre>

<p>Здесь:</p>
<ul>
  <li><code>&lt;template&gt;</code> — HTML-шаблон с реактивными выражениями <code>{{ }}</code> и <code>&lt;slot&gt;</code> для передачи вложенного контента.</li>
  <li><code>&lt;script&gt;</code> — экспорт объекта компонента: его имя, свойства (<code>props</code>), данные, методы и жизненные хуки.</li>
  <li><code>&lt;style scoped&gt;</code> — локальные стили, которые не “протекают” в другие компоненты.</li>
</ul>

<h3>Передача данных через props</h3>
<p>Props — это входные параметры компонента. Вы объявляете их в <code>props</code>, а при использовании передаёте как атрибуты:</p>
<pre><code>&lt;!-- в родителе: App.vue --&gt;
&lt;template&gt;
  &lt;Card title="Привет, Vue!"&gt;
    Здесь может быть любой HTML-контент.
  &lt;/Card&gt;
&lt;/template&gt;

&lt;script&gt;
import Card from './components/Card.vue'

export default {
  components: { Card }
}
&lt;/script&gt;
</code></pre>

<h3>Слоты для гибкого оформления</h3>
<p>С помощью <code>&lt;slot&gt;</code> компонент позволяет вставлять внутрь себя любой контент. Можно даже именовать слоты:</p>
<pre><code>&lt;template&gt;
  &lt;Modal&gt;
    &lt;template #header&gt;Важное сообщение&lt;/template&gt;
    &lt;p&gt;Тело модального окна.&lt;/p&gt;
    &lt;template #footer&gt;
      &lt;button @click="close"&gt;Закрыть&lt;/button&gt;
    &lt;/template&gt;
  &lt;/Modal&gt;
&lt;/template&gt;
</code></pre>

<h3>Преимущества компонентного подхода</h3>
<p>Компоненты делают код:</p>
<ul>
  <li><strong>Переиспользуемым</strong> — один и тот же блок можно вставить в разных местах без дублирования.</li>
  <li><strong>Локализованным</strong> — стили и логика компонента не влияют на остальной код.</li>
  <li><strong>Прозрачным</strong> — чёткая структура <code>template</code>–<code>script</code>–<code>style</code> облегчает чтение и поддержку.</li>
</ul>

<h2>Вопросы:</h2>
<ol>
  <li>Что такое фреймворк и как Vue.js реализует функции, характерные для фронтенд-фреймворка?</li>
  <li>Чем отличается декларативный подход от императивного, и почему Vue делает ставку на декларативность?</li>
  <li>Какие преимущества даёт использование декларативного синтаксиса при разработке пользовательских интерфейсов?</li>
  <li>Как работает реактивная система Vue.js и как она влияет на производительность интерфейса?</li>
  <li>В чём разница между computed-свойствами и обычными функциями или методами компонента?</li>
  <li>Какова роль watch-наблюдателей в архитектуре Vue и когда их следует использовать?</li>
  <li>Как Vue.js реализует компонентный подход, и какие преимущества он даёт при масштабировании приложений?</li>
  <li>Какие ключевые инструменты (Vue Router, Vuex/Pinia, Vue CLI/Vite, Devtools) входят в экосистему Vue.js и как они упрощают разработку?</li>
  <li>Каковы ключевые различия между реактивностью и архитектурными подходами Vue.js и React?</li>
  <li>Почему Vue.js считается компромиссом между простотой (Angular-style «всё включено») и мощностью (React-style гибкость), и чем он отличается от Angular?</li>
</ol>

`;
