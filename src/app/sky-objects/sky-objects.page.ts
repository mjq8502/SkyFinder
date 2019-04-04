import { Component, OnInit } from '@angular/core';
import { IProduct } from '../SkyObjects';
import { ProductService } from "../SkyObjects.service";


@Component({
  selector: 'app-sky-objects',
  templateUrl: './sky-objects.page.html',
  styleUrls: ['./sky-objects.page.scss'],
})
export class SkyObjectsPage implements OnInit {
  skyObjects: IProduct[] = [];
  errorMessage: string;

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.skyObjects = products,
      error => this.errorMessage = <any>error
    )


  }

}
