import Global from "./../Global";
import axios from "axios";

export default class ServiceEjemplo{


    



    getCoches=new Promise(function(resolve){
        var request="webresources/coches";
        var url =Global.urlApiCoches+request
        var coches=[];
        axios.get(url).then(response=>{
            coches=response.data
            resolve(coches)
        })
       
    })
        
    
}