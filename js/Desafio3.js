let i = 1;
let sueldoBase = 0;
let montoMensual = 0;
let porcentaje = 0;
let comision = 0;
let total = 0;
let edad = 0;
let bono3ra = 0;
let sexo = "";


while (confirm(`Desea calcular el ingreso del vendedor #${i}?`)) {
    do {
        sueldoBase = parseFloat(prompt(`Ingrese el Sueldo Base del vendedor ${i}`));
    } while (isNaN(sueldoBase) || sueldoBase <= 0);
    console.log(`sueldo base: ${sueldoBase}`);
    do {
        montoMensual = parseFloat(prompt(`Ingrese el monto mensual de las ventas del vendedor ${i}`));
        switch (true) {
            case (montoMensual >= 0 && montoMensual < 75):
                porcentaje = .05;
                break;
            case (montoMensual >= 90 && montoMensual < 200):
                porcentaje = .07;
                break;
            case (montoMensual >= 300 && montoMensual < 1000):
                porcentaje = .08;
                break;
            case (montoMensual >= 1500):
                porcentaje = .1;
                break;
            case (montoMensual < 0):
                alert("Monto Invalido. Vuelva a intentarlo.")
                break;
            default:
                porcentaje = .06
                break;
        }
    } while (isNaN(montoMensual) || montoMensual < 0);
    console.log(`monto mensual: ${montoMensual}`);
    console.log(`porcentaje: ${porcentaje}`);
    do {
        sexo = prompt(`Ingrese el sexo del vendedor ${i} (H/M)`)
    } while (!(sexo != null || sexo != "" || sexo.toUpperCase() == "H" || sexo.toUpperCase() == "M"));
    console.log(`sexo: ${sexo}`);
    do {
        edad = parseInt(prompt(`Ingrese la edad del vendedor ${i}`));
    } while (isNaN(edad) || edad <= 0);
    bono3ra = ((edad >= 60 && sexo.toUpperCase() == "H") || (edad >= 55 && sexo.toUpperCase() == "M")) ? 40 : 0;
    // if ((edad >= 60 && sexo.toUpperCase() === "H") || (edad >= 55 && sexo.toUpperCase() === "M")) {
    //     bono3ra = 40;
    // }
    console.log(`edad: ${edad}`);
    console.log(`bono 3ra edad: ${bono3ra}`)
    comision = montoMensual * porcentaje;
    total = sueldoBase + comision + bono3ra;
    porcentaje *= 100
    alert(`El ingreso del vendedor #${i} esta basado en: su sueldo base: ${sueldoBase}, el monto mensual de sus ventas: ${montoMensual}, el porcentaje de comision por ventas: ${porcentaje}%, el monto de comision por venta: ${comision}, bono tercera edad: ${bono3ra}. Total: ${total}`)
    i += 1;
}