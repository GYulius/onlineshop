import { Component } from '@angular/core';
import {AddEditItemComponent} from "../add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
