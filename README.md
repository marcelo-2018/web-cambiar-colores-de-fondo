#  Web cambiar colores de fondo 🙌

## Practica de JavaScript con DOM Template y Bootstrap 5 😁
Sitio web de practica que cambia  el color de fondo de la pantalla mediante botones

## body
````html
<body id="body">
    <div class="container-sm text-center">
        <button type="button" class="btn btn-dark mt-4" id="botonAgregar">Agregar Botones</button>
    </div>
    <div class="container-sm mt-4 text-center" id="containerBotones">
            
    </div>
    
    <template class="template" id="template">
        <div class="row justify-content-center" id="botones">
            <button class="btn btn-primary col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Primary</button>
            <button class="btn btn-secondary col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Secondary</button>
            <button class="btn btn-success col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Success</button>
            <button class="btn btn-danger col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Danger</button>
            <button class="btn btn-warning col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Warning</button>
            <button class="btn btn-info col-xxl-1 col-md-3 col-sm-6 col-6 border m-1" id="boton">Info</button>
        </div>
    </template>

    <script src="app.js"></script>
````