<template>
    <div>
        <h1 style="color:red">
            Proyecto Servicios VUE
        </h1>
        <h2>{{mensaje}}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from './../Services/ServiceEjemplos'

const service = new ServiceEjemplo();

    export default {
        name: "HomeComponent",
        mounted(){
            this.mensaje=service.getSaludo("Alumno")
        },
        data(){
            return{
                mensaje:""
            }
        }
    }
</script>