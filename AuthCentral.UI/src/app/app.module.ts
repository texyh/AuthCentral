import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';



import { NavComponent } from './nav/nav.component';
import { AppComponent } from './layout/app.component';
import { ClientsComponent } from './clients/clients.component';
import { ResourcesComponent } from './resources/resources.component';
import { UsersComponent } from './users/users.component';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ClientAsideComponent } from './common/widgets/clientaside/clientaside.component'
import { AsideComponent } from './common/widgets/aside/aside.component';
import { ClientService } from './common/services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientsComponent,
    ResourcesComponent,
    UsersComponent,
    ClientAsideComponent,
    AsideComponent
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
    HttpClientModule
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
