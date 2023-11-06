import Global from "./../Global";
import axios from "axios";

export default class ServiceEmpleados{


    getParametro(param1){
        return new Promise(function (resolve) { 
            var request="api/empleados/"+param1;
            var url =Global.urlApiEmpleados+request
            var empleado=[];
            axios.get(url).then(response=>{
                empleado=response.data
                resolve(empleado)
            })
         })
    }



    getEmpleado=new Promise(function(resolve){
        var request="api/empleados";
        var url =Global.urlApiEmpleados+request
        var empleados=[];
        axios.get(url).then(response=>{
            empleados=response.data
            resolve(empleados)
        })
       
    })
        
    
}