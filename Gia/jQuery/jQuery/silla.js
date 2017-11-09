
// tomar todo el documento cuando está cargado (ready) y llama a una función de callback

// una vez cargado el documento
$(document).ready(function(){
//al cliquear en un elemento button
    $("button").click(function(){
//Ocultar () elemento
        $("p").hide();
    });
});


// una vez cargado el documento
$(document).ready(function(){
    //al cliquear en un elemento button
        $("img").click(function(){
    //Ocultar () elemento
            $(this).hide();
        });
    });
