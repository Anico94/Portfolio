import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedIconComponent } from './linked-icon.component';

describe('LinkedIconComponent', () => {
  let component: LinkedIconComponent;
  let fixture: ComponentFixture<LinkedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
