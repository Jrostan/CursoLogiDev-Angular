import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetPruebaComponent } from './componet-prueba.component';

describe('ComponetPruebaComponent', () => {
  let component: ComponetPruebaComponent;
  let fixture: ComponentFixture<ComponetPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
