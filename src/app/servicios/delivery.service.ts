import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/platos.json';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Plato } from '../entidades/Plato';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  platosFile:any  = (data  as  any).default;
  public platosData:Plato[]=[];
  public platoEncontrado:Plato;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }
   
  public getPlatos():any[]{
    return this.platosData; //platosData
    console.log(this.platosData);
  }

  public getPlatoXId(idx:number):any{
      for(let plato of this.platosData){  //platosData
          if(plato.id == idx){
            return plato;
          } 
      }
  }

  

  //lee todos los platos  
  getPlatosFromDataBase(){
    return this.http.get("http://localhost:9000/api/v1/platos/").pipe(
      map( platosData => platosData));
  }

  //busca un plato por el id 
  getPlatoEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:9000/api/v1/platos/" + idx).pipe(
      map( platoEncontrado => platoEncontrado));
  }

  //busca los platos por un terminode busqueda .
  getPlatosBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:9000/api/v1/platos/search?filtro=" + termino).pipe(
      map( platosSearch => platosSearch));
  }

  platoAdminUrl:string = "http://localhost:9000/api/v1/platos/";
  newPlato( platoNuevo: Plato) {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(platoNuevo);
  
    return this.http.post<Plato>( this.platoAdminUrl, body,{'headers':headers}).pipe(map( nuevoPlato => {
            
            return nuevoPlato;
          }));
  }
  /*
  newPlato( platoNuevo: Plato) {
    return this.http.post<Plato>( this.platoAdminUrl, null, {params: new HttpParams().set("action", "insertar").set("id", "0")
    .set("nombre", platoNuevo.nombre).set("imagenPath", platoNuevo.imagenPath).set("precio", platoNuevo.precio).set("rubro", platoNuevo.rubro)
    }).pipe(map( nuevoPlato => {
            console.log(nuevoPlato.nombre);
            return nuevoPlato;
          }));
  }
  */

 updatePlato( platoUpdate: Plato) {
  const headers = { 'content-type': 'application/json'} 
  const body=JSON.stringify(platoUpdate);
  return this.http.put<Plato>( this.platoAdminUrl+platoUpdate.id, body,{'headers':headers} ).pipe(map( res => {
          console.log(res.nombre);
          return res;
        }));
}
/*
   updatePlato( platoUpdate: Plato) {
     let id = platoUpdate.id;
      return this.http.put<Plato>( this.platoAdminUrl, null, {params: new HttpParams().set("action", "actualizar").set("id", platoUpdate.id.toString())
      .set("nombre", platoUpdate.nombre).set("imagenPath", platoUpdate.imagenPath).set("precio", platoUpdate.precio).set("rubro", 'platoUpdate.rubro')
      }).pipe(map( res => {
              console.log(res.nombre);
              return res;
            }));
    }
*/
    deletePlato(idPlato: number){
      const url = "http://localhost:9000/api/v1/platos/" + idPlato;
      return this.http.delete( url)
            .pipe(
            map( res => {
              console.log(res);
              return res;
            }));
    }

    //deletePlato(idPlato: number){
      //return this.http.post( this.platoAdminUrl, null, {params: new HttpParams().set("action", "eliminar").set("id", idPlato.toString())})
        //    .pipe(
          //  map( res => {
            //  console.log(res);
              //return res;
            //}));
    //}

}


