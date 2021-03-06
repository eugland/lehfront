import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productItem!: Product;
  product_qty = 1;

  constructor(
    private cartService: CartService,
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.routeInfo.snapshot.paramMap.get('id');
    this.productService
      .getProduct(Number(productId))
      .subscribe((product) => (this.productItem = product[0]));
  }

  handleAddToCart() {
    // TODO: Come back to it when doing kart adding
    // this.cartService.addProductToCart(this.productItem).subscribe(() => {
    //   console.log('added to cart', this.productItem);
    // });
  }
}
