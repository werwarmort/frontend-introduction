export const lab_4 = `
<h1>Лабораторная работа: Основы Angular — модульность, компоненты и RxJS</h1>

<p>Цель: Получить практические навыки разработки на Angular — от генерации проекта с помощью CLI до создания компонентов, сервисов, маршрутов и реактивных потоков с использованием RxJS. Работа выполняется в <a href='https://stackblitz.com/fork/angular'>StackBlitz</a> на шаблоне Angular.</p>

<p><strong>1)</strong> Откройте <a href='https://stackblitz.com/fork/angular'>StackBlitz</a> и выберите шаблон Angular. Вы увидите сгенерированный проект с файлами <code>app.module.ts</code>, <code>app.component.ts</code>, <code>main.ts</code> и др. Это стандартная структура проекта Angular.</p>

<p><strong>2)</strong> В <code>app.component.html</code> добавьте заголовок: <code>&lt;h1&gt;Angular приложение&lt;/h1&gt;</code>. Это шаблон (HTML-разметка), связанный с компонентом <code>AppComponent</code>.</p>

<p><strong>3)</strong> В <code>app.component.ts</code> добавьте поле <code>message: string = 'Добро пожаловать!'</code>. Это поле доступно в шаблоне через интерполяцию: <code>{{ message }}</code>.</p>

<p><strong>4)</strong> Добавьте поле ввода <code>&lt;input [(ngModel)]="message" /&gt;</code> и параграф <code>&lt;p&gt;{{ message }}&lt;/p&gt;</code>. Синтаксис <code>[(ngModel)]</code> реализует двустороннюю привязку данных между шаблоном и компонентом. Убедитесь, что модуль <code>FormsModule</code> импортирован в <code>app.module.ts</code>.</p>

<p><strong>5)</strong> Добавьте директиву <code>*ngIf</code> для условного отображения текста в зависимости от длины строки: <code>&lt;p *ngIf="message.length &gt; 10"&gt;Сообщение длинное&lt;/p&gt;</code>. Звёздочка указывает на структурную директиву, изменяющую DOM.</p>

<p><strong>6)</strong> Добавьте кнопку с обработчиком события: <code>&lt;button (click)="clearMessage()"&gt;Очистить&lt;/button&gt;</code>. В компоненте определите метод <code>clearMessage()</code>, который обнуляет поле <code>message</code>.</p>

<p><strong>7)</strong> Сгенерируйте новый компонент <code>about</code> с помощью Angular CLI командой <code>ng generate component about</code>. В его шаблоне отобразите текст <code>&lt;p&gt;О приложении&lt;/p&gt;</code>.</p>

<p><strong>8)</strong> Настройте маршрутизацию: в файле <code>app-routing.module.ts</code> добавьте маршрут <code>{ path: 'about', component: AboutComponent }</code>. В <code>app.component.html</code> разместите тег <code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code>, который служит точкой рендеринга маршрутов.</p>

<p><strong>9)</strong> Добавьте ссылку <code>&lt;a routerLink="/about"&gt;О нас&lt;/a&gt;</code> для перехода по маршруту без перезагрузки страницы. Директива <code>routerLink</code> указывает путь.</p>

<p><strong>10)</strong> Сгенерируйте сервис командой <code>ng generate service logger</code>. В <code>logger.service.ts</code> реализуйте метод <code>log(message: string)</code>, который будет выводить сообщения в консоль. Импортируйте и используйте этот сервис внутри компонента через конструктор. Это позволит вызывать <code>logger.log(...)</code> в методах компонента.</p>

<p><strong>11)</strong> В методе очистки поля <code>message</code> вызовите <code>this.logger.log('Очищено')</code> после обнуления текста. Таким образом, каждое действие будет зафиксировано в консоли.</p>

<p><strong>12)</strong> Объявите интерфейс <code>Person</code> с полями <code>name</code> и <code>age</code>. Создайте массив объектов этого типа и используйте его в компоненте.</p>

<p><strong>13)</strong> Для отображения списка персон примените директиву <code>*ngFor</code>: <code>&lt;li *ngFor="let person of people"&gt;{{ person.name }} — {{ person.age }} лет&lt;/li&gt;</code>. Эта директива создаёт шаблон на основе каждой итерации массива.</p>

<p><strong>14)</strong> Добавьте форму для добавления нового элемента в список. Используйте <code>[(ngModel)]</code> для привязки к полям объекта, кнопку с обработчиком и метод, добавляющий объект в массив.</p>

<p><strong>15)</strong> Импортируйте <code>fromEvent</code> из библиотеки <code>rxjs</code>. Используйте его для подписки на событие клика по кнопке и выполните соответствующее действие (например, логирование).</p>

<p><strong>16)</strong> Создайте экземпляр <code>Observable</code> с помощью функции <code>of()</code>, передав массив строк. <strong>Observable</strong> представляет поток данных, к которому можно подписаться. Используйте <code>.subscribe()</code> для обработки значений.</p>

<p><strong>17)</strong> Примените оператор <code>map</code> к Observable для трансформации данных. Например: <code>.pipe(map(value =&gt; value.toUpperCase()))</code>. Оператор <code>map</code> преобразует каждое значение потока.</p>

<p><strong>18)</strong> Добавьте оператор <code>filter</code> для исключения нежелательных значений, например: <code>filter(value =&gt; value.length &gt; 5)</code>.</p>

<p><strong>19)</strong> Импортируйте <code>HttpClientModule</code> в <code>app.module.ts</code>. Внедрите <code>HttpClient</code> в компонент и выполните запрос к API (например, https://jsonplaceholder.typicode.com/users), выведите данные в шаблон.</p>

<p><strong>20)</strong> Оберните запрос в <code>pipe(catchError(...))</code> и реализуйте обработку ошибок: отобразите сообщение об ошибке или выведите в консоль.</p>

<p><strong>21)</strong> Реализуйте переменную <code>isLoading</code> типа <code>boolean</code>. Отображайте индикатор загрузки на основе её значения до и после выполнения запроса.</p>

<p><strong>22)</strong> Сгенерируйте модуль <code>AdminModule</code> и настройте его ленивую загрузку с помощью <code>loadChildren</code>. Это снижает нагрузку на основное приложение.</p>

<p><strong>23)</strong> Протестируйте работу приложения: убедитесь, что маршруты, компоненты, сервисы, потоки RxJS и запросы работают корректно.</p>

<p><strong>24)</strong> Завершите лабораторную работу: удалите временный код, приведите в порядок структуру проекта, добавьте комментарии к компонентам, сервисам и интерфейсам. Сохраните ссылку на проект в StackBlitz.</p>
`;
