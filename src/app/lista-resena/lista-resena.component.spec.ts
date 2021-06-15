import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResenaComponent } from './lista-resena.component';

describe('ListaResenaComponent', () => {
  let component: ListaResenaComponent;
  let fixture: ComponentFixture<ListaResenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaResenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
