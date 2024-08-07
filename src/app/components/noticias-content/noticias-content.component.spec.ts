import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasContentComponent } from './noticias-content.component';

describe('NoticiasContentComponent', () => {
  let component: NoticiasContentComponent;
  let fixture: ComponentFixture<NoticiasContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
