/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const body = document.body;
    for (let i = 0; i < count; i++) {
        const elem = document.createElement(tag);
        elem.innerHTML = content;
        body.append(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let html = document.createElement('div');
    html.className = 'item_1';
    for (let i = 1; i < level; i++) {
        if (i != 1) {
            var elements = html.querySelectorAll('.item_' + String(i));
        } else {
            var elements = [1];
        }
        for (let k = 0; k < elements.length; k++) {
            for (let j = 0; j < childrenCount; j++) {
                if (i != 1) {
                    let div = document.createElement('div');
                    div.className = 'item_' + String(i + 1);
                    html.querySelectorAll('.item_' + String(i))[k].appendChild(
                        div,
                    );
                } else {
                    let div = document.createElement('div');
                    div.className = 'item_' + String(i + 1);
                    html.appendChild(div);
                }
            }
        }
    }
    return html;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let html = generateTree(2, 3);
    [].forEach.call(html.querySelectorAll('.item_2'), function (item_2) {
        var section = document.createElement('section');
        section.className = 'item_2';
        section.innerHTML = item_2.innerHTML;
        item_2.parentNode.replaceChild(section, item_2);
    });
    return html;
}
