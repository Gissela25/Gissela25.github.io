var valor;
function init()
{
    var seleccion = document.getElementById("seleccionar");
    if(seleccion.addEventListener)
    {
        seleccion.addEventListener("click", mostrar, false);
    }
    else if(seleccion.attachEvent)
    {
        seleccion.attachEvent("onclick", mostrar);
    }
}
function mostrar()
{
    //Determinando la opción seleccionada
    var opcion = document.form.methods.options[document.form.methods.selectedIndex].value;
    switch(opcion)
    {
        case "api":
            // Utilizando la Api de Local Storage, podemos guardar y luegorecuperar un valor
            localStorage.setItem('bienvenida', 'Ser madre no se puede describir con palabras Es ternura y vocación que inspira día a día por su gran amor Por ello nuestras floristas, madres también, han trabajado en esta selección de arreglos florales que expresan una pequeña parte de lo que significa ser mamá Descubre aquí la combinación perfecta de flores que transmita a mamá el agradecimiento y el cariño de tantos Un hermoso arreglo que consta de ');
            valor = localStorage.getItem('bienvenida');
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Bienvenidos, también podemos usar notación de matrices';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // Y claro, también es válido utilizar notación de propiedades de objetos */
            localStorage.bienvenida = 'Bienvenidos, igual podemos usarlo como propiedades de objeto';
            valor = localStorage.bienvenida;
            break;
        default:
            alert("Esta opción no existe");
            break;
    }
    var contenido = document.getElementById("content");
    contenido.innerHTML = "<p>\nDescripción : "  + valor + "\n\t</p>\n";
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", init);
}
