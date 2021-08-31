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
// D3
function d3_prod(answer_post){
    let div = document.createElement('div');
    div.id = 'gitvizual';
    document.body.append(div); //добавляем элементы

    let root = d3.select("#gitvizual")
    .append("svg")
    .attr("width", 3000)
    .attr("height", 3000); 
    

let size = answer_post.length
console.log(answer_post)

for(let i=1; i<=size; i++){
    console.log(i)
    root.append("circle")
    .attr("r", 5)
    .attr("cx", 20*i*2)
    .attr("cy", 250)
    .style("fill", "red")

    root.append('line')
    .style("stroke", "rgb(6,120,155)")
    .attr('x1',20*i*2)
    .attr('y1',250)
    .attr('x2',20*i*4)
    .attr('y2',250)
}

}

// ***************************************************************************************************************88
// VUE JS
const StartAnim = {
    data(){
        return {
            show: true, // переход анимации
            servresp: 'none', // переменная для ошибки от сервера при запросе
            isActive: true // отображение ошибки
        }
    },
    methods: {
        async StartClick(){
            this.show = false
    
           //запуск прелоадера
            setTimeout(() => preloaders(), 1600)
            
            // Делаем запрос к серверу через функцию.
            let response = await this.Responcefetch()

            // логика ответа от сервера. // Переделать через try/catch!!!
            if(response.ok){
                // Формирование POST запроса.
                response = await this.ResponcefetchPost()
                // Если вдруг будет ошибка появится на стадии POST запроса. 

                if(response.ok){
                    response = await response.json()

                    if(response.error_value){
                        setTimeout(() => this.show = true, 2500)
                        // удаление
                        setTimeout(() => preloader.remove(), 2500)
                        this.isActive = false
                        this.servresp = response.error_type
                    }
                    else{
                        // удаление элементов главной страницы
                        setTimeout(() => startpagevue.remove(), 5000)
                        //переход
                        setTimeout(() => this.show = true, 5500)
                        setTimeout(() => d3_prod(response.answer_post), 5500)
                        
                        // Тут будет код!!!
                    }
                }
                else{
                    // если ответа нет убираем preloader и возвращаем меню.
                    setTimeout(() => this.show = true, 2500)
                    // удаление
                    setTimeout(() => preloader.remove(), 2500)
                    this.isActive = false
                    this.servresp = response.status
                }
    
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
        },
        async ResponcefetchPost(){
            let user = {
                //Забираем данные из input.
                name: document.getElementById("basic-url").value,
              };

            let response = await fetch(SERVERPOST, {
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