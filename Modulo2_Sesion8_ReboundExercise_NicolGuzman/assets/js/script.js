// Sesión 8 del Modulo 2: Rebound Exercise
let opt;

do {
    opt = prompt('Selecciona una opción del menú:\n1-Ilustración.\n2-Diseño.\n3-Vestuario y Tejidos.\n4-Asesorías.\n5-Salir'
    );

    switch (opt) {
        case '1':
            alert('Bienvenido al panel de comisiones para ilustraciones personalizadas. En estos momentos no tenemos cupos disponibles.');
            break;
        case '2':
            alert('Bienvenido al panel de comisiones para diseño gráfico. En estos momentos no tenemos cupos disponibles.');
            break
        case '3':
            alert('Bienvenido al panel de comisiones para diseño en vestuario, confección y tejidos. En estos momentos no tenemos cupos disponibles.');
            break
        case '4':
            alert('Bienvenido al panel de asesorías. En estos nuestros servicios se encuentran suspendidos.');
            break
        case '5':
            alert('Gracias por preferir nuestros servicios. Esperamos verlo pronto!');
            break
        default:
            alert('La opción no es valida, por favor inténtelo de nuevo.');
    }
} while (opt !== '5');



