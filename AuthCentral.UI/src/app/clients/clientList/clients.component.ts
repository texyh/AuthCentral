import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientAsideComponent } from '../clientaside/clientaside.component';
import { Client } from '../models/client.model';
import { ClientService } from '../services/client.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  
  @ViewChild(ClientAsideComponent)
  private clientAside : ClientAsideComponent


  public clients: Client[]

  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
      this._clientService.getClients()
          .subscribe( (clients: Client[]) => {
            this.clients = clients
          })

  }

  showClient(id: number): void {
    this.clientAside.show(id);
  }

  open(): void {
    this.clientAside.open();
  }

}
