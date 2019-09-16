import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { SocketsService } from '../services/sockets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productcount:number=0;
 
  constructor(private socketservice:SocketsService) { }

  ngOnInit() {
    this.socketservice.prodcount();
    this.socketservice.onProdcount().subscribe((data:number)=>{
      this.productcount = data;
    })
  }

}
