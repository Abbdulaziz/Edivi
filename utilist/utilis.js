"use strict"

const $ = (argument) => {
    return document.querySelector(argument)
}
const $$ = (argument) => {
    return document.querySelectorAll(argument)
}

const createElement = (tagName, className, content) => {
    const newElement = document.createElement(tagName);
    if (className) {
        newElement.setAttribute('class', className);
    }
    if (content) {
        newElement.innerHTML = `${content}`
    }

    return newElement;
}




