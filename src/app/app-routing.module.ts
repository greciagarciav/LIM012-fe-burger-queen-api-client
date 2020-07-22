import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";

const routes: Routes = [

  // { path: 'logout', component: ViewHomeComponent },
  // { path: 'inventary/:id', component: StaffList },
  // { path: 'inventary', component: ViewInventaryComponent },
  { path: 'cocinero', component: AdminComponent},
  { path: 'mesero', component: AdminComponent},
  { path: 'admin/:id', component: AdminComponent },
  // { path: 'meser0/:id', component: ModalComponent },
 { path: '',   redirectTo: 'admin/staff', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
