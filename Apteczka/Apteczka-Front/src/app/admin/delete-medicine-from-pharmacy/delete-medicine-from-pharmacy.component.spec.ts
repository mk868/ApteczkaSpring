import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicineFromPharmacyComponent } from './delete-medicine-from-pharmacy.component';

describe('DeleteMedicineFromPharmacyComponent', () => {
  let component: DeleteMedicineFromPharmacyComponent;
  let fixture: ComponentFixture<DeleteMedicineFromPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMedicineFromPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMedicineFromPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
