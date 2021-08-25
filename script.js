function test() {
    var msg = window.document.getElementById('msg')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <12) {
      msg.innerHTML = `Hi &#x1f590 Bom dia! Agora são${hora} horas.`
  }else if(hora >= 12 && hora <18) {
      msg.innerHTML = `Hi &#x1f590 Boa tarde! Agora são ${hora} horas.`
  } else {
      msg.innerHTML = `Hi &#x1f590 Boa noite! Agora são ${hora} horas.`
  }
  }
