import { querys } from "./main.js";
const { $, $$ } = querys;

const inputs = [...$$('input'), $('textarea')]
const form = $('[data-form]');

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    'tooLong'
]

const errorMessages = {
    nombre: {
        valueMissing: 'El campo no puede estar vacío',
        tooLong: 'No puede contener más de 50 caracteres'    
    },
    email: {
        valueMissing: 'El campo no puede estar vacío',
        typeMismatch: 'Correo no válido',
        patternMismatch: 'Correo no válido'
    },
    asunto: {
        valueMissing: 'El campo no puede estar vacío',
        tooLong: 'No puede contener más de 50 caracteres'
    },
    mensaje: {
        valueMissing: 'El campo no puede estar vacío',
        tooLong: 'No puede contener más de 300 caracteres'
    }
}

// Comprueba la validez del input y limpia o escribe el mensaje
function validate(input, parentInput) {
    const inputTipo = input.dataset.tipo;
    const parent = parentInput.querySelector('span')
    if (input.validity.valid) {
        parent.innerHTML = ''
    } else {
        parent.innerHTML = showError(input, inputTipo)
    }
}

// Devuelve el mensaje correspondiente al error del input
const showError = (input, inputTipo) => {
    let mensaje = ''

    // Itera sobre los tipos de errores hasta encontrar al que encaje y sobreescribe el mensaje que devuelve
    errorTypes.forEach(error => {
        if (input.validity[error]) {
            mensaje = errorMessages[inputTipo][error]
        }
    })
    return mensaje
}

// Valida el input al clickear fuera
inputs.forEach(input => {
    input.addEventListener('blur', event => {
        validate(input, event.target.parentNode)
    })
})

// Muestra una alerta cuando el formulario está bien completado
form.addEventListener('submit', event => {
    event.preventDefault()
    alert('¡Datos enviados correctamente!')
    inputs.forEach(input => {
        input.value = ''
        input.parentNode.querySelector('label').classList.remove('filled-label')
    })
})