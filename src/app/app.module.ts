import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticateService } from '../services/authenticate.service';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { CarousalBasicComponent } from './carousal-basic/carousal-basic.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaveUserService } from '../services/save-user.service';
import { LogInComponent } from './log-in/log-in.component';

import { UserService } from '../services/user.service';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BusSearchService } from '../services/bus-search.service';
import { BusesComponent } from './buses/buses.component';
import { BookingComponent } from './booking/booking.component';
import { BusLayoutComponent } from './bus-layout/bus-layout.component';
import { SeatService } from 'src/services/seat.service';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    CarousalBasicComponent,
    HomeComponent,
    AboutUsComponent,
    SignUpComponent,
    LogInComponent,
    BusesComponent,
    BookingComponent,
    BusLayoutComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    AgGridModule.withComponents(null),
    NgxWebstorageModule.forRoot()
  ],
  providers: [SeatService,SaveUserService,AuthenticateService,UserService,BusSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
