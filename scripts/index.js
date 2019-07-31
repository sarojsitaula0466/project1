function replaceText(inputSelector,outputSelector){
    $(outputSelector).html($(inputSelector).val());
}

function replaceFirstName(){ // REFACTOR THIS
    $('p.first-last-name span:nth-child(1)').html($('input[name="first-name"]').val());
}

function replaceLastName(){ // REFACTOR THIS
    $('p.first-last-name span:nth-child(2)').html($('input[name="last-name"]').val());
}
function replacenickName(){ // REFACTOR THIS
    $('p.first-last-name span:last-child').html($('input[name="nick-name"]').val());
}

function replaceProtein(){ // REFACTOR THIS
    $('span.order-protein').html($('input[name="protein-type"]:checked').val());
}
function replacePortion(){ // REFACTOR THIS
    $('span.order-portion').html($('select[name="portion-type"]').val());
}
function replaceQuantity(){ // REFACTOR THIS
    $('span.order-quantity').html($('select[name="order-quantity"]').val());
}

function replaceVegetable(){ // REFACTOR THIS
    var valueArr = [] ; // This is how you declare an array in javascript
    $('input[name="vegetable-type"]:checked').each(function(){
        valueArr.push($(this).val()); // add value of the checked element to the array
    });
    $('span.order-vegetables').html(valueArr.join(','));
}
function replaceSauce(){// REFACTOR THIS
    var valueArr = [] ;
    $('input[name="sauce-type"]:checked').each(function(){
        valueArr.push($(this).val());
    });
    $('span.order-sauce').html(valueArr.join(','));
}

$(document).ready(function(){
    $('input[name="first-name"]').change(function() {
        replaceFirstName();
    });

    $('input[name="last-name"]').change(function() {
        replaceLastName();
    });
    $('input[name="nick-name"]').change(function() {
        replacenickName();
    });

    $('input[name="order-email"]').change(function() {
        replaceText('input[name="order-email"]','span.order-email')
    });
    $('input[name="address-name"]').change(function(){
        replaceText('input[name="address-name"]','span.address-name');
    });
    $('input[name="tel-name"]').change(function(){
        replaceText('input[name="tel-name"]','span.tel-name');
    });
    $('input[name="protein-type"]').change(function(){
        // alert($(this).val());
        replaceProtein();
    });
    $('input[name="vegetable-type"]').change(function(){
        replaceVegetable();
    });
    $('input[name="sauce-type"]').change(function(){
        replaceSauce();
    });
    $('select[name="portion-type"]').change(function(){
        replacePortion();
    });
    $('select[name="order-quantity"]').change(function(){
        replaceQuantity();
    });
    $('input#accept-terms').change(function(){
        if($(this).prop('checked')){
            $('.border-yellow').addClass('border-green').removeClass('border-yellow');
        }else{
            $('.border-green').addClass('border-yellow').removeClass('border-green');
        }
    });
    
});