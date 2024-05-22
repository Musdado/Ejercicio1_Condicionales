function mostrar_menu() {
    const opcion = parseInt(prompt(`Elige una opción:
    1. Pregunta sobre belleza
    2. Número divisible entre 2
    3. Número par o impar
    4. Número de cliente
    5. Comparación de dos números
    6. Encontrar el número mayor
    7. Verificar día de la semana
    8. Calificación
    9. Calcular precio del helado
    10. Portal de educacíon`));

    switch (opcion) {
        case 1:
            pregunta_de_belleza();
            break;
        case 2:
            numero_divisible();
            break;
        case 3:
            par_o_Impar();
            break;
        case 4:
            numero_cliente();
            break;
        case 5:
            comparar_numeros();
            break;
        case 6:
            encontrar_numero_mayor();
            break;
        case 7:
            verificar_dia_semana();
            break;
        case 8:
            verificar_calificacion();
            break;
        case 9:
            calcular_precio_helado();
            break;             
        default:
            alert("Opción inválida. Por favor, elige una opción válida.");
            mostrar_menu();
    }
}

function pregunta_de_belleza() {
    const respuesta = prompt("¿Eres bellisimo/a?");
    if (respuesta.toLowerCase() === "si") {
        alert("Ciertamente");
    } else {
        alert("No te creo");
    }
}

function numero_divisible() {
    const numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 === 0) {
        alert(`${numero} es divisible entre 2`);
    } else {
        alert(`${numero} no es divisible entre 2`);
    }
}

function par_o_Impar() {
    const numeroUsuario = parseInt(prompt("Ingresa un número:"));
    if (numeroUsuario % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

function numero_cliente() {
    const numero_cliente = parseInt(prompt("Ingresa tu número de cliente:"));
    if (numero_cliente === 1000) {
        alert("¡Ganaste un premio!");
    } else {
        alert(`Lo sentimos, sigue participando. Tu número de cliente es ${numero_cliente}`);
    }
}

function comparar_numeros() {
    const primerNumero = parseFloat(prompt("Ingresa el primer número:"));
    const segundoNumero = parseFloat(prompt("Ingresa el segundo número:"));
    if (primerNumero < segundoNumero) {
        alert(`${primerNumero} es menor que ${segundoNumero}`);
    } else if (segundoNumero < primerNumero) {
        alert(`${segundoNumero} es menor que ${primerNumero}`);
    } else {
        alert("Los números son iguales");
    }
}
function encontrar_numero_mayor() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const num3 = parseFloat(prompt("Ingresa el tercer número:"));

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        alert("Hay números iguales. No se puede determinar un número mayor.");
    } else {
        const mayor = Math.max(num1, num2, num3);
        alert(`El número mayor es: ${mayor}`);
    }
}

function verificar_dia_semana() {
    const dia = prompt("Ingresa un día de la semana:").toLowerCase();
    switch (dia) {
        case "lunes":
            alert("Es lunes. ¡Ánimo!");
            break;
        case "viernes":
            alert("Es viernes. ¡Fin de semana!");
            break;
        case "sábado":
        case "domingo":
            alert("Es fin de semana. Disfruta.");
            break;
        default:
            alert("No es un día especial.");
    }
}

function verificar_calificacion() {
    const calificacion = parseFloat(prompt("Ingresa una calificación (entre 1 y 10):"));
    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert("Reprobado");
        } else if (calificacion <= 8) {
            alert("Regular");
        } else if (calificacion === 9) {
            alert("Bien");
        } else {
            alert("Excelente");
        }
    } else {
        alert("Calificación inválida. Debe estar entre 1 y 10.");
    }
}

function calcular_precio_helado() {
    const topping = prompt("Elige un topping (oreo, KitKat o brownie):").toLowerCase();
    let precio = 50; 
    switch (topping) {
        case "oreo":
            precio += 10;
            break;
        case "kitkat":
            precio += 15;
            break;
        case "brownie":
            precio += 20;
            break;
        default:
            alert("No tenemos este topping, lo sentimos.");
    }

    alert(`El precio del helado es ${precio} MXN.`);
}


mostrar_menu();
