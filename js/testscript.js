
// Нажатие кнопки
button1.onclick = function(){
    // let div = document.createElement('div');
    // div.className = "spinner";
    // div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
    // document.body.append(div); //добавляем элементы
  
    
    // setTimeout(() => testtext.remove(), 1000);// удаляем

    startpageelem1.remove()
    startpageelem2.remove()
    button1.remove()

    preloaders()
    

}


function preloaders(){

    let div = document.createElement('div');
    div.className = "spinner";
    div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
    document.body.append(div); //добавляем элементы
    setTimeout(() => div.remove(), 1000);
}