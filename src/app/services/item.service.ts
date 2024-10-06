import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl: string = "https://api.codebyte-software.com:2323/api/items";
  private itemsList: Array<any> = [];
  private itemSubject = new BehaviorSubject<Array<any>>([]);

  constructor(private httpClient: HttpClient) {
    this.readItem();
  }
    displayInfo(): void {
    console.log('This is a messages');
    }
  createItem(item: any) {
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    this.httpClient.post(this.apiUrl, body).subscribe((response: any) => {
      console.log(response);
      this.readItem();
    });
  }
  //pentru ca este o metoda de citit nu vom avea parametrii
  readItem() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      console.log(response);
      console.log(response.data);
      // this.itemsList = response.data;
      // metoda next anunta toti abonatii (cei care au dat subcribe) ca au aparut modificari pentru aceasta listas
      this.itemSubject.next(response.data);
    })
  }
  // this.apiUrl+"/"+id - concatenare ca in Java
  deleteItem(id: string) {
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any) => { //`${this.apiUrl}/${id}` concatenare de string-uri pe care o face Angular
      console.log(response);
      this.readItem();
    })
  }
  getItemsList() {
    return this.itemSubject.asObservable(); // asObservable ne permite sa dam subscribe si sa fim la curent cu toate modificarile
  }

  updateItem(item : any) {
    let body = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    }
    // this.httpClient.put(`${this.apiUrl}/${item.id}`, item).subscribe((response: any) => {})
    this.httpClient.put(this.apiUrl,body).subscribe((response: any) => {
      console.log(response);
      this.readItem();
    })
  }
}
