var boton=document.getElementById('agregar');
var lista=document.getElementById("lista");
var data=[];
boton.addEventListener("click",agregar);
var cant=0;
function agregar(){
    var nombre=document.querySelector('#nombre').value;
    var edad=parseFloat(document.querySelector('#edad').value);
    var especialidad=(document.querySelector('#especialidad').value);
    var salario=parseFloat(document.querySelector('#salario').value);
    //agrega elementos al arreglo
    data.push(
        {"id":cant,"nombre":nombre,"edad":edad,"especialidad":especialidad,"salario":salario}
    );
   
   //convertir el arreglo a json
  // console.log(JSON.stringify(data));
  var id_row='row'+cant;
  var fila='<tr id='+id_row+'><td>'+nombre+'</td><td>'+edad+'</td><td>'+especialidad+'</td><td>'+salario+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a></td></tr>';
  //agregar fila a la tabla
  $("#lista").append(fila);
  $("#nombre").val('');
  $("#edad").val('');
  $("#especialidad").val('');
  $("#salario").val('')
  cant++;
  sumar();
}
function eliminar(row){
    //remueve la fila de la tabla html
    $("#row"+row).remove();
   //remover el elmento del arreglo
   //data.splice(row,1);
   //buscar el id a eliminar
   var i=0;
   var pos=-1;
   for (x of data){
       console.log(x.id);
       if (x.id==row){
           pos=i;
       }
       i++;
   }
   data.splice(pos,1);
  sumar();
}
function sumar(){
    let tot=0;
    for (x of data){
       tot=tot+x.total;
    }
    
}   
function save(){
    var json=JSON.stringify(data);
    $.ajax({
        type: "POST",
        data: "json="+json,
        success:function(respo){
           location.reload();
        }
        
    });
}