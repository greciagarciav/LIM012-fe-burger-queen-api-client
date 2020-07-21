import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "../app/views/admin/admin.component";
import { ViewStaffComponent } from "../app/views/admin/view-staff/view-staff.component";
import { ViewInventaryComponent } from "../app/views/admin/view-inventary/view-inventary.component";
import { StaffList } from "../app/components/staff-list/staff-list.component";
import { ModalComponent } from "../app/components/modal/modal.component";
import { EditUser } from "../app/components/edit-user/edit-user.component";

const routes: Routes = [

  // { path: 'logout', component: ViewHomeComponent },
  // { path: 'inventary/:id', component: StaffList },
  // { path: 'inventary', component: ViewInventaryComponent },
  { path: 'cocinero', component: AdminComponent},
  { path: 'mesero', component: AdminComponent},
  { path: 'admin/:id', component: AdminComponent },
  // { path: 'meser0/:id', component: ModalComponent },
  // { path: 'chefs-list', component: ViewChefsComponent },
  // { path: 'home', component: ViewHomeComponent,  pathMatch: 'full' } ,
 { path: '',   redirectTo: 'admin/staff', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
