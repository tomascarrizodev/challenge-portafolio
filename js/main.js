// Creando funcionalidades para exportar
const $ = (elem) => document.querySelector(elem);
const $$ = (elems) => document.querySelectorAll(elems);

const addC = (elem, name) => elem.classList.add(name);
const removeC = (elem, name) => elem.classList.remove(name);
const replaceC = (elem, old, newC) => elem.classList.replace(old, newC);

export const querys = {
    $,
    $$,
    addC,
    removeC,
    replaceC
} 