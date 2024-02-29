// ===== FUNCIONES =====

function lista_productos() {
    
    let codigo = Number(prompt("Codigo: 1 \t Producto: Tomate \t Precio: 10$" +
    "\nCodigo: 2 \t Producto: Lechuga \t Precio: 5$" +
    "\nCodigo: 3 \t Producto: Papa \t Precio: 7$" +
    "\nCodigo: 4 \t Producto: Zanahoria \t Precio: 12$" +
    "\nIngrese codigo de producto (0 para terminar): "))
    return codigo
}

function calculo(precio) {
    let cant = Number(prompt("Ingrese cantidad: "))
    let total = cant*precio
    return total
}

// ===== EJECUCION =====

alert("Bienvenido al SuperCoder, click en 'Aceptar' para comenzar la compra.")
let codProd = lista_productos();
let total = 0
let opcion;
const DESCUENTO = 0.25

while(codProd != 0){
    let subtotal = 0 // Inicializa el subtotal en 0 en cada ciclo, asi si se ingresa un codigo erroneo no suma lo que ya contenia el subtotal en el ciclo anterior
    if(codProd == 1) {
        subtotal = calculo(10)
        alert("Producto añadido con exito.")
    }else if (codProd == 2) {
        subtotal = calculo(5)
        alert("Producto añadido con exito.")
    }else if (codProd == 3) {
        subtotal = calculo(7)
        alert("Producto añadido con exito.")
    }else if (codProd == 4) {
        subtotal = calculo(12)
        alert("Producto añadido con exito.")
    }else {
        alert("Codigo de producto no encontrado.")
    }

    total += subtotal;
    codProd = lista_productos();
}

do{
    opcion = prompt("Los miembros de ClubCoder obtienen un 25% de descuento ¿Es miembro? (S/N): ") // Valida que no se ingrese otro caracter que no sea S o N
}while(opcion != 'S' && opcion != 'N')

if(opcion == 'N') {
    alert("El total es: $ " + total + "\n ¡Gracias por su compra!")
}else {
    total -= (total*DESCUENTO)
    alert("El total es: $ " + total + "\n ¡Gracias por su compra!")
}

