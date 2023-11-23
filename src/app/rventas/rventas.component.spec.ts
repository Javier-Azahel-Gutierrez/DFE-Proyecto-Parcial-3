import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RVentasComponent } from './rventas.component';

describe('RVentasComponent', () => {
  let component: RVentasComponent;
  let fixture: ComponentFixture<RVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RVentasComponent]
    });
    fixture = TestBed.createComponent(RVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
