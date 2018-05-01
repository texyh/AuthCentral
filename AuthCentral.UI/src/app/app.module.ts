import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



import { NavComponent } from './nav/nav.component';
import { AppComponent } from './layout/app.component';
import { ResourcesComponent } from './resources/resources.component';
import { UsersComponent } from './users/users.component';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AsideComponent } from './shared/aside/aside.component';
import { ClientsComponent } from './clients/clientList/clients.component';
import { ClientAsideComponent } from './clients/clientaside/clientaside.component';
import { ClientService } from './clients/services/client.service';
import { ClientdetailsComponent } from './clients/clientdetails/clientdetails.component';
import { ClientscopesComponent } from './clients/clientscopes/clientscopes.component';
import { ClientrolesComponent } from './clients/clientroles/clientroles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientsComponent,
    ResourcesComponent,
    UsersComponent,
    ClientAsideComponent,
    AsideComponent,
    ClientdetailsComponent,
    ClientscopesComponent,
    ClientrolesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
        { path: '', redirectTo: 'clients', pathMatch: 'full' },
        { path: 'clients', component: ClientsComponent },
        { path: 'resources', component: ResourcesComponent },
        { path: 'users', component: UsersComponent },        
        { path: '**', redirectTo: 'clients' }
      
    ]),
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
