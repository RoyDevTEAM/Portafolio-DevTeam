import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGitComponent } from './curso-git.component';

describe('CursoGitComponent', () => {
  let component: CursoGitComponent;
  let fixture: ComponentFixture<CursoGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoGitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
