import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit, OnChanges {

  
  @Input()
  public client: Client
  
  public clientDetail: Client

  constructor() { }

  ngOnInit(): void {
    this.clientDetail = new Client();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.client) {
          this.clientDetail = changes.client.currentValue;
      }
  }

}
