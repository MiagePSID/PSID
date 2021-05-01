import { DatePipe } from "@angular/common";

export class Offre {
  id: number;
  titre: string;
  description: string;
  cat: string;
  public villeOffre: string;
  dateFinOffre: String;
  nbMedailles: number;
  moyennenote: number;
  user_id: number;


  constructor(description: string,id: number,titre: string, categorie: string,villeOffre: string, dateFinOffre: Date, nbMedailles: number, datePipe:DatePipe, user_id :number  ) {
    this.id = id;
    this.description= description;
    this.cat= categorie;
    this.titre =titre;
    this.villeOffre =villeOffre;
    //this.dateFinOffre = new Date(dateFinOffre.getTime() - (dateFinOffre.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    this.dateFinOffre = datePipe.transform(dateFinOffre, 'yyyy-MM-dd');
    this.nbMedailles = nbMedailles;
   // this.note = 0;
    this.moyennenote = this.moyennenote;
    this.user_id =user_id;
  }
  
}
