import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNoArgsComponent } from './simple-no-args.component';

describe('SimpleNoArgsComponent', () => {
  let component: SimpleNoArgsComponent;
  let fixture: ComponentFixture<SimpleNoArgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNoArgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNoArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
