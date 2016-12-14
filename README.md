# ПСК Деревянный Стандарт Wood Standart

## Демо
Смотреть: [frontende.info/ws](http://frontende.info/ws)

Скачать: [ws-master.zip](https://github.com/Mischuk/ws/archive/master.zip)

## Описание
* Сборщик [Gulp](http://gulpjs.com/)
* Шаблонизатор [Jade](http://jade-lang.com/) с кэшированием изменений
* Препроцессор [Stylus](http://stylus-lang.com/) ([карты кода](https://www.npmjs.com/package/gulp-sourcemaps), [rupture для media queries](http://jescalan.github.io/rupture/), [jeet сетка](http://jeet.gs/))
* [Сервер](https://www.npmjs.com/package/gulp-connect) с livereload
* CSS: добавление [вендорных префиксов](https://www.npmjs.com/package/autoprefixer-stylus), форматирование [csscomb](https://www.npmjs.com/package/gulp-csscomb), оптмизация и минификация [clean-css](https://www.npmjs.com/package/gulp-csso)
* HTML: форматирование [html-prettify](https://www.npmjs.com/package/gulp-html-prettify), сортировка атрибутов [AttrsSorter](https://www.npmjs.com/package/posthtml-attrs-sorter)
* JS: [импорт из модулей](https://www.npmjs.com/package/gulp-include), конкатенация, [минификация](https://www.npmjs.com/package/gulp-uglify)
* Перехват и вывод ошибок без остановки gulp с помощью [plumber](https://www.npmjs.com/package/gulp-plumber)
* Упаковка скомпилированных файлов в zip архив
* Загрузка сборки на сервер

## Быстрый старт

* Установить [node.js](https://nodejs.org)
* Зайти в папку с установленной nodejs и обновить npm до последней версии: `npm install npm@latest`
* Склонировать или скачать проект
* Установить gulp глобально, если не установлен: `npm i -g gulp`
* Установить зависимости: `npm i`
* Переименовать `gulpfile` в `gulpfile.js`
* Запустить gulp: `gulp dev`

Проект будет доступен по адресу [`http://localhost:8080/`](http://localhost:8080/)

## Основные таски

* `gulp dev` - запускает вотчеры и сервер
* `gulp build` - собирает проект и заливает на сервер
* `gulp zip` - архивирует проект в zip архив
* `gulp clean` - удаляет скомпилированную сборку

## Структура проекта

```
frontend/                               # Корень проекта
├── dest                                # Скомилированные файлы
├── source                              # Исходные файлы
│   ├── modules                         # Модули (jade/stylus/js)
│   ├── pages                           # Страницы
│   └── static                          # Статичные файлы
│       ├── fonts                       # Шрифты
│       ├── images                      # Изображения
│       ├── js                          # Javascript файлы
│       │   ├── jquery.masked-input     # Маски для текстовых инпутов
│       │   ├── magnific-popup          # Плагин Magnific Popup
│       │   ├── perfect-scrollbar       # Плагин Perfect Scrollbar
│       │   ├── select2                 # Плагин Select2
│       │   ├── slick                   # Плагин Slick
│       │   ├── jquery.min.js           # jQuery
│       │   ├── modernizr.js            # Modernizr
│       │   └── main.js                 # Точка сборки скриптов
│       └── styl                        # Статичные стили
│           ├── base                    # Базовые стили
│           │   ├── fonts.styl          # Подключение шрифтов
│           │   ├── helper.styl         # Служебные классы
│           │   ├── layout.styl         # Основая сетка
│           │   ├── mixins.styl         # Миксины
│           │   ├── reset.styl          # Сброс стилей
│           │   ├── typography.styl     # Типография
│           │   └── variables.styl      # Переменные проекта
│           ├── components              # Глобальные компоненты
│           └── app.styl                # Точка сборки styl файлов
├── task                                # ТЗ, PSD макеты, todo списки
├── tmp                                 # Каталог с временными файлами
├── zip                                 # Каталог с zip архивами
├── .csscomb.json                       # Конфиг для CSSComb
├── .gitignore / .npmingrone            # Игнорирование для git/npm
├── command.cmd                         # Командная строка в текущем каталоге
├── gulpfile.js                         # Конфиг для Gulp
├── package.json                        # Зависимости проекта
└── README.md                           # Файл, который вы читаете
```

## Контакты
**Email**: mischuk.alexander@gmail.com

**Skype**: mischuk.alexander
