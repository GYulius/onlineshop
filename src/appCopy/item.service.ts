import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string="https://api.codebyte-software.com:2323/api/items";

  constructor(private httpClient: HttpClient) {

  }
  /*
  displayInfo(): void{
    console.log("This is a message");
  }
  */
  createItem(item: any) {
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    this.httpClient.post(this.apiUrl, body).subscribe((response: any) => {
      console.log(response);
    })
  }
  readItems(){ // pentru ca este o metoda de citit toate elementele nu vom avea parametri
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      console.log(response);
    })
  }
// this.apiUrl+"/"+id -- concatenare de stringuri ca in Java a parametrului
  deleteItem(id: string) {
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any) => { // $ concatenarea de stringuri pe care o face Angular
      console.log(response);
    })
  }



}

