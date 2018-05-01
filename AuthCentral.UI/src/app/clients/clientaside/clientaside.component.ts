import { Component, OnInit, ViewChild } from '@angular/core';
import { AsideComponent } from '../../shared/aside/aside.component';
import { Client } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-aside',
  templateUrl: './clientaside.component.html',
  styleUrls: ['./clientaside.component.css']
})
export class ClientAsideComponent implements OnInit {

  @ViewChild(AsideComponent)
  private asideComponent: AsideComponent;

  public isNew: boolean;
  public canEdit: boolean;
  public client: Client;

  constructor(private _service:ClientService) { }

  ngOnInit() {
  }

  show(id: number) : void {
    
    this._service.getClient(id).subscribe((client: Client) => {
      this.client = client;
    });

    this.open()
  }

  open() : void {
    this.asideComponent.show();
  }

}
