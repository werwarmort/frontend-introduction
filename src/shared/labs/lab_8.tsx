export const lab_8 = `
<h1>Лабораторная работа: Рефакторинг по Feature-Sliced Design</h1>

<p>Цель: Отработать принципы архитектурного подхода Feature-Sliced Design (FSD) на существующем React-компоненте. В процессе студент поэтапно разделяет код на слои, модули и модели, формируя масштабируемую и поддерживаемую структуру проекта.</p>

<p><strong>1)</strong> Перейдите по ссылке на исходный компонент: <a href="https://codesandbox.io/p/sandbox/9nc4jg" target="_blank">UserDashboard в CodeSandbox</a>.</p>

<p><strong>2)</strong> Скопируйте файл <code>App.js</code> и создайте на его основе модуль <code>pages/user-dashboard/ui/UserDashboard.tsx</code>. Считайте это точкой входа.</p>

<p><strong>3)</strong> Создайте директорию <code>entities/user/</code>. Вынесите тип <code>User</code> и типы формы <code>UserForm</code> в файл <code>model/types.ts</code>.</p>

<p><strong>4)</strong> В <code>entities/user/model/hooks/useUserSearch.ts</code> вынесите логику фильтрации и поиска пользователей (функции <code>filteredUsers</code> и <code>handleSearch</code>).</p>

<p><strong>5)</strong> Создайте директорию <code>features/edit-user/</code>. Вынесите логику редактирования пользователя (<code>isEditing</code>, <code>selectedUser</code>, <code>form</code>, <code>handleEdit</code>, <code>handleInputChange</code>, <code>handleSave</code>) в хук <code>model/useEditUser.ts</code>.</p>

<p><strong>6)</strong> Создайте компонент формы редактирования в <code>features/edit-user/ui/EditUserForm.tsx</code>. Свяжите его с хуком <code>useEditUser</code>.</p>

<p><strong>7)</strong> Создайте директорию <code>widgets/user-list/</code>. Вынесите отображение списка пользователей и логику редактирования в компонент <code>ui/UserList.tsx</code>.</p>

<p><strong>8)</strong> Создайте директорию <code>shared/api/</code>. Вынесите запросы <code>axios.get</code> и <code>axios.put</code> в <code>shared/api/users.ts</code> как <code>fetchUsers</code> и <code>updateUser</code>.</p>

<p><strong>9)</strong> Вынесите <code>users</code>, <code>loading</code> и <code>error</code> в глобальное хранилище в <code>entities/user/model/userStore.ts</code>.</p>

<p><strong>10)</strong> Обновите компонент <code>UserDashboard</code> так, чтобы он только связывал UI из <code>widgets/</code> и <code>features/</code> — без внутренней логики.</p>

<p><strong>11)</strong> Добавьте <code>README.md</code> в корень проекта. Опишите FSD-структуру проекта: слои, допустимые зависимости, архитектурные принципы.</p>

<p><strong>12)</strong> Убедитесь, что слои <code>features</code>, <code>entities</code>, <code>shared</code> не зависят от <code>pages</code> или <code>widgets</code>.</p>

<p><strong>13)</strong> Задокументируйте архитектурные принципы в <code>ARCHITECTURE.md</code>. Опишите назначение каждого слоя и его роль в проекте.</p>

<p><strong>14)</strong> Проверьте, что зависимости направлены только вниз по слоям: <code>features</code> может зависеть от <code>entities</code> и <code>shared</code>, но не наоборот.</p>

<p><strong>15)</strong> Подключите <code>eslint-plugin-boundaries</code> или аналогичный плагин и настройте правила FSD.</p>

<p><strong>16)</strong> Добавьте Plop-шаблон для автоматической генерации <code>features</code>-модуля с хранилищем, UI и моделью.</p>

<p><strong>17)</strong> Вынесите UI-компоненты без логики в <code>shared/ui/</code>. Пример: переиспользуемая кнопка, заголовок, инпут.</p>

<p><strong>18)</strong> В <code>shared/lib/</code> создайте утилиты: валидаторы, форматы даты и т.д.</p>

<p><strong>19)</strong> Проведите архитектурный аудит проекта. Определите потенциальные места для уменьшения связанности между модулями.</p>

<p><strong>20)</strong> Создайте дерево зависимостей между слоями. Используйте комментарии или визуализацию.</p>

<p><strong>21)</strong> Настройте Storybook для <code>shared/ui</code> и протестируйте компоненты в изоляции.</p>

<p><strong>22)</strong> Подключите unit-тесты к <code>features</code> и <code>entities</code> — например, используя Vitest или Jest.</p>

<p><strong>23)</strong> Настройте абсолютные алиасы для <code>@app</code>, <code>@features</code>, <code>@shared</code> и др. через tsconfig или vite.config/webpack.config.</p>

<p><strong>24)</strong> Замените импорты на алиасы, где это возможно, для соблюдения FSD и читаемости кода.</p>

<p><strong>25)</strong> Протестируйте полную работу интерфейса: отображение списка, редактирование, отправка запроса.</p>

<p><strong>Итог:</strong> Закоммитьте финальную версию, добавьте инструкцию запуска, архитектурное описание и итоги в <code>README.md</code>.</p>

`;
