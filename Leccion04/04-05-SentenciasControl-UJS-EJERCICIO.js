let hora = 12;
let espacioTiempo;

if (hora >= 6 && hora <= 11) {
  espacioTiempo = "Buenos días";
} else if (hora >= 12 && hora <= 18) {
  espacioTiempo = "Buenas tardes";
} else if (hora >=19 && hora <= 24) {
  espacioTiempo = "Buenas noches";
} else if (hora >= 0 && hora < 6) {
  espacioTiempo = "Durmiendo";
} else {
  espacioTiempo = "Valor incorrecto";
}

console.log(espacioTiempo);