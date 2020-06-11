import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import {CrudComponent} from './views/product/crud/crud.component'
import {ProductCreateComponent} from './components/product/product-create/product-create.component'

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: CrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
