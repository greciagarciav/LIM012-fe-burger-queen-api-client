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
import { RoleGuard } from "./guards/role.guard";


const routes: Routes = [

  {path:'', component:LoginComponent},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ViewStaffComponent, canActivate: [RoleGuard], data: { expectedRole: true } },
      { path: 'staff', component: ViewStaffComponent, canActivate: [RoleGuard], data: { expectedRole: true } },
      { path: 'inventario', component: ViewInventaryComponent, canActivate: [RoleGuard], data: { expectedRole: true } },
    ]
  },
  { path: 'mesero', component:  WaiterComponent, canActivate: [AuthGuard],
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
