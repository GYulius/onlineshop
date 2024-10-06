import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-add-edit-item', // il folosim ca sa apelam componenta de angular: <app-add-edit-item></app-add-edit-item>
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule  // cu alt + shift + enter   le importa pe toate
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent implements OnChanges {
  title: string="";
  description: string="";
  price: number=0;
  imageUrl: string="";

  // dependecy injection ne ajuta sa injectam obiecte in constructori, Angular se va ocupa de initializarea lor

  @Input() item: any; // creaza un atribut pentru tag-ul de HTML; exemplu: class, style, name etc.

  constructor(private itemService: ItemService) {

  }

  showValue() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.price);
    console.log(this.imageUrl);

    this.itemService.displayInfo();

    let item = {
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
    this.itemService.createItem(item);
  }
  submitForm() {
    let body = {
      id: this.item != null ? this.item.id : "",
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
    if (body.id == "") {
      this.itemService.createItem(body);
    } else {
      this.itemService.updateItem(body);
    }
  }

  ngOnChanges(changes: SimpleChanges) { // aceasta metoda se apeleaza atunci cand elementele de la @Input() se schimba
    console.log("ngOnChanges");
    console.log(this.item);
     if(this.item != null) {
      console.log("Am primit o valoare noua pentru item dupa ce am apasat butonul edit");
      this.title = this.item.title;
      this.description = this.item.description;
      this.price = this.item.price;
      this.imageUrl = this.item.imageUrl;
     }
  }
}
