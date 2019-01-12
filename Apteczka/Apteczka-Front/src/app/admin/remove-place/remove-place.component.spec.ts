import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlaceComponent } from './remove-place.component';

describe('RemovePlaceComponent', () => {
  let component: RemovePlaceComponent;
  let fixture: ComponentFixture<RemovePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
