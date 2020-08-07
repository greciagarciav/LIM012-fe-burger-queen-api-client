import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { CheffComponent } from "../app/views/cheff/cheff.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { ViewOrderStatusComponent } from './views/cheff/view-order-status/view-order-status.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: ViewStaffComponent },
      { path: 'staff', component: ViewStaffComponent },
      { path: 'inventario', component: ViewInventaryComponent },
    ]
  },
  { path: 'cocinero', component: CheffComponent,
    children: [
      { path: '', component: ViewOrderStatusComponent }
    ]
  },
  { path: 'mesero', component: CheffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
