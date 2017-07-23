import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUrlArgComponent } from './single-url-arg.component';

describe('SingleUrlArgComponent', () => {
  let component: SingleUrlArgComponent;
  let fixture: ComponentFixture<SingleUrlArgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUrlArgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUrlArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
