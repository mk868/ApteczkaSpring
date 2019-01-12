import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableMedicinesComponent } from './avaliable-medicines.component';

describe('AvaliableMedicinesComponent', () => {
  let component: AvaliableMedicinesComponent;
  let fixture: ComponentFixture<AvaliableMedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliableMedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
