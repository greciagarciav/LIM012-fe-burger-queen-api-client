import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AdminComponent } from './views/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { StaffList } from './components/staff-list/staff-list.component';
import { MenuListCardsComponent } from './components/menu-list-cards/menu-list-cards.component';
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule }  from '@angular/common/http';
import { JsonApiService } from "./services/JsonApiService.service";
import { ReactiveFormsModule, FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { CheffComponent } from './views/cheff/cheff.component';
import { ViewOrderStatusComponent } from './views/cheff/view-order-status/view-order-status.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { filterPipe } from './pipes/filter.pipe';
import { WaiterComponent } from './views/waiter/waiter.component';
import { ViewOrdersComponent } from './views/waiter/view-orders/view-orders.component';
import { ViewStatesComponent } from './views/waiter/view-states/view-states.component';
import { OrdersService } from './services/orders/orders.service';
import { FilterOrderStatusPipe } from './pipes/filterstatus.pipe';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalMenuComponent,
    AdminComponent,
    NavSearchComponent,
    StaffList,
    MenuListCardsComponent,
    ViewInventaryComponent,
    ViewStaffComponent,
    UserLoggedComponent,
    ModalComponent,
    AddNewUserComponent,
    CheffComponent,
    ViewOrderStatusComponent,
    OrderListComponent,
    ProductsListComponent,
    filterPipe,
    WaiterComponent,
    ViewOrdersComponent,
    ViewStatesComponent,
    FilterOrderStatusPipe,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [JsonApiService, OrdersService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
