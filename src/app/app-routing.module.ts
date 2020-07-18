import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHomeComponent } from "../app/views/admin/view-home/view-home.component";
import { ViewChefsComponent } from "../app/views/admin/view-chefs/view-chefs.component";
import { ViewWaitersComponent } from "../app/views/admin/view-waiters/view-waiters.component";
import { ViewInventaryComponent } from "../app/views/admin/view-inventary/view-inventary.component";
import { CardDetailsComponent } from "../app/components/card-details/card-details.component";

const routes: Routes = [

  { path: 'logout', component: ViewHomeComponent },
  // { path: 'inventary/:id', component: CardDetailsComponent },
  { path: 'inventary', component: ViewInventaryComponent },
  { path: 'chefs-list/:id', component: CardDetailsComponent },
  { path: 'chefs-list', component: ViewWaitersComponent },
  { path: 'waiters-list/:id', component: CardDetailsComponent },
  { path: 'waiters-list', component: ViewChefsComponent },
  { path: 'home', component: ViewHomeComponent,  pathMatch: 'full' } ,
 { path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
