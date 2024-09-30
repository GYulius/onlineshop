import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

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
export class AddEditItemComponent {
  // value='salut';
  title: string="";
  description: string="";
  price: number=0;
  imageUrl: string="";

  showValue(){
    // console.log(this.value);
    console.log(this.title);
    console.log(this.description);
    console.log(this.price);
    console.log(this.imageUrl);
  }
}
