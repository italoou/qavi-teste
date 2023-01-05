
time(2, 40)

function time(h, m) {

  if(m === 0){
    console.log(hour(h) + " em ponto")
  }
  else if(m < 30){
    console.log(hour(h) + " e " + minutes(m));
  }
  else if(m === 30){
    console.log(hour(h) + " e meia");
  }
  else{
    console.log(minutes(30 - m%30) +" para as " + hour(h+1))
  }
}

function hour(h){
  var hour;
  switch(h){
    case 1:
      hour = "uma"
      break;
    case 2:
      hour = "duas"
      break;
    case 3:
      hour= "tres"
      break;
    case 4:
      hour = "quatro"
      break;
    case 5:
      hour = "cinco"
      break;
    case 6:
      hour = "seis"
      break;
    case 7:
      hour = "sete"
      break;
    case 8:
      hour = "oito"
      break;
    case 9:
      hour = "nove"
      break;
    case 10:
      hour = "dez"
      break;
    case 11:
      hour = "onze"
      break;
    case 12:
      hour = "doze"
      break;
    default:
      hour = "invalida"
      break
  }

  return hour
}

function minutes(m){
  
  minuteField = "";

  if(m == 0){
    return "em ponto"
  }

  switch(m){
    case 1:
      minuteField = "um"
      break;
    case 2:
      minuteField = "dois"
      break;
    case 3:
      minuteField = "tres"
      break;
    case 4:
      minuteField = "quatro"
      break;
    case 5:
      minuteField = "cinco"
      break;
    case 6:
      minuteField = "seis"
      break;
    case 7:
      minuteField = "sete"
      break;
    case 8:
      minuteField = "oito"
      break;
    case 9:
      minuteField = "nove"
      break;
    case 10:
      minuteField = "dez"
      break;
    case 11:
      minuteField = "onze"
      break;
    case 12:
      minuteField = "doze"
      break;
    case 13:
      minuteField = "treze"
      break;
    case 14:
      minuteField = "quatorze"
      break;
    case 15:
      minuteField = "quinze"
      break;
    case 16:
      minuteField = "dezesseis "
      break;
    case 17:
      minuteField = "dezesete"
      break;
    case 18:
      minuteField = "dezoito"
      break;
    case 19:
      minuteField = "dezenove"
      break;
    case 20:
      minuteField = "vinte"
      break;
    case 21:
      minuteField = "vinte e um"
      break;
    case 22:
      minuteField = " vinte e dois"
      break;
    case 23:
      minuteField = "vinte e tres"
      break;
    case 24:
      minuteField = "vinte e quatro"
      break;
    case 25:
      minuteField = "vinte e cinco"
      break;
    case 26:
      minuteField = "vinte e seis"
      break;
    case 27:
      minuteField = "vinte e sete"
      break;
    case 28:
      minuteField = "vinte e oito"
      break;
    case 29:
      minuteField = "vinte e nove"
      break;
    default:
      minuteField = "invalido"
      break;
  }

  return minuteField;
}