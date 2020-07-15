import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHomeComponent } from "../app/views/admin/view-home/view-home.component";
import { ViewChefsComponent } from "../app/views/admin/view-chefs/view-chefs.component";
import { ViewWaitersComponent } from "../app/views/admin/view-waiters/view-waiters.component";
// const routes: Routes =  [
//   { path: 'us', component: ,  pathMatch: 'full'},
//   { path: 'admin/chefs', component: ViewChefsComponent }
// ];
const routes: Routes = [

  { path: 'chefs-list', component: ViewWaitersComponent },
  { path: 'waiters-list', component: ViewChefsComponent },
  { path: 'home', component: ViewHomeComponent,  pathMatch: 'full' } ,
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
//  { path: '**', component: ViewHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
