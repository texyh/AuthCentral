import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientasideComponent } from './clientaside.component';

describe('ClientasideComponent', () => {
  let component: ClientasideComponent;
  let fixture: ComponentFixture<ClientasideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientasideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
