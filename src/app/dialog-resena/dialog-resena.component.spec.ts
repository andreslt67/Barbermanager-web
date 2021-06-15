import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResenaComponent } from './dialog-resena.component';

describe('DialogResenaComponent', () => {
  let component: DialogResenaComponent;
  let fixture: ComponentFixture<DialogResenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogResenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
