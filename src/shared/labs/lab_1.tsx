export const lab_1 = `
<h1>Лабораторная работа: Создание приложения на HTML + JS</h1>

<p>Цель этой лабораторной работы — за шагом создать простое веб-приложение, освоив основные теги HTML, стили CSS и базовый JavaScript. Каждый подробно объясняет, какой тег вставлять, для чего он нужен и почему мы используем именно его.</p>

<h2>1: Структура HTML</h2>
<p>Для начала создадим основной каркас нашего веб-приложения. Это будет основной документ HTML с тегами <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>.</p>
<pre>
&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2>2: Вставляем заголовок страницы</h2>
<p>Добавим заголовок нашей страницы с помощью тега <code>&lt;title&gt;</code>. Этот текст будет отображаться на вкладке браузера.</p>
<pre>
&lt;head&gt;
  &lt;title&gt;Простое приложение для чайников&lt;/title&gt;
&lt;/head&gt;
</pre>

<h2>3: Добавление заголовка на страницу</h2>
<p>Для добавления основного заголовка на страницу используем тег <code>&lt;h1&gt;</code>. Это заголовок первого уровня.</p>
<pre>
&lt;body&gt;
  &lt;h1&gt;Простое приложение&lt;/h1&gt;
&lt;/body&gt;
</pre>

<h2>4: Добавление текста</h2>
<p>Для отображения обычного текста используем тег <code>&lt;p&gt;</code>, который обозначает абзац.</p>
<pre>
&lt;body&gt;
  &lt;p&gt;Это простое приложение для чайников.&lt;/p&gt;
&lt;/body&gt;
</pre>

<h2>5: Стилизация текста</h2>
<p>Добавим стили, чтобы текст выглядел красивее. Для этого используем тег <code>&lt;style&gt;</code> в секции <code>&lt;head&gt;</code> для добавления CSS стилей.</p>
<pre>
&lt;head&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
    h1 {
      color: #4CAF50;
    }
  &lt;/style&gt;
&lt;/head&gt;
</pre>

<h2>6: Добавление кнопки</h2>
<p>Чтобы сделать приложение интерактивным, добавим кнопку с помощью тега <code>&lt;button&gt;</code>.</p>
<pre>
&lt;body&gt;
  &lt;button&gt;Нажми меня&lt;/button&gt;
&lt;/body&gt;
</pre>

<h2>7: Обработчик нажатия на кнопку</h2>
<p>Чтобы добавить действия при нажатии на кнопку, нужно использовать JavaScript. Включим его в наш код через тег <code>&lt;script&gt;</code>.</p>
<pre>
&lt;script&gt;
  function showAlert() {
    alert("Привет, мир!");
  }
&lt;/script&gt;
</pre>

<h2>8: Привязка действия к кнопке</h2>
<p>Теперь привяжем нашу функцию к кнопке с помощью атрибута <code>onclick</code>.</p>
<pre>
&lt;button onclick="showAlert()"&gt;Нажми меня&lt;/button&gt;
</pre>

<h2>9: Изменение текста на странице через JavaScript</h2>
<p>Добавим возможность менять текст на странице после нажатия кнопки.</p>
<pre>
&lt;script&gt;
  function changeText() {
    document.getElementById("message").innerText = "Текст изменен!";
  }
&lt;/script&gt;
&lt;button onclick="changeText()"&gt;Изменить текст&lt;/button&gt;
&lt;p id="message"&gt;Это текст, который будет изменен.&lt;/p&gt;
</pre>

<h2>10: Добавление поля ввода</h2>
<p>Добавим текстовое поле для ввода данных с помощью тега <code>&lt;input&gt;</code>.</p>
<pre>
&lt;input type="text" id="userInput" placeholder="Введите имя"&gt;
</pre>

<h2>11: Применение введенных данных</h2>
<p>Теперь при нажатии на кнопку будем выводить введенные данные на страницу.</p>
<pre>
&lt;script&gt;
  function showInput() {
    var input = document.getElementById("userInput").value;
    document.getElementById("output").innerText = "Вы ввели: " + input;
  }
&lt;/script&gt;
&lt;button onclick="showInput()"&gt;Показать введенные данные&lt;/button&gt;
&lt;p id="output"&gt;&lt;/p&gt;
</pre>

<h2>12: Добавление списка</h2>
<p>Добавим список с помощью тегов <code>&lt;ul&gt;</code> (ненумерованный список) и <code>&lt;li&gt;</code> для элементов списка.</p>
<pre>
&lt;ul&gt;
  &lt;li&gt;Первый элемент&lt;/li&gt;
  &lt;li&gt;Второй элемент&lt;/li&gt;
  &lt;li&gt;Третий элемент&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h2>13: Стилизация списка</h2>
<p>Сделаем список более привлекательным, добавив стили через <code>&lt;style&gt;</code>.</p>
<pre>
&lt;style&gt;
  ul {
    list-style-type: square;
  }
  li {
    color: #333;
  }
&lt;/style&gt;
</pre>

<h2>14: Добавление изображения</h2>
<p>Для добавления изображения используем тег <code>&lt;img&gt;</code>, указав путь к изображению в атрибуте <code>src</code>.</p>
<pre>
&lt;img src="image.jpg" alt="Описание изображения"&gt;
</pre>

<h2>15: Добавление ссылки</h2>
<p>Добавим ссылку на другой веб-ресурс с помощью тега <code>&lt;a&gt;</code>.</p>
<pre>
&lt;a href="https://example.com"&gt;Перейти на сайт&lt;/a&gt;
</pre>

<h2>16: Форматирование текста с помощью <code>&lt;strong&gt;</code> и <code>&lt;em&gt;</code></h2>
<p>Для выделения текста используем теги <code>&lt;strong&gt;</code> для жирного шрифта и <code>&lt;em&gt;</code> для курсива.</p>
<pre>
&lt;p&gt;Это <strong>важный</strong> текст и <em>выделенный</em> текст.&lt;/p&gt;
</pre>

<h2>17: Работа с таблицами</h2>
<p>Создадим таблицу с использованием тегов <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> и <code>&lt;td&gt;</code>.</p>
<pre>
&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Имя&lt;/th&gt;
    &lt;th&gt;Возраст&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Иван&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h2>18: Вставка внешних стилей</h2>
<p>Подключим внешний файл CSS, чтобы стилизовать наше приложение. Для этого используем тег <code>&lt;link&gt;</code> в секции <code>&lt;head&gt;</code>.</p>
<pre>
&lt;link rel="stylesheet" href="styles.css"&gt;
</pre>

<h2>19: Подключение внешнего JavaScript</h2>
<p>Теперь подключим внешний JavaScript-файл с помощью тега <code>&lt;script&gt;</code>.</p>
<pre>
&lt;script src="script.js"&gt;&lt;/script&gt;
</pre>

<h2>20: Валидация формы</h2>
<p>Добавим простую форму с полем ввода и кнопкой для отправки данных. Добавим атрибуты <code>required</code> и <code>pattern</code> для проверки данных перед отправкой.</p>
<pre>
&lt;form&gt;
  &lt;input type="text" required pattern="[A-Za-z]+"&gt;
  &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;
</pre>

<h2>21: Работа с событиями</h2>
<p>Покажем, как работает событие <code>click</code> на примере кнопки.</p>
<pre>
&lt;button onclick="alert('Кнопка нажата!')"&gt;Нажми меня&lt;/button&gt;
</pre>

<h2>22: Добавление фона</h2>
<p>Сделаем фон страницы с помощью CSS-свойства <code>background-color</code>.</p>
<pre>
&lt;style&gt;
  body {
    background-color: #f0f0f0;
  }
&lt;/style&gt;
</pre>

<h2>23: Центрирование содержимого</h2>
<p>Центрируем текст на странице с помощью CSS-свойства <code>text-align</code>.</p>
<pre>
&lt;style&gt;
  body {
    text-align: center;
  }
&lt;/style&gt;
</pre>

<h2>24: Работа с размерами шрифта</h2>
<p>Изменим размер шрифта с помощью CSS-свойства <code>font-size</code>.</p>
<pre>
&lt;style&gt;
  h1 {
    font-size: 2em;
  }
&lt;/style&gt;
</pre>

<h2>25: Финальный результат</h2>
<p>Поздравляем, вы создали простое веб-приложение с использованием HTML, CSS и JavaScript! Теперь вы можете экспериментировать с добавлением новых элементов и улучшением функционала.</p>
`;
