import $ from 'jquery'
import './app1.css'

const $num = $('#number')
const $btn1 = $('#add')
const $btn2 = $('#minus')
const $btn3 = $('#multi')
const $btn4 = $('#divide')
$num.text(localStorage.getItem('n') || 1)

$btn1.on('click', () => {
    let n = parseInt($num.text()) + 1
    $num.text(n)
    localStorage.setItem('n', n)
})
$btn2.on('click', () => {
    let n = parseInt($num.text()) - 1
    $num.text(n)
    localStorage.setItem('n', n)
})
$btn3.on('click', () => {
    let n = parseInt($num.text()) * 2
    $num.text(n)
    localStorage.setItem('n', n)
})
$btn4.on('click', () => {
    let n = parseInt($num.text()) / 2
    $num.text(n)
    localStorage.setItem('n', n)
})