import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosContentComponent } from './cursos-content.component';

describe('CursosContentComponent', () => {
  let component: CursosContentComponent;
  let fixture: ComponentFixture<CursosContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
