import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkComponent } from './light-dark.component';

describe('LightDarkComponent', () => {
  let component: LightDarkComponent;
  let fixture: ComponentFixture<LightDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
