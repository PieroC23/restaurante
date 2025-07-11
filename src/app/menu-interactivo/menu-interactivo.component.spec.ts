import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInteractivoComponent } from './menu-interactivo.component';

describe('MenuInteractivoComponent', () => {
  let component: MenuInteractivoComponent;
  let fixture: ComponentFixture<MenuInteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInteractivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
