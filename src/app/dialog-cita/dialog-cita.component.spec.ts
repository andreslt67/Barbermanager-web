import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCitaComponent } from './dialog-cita.component';

describe('DialogCitaComponent', () => {
  let component: DialogCitaComponent;
  let fixture: ComponentFixture<DialogCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
