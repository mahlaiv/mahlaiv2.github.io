$( document ).ready(function(){
      $( "#button1" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
        $( ".contacts" ).scroll(); // вызываем событие "scroll" на элементе <div>
      });
      $( ".contacts" ).scroll(function(){ // задаем функцию при срабатывании события "scroll" на элементе <div>
        $( "span" ).text( "Scroll" ) // добавляем текстовое содержимое в элемент <span>
                   .css({ 
                     "display": "inline", // элемент <span> отображается как строчный
                     "color": "red" // цвет текста красный
                   })
                   .fadeOut( "fast" ); //  плавно изменяем прозрачность элемента <span>
      });
    });