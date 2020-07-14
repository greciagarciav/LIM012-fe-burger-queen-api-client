import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { EstadisticsComponent } from './components/estadistics/estadistics.component';
import { ViewHomeComponent } from './views/admin/view-home/view-home.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { FormNewWaiterComponent } from './components/form-new-waiter/form-new-waiter.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { ConteinerListCardsComponent } from './components/conteiner-list-cards/conteiner-list-cards.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { MenuListCardsComponent } from './components/menu-list-cards/menu-list-cards.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { ButtonChangeStateComponent } from './components/button-change-state/button-change-state.component';
import { InventaryContainerComponent } from './components/inventary-container/inventary-container.component';
import { ButtonReportComponent } from './components/button-report/button-report.component';
import { ViewInventaryComponent } from './views/admin/view-inventary/view-inventary.component';
import { ViewChefsComponent } from './views/admin/view-chefs/view-chefs.component';
import { ViewWaitersComponent } from './views/admin/view-waiters/view-waiters.component';
import { UserLoggedComponent } from './components/user-logged/user-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalMenuComponent,
    EstadisticsComponent,
    ViewHomeComponent,
    StaffListComponent,
    FormNewWaiterComponent,
    NavSearchComponent,
    CardDetailsComponent,
    ConteinerListCardsComponent,
    MenuCardComponent,
    ButtonAddComponent,
    MenuListCardsComponent,
    MenuContainerComponent,
    ButtonChangeStateComponent,
    InventaryContainerComponent,
    ButtonReportComponent,
    ViewInventaryComponent,
    ViewChefsComponent,
    ViewWaitersComponent,
    UserLoggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
