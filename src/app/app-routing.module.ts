import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: ViewStaffComponent },
      { path: 'staff', component: ViewStaffComponent },
      { path: 'inventario', component: ViewInventaryComponent },
    ]
  },
  { path: 'cocinero', component: AdminComponent },
  { path: 'mesero', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
