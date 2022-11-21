let btns = document.querySelectorAll('button[data-modal]')
let closebtns = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')




btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('hide')
        modal.classList.add('show', 'fade')
    }

});
closebtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('hide')
        modal.classList.remove('show', 'fade')
    }

});

let userinfo = {
    gender: "woman"
}
let getbtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let results = document.querySelector('#result')

activeBtns.forEach(btn => {
    btn.onclick = () => {
        activeBtns.forEach(el =>
            el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let act = btn.getAttribute('data-py')
        if (userinfo.gender === 'woman') {
            let sum = 447.6 + (9.2 * userinfo.weight) + (3.1 * userinfo.height) - (4.3 * userinfo.age)
            results.innerHTML = Math.round(sum * act)
        } else {
            let sum = 88.36 + (13, 4 * userinfo.weight) + (4.8 * userinfo.height) - (5.7 * userinfo.age)
            results.innerHTML = Math.round(sum * act)
        }
    }
})
inputs.forEach(inp => {
    inp.onkeyup = () => {
        userinfo[inp.name] = inp.value
    }
})


getbtns.forEach(btn => {
    btn.onclick = () => {
        getbtns.forEach(el =>
            el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let gen = btn.getAttribute('data-g')
        userinfo.gender = gen
    }
})

let formM = document.forms.veg
let Minps = formM.querySelectorAll('input')

let form = document.forms.reg
let inps = form.querySelectorAll('input')

let regex = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^998[012345789][0-9]{8}$/g
}


function validate(regex, field) {
    if (regex.test(field.value)) {
        console.log(field);
        field.style.border = "5px solid green"
       
    } else {
        console.log(field);
        field.style.border = "5px solid red"
    }

}

inps.forEach(inp => {
    inp.onkeyup = () =>{
      validate(regex[inp.name], inp)
    }
    inp.onchange = () =>{
        console.log(inp.value);
    }
});
////



function Mvalidate(regex, field) {
    if (regex.test(field.value)) {
        console.log(field);
        field.style.border = "5px solid green"
       
    } else {
        console.log(field);
        field.style.border = "5px solid red"
    }

}

Minps.forEach(inp => {
    inp.onkeyup = () =>{
      Mvalidate(regex[inp.name], inp)
    }
    inp.onchange = () =>{
        console.log(inp.value);
    }
});
////
let errorss = 0
let Meror = 0

formM.onsubmit = (event) => {
    event.preventDefault();
    

    Minps.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            Meror++
        }
    })
    
    
    ;


    if (Meror > 0) {

        console.log('error');
    } else {
        
        alert("Заказ Принят");
        submit(form)
    }

}
////
form.onsubmit = (event) => {
    event.preventDefault();
    

    inps.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            errorss++
        }
    })
    
    
    ;


    if (errorss > 0) {
        console.log('error');
    } else {
        
        alert("Заказ Принят");
        submit(form)
    }

}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}



let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    if (slide_next ===-1) {
    } else {
        slide_next--
        shou_slide(slide_next)
    }

}


next.onclick = () => {
    if (slide_next === 4) {
    } else {
        slide_next++
        shou_slide(slide_next)
    }
}



function shou_slide(nc) {

    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
    })
    slide[slide_next].style.display = "block"
    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()






// timer


const deadline = 'December 2022 31 23:59'


function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.round(t / (1000 * 60 * 60 * 24)),
      hours = Math.round((t / (1000 * 60 * 60)) % 24),
      minutes = Math.round((t / 1000 / 60) % 60),
      seconds = Math.round((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1000)


    function updateTime() {
        const t = getTime(endtime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if(t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer',deadline)





///////
//////
//////
//////


let tabcontents = document.querySelectorAll('.tabcontent')
let btnss = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btnss.forEach((btn, index) => {
    btn.onclick = () => {
        btnss.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 