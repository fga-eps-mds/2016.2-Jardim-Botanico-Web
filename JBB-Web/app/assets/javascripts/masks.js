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
    id('cpf').onkeypress = function(){
		mascara_cpf( this, mcpf );
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
        v=v.replace(/^(\d{2})(\d)/g,"$1/$2");
        v=v.replace(/^(\d{2})(\d)/g,"$1/$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v=v.replace(/(\d)(\d{4})$/,"$1/$2");    //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    } else {
    }
}
function id( el ){
	return document.getElementById( el );
}


function mascara_cpf(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascaracpf()",1)
}
function execmascaracpf(){
    v_obj.value=v_fun(v_obj.value)
}
function mcpf(v){
    hifen = '-'
    ponto = '.'
    if($.isNumeric(v) || hifen.localeCompare(v) || ponto.localeCompare(v)) {
        v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
        	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
        	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
        	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
        	return v;
    } else {
    }
}
function id( el ){
	return document.getElementById( el );
}
