## Документация для сайта Kostaki

Структура проекта:

- data/ – видео, аудио, гиф файлы
- images/ – картинки
- js/ - JavaScript файлы
- pages/ – все страницы
  - paintings/ – все картины
    - название_картины/
      - paint_menu.html – меню картины
      - paint_legends.html – Stories & Legends
      - paint_artist.html – About the artist
      - paint_other.html – Other works of this artist
      - paint_game_start.html – Стартовый экран для игры
      - paint_game_continue.html – Следующий экран
      - paint_game_levels.html – Уровни игры, если есть
  - ...html – пошаговые страницы
  - menu.html – меню
- styles/ – файлы со стилями
  - reset.css – сброс стилей
  - style.css – скомпилированный **style.scss**
  - style.scss – основной файл стилей
  - vars.css – скомпилированный **vars.scss**
  - vars.scss – переменные для стилей
- index.html – входная точка на сайт, первая страница
