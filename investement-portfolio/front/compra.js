document.addEventListener('DOMContentLoaded',function(){
    //Voy a guardar los datos transitoriamente , luego las tendre que traer desde la API.
    const data = {
            compras : []
    }
    const idGenerated = (compras)=>{
        return compras.length+1
    }

    //MUESTRO EL PANEL NECESARIO PARA CARGAR COMPRAS
    document.getElementById('compra').addEventListener('click',function(r){
        r.preventDefault();
        //Show panel 
        document.getElementById('formCompra').classList.remove('d-none');

    });

    //GENERO ID PARA COMPRA


    //CARGO COMPRA
    const guardar = document.getElementById('guardarCompra');
    guardar.addEventListener('click' , function(e){
        e.preventDefault();
        //Obtengo los componentes correspondientes a la funcion compra
        const date = document.getElementById('fecha').innerText;
        const precio = document.getElementById('precio');
        const denominacion = document.getElementById('denominacion');
        const inversion = document.getElementById('inversion');
        const table = document.getElementById('cryptos');
        const advertencia = document.getElementById('advertencia');
        const compra = {
            id : idGenerated(data.compras),
            fecha : date,
            precioCompra : precio.value,
            denominacion : denominacion.value,
            inversion : inversion.value
        }
        //Verificaciones de las campos de entrada
        //INCOMPLETO
        if(precio.value==""){ //Si llega haber algun campo incompleto , muestr advertencia por pantalla
           advertencia.classList.remove('d-none'); 
            return 
        }
        advertencia.classList.add('d-none'); 
        const rowCompra = `
            <tr id="${compra.id}">
                <td>${compra.fecha}</td>
                <td>${compra.denominacion}</td>
                <td>$${compra.inversion}</td>
                <td>${compra.precioCompra}</td>
                <td>$4.4</td>
                <td><input type="checkbox"><i class="fas fa-trash text-info ml-3"></i></td>
            </tr>`; //en $4.4 vmaos a buscar el precio en tiempo real
        const row = table.insertRow();
        row.innerHTML = rowCompra;
        //Cuando lleno formulario y obtengo los datos de la nueva operacion de compra , dejo de mostrar el mini panel
        document.getElementById('formCompra').classList.add('d-none');
        data.compras.push(compra);
        console.log(data.compras);
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/compra", true);
        let compraJSON = JSON.stringify(compra);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(compraJSON);
        return
    });
});
