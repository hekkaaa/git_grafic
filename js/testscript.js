// Адрес сервера.
const SERVERFLASK = 'http://127.0.0.1:5000'
const SERVER = 'http://127.0.0.1:8000'
const SERVERPOST = 'http://127.0.0.1:8000/post'
// Заведомо ломанный адрес для теста ошибок.
const SERVERFAILED = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits11'


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
    div.id = 'preloader';
    div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
    document.body.append(div); //добавляем элементы
    // setTimeout(() => div.remove(), 1000);
}

// Запрос на сервер
async function fetchresponce(){
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);

        if (response.ok) {
            return true
        } else {
            return false
        }
}

/// VUE JS
const StartAnim = {
    data(){
        return {
            show: true, // переод анимации
            servresp: 'none', // переменная для ошибки от сервера при запросе
            isActive: true // отображение ошибки
        }
    },
    methods: {
        async StartClick(){
            this.show = false
    
           //запуск прелоадера
            setTimeout(() => preloaders(), 1600)
            
            // делаем запрос к серверу через функцию.
            let response = await this.Testfett()

            // логика ответа от сервера.
            if(response.ok){
                console.log('true')
                // POST запрос на сервер
                console.log('POST')
            let user = {
                name: 'John',
                surname: 'Smith'
              };

            let response = await fetch(SERVER + '/post', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              });
              
            console.log(response.json())  
                // удаление элементов 
                // setTimeout(() => testtext.remove(), 2000)
                // setTimeout(() => startpageelem2.remove(), 2000)
                // setTimeout(() => startpageelem3.remove(), 2000)
                // setTimeout(() => button1.remove(), 2000)

            console.log('POST 2!')
              let test_response = await this.testPost()
              
              let hh = await test_response.json()
              console.log(hh)
              console.log('______________')
              console.log(hh.answer_post['message'])
              console.log(hh.error_type)
              console.log(hh.error_value)
              console.log(hh.ok)
              
            }
            else{
                // если ответа нет убираем preloader и возвращаем меню.
                setTimeout(() => this.show = true, 2500)
                // удаление
                setTimeout(() => preloader.remove(), 2500)
                this.isActive = false
                this.servresp = response.status
                  
            }
        
               
           
        },
        // запрос к серверу.
        async Testfett(){
            
            // let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
            let response = await fetch(SERVER,{
                headers:{
                    Authentication: 'secret'
                }
            });  

            console.log(response)      
            return response
        },
       async testPost(){
        let user = {
            name: 'MEOW!',
            surname: 'CAT'
          };

        let response = await fetch(SERVER + '/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          });
          return response
       }
    }
} 

Vue.createApp(StartAnim).mount('#startpagevue') 
