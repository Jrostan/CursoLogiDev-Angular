import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTvComponent } from './option-tv.component';

describe('OptionTvComponent', () => {
  let component: OptionTvComponent;
  let fixture: ComponentFixture<OptionTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
