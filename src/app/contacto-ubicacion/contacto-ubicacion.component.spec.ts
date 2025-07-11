import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoUbicacionComponent } from './contacto-ubicacion.component';

describe('ContactoUbicacionComponent', () => {
  let component: ContactoUbicacionComponent;
  let fixture: ComponentFixture<ContactoUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoUbicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
