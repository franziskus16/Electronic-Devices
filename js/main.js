function getJSON(){

    $.getJSON('js/lista.json', function(dataDevice){
        console.log(dataDevice);
        createElement(dataDevice);
        createList(dataDevice);
        createTable(dataDevice);
        createGrid(dataDevice);
    });
}
getJSON();

function createElement(param){
     var aparatos = param.products;
        var nAparato = aparatos[2].name;
        var texto = aparatos[2].description;
        var precio = aparatos[2].price + "€";
        var fotos = aparatos[2].image;
    
        var grupo = $('<ul/>');
        var nombre = $('<li/>');
        var eslogan = $('<li/>');
        var valor = $('<li/>');
        var imgfoto = $("<img id='retocadas' src='" + fotos  + "'>"); 
    
        eslogan.append(texto);
        nombre.append(nAparato);
        valor.append(precio);
        imgfoto.append(fotos);

        //APPENDS//

        grupo.append(nombre);
        grupo.append(imgfoto);
        grupo.append(eslogan);
        grupo.append(valor);
        $('#unico').append(grupo);
    
    
};

function createList(param){
       
    var aparatos = param.products;
    $.each(aparatos, function(index, value){
        var nAparato = value.name;
        var texto = value.description;
        var precio = value.price + "€";
        var fotos = value.image;
    
        
        var grupo = $('<ul/>');
        var nombre = $('<li class="titulista"/>');
        var eslogan = $('<li/>');
        var valor = $('<li/>');
    
        eslogan.append(texto);
        nombre.append(nAparato);
        valor.append(precio);
        
        //APPENDS//

        grupo.append(nombre);
        grupo.append(eslogan);
        grupo.append(valor);
        $('#lista').append(grupo);
 });
}

function createTable(param){

    var aparatos = param.products;
    $.each(aparatos, function(index, value){
        var nAparato = value.name;
        var texto = value.description;
        var precio = value.price + "€";
        var fotos = value.image;
    
        
        var grupo = $('<tbody class="tablita"/>');
        var nombre = $('<td class="titulo"/>');
        var eslogan = $('<td/>');
        var valor = $('<td/>');
        var imgfoto = $("<img class='retoque' src='" + fotos  + "'>"); 
    
        eslogan.append(texto);
        nombre.append(nAparato);
        valor.append(precio);
        imgfoto.append(fotos);
        
        //APPENDS//

        grupo.append(nombre);
        grupo.append(imgfoto);
        grupo.append(eslogan);
        grupo.append(valor);
        $('#tabla').append(grupo);
        grupo.css("background", "#2980b9");
        grupo.css("text-align", "center");
        
 });
}

function createGrid(param){
    
    var aparatos = param.products;
    $.each(aparatos, function(index, value){
        var nAparato = value.name;
        var texto = value.description;
        var precio = value.price + "€";
        var fotos = value.image;
    
        
        var grupo = $('<div class="gridito"></div>');
        var nombre = $('<p class="parrafo1"></p>');
        var eslogan = $('<p class="parrafo2"/>');
        var valor = $('<p class="parrafo3"/>');
        var imgfoto = $("<img class='retoque' src='" + fotos  + "'>"); 
    
        eslogan.append(texto);
        nombre.append(nAparato);
        valor.append(precio);
        imgfoto.append(fotos);
                
        //APPENDS//

        grupo.append(nombre);
        grupo.append(imgfoto);
        grupo.append(eslogan);
        grupo.append(valor);
        $('#grid').append(grupo);
 });
}


//FUNCTION TO SECTION//
$(function() {
    $('a[href*=#top]:not([href=#top])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});


