import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent} from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddProductComponent},
  {path:'list',component:ListProductsComponent},
  {path:'list/:id',component:ListProductsComponent},
  {path:'update/:id',component:UpdateProductComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
