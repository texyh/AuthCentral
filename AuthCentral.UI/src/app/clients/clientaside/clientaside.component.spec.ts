import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientAsideComponent } from './clientaside.component';


describe('ClientasideComponent', () => {
  let component: ClientAsideComponent;
  let fixture: ComponentFixture<ClientAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
