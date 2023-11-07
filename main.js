// Получаем ссылки на все элементы с классом "dark"
var darkElements = document.querySelectorAll('.dark');

// Функция для изменения z-index элементов
function changeZIndex() {
    // Устанавливаем начальное значение для z-index
    var zIndex = darkElements.length;

    // Проходимся по каждому элементу и задаем z-index
    darkElements.forEach(function(element) {
        element.style.zIndex = zIndex;
        zIndex--;
    });
}

// Запускаем функцию для изменения z-index элементов
changeZIndex();

// Функция для вращения каждого элемента с задержкой
function rotateElementsWithDelay() {
    // Устанавливаем начальную задержку
    var delay = 0;

    // Проходимся по каждому элементу и применяем вращение с задержкой
    darkElements.forEach(function(element, index) {
        // Получаем координаты нижнего левого угла элемента
        var elementRect = element.getBoundingClientRect();
        var elementLeft = elementRect.left;
        var elementBottom = elementRect.bottom;

        // Устанавливаем точку вращения в нижний центр элемента
        element.style.transformOrigin = elementLeft + 'px ' + elementBottom + 'px';

        // Устанавливаем начальное значение угла вращения в соответствии с классом элемента
        var rotationAngle = 90 - (index * 12);

        // Задаем функцию для вращения
        function rotateSVG() {
            // Уменьшаем угол вращения
            rotationAngle -= 1;

            // Применяем вращение к элементу SVG
            element.style.transform = 'rotate(' + rotationAngle + 'deg)';

            // Проверяем угол вращения и продолжаем вращение
            if (rotationAngle > 0) {
                requestAnimationFrame(rotateSVG);
            } else {
                // По достижении угла 0, делаем элемент полностью видимым
                element.style.opacity = 1;
            }
        }

        // Задержка перед началом вращения
        setTimeout(function() {
            // Постепенное появление элемента перед вращением
            element.style.opacity = 1;
            // Запуск вращения
            rotateSVG();
        }, delay);

        // Увеличиваем задержку для следующего элемента
        delay += 400; // Здесь можно настроить задержку между элементами. В данном случае 800 миллисекунд.
    });
}

// Запускаем вращение для всех элементов с задержкой
rotateElementsWithDelay();