import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import {Products} from '../products';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  
})
export class UpdateProductComponent implements OnInit {
  productidparam;
  productname:string = "";
  productunits:number=0;
  productid:number=0;
  productobjid:string="";
  noticeshow:boolean = false;

  constructor(private proddata:ProductdataService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.productidparam = params.get('id');

    })
    this.proddata.getitem(this.productidparam).subscribe((data)=>{
      this.productid = data[0].id;
      this.productname = data[0].name;
    
      this.productunits = data[0].units;
      this.productobjid = data[0]._id;
    })

  }
 
  update(){
    var product:Products = new Products(this.productobjid,this.productid,this.productname,this.productunits);
    this.proddata.updateitem(product).subscribe((data)=>{
     this.router.navigate(['/list',data.ok]);

    })

    
  }

}
