import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoUserComponent } from './edit-info-user.component';

describe('EditInfoUserComponent', () => {
  let component: EditInfoUserComponent;
  let fixture: ComponentFixture<EditInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
