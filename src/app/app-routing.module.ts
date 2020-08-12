import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { CheffComponent } from "../app/views/cheff/cheff.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { ViewOrderStatusComponent } from './views/cheff/view-order-status/view-order-status.component';
import { ViewOrdersComponent } from "./views/waiter/view-orders/view-orders.component";
import {  WaiterComponent } from "./views/waiter/waiter.component";
import { ViewStatesComponent } from "./views/waiter//view-states/view-states.component";
const routes: Routes = [

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: ViewStaffComponent },
      { path: 'staff', component: ViewStaffComponent },
      { path: 'inventario', component: ViewInventaryComponent },
    ]
  },
  {
    path: 'cocinero', component: CheffComponent,
    children: [
      { path: '', component: ViewOrderStatusComponent },
    ]
  },
  { path: 'mesero', component:  WaiterComponent ,
  children: [
    { path: '', component: ViewOrdersComponent },
    { path: 'orders', component: ViewOrdersComponent },
    { path: 'states', component:ViewOrderStatusComponent },
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
