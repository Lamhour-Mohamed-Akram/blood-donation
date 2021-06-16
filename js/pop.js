
document.getElementById('oui').addEventListener('click', validatePopup);
document.getElementById('non').addEventListener('click', validatePopup);

document.getElementById('oui1').addEventListener('click', validatePopup1);
document.getElementById('non1').addEventListener('click', validatePopup1);

document.getElementById('oui2').addEventListener('click', validatePopup2);
document.getElementById('non2').addEventListener('click', validatePopup2);

document.getElementById('oui3').addEventListener('click', validatePopup3);
document.getElementById('non3').addEventListener('click', validatePopup3);

document.getElementById('oui4').addEventListener('click', validatePopup4);
document.getElementById('non4').addEventListener('click', validatePopup4);

document.getElementById('oui5').addEventListener('click', validatePopup5);
document.getElementById('non5').addEventListener('click', validatePopup5);

document.getElementById('oui6').addEventListener('click', validatePopup6);
document.getElementById('non6').addEventListener('click', validatePopup6);

document.getElementById('oui7').addEventListener('click', validatePopup7);
document.getElementById('non7').addEventListener('click', validatePopup7);

document.getElementById('oui8').addEventListener('click', validatePopup8);
document.getElementById('non8').addEventListener('click', validatePopup8);

document.getElementById('oui9').addEventListener('click', validatePopup9);
document.getElementById('non9').addEventListener('click', validatePopup9);

document.getElementById('oui10').addEventListener('click', validatePopup10);
document.getElementById('non10').addEventListener('click', validatePopup10);

document.getElementById('oui11').addEventListener('click', validatePopup11);
document.getElementById('non11').addEventListener('click', validatePopup11);

document.getElementById('oui12').addEventListener('click', validatePopup12);
document.getElementById('non12').addEventListener('click', validatePopup12);

document.getElementById('oui13').addEventListener('click', validatePopup13);
document.getElementById('non13').addEventListener('click', validatePopup13);

document.getElementById('oui14').addEventListener('click', validatePopup14);
document.getElementById('non14').addEventListener('click', validatePopup14);

document.getElementById('oui15').addEventListener('click', validatePopup15);
document.getElementById('non15').addEventListener('click', validatePopup15);

document.getElementById('oui16').addEventListener('click', validatePopup16);
document.getElementById('non16').addEventListener('click', validatePopup16);

document.getElementById('oui17').addEventListener('click', validatePopup17);
document.getElementById('non17').addEventListener('click', validatePopup17);

document.getElementById('oui18').addEventListener('click', validatePopup18);
document.getElementById('non18').addEventListener('click', validatePopup18);

document.getElementById('oui19').addEventListener('click', validatePopup19);
document.getElementById('non19').addEventListener('click', validatePopup19);







document.getElementById('oui20').addEventListener('click', validatePopup20);
document.getElementById('non20').addEventListener('click', validatePopup20);

document.getElementById('oui21').addEventListener('click', validatePopup21);
document.getElementById('non21').addEventListener('click', validatePopup21);

document.getElementById('oui22').addEventListener('click', validatePopup22);
document.getElementById('non22').addEventListener('click', validatePopup22);

document.getElementById('oui23').addEventListener('click', validatePopup23);
document.getElementById('non23').addEventListener('click', validatePopup23);

document.getElementById('oui24').addEventListener('click', validatePopup24);
document.getElementById('non24').addEventListener('click', validatePopup24);

document.getElementById('oui25').addEventListener('click', validatePopup25);
document.getElementById('non25').addEventListener('click', validatePopup25);

document.getElementById('oui26').addEventListener('click', validatePopup26);
document.getElementById('non26').addEventListener('click', validatePopup26);

document.getElementById('oui27').addEventListener('click', validatePopup27);
document.getElementById('non27').addEventListener('click', validatePopup27);

document.getElementById('oui28').addEventListener('click', validatePopup28);
document.getElementById('non28').addEventListener('click', validatePopup28);

document.getElementById('oui29').addEventListener('click', validatePopup29);
document.getElementById('non29').addEventListener('click', validatePopup29);

document.getElementById('oui30').addEventListener('click', validatePopup30);
document.getElementById('non30').addEventListener('click', validatePopup30);

document.getElementById('oui31').addEventListener('click', validatePopup31);
document.getElementById('non31').addEventListener('click', validatePopup31);

document.getElementById('oui32').addEventListener('click', validatePopup32);
document.getElementById('non32').addEventListener('click', validatePopup32);

document.getElementById('oui33').addEventListener('click', validatePopup33);
document.getElementById('non33').addEventListener('click', validatePopup33);

document.getElementById('oui34').addEventListener('click', validatePopup34);
document.getElementById('non34').addEventListener('click', validatePopup34);

document.getElementById('oui35').addEventListener('click', validatePopup35);
document.getElementById('non35').addEventListener('click', validatePopup35);

document.getElementById('oui36').addEventListener('click', validatePopup36);
document.getElementById('non36').addEventListener('click', validatePopup36);

document.getElementById('oui37').addEventListener('click', validatePopup37);
document.getElementById('non37').addEventListener('click', validatePopup37);

document.getElementById('oui38').addEventListener('click', validatePopup38);
document.getElementById('non38').addEventListener('click', validatePopup38);

document.getElementById('oui39').addEventListener('click', validatePopup39);
document.getElementById('non39').addEventListener('click', validatePopup39);





$(document).ready(function () {

    $("#a1").attr("disabled", true);
  
    $("#non,#non1,#non2,#non3,#non4,#oui,#oui1,#oui2,#oui3,#oui4").click(function () {
  
      const re =  $('#non').is(":checked") && $('#non1').is(":checked") && $('#non2').is(":checked") && $('#non3').is(":checked")&& $('#non4').is(":checked");
  
      if (re) $("#a1").attr("disabled", false);
      else $("#a1").attr("disabled", true);
    })
  
  })



  
$(document).ready(function () {

    $("#a2").attr("disabled", true);
  
    $("#non5,#non6,#non7,#non8,#non9,#oui5,#oui6,#oui7,#oui8,#oui9").click(function () {
  
      const re =  $('#non5').is(":checked") && $('#non6').is(":checked") && $('#non7').is(":checked") && $('#non8').is(":checked")&& $('#non9').is(":checked");
  
      if (re) $("#a2").attr("disabled", false);
      else $("#a2").attr("disabled", true);
    })
  
  })



  
$(document).ready(function () {

    $("#a3").attr("disabled", true);
  
    $("#non10,#non11,#non12,#non13,#non14,#oui10,#oui11,#oui12,#oui13,#oui14").click(function () {
  
      const re =  $('#non10').is(":checked") && $('#non11').is(":checked") && $('#non12').is(":checked") && $('#non13').is(":checked")&& $('#non14').is(":checked");
  
      if (re) $("#a3").attr("disabled", false);
      else $("#a3").attr("disabled", true);
    })
  
  })



  
$(document).ready(function () {

    $("#a4").attr("disabled", true);
  
    $("#non15,#non16,#non17,#non18,#non19,#oui15,#oui16,#oui17,#oui18,#oui19").click(function () {
  
      const re =  $('#non15').is(":checked") && $('#non16').is(":checked") && $('#non17').is(":checked") && $('#non18').is(":checked")&& $('#non19').is(":checked");
  
      if (re) $("#a4").attr("disabled", false);
      else $("#a4").attr("disabled", true);
    })
  
  })



  
$(document).ready(function () {

    $("#a5").attr("disabled", true);
  
    $("#non20,#non21,#non22,#non23,#non24,#oui20,#oui21,#oui22,#oui23,#oui24").click(function () {
  
      const re =  $('#non20').is(":checked") && $('#non21').is(":checked") && $('#non22').is(":checked") && $('#non23').is(":checked")&& $('#non24').is(":checked");
  
      if (re) $("#a5").attr("disabled", false);
      else $("#a5").attr("disabled", true);
    })
  
  })


  
$(document).ready(function () {

    $("#a6").attr("disabled", true);
  
    $("#non25,#non26,#non27,#non28,#non29,#oui25,#oui26,#oui27,#oui28,#oui29").click(function () {
  
      const re =  $('#non25').is(":checked") && $('#non26').is(":checked") && $('#non27').is(":checked") && $('#non28').is(":checked")&& $('#non29').is(":checked");
  
      if (re) $("#6").attr("disabled", false);
      else $("#a6").attr("disabled", true);
    })
  
  })




  
$(document).ready(function () {

    $("#a7").attr("disabled", true);
  
    $("#non30,#non31,#non32,#non33,#non34,#oui30,#oui31,#oui32,#oui33,#oui34").click(function () {
  
      const re =  $('#non30').is(":checked") && $('#non31').is(":checked") && $('#non32').is(":checked") && $('#non33').is(":checked")&& $('#non34').is(":checked");
  
      if (re) $("#a7").attr("disabled", false);
      else $("#a7").attr("disabled", true);
    })
  
  })




  
$(document).ready(function () {

    $("#a8").attr("disabled", true);
  
    $("#non35,#non36,#non37,#non38,#non39,#oui,#oui35,#oui36,#oui37,#oui38").click(function () {
  
      const re =  $('#no35').is(":checked") && $('#non36').is(":checked") && $('#non37').is(":checked") && $('#non38').is(":checked")&& $('#non39').is(":checked");
  
      if (re) $("#a8").attr("disabled", false);
      else $("#a8").attr("disabled", true);
    })
  
  })

  
  
  
  
  function validatePopup() {
    const ispopupcheckedoui = document.getElementById('oui').checked;
    const ispopupcheckednon = document.getElementById('non').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok').style.display = "block";
    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok').style.display = "none";
      
    }
  }
  
  
  
  
  function validatePopup1() {
    const ispopupcheckedoui = document.getElementById('oui1').checked;
    const ispopupcheckednon = document.getElementById('non1').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok1').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok1').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  
  function validatePopup2() {
    const ispopupcheckedoui = document.getElementById('oui2').checked;
    const ispopupcheckednon = document.getElementById('non2').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok2').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok2').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup3() {
    const ispopupcheckedoui = document.getElementById('oui3').checked;
    const ispopupcheckednon = document.getElementById('non3').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok3').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok3').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup4() {
    const ispopupcheckedoui = document.getElementById('oui4').checked;
    const ispopupcheckednon = document.getElementById('non4').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok4').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok4').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup5() {
    const ispopupcheckedoui = document.getElementById('oui5').checked;
    const ispopupcheckednon = document.getElementById('non5').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok5').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok5').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup6() {
    const ispopupcheckedoui = document.getElementById('oui6').checked;
    const ispopupcheckednon = document.getElementById('non6').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok6').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok6').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup7() {
    const ispopupcheckedoui = document.getElementById('oui7').checked;
    const ispopupcheckednon = document.getElementById('non7').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok7').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok7').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup8() {
    const ispopupcheckedoui = document.getElementById('oui8').checked;
    const ispopupcheckednon = document.getElementById('non8').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok8').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok8').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup9() {
    const ispopupcheckedoui = document.getElementById('oui9').checked;
    const ispopupcheckednon = document.getElementById('non9').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok9').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok9').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup10() {
    const ispopupcheckedoui = document.getElementById('oui10').checked;
    const ispopupcheckednon = document.getElementById('non10').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok10').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok10').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup11() {
    const ispopupcheckedoui = document.getElementById('oui11').checked;
    const ispopupcheckednon = document.getElementById('non11').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok11').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok11').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup12() {
    const ispopupcheckedoui = document.getElementById('oui12').checked;
    const ispopupcheckednon = document.getElementById('non12').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok12').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok12').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup13() {
    const ispopupcheckedoui = document.getElementById('oui13').checked;
    const ispopupcheckednon = document.getElementById('non13').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok13').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok13').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup14() {
    const ispopupcheckedoui = document.getElementById('oui14').checked;
    const ispopupcheckednon = document.getElementById('non14').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok14').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok14').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup15() {
    const ispopupcheckedoui = document.getElementById('oui15').checked;
    const ispopupcheckednon = document.getElementById('non15').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok15').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok15').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup16() {
    const ispopupcheckedoui = document.getElementById('oui16').checked;
    const ispopupcheckednon = document.getElementById('non16').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok16').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok16').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup17() {
    const ispopupcheckedoui = document.getElementById('oui17').checked;
    const ispopupcheckednon = document.getElementById('non17').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok17').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok17').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup18() {
    const ispopupcheckedoui = document.getElementById('oui18').checked;
    const ispopupcheckednon = document.getElementById('non18').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok18').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok18').style.display = "none";

    }
  }
  
  
  
  function validatePopup19() {
    const ispopupcheckedoui = document.getElementById('oui19').checked;
    const ispopupcheckednon = document.getElementById('non19').checked;

    if (ispopupcheckedoui) {
      document.getElementById('ok19').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok19').style.display = "none";

    }
  }
  
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  function validatePopup20() {
    const ispopupcheckedoui = document.getElementById('oui20').checked;
    const ispopupcheckednon = document.getElementById('non20').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok20').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok20').style.display = "none";

    }
  }
  
  
  
  
  function validatePopup21() {
    const ispopupcheckedoui = document.getElementById('oui21').checked;
    const ispopupcheckednon = document.getElementById('non21').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok21').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok21').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  
  function validatePopup22() {
    const ispopupcheckedoui = document.getElementById('oui22').checked;
    const ispopupcheckednon = document.getElementById('non22').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok22').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok22').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup23() {
    const ispopupcheckedoui = document.getElementById('oui23').checked;
    const ispopupcheckednon = document.getElementById('non23').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok23').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok23').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup24() {
    const ispopupcheckedoui = document.getElementById('oui24').checked;
    const ispopupcheckednon = document.getElementById('non24').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok24').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok24').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup25() {
    const ispopupcheckedoui = document.getElementById('oui25').checked;
    const ispopupcheckednon = document.getElementById('non25').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok25').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok25').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup26() {
    const ispopupcheckedoui = document.getElementById('oui26').checked;
    const ispopupcheckednon = document.getElementById('non26').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok26').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok26').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup27() {
    const ispopupcheckedoui = document.getElementById('oui27').checked;
    const ispopupcheckednon = document.getElementById('non27').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok27').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok27').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup28() {
    const ispopupcheckedoui = document.getElementById('oui28').checked;
    const ispopupcheckednon = document.getElementById('non28').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok28').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok28').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup29() {
    const ispopupcheckedoui = document.getElementById('oui29').checked;
    const ispopupcheckednon = document.getElementById('non29').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok29').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok29').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup30() {
    const ispopupcheckedoui = document.getElementById('oui30').checked;
    const ispopupcheckednon = document.getElementById('non30').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok30').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok30').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup31() {
    const ispopupcheckedoui = document.getElementById('oui31').checked;
    const ispopupcheckednon = document.getElementById('non31').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok31').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok31').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup32() {
    const ispopupcheckedoui = document.getElementById('oui32').checked;
    const ispopupcheckednon = document.getElementById('non32').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok32').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok32').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup33() {
    const ispopupcheckedoui = document.getElementById('oui33').checked;
    const ispopupcheckednon = document.getElementById('non33').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok33').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok33').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup34() {
    const ispopupcheckedoui = document.getElementById('oui34').checked;
    const ispopupcheckednon = document.getElementById('non34').checked;

    if (ispopupcheckedoui) {
      document.getElementById('ok34').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok34').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup35() {
    const ispopupcheckedoui = document.getElementById('oui35').checked;
    const ispopupcheckednon = document.getElementById('non35').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok35').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok35').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup36() {
    const ispopupcheckedoui = document.getElementById('oui36').checked;
    const ispopupcheckednon = document.getElementById('non36').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok36').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok36').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup37() {
    const ispopupcheckedoui = document.getElementById('oui37').checked;
    const ispopupcheckednon = document.getElementById('non37').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok37').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok37').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  function validatePopup38() {
    const ispopupcheckedoui = document.getElementById('oui38').checked;
    const ispopupcheckednon = document.getElementById('non38').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok38').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok38').style.display = "none";

    }
  }
  
  
  
  function validatePopup39() {
    const ispopupcheckedoui = document.getElementById('oui39').checked;
    const ispopupcheckednon = document.getElementById('non39').checked;
  
    if (ispopupcheckedoui) {
      document.getElementById('ok39').style.display = "block";

    }
  
    if (ispopupcheckednon) {
      document.getElementById('ok39').style.display = "none";

    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  