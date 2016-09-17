function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    hifen = '-'
    if($.isNumeric(v) || hifen.localeCompare(v)) {
        v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    } else {
    }
}
function id( el ){
	return document.getElementById( el );
}


window.onload = function(){
	id('telefone').onkeypress = function(){
		mascara( this, mtel );
	}
    id('data').onkeypress = function(){
		mascara_data( this, mdate );
	}
}




function mascara_data(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascaradate()",1)
}
function execmascaradate(){
    v_obj.value=v_fun(v_obj.value)
}
function mdate(v){
    hifen = '-'
    if($.isNumeric(v) || hifen.localeCompare(v)) {
        v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/g,"$1/$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v=v.replace(/(\d)(\d{4})$/,"$1/$2");    //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    } else {
    }
}
function id( el ){
	return document.getElementById( el );
}




// function formata_data(obj,prox) {
//     v = obj.value;
//     barra = '/';
//     if($.isNumeric(v) || barra.localeCompare(v)) {
//         switch (obj.value.length) {
//         	case 2:
//                 if($.isNumeric(obj.value)) {
//         		      obj.value = obj.value + "/";
//         		      break;
//                   }
//         	case 5:
//                 if($.isNumeric(obj.value)) {
//         		          obj.value = obj.value + "/";
//         		          break;
//                       }
//         	case 9:
//         		prox.focus();
//         		break;
//         }
//     }else{
//
//     }
// }
//
//
// function Apenas_Numeros(caracter){
//     var nTecla = 0;
//     if (document.all) {
//       nTecla = caracter.keyCode;
//     } else {
//       nTecla = caracter.which;
//     }
//     if ((nTecla> 47 && nTecla <58)
//     || nTecla == 8 || nTecla == 127
//     || nTecla == 0 || nTecla == 9  // 0 == Tab
//     || nTecla == 13) { // 13 == Enter
//       return true;
//     } else {
//       return false;
//     }
// }
