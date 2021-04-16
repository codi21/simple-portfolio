document.addEventListener('DOMContentLoaded',function(){
    //Obtengo la tabla donde voy a colocar la data que viene de la datbase
    const table = document.getElementById('cryptos');
    const xhttp = new XMLHttpRequest();
    //Funcion que activo cuando el server me responde
    xhttp.onreadystatechange = function() {
        //TAREA A REALIZAR VERIFICAR ERRORES !!
        if(xhttp.readyState == 4 ){
            if(xhttp.status == 200){
                //Una vez esta todo ok , prosigo con la renderizacion de los datos obtenidos
                const resp = JSON.parse(xhttp.responseText);
                resp.compraDB.map((element,index)=>{
                    const row = table.insertRow();
                    row.innerHTML =`
                       <tr>
                            <td>${element.fecha}</td>
                            <td>${element.denominacion}</td>
                            <td>${element.inversion}</td>
                            <td>${element.precioCompra}</td>
                            <td>$4.4</td>
                            <td><input type="checkbox"><i class="fas fa-trash text-info ml-3"></i></td>
                       </tr>     
                    `
                    console.log(element);
                });
            }
        }
    }
    xhttp.open("GET","http://localhost:3000/compra",true);
    xhttp.send();
});
