import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './views/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { StaffList } from './components/staff-list/staff-list.component';
import { ConteinerListCardsComponent } from './components/conteiner-list-cards/conteiner-list-cards.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MenuListCardsComponent } from './components/menu-list-cards/menu-list-cards.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { InventaryContainerComponent } from './components/inventary-container/inventary-container.component';
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditUser } from './components/edit-user/edit-user.component';
import { AddEmployee } from './components/add-employee/add-employee.component';
import { HttpClientModule }  from '@angular/common/http';
import { JsonApiService } from "./JsonApiService.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormNewItemComponent } from './components/form-new-item/form-new-item.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalMenuComponent,
    AdminComponent,
    NavSearchComponent,
    StaffList,
    ConteinerListCardsComponent,
    MenuCardComponent,
    MenuListCardsComponent,
    MenuContainerComponent,
    InventaryContainerComponent,
    ViewInventaryComponent,
    ViewStaffComponent,
    UserLoggedComponent,
    ModalComponent,
    EditUser,
    AddEmployee,
    FormNewItemComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [JsonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
