if (typeof jQuery === 'undefined') {
  throw new Error('This functions requires jQuery')
}


function tooltipError(element, placement, message){
    $(element).attr( "data-toggle", function() {
         return "popover";
    });
    $(element).attr( "data-placement", function() {
        return placement;
    });
    $(element).attr( "data-content", function() {
        return message;
    });
    $(element).popover('show');
    formError(element);
}

function tooltipNoError(element){
    $(element).attr( "data-toggle", function() {
         return '';
    });
    $(element).attr( "data-placement", function() {
        return '';
    });
    $(element).attr( "data-content", function() {
        return '';
    });
    $(element).attr( "data-original-title", function() {
        return '';
    });
    $(element).popover('hide');
    noFormError(element);
}

function formError(element){
    if (!($(element).hasClass('j-form-error'))){
        $(element).addClass('j-form-error');
    }
}

function noFormError(element){
    if ($(element).hasClass('j-form-error')){
        $(element).removeClass('j-form-error');
    }
}

function validaEmail(email){
    //alert(email);
    if(email != ""){
        var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(filtro.test(email)){
           return "";
        } else {
           return "Endereço de email inválido";
        }
    } else {
        return "Email não pode ficar vazio"
    }
}