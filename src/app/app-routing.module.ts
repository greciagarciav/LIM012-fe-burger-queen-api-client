import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { ViewOrdersComponent } from "./views/waiter/view-orders/view-orders.component";
import {  WaiterComponent } from "./views/waiter/waiter.component";
import { ViewStatesComponent } from "./views/waiter//view-states/view-states.component";
import { LoginComponent } from "../app/components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [

  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path:'', component:LoginComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: ViewStaffComponent },
      { path: 'staff', component: ViewStaffComponent },
      { path: 'inventario', component: ViewInventaryComponent },
    ]
  },
  { path: 'mesero', component:  WaiterComponent ,
  children: [
    { path: '', component: ViewOrdersComponent },
    { path: 'orders', component: ViewOrdersComponent },
    { path: 'states', component:ViewStatesComponent },
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
