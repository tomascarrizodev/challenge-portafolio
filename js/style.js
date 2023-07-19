import { querys } from "./main.js";
const { $, $$, addC, removeC, replaceC } = querys;

// Arreglos de los contenedores de los inputs y de los inputs
const containers = $$('.formcontato__container');
const inputs = [...$$('input'), $('textarea')];

// Agrega clases modificando estilos
const handleFocus = (id, parentId) => {
    const input = $('#' + id)
    const label = $('#label-' + id)
    const parent = $('#' + parentId)

    addC(input, 'writing-input');
    addC(parent, 'formcontato__container--focus');

    if (label.classList.contains('filled-label')) {
        replaceC(label, 'filled-label', 'writing-label');
    } else {
        addC(label, 'writing-label');
    }
}

// Quita clases de estilo y agrega si hay error
const handleFocusOut = (id, parentId) => {
    const input = $('#' + id)
    const label = $('#label-' + id)
    const parent = $('#' + parentId)

    if (input.value === '') {
        removeC(input, 'writing-input');
        removeC(label, 'writing-label');
        removeC(parent, 'formcontato__container--focus');
    } else {
        replaceC(label, 'writing-label', 'filled-label');
        removeC(parent, 'formcontato__container--focus');
    }
}

// Añade eventos a cada input para modificar estilos
inputs.forEach(elem => {
    elem.addEventListener('focus', (event) => {
        const id = event.target.id
        const parentId = event.target.parentNode.id
        handleFocus(id, parentId)
    })

    elem.addEventListener('focusout', (event) => {
        const id = event.target.id
        const parentId = event.target.parentNode.id
        handleFocusOut(id, parentId)
    })
})

// Añade evento al contenedor para hacer autofocus en el input
containers.forEach(elem => {
    elem.addEventListener('click', (event) => {
        const tag = event.target.tagName;
        tag == 'INPUT' || tag == 'LABEL' || tag == 'TEXTAREA' ?
            null :
            event.target.querySelectorAll('input, textarea')[0].focus();
    })
})