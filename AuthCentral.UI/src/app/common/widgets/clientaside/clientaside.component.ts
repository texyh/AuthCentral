import { Component, OnInit, ViewChild } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-clientaside',
  templateUrl: './clientaside.component.html',
  styleUrls: ['./clientaside.component.css']
})
export class ClientAsideComponent implements OnInit {

  @ViewChild(AsideComponent)
  private asideComponent: AsideComponent;

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.asideComponent.show();
  }

}
