import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Products } from '../products';
import { ProductDataServiceService } from '../services/product-data-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  animations: [
    trigger('iderrorState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),


    ]),
    trigger('noticeState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ])
  ]
})

export class AddProductComponent implements OnInit {
  productname = '';
  productunits: number = null;
  productid: number = null;
  productobjid = '';
  newprod: Products;
  newProductMessage = '';
  iderrormsg = 'This id already exists & New ID is required.';
  iderrormsg2 = '';
  iderrorshow = false;
  noticeshow = false;

  constructor(private proddata: ProductDataServiceService) { }

  ngOnInit() {
  }

  get stateName() {
    return this.iderrorshow ? 'show' : 'hide';
  }

  get noticeName() {
    return this.noticeshow ? 'show' : 'hide';
  }

  addnewProduct(event) {
    event.preventDefault();
    if (this.productid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
    this.newprod = new Products('', this.productid, this.productname, this.productunits);
    this.proddata.add(this.newprod).subscribe((data) => {
      console.log(data);
      this.noticeshow = true;
      if (data.err == null) {
        this.newProductMessage = data.num + ' new product (' + this.productname + ') was added';
      } else {
        this.newProductMessage = data.err;
      }

      this.productid = null;
      this.productname = '';
      this.productunits = null;

    });
  }
}

  checkvaildid(event) {
    this.noticeshow = false;
    this.proddata.checkValidID(event).subscribe((data) => {
      if (data.success === 0) {
        this.iderrormsg2 =   ' Something above ' + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      } else {
        this.iderrorshow = false;
        this.iderrormsg2 = null;
      }
    });
  }
}
