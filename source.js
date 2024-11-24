// Получаем элемент заголовка
const title = document.getElementById('site-title');

// Добавляем обработчик событий для наведения мыши
title.addEventListener('mouseenter', () => {
    title.style.color = 'orange'; // Изменяем цвет на оранжевый
    title.style.transform = 'scale(1.2)'; // Увеличиваем размер
});

// Добавляем обработчик событий для выхода мыши
title.addEventListener('mouseleave', () => {
    title.style.color = 'black'; // Возвращаем цвет к черному
    title.style.transform = 'scale(1)'; // Возвращаем размер к исходному
});
