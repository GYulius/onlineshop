import { Component } from '@angular/core';
import {ItemService} from "../item.service";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items', // modul incare apelam componenta in celelalte componente sau pagini html
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  itemsList: Array<any>=[];

  constructor(private itemService: ItemService){
    this.itemsList.push("item 1");
    this.itemsList.push("item 2");
    this.itemsList.push("item 3");
    this.itemsList.push("item 4");
    this.itemsList.push("item 5");

    console.log(this.itemsList);
  }


}
