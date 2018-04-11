import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';



import { NavComponent } from './nav/nav.component';
import { AppComponent } from './layout/app.component';
import { ClientsComponent } from './clients/clients.component';
import { ResourcesComponent } from './resources/resources.component';
import { UsersComponent } from './users/users.component';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientsComponent,
    ResourcesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
        { path: '', redirectTo: 'clients', pathMatch: 'full' },
        { path: 'clients', component: ClientsComponent },
        { path: 'resources', component: ResourcesComponent },
        { path: 'users', component: UsersComponent },        
        { path: '**', redirectTo: 'clients' }
      
    ])
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
