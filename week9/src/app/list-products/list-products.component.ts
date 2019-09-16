import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import {Products} from '../products';
import { Router } from '@angular/router';
import { SocketsService } from '../services/sockets.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: any;
  constructor(private proddata:ProductdataService,private router:Router,private socketservice:SocketsService) {}
  ngOnInit() {
      this.socketservice.initSocket();
      this.socketservice.updatelist();
      //socket listening for an update to the list
       this.socketservice.onNewlist().subscribe((data)=>{
         this.products = data;
      });
  }
  
  deleteproduct(id){
    if (confirm("Are you sure you want to delete this item")){
      this.proddata.deleteitem(id).subscribe((data)=>{
        if(data.ok ==1){
          //request socket server to send an update
          this.socketservice.updatelist();
          this.socketservice.prodcount();
      
        }
      });
      
     
    }
  }
}
