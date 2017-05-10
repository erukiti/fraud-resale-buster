'use strict'

const addWarning = () => {
    const merchantInfo = document.getElementById('merchant-info')
    const isAmazon = () => {
        const s = merchantInfo.innerHTML.replace(/\s+/g , ' ')
        return s.includes('この商品は、<a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=643004">Amazon.co.jp</a> が販売、発送します。') ||
        s.includes("Amazon.com Int'l Sales, Inc. が販売")
    }
    const elem = document.createElement('span')
    if (isAmazon()) {
        elem.style.color = 'blue'
        elem.innerText = 'Amazon公式商品'
    } else {
        elem.style.color = 'red'
        elem.innerText = '注意！詐欺か転売の可能性があります！'
    }

    const productTitle = document.querySelector('#productTitle')
    productTitle.parentElement.appendChild(elem)
}

addWarning()

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.id == 'titleSection') {
                addWarning()
            }
        })
    })
})
const observerConfig = { attributes: true, childList: true, characterData: true, subtree: true};

const title = document.getElementById('title_feature_div')
observer.observe(title, observerConfig)
