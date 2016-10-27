window.onload = function(){
    id('phone').onkeypress = function(){
        PhoneMask(this);
    }
    id('date').onkeypress = function(){
        DateMask(this);
    }
    id('cpf').onkeypress = function(){
        CpfMask(this);
    }
}

//adiciona mascara de date
function DateMask(date){
    if(IntegerMask(date)==false){
        event.returnValue = false;
    }
    return FormatField(date, '00/00/0000', event);
}

//adiciona mascara ao phone
function PhoneMask(phone){
    if(IntegerMask(phone)==false){
        event.returnValue = false;
    }
    return FormatField(phone, '(00)00000-0000', event);
}

//adiciona mascara ao CPF
function CpfMask(cpf){
    if(IntegerMask(cpf)==false){
        event.returnValue = false;
    }
    return FormatField(cpf, '000.000.000-00', event);
}

//valida numero inteiro com mascara
function IntegerMask(){
    if (event.keyCode < 48 || event.keyCode > 57){
        event.returnValue = false;
        return false;
    }
    return true;
}

//formata de forma generica os fields
function FormatField(field, mask, evento) {
    var mask_boolean;

    var string_received = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    only_numbers = field.value.toString().replace( exp, "" );

    var field_position = 0;
    var field_new_valor="";
    var size_mask = only_numbers.length;;

    if (string_received != 8) {
        for(i=0; i<= size_mask; i++) {
            mask_boolean  = ((mask.charAt(i) == "-")
            || (mask.charAt(i) == ".")
            || (mask.charAt(i) == "/"))
            mask_boolean  = mask_boolean
            || ((mask.charAt(i) == "(")
            || (mask.charAt(i) == ")")
            || (mask.charAt(i) == " "))
            if (mask_boolean) {
                field_new_valor += mask.charAt(i);
                size_mask++;
            }else {
                field_new_valor += only_numbers.charAt(field_position);
                field_position++;
            }
        }
        field.value = field_new_valor;
        return true;
    }else{
        return true;
    }
}
