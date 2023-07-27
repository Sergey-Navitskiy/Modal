"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/
const buttonOpenModalWindow = document.querySelectorAll('.show-modal')
const modalWindow = document.querySelector('.modal')
const buttonCloseModalWindow = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for(let modal of buttonOpenModalWindow){
    modal.addEventListener('click',function(){
        modalWindow.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalWindow.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})

document.querySelector('.overlay').addEventListener('click',function(){
    modalWindow.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})

document.addEventListener('keydown', function(event){
    if(event.code == 'Escape'){
        modalWindow.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
    }
})