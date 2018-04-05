import { Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ProductListComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [ ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
