import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductDataServiceService } from '../services/product-data-service.service';
import {Products} from '../products';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})

export class UpdateProductComponent implements OnInit {
  productidparam;
  productname = '';
  productunits = 0;
  productid = 0;
  productobjid = '';
  noticeshow = false;

  constructor(private proddata: ProductDataServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productidparam = params.get('id');
      console.log(this.productidparam);
    });

    this.proddata.getItem(this.productidparam).subscribe((data) => {
      this.productid = data[0].id;
      this.productname = data[0].name;
      this.productunits = data[0].units;
      this.productobjid = data[0]._id;
    });
  }

  update() {
    const product: Products = new Products(this.productobjid,
      this.productid, this.productname, this.productunits);

    this.proddata.updateItem(product).subscribe((data) => {
     this.router.navigate(['/list', data.ok]);
    });
  }
}
