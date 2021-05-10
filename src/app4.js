import $ from 'jquery'
import './app4.css'

const $c = $('#app4 .circle')
$c.on('mouseenter', () => {
    $c.addClass('active')
}).on('mouseleave', () => {
    $c.removeClass('active')
})