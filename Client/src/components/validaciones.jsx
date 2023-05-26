export default function Validaciones(valor, apartado){

if (apartado === "email"){
    if(!/\S+@\S+\.\S+/.test(valor)){ return "no es un mail apropiado"};
    if(valor.length === 0){return "agregue un email"};
    if(valor.length > 35){return "el email es muy extenso"};
    return ""
     //se me olvido especificar el porque no es valido
}
if (apartado === "password"){
    if (valor.length<6 || valor.length > 10) {return "su contraseña es inviable"};
    if (!valor.split("").some(num => !isNaN(num))){return "coloque un numero"};
    return ""
}


}