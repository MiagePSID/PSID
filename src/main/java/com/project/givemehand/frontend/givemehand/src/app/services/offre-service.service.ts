import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';
import { Offre } from '../classes/offre';
import { Createoffer } from '../classes/createoffer';
import { Filtre } from '../classes/filtre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OffreServiceService{
 
  public url =environment.api_url;

  constructor(private http: HttpClient) { 

  }


  getOffreList(): Observable<any> {
    return this.http.get(this.url+'/getAllOffer');
  }

  /* remplacée par la function filtrer()
  getofferfilter(categorie:String, ville:String, nbmedailles:number, motcle:String, date:String):Observable<any> {
  return this.http.get(this.url+"/getofferfilter/"+categorie+"/"+ville+"/"+nbmedailles+"/"+motcle+"/"+date);
  }
  */

  getCategories(): Observable<any> {
    return this.http.get(this.url+'/getAllCat');
  }
  deleteoffer(id:number):Observable<any> {
    return this.http.delete(this.url+"/DeleteOffer/"+id,{ responseType: 'text'});
  }
  saveoffer(offres:Createoffer)
  {
     return this.http.post(this.url+'/CreateOffer', offres, { responseType: 'text'});
  }
 updateoffer(value: Createoffer):Observable<any> {
  return this.http.put(this.url+"/UpdateOffer/",value,{ responseType: 'text'});
} 
getofferid(id:number):Observable<any>
{
  return this.http.get(this.url+"/findById/"+ id)
}

filtrer(filtre: Filtre):Observable<any>
{
    let date;
    let medailles;
    if(filtre.categorie == undefined){
      filtre.categorie = "TOUTES";
    }
    if(filtre.dateFiltre == undefined){
      date = "01011000"
    }
    else{
      let dates  = filtre.dateFiltre.split('-');
      date = dates[0]+ dates[1]+dates[2];
    }
    if(filtre.nbMedailles == undefined || filtre.nbMedailles == "" ){
      medailles = "-1";
    }
    else{
      medailles = filtre.nbMedailles;
    }
    if(filtre.ville == undefined){
      filtre.ville = "";
    }
    else{
      let v = filtre.ville.split(",");
      filtre.ville = v[0];
      
    }
    console.log(filtre.ville);
    if(filtre.motCle == undefined){
      filtre.motCle = "";
    }

    let httpParams = new HttpParams()
                        .set('categorie', filtre.categorie)
                      .set('ville', filtre.ville)
                      .set('nbMedailles', medailles)
                      .set('motcle', filtre.motCle)
                      .set('date', date);
                    
    return this.http.get<Offre>(this.url+"/filterOffers", {params: httpParams, responseType: 'json'});

  }
}
