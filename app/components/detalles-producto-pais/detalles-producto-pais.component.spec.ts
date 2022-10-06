import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductoPaisComponent } from './detalles-producto-pais.component';

describe('DetallesProductoPaisComponent', () => {
  let component: DetallesProductoPaisComponent;
  let fixture: ComponentFixture<DetallesProductoPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductoPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesProductoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
