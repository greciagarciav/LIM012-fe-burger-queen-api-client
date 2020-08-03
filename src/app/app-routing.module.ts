import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { ModalComponent } from "../app/components/modal/modal.component";

const routes: Routes = [
  { path: 'cocinero', component: AdminComponent },
  { path: 'mesero', component: AdminComponent },
  { path: 'admin/staff', component: AdminComponent },
  { path: 'admin/inventario', component: AdminComponent },
  { path: '',   redirectTo: 'admin/staff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
