import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitunasEncurtidosComponent } from './aceitunas-encurtidos.component';

describe('AceitunasEncurtidosComponent', () => {
  let component: AceitunasEncurtidosComponent;
  let fixture: ComponentFixture<AceitunasEncurtidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AceitunasEncurtidosComponent]
    });
    fixture = TestBed.createComponent(AceitunasEncurtidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
