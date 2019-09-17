import { Component, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../services/product-data-service.service';
import {Products} from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Products[] = [];
  constructor(private proddata: ProductDataServiceService, private router: Router) {}

  ngOnInit() {
    this.proddata.getList().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  deleteproduct(id) {
    if (confirm('Are you sure you want to delete this item')) {
      this.proddata.deleteItem(id).subscribe((data) => {
        this.products = data;
      });
    }
  }
}

