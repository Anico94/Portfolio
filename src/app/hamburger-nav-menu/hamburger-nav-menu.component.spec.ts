import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerNavMenuComponent } from './hamburger-nav-menu.component';

describe('HamburgerNavMenuComponent', () => {
  let component: HamburgerNavMenuComponent;
  let fixture: ComponentFixture<HamburgerNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerNavMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
