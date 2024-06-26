# Тестовое задание

Необходимо разработать два компонента-контрола.

## 🎥 Демо
### [👉 https://syntellect-test-chupapee.vercel.app](https://syntellect-test-chupapee.vercel.app/)

## 📸 Скриншоты
<p>
  <img src="assets/syntellect-desktop.png" width="800" height="400" alt="syntellect test task desktop preview" title="syntellect test task desktop preview" />
  <img src="assets/syntellect-mobile.png" width="379" height="824" alt="syntellect test task mobile preview" title="syntellect test task mobile preview" />
</p>

## 💡 Требования:
- Текстовый контрол, который позволяет настраивать и выводить разное кол-во кнопок слева и справа ✅
- Для кнопок должна быть возможность настроить `текст` и `колбек функцию`, которая вызывается при нажатии на кнопку ✅
- Текстовый контрол, который позволяет выводить подсказки при наборе текста. Подсказки выводятся под контролом в виде выпадающего списка. В подсказках должно выводиться `наименование`, `полное наименование` и `флаг`. При выборе подсказки, значение из неё проставляется в контрол ✅
- Контрол должен иметь настройку максимального кол-ва выводимых подсказок ✅
- использовать минимум сторонних библиотек и зависимостей - ✅ сделано без сторонних библиотек
- использовать [MobX](https://mobx.js.org/) - ❌ Нет причин использовать стм
- использовать MVVM подход при реализации контролов ✅ - Вся логика отделена в хуки/функции, компоненты занимаются только отображением
- переиспользовать общие части контролов, если такие будут ✅
- стилизацией можно не заморачиваться, но если все будет сделано красиво - это только плюс ✅

## Контрол с кнопками
В основном компоненте приложения нужно сделать два контрола для тестирования:
```
Контрол с 2 кнопками справа;
При нажатии на первую кнопку очищается содерживое в контроле;
При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';
```
```
Контрол с 1 кнопкой справа и 1 кнопкой слева;
При нажатии на кнопку справа вызывается alert с текстом в контроле;
При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через alert;
```

## Контрол-автокомплит
В основном компоненте приложения нужно сделать два контрола для тестирования:
```
Максимальное кол-во подсказок - 3
```
```
Максимальное кол-во подсказок - 10
```

## ⚙️ Инструкция по локальному запуску:
Склонировать репозиторий:
```shel
git clone https://github.com/chupapee/syntellect-test.git <Название папки>
```
Установить зависимости:
```shel
yarn install
```
И запустить локально командой:
```shell
yarn dev
```
