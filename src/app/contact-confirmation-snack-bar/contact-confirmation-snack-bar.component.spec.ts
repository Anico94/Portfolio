import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactConfirmationSnackBarComponent } from './contact-confirmation-snack-bar.component';

describe('ContactConfirmationSnackBarComponent', () => {
  let component: ContactConfirmationSnackBarComponent;
  let fixture: ComponentFixture<ContactConfirmationSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactConfirmationSnackBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactConfirmationSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
