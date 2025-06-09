import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuItemComponent } from './hamburger-menu-item.component';

describe('HamburgerMenuItemComponent', () => {
  let component: HamburgerMenuItemComponent;
  let fixture: ComponentFixture<HamburgerMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
