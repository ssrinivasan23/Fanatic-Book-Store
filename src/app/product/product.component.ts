import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  getHeading():string {
    return 'Most Selling Books';
  }

  getSubheading():string {
    return 'Books By Author';
  }

  constructor() { }

  ngOnInit() {
  }

}
