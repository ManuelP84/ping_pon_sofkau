let userPaddle = document.querySelector("#user-paddle");
let compPaddle = document.querySelector("#comp-paddle");
let ball = document.querySelector('#ball');

userPaddle.style.marginLeft = "30px";
userPaddle.style.marginTop = "0px";
compPaddle.style.marginLeft = "1048px";
compPaddle.style.marginTop = "0px";
ball.style.marginTop = '262px'
ball.style.marginLeft = '534px'

let w_Pressed = false
let s_Pressed = false

let ID

let Vx = -1
let Vy = -1
let V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy))

document.addEventListener('keydown', (e) => {       /*Event when a key is pressed*/
    if(e.keyCode == '87'){
        w_Pressed = true
    }
    else if(e.keyCode == '83'){
        s_Pressed = true
    }
})

document.addEventListener('keyup', (e) => {         /*Event when a key is released*/
    if(e.keyCode == '87'){
        w_Pressed = false
    }
    else if(e.keyCode == '83'){
        s_Pressed = false
    }
})


gameLoop()

function reset(){
    clearInterval(ID)
    Vx = -1
    Vy = -1
    let V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy))
    ball.style.marginTop = '262px'
    ball.style.marginLeft = '534px'
    gameLoop()
}

function gameLoop(){        /*Flow of the game*/
    setTimeout(() => {
        ID = setInterval(()=>{

            if(marginLeft(ball) < 0){
                document.querySelector('#comp-score').innerHTML = Number(document.querySelector('#comp-score').innerHTML) + 1
                reset()
                return
            }

            if((marginLeft(ball) + 20) > 1088){
                document.querySelector('#user-score').innerHTML = Number(document.querySelector('#user-score').innerHTML) + 1
                reset()
                return
            }

            if(marginTop(ball) < 0 || (marginTop(ball) + 20) > 544){
                Vy = -Vy
            }

            ball.style.marginLeft = `${marginLeft(ball) + Vx}px`
            ball.style.marginTop = `${marginTop(ball) + Vy}px`

            if(w_Pressed && marginTop(userPaddle) > 0){
                userPaddle.style.marginTop = `${marginTop(userPaddle) - 2}px`
            }
            else if(s_Pressed && marginTop(userPaddle) < 472){
                userPaddle.style.marginTop = `${marginTop(userPaddle) + 2}px`
            }
        }, 5)
    }, 500)
}

function marginTop(elem){
    return Number (elem.style.marginTop.split(`p`)[0])
}

function marginLeft(elem){
    return Number (elem.style.marginLeft.split(`p`)[0])
}
