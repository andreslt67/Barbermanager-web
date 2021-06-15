import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegistrarComponent } from './dialog-registrar.component';

describe('DialogRegistrarComponent', () => {
  let component: DialogRegistrarComponent;
  let fixture: ComponentFixture<DialogRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
