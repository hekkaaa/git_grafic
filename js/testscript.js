
// Нажатие кнопки
// function StartClick(){
//     // let div = document.createElement('div');
//     // div.className = "spinner";
//     // div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
//     // document.body.append(div); //добавляем элементы
  
    
//     // setTimeout(() => testtext.remove(), 1000);// удаляем
//     // setTimeout(() => startpageelem1.remove(),startpageelem2.remove(),button1.remove(), 5000);

//     // startpageelem1.remove()
//     // startpageelem2.remove()
//     // button1.remove()

//     preloaders()


// }

// Прелоадер
function preloaders(){

    let div = document.createElement('div');
    div.className = "spinner";
    div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
    document.body.append(div); //добавляем элементы
    // setTimeout(() => div.remove(), 1000);
}

async function fetchresponce(){
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);

        if (response.ok) {
            return true
        } else {
            return false
        }
}

const StartAnim = {
    data(){
        return {
            show: true
        }
    },
    methods: {
        async StartClick(){
            this.show = false
            // удаление элементов 
            // setTimeout(() => testtext.remove(), 2000)
            // setTimeout(() => startpageelem2.remove(), 2000)
            // setTimeout(() => button1.remove(), 2000)

           //запуск прелоадера
            setTimeout(() => preloaders(), 1600)
            setTimeout(() => this.show = true, 4000)

            // делаем запрос к серверу через функцию.
            let response = await this.Testfett()

            // логика ответа от сервера.
            if(response.ok){
                console.log('true')
            }
            else{
                console.log('false')
            }
           
        },
        // запрос к серверу.
        async Testfett(){
            let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
            let response = await fetch(url);        
            return response
        }
    }
} 

Vue.createApp(StartAnim).mount('#startpagevue')





  
 