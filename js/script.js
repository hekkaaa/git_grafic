// Адрес сервера.
const SERVER = 'http://127.0.0.1:8000'
const SERVERPOST = 'http://127.0.0.1:8000/post'
// Заведомо ломанный адрес для теста ошибок.
const SERVERFAILED = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits11'

// Прелоадер
function preloaders(){

    let div = document.createElement('div');
    let buttonBefore = document.getElementById('startpagevue')
    div.className = "spinner";
    div.id = 'preloader';
    div.innerHTML = '<div class="cube1"></div> <div class="cube2"></div>';
    // document.body.append(div); //добавляем элементы
    buttonBefore.insertAdjacentElement('afterBegin', div)
   
}


// VUE JS
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
            let response = await this.Responcefetch()

            // логика ответа от сервера.
            if(response.ok){
                // Формирование POST запроса.
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


               // Тут дальше будет код!!!!
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
        async Responcefetch(){
            let url = SERVER;
            let response = await fetch(url);        
            return response
        }
    }
} 

Vue.createApp(StartAnim).mount('#startpagevue') 