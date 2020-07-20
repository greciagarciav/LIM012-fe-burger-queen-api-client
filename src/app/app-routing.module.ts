import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHomeComponent } from "../app/views/admin/view-home/view-home.component";
import { ViewChefsComponent } from "../app/views/admin/view-chefs/view-chefs.component";
import { ViewWaitersComponent } from "../app/views/admin/view-waiters/view-waiters.component";
import { ViewInventaryComponent } from "../app/views/admin/view-inventary/view-inventary.component";
import { CardDetailsComponent } from "../app/components/card-details/card-details.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { EditUser } from "../app/components/edit-user/edit-user.component";

const routes: Routes = [

  { path: 'logout', component: ViewHomeComponent },
  // { path: 'inventary/:id', component: CardDetailsComponent },
  { path: 'inventary', component: ViewInventaryComponent },
  // { path: 'waiters-list/:id', component: EditUser},
  { path: 'waiters-list', component: ViewWaitersComponent },
  { path: 'chefs-list/:id', component: ModalComponent },
  { path: 'chefs-list', component: ViewChefsComponent },
  { path: 'home', component: ViewHomeComponent,  pathMatch: 'full' } ,
 { path: '',   redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
