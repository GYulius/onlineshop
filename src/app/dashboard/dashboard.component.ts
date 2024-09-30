import { Component } from '@angular/core';
import {AddEditItemComponent} from "../add-edit-item/add-edit-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
