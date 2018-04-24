import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientAsideComponent } from '../common/widgets/clientaside/clientaside.component';
import { ClientService } from '../common/services/client.service';
import { Client } from '../common/models/client.model';

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

  ngOnInit() {
      this._clientService.getClients()
          .subscribe( (clients: Client[]) => {
            this.clients = clients
            console.log(this.clients)
          })

  }

  open() {
    this.clientAside.open();
  }

}
