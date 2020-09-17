import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './views/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { StaffList } from './components/staff-list/staff-list.component';
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewStaffComponent } from './views/admin/view-staff/view-staff.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule }  from '@angular/common/http';
import { JsonApiService } from "./services/JsonApiService.service";
import { ReactiveFormsModule, FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { filterPipe } from './pipes/filter.pipe';
import { WaiterComponent } from './views/waiter/waiter.component';
import { ViewOrdersComponent } from './views/waiter/view-orders/view-orders.component';
import { ViewStatesComponent } from './views/waiter/view-states/view-states.component';
import { OrdersService } from './services/orders/orders.service';
import { ProductsService } from './services/products.service';
import { OrderSendComponent } from './components/order-send/order-send.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalMenuComponent,
    AdminComponent,
    StaffList,
    ViewInventaryComponent,
    ViewStaffComponent,
    ModalComponent,
    AddNewUserComponent,
    OrderListComponent,
    ProductsListComponent,
    filterPipe,
    WaiterComponent,
    ViewOrdersComponent,
    ViewStatesComponent,
    OrderSendComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // MatCardModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
//   exports: [AddNewUserComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [JsonApiService, OrdersService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
