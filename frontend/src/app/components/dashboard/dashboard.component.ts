import { Component } from '@angular/core';
import { DbproductsService } from '../../services/dbproducts.service';
import { CdkDrag, CdkDragRelease } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  itemName?: string;
  itemPrize?: string;

  groceries: any[] = [];

  isDraggable = true;

  constructor(private dbproductsService: DbproductsService) {}
  
  //onClick function
  onClick() {

    const data = {
      item_name: this.itemName,
      price: this.itemPrize
    }

    this.dbproductsService.getProducts().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error("Error is:", error);
      }
    );


    this.dbproductsService.postProducts(data).subscribe(
      data => {
        console.log("Data posted sucessfully", data);
      },
      error => {
        console.error("Error is:", error);
      }
    );

    
  }

  fetchData(){
    this.dbproductsService.getProducts().subscribe(
      data => {
        this.groceries = data;
        console.log(data);
      },
      error => {
        console.error("Error is:", error);
      }
    );
  }
  
  //refresh function
  refresh() {
    this.groceries =  [];
    this.fetchData();
  }
  
  //onDrag fuction
  onDragStarted() {
    this.isDraggable = false;
  }
}
