import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCrearComponent } from './container-crear.component';

describe('ContainerCrearComponent', () => {
  let component: ContainerCrearComponent;
  let fixture: ComponentFixture<ContainerCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
