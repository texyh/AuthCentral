import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientrolesComponent } from './clientroles.component';

describe('ClientrolesComponent', () => {
  let component: ClientrolesComponent;
  let fixture: ComponentFixture<ClientrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
