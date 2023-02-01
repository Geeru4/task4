// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    const select = event.target;
    const selectedOption = select.options[select.selectedIndex];
    document.body.style.backgroundColor = selectedOption.value;
    }
    // Сюда пишите название события, которое должно произойти после смены option
    const selectColorEvent = "change";
    // Создаем события на тег select.
    const selectColor = document.getElementById("selectColor");
    selectColor.addEventListener(selectColorEvent, changeColor);
    // Напишите, почему событие делаем на тег select, а работаем с тегом option?
    // Мы делаем событие на тег select, так как это событие change происходит на самом теге select, когда мы меняем выбранные option.
    
    
    
    