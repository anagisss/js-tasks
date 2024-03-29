/** ЗАДАЧА JS DOM API (40)
 * 
 * Объявление
 * 
Задача написать JavaScript-функцию, которая разместит блоки с текстом как газетные колонки.

Формат ввода
Реализуйте функцию renderWaterfall. На вход она должна принимать следующие параметры:

rootNode: элемент в котором находятся объявления (HTMLDivElement)
columnCount: количество колонок (number)
elementGap: расстояние между колонками, а также элементами по-вертикали (number)

Пример rootNode:

<div class="root">
  <div class="el">У каждого объявления есть свои стили</div>
  <div class="el">Их не нужно менять</div>
  <div class="el">Каждое объявление должно быть свободным по высоте</div>
  <div class="el">А вот ширину нужно будет выставить</div>
  <div class="el">Ширину элемента root, при необходимости вы можете определить, но в тестах она может быть разная</div>
</div>

Формат вывода
При вызове в контексте html-страницы функция renderWaterfall должна расположить DOM-элементы объявлений так,
чтобы они разместились в columnsCount колонок,
а расстояние между ними составляло elementGap.

Каждый следующий элемент нужно помещать в ту колонку, высота которой меньше остальных.
При равных наименьших высотах элемент помещается в первую колонку слева.

Например: */

function renderWaterfall(rootNode, columnCount, elementGap) {
  const rootNodeList = rootNode.querySelectorAll(".el");

  rootNode.style.display = 'flex'
  rootNode.style.flex = '1 1 auto'
  rootNode.style.justifyContent = 'space-between';
  rootNode.style.flexWrap = 'wrap'

  rootNodeList.forEach(node => {
    node.style.flexShrink = '0';
    node.style.width = `calc(100% - 2 * ${elementGap}px) / ${columnCount}`;
    node.style.marginBottom = `${elementGap}px`;
  });
}

/**
Примечание
Не удаляйте существующие классы элементов. Вы можете изменять ширину объявлений, но высота должна быть зависимой от контента. Можно добавлять свои дополнительные элементы для структурирования.

Посмотрите пример ожидаемого расположения элементов.
 */



