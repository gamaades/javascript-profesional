/* console.log("Hello, TypeScript");

function add (a: number, b: number) {
    return a + b;
}

const sum = add(2,4);
console.log("El resultado es: " + sum);
 */

// boolean
let muted: boolean = true;
muted = false;

// Números
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard"
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
//people.push("9000");

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any, esto indica que la variable puede tener cualquier tipo de dato en su interior
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

// Object 
let somObject: object = { type: "Wildcard"};

// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(9,2);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log(fourPlus6);

function fullName (firstName: string, lastName: string = "Mañan Vergara"): string {
    return `${firstName} ${lastName}`;
}

const richardName = fullName("Gustavo", "Mañán");
const richardName2 = fullName("Hugo");

console.log(richardName);
console.log(richardName2);
//