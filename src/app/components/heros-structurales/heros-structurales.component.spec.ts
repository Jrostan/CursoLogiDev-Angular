import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosStructuralesComponent } from './heros-structurales.component';

describe('HerosStructuralesComponent', () => {
  let component: HerosStructuralesComponent;
  let fixture: ComponentFixture<HerosStructuralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosStructuralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosStructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
