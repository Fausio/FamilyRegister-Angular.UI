import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyEditComponent } from './family-edit.component';

describe('FamilyEditComponent', () => {
  let component: FamilyEditComponent;
  let fixture: ComponentFixture<FamilyEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyEditComponent]
    });
    fixture = TestBed.createComponent(FamilyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
