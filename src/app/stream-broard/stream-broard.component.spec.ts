import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamBroardComponent } from './stream-broard.component';

describe('StreamBroardComponent', () => {
  let component: StreamBroardComponent;
  let fixture: ComponentFixture<StreamBroardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamBroardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamBroardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
