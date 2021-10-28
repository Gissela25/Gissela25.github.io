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
            localStorage.setItem('bienvenida','se puede describir con palabras Es ternura y vocación que inspira día a día por su gran amor Por ello nuestras floristas, madres también, han trabajado en esta selección de arreglos florales que expresan una pequeña parte de lo que significa ser mamá Descubre aquí la combinación perfecta de flores que transmita a mamá el agradecimiento y el cariño de tantos Un hermoso arreglo que consta de ');
            valor = localStorage.getItem('bienvenida');
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Ser madre no se puede describir con palabras. Es ternura y vocación que inspira día a día por su gran amor' + 
            ' Por ello nuestras floristas, madres también, han trabajado en esta selección de arreglos florales que expresan una pequeña parte de lo que significa ser mamá.' +
            'Descubre aquí la combinación perfecta de flores que transmita a mamá el agradecimiento y el cariño de tantos Un hermoso arreglo que consta de:' + 
            'Orquideas en base de cerámica pequeña,' +
            'Ramilletes de girasoles y rosas,' +
            'Tropical bucket, todo por un precio de $150.';
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
    contenido.innerHTML = "<h1>\n\t DESCRIPCIÓN \n\t</h2>" + valor + "";
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", init);
}
