'use strict'

const productTitle = document.querySelector('#productTitle')
const merchantInfo = document.getElementById('merchant-info')
const isAmazon = merchantInfo.innerHTML.replace(/\s+/g , ' ').includes('この商品は、<a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=643004">Amazon.co.jp</a> が販売、発送します。')

const elem = document.createElement('span')
if (isAmazon) {
    elem.style.color = 'blue'
    elem.innerText = 'Amazon公式商品'
} else {
    elem.style.color = 'red'
    elem.innerText = '注意！詐欺か転売の可能性があります！'
}

productTitle.parentElement.appendChild(elem)
