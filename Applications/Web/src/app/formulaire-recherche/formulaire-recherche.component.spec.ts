import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRechercheComponent } from './formulaire-recherche.component';

describe('FormulaireRechercheComponent', () => {
  let component: FormulaireRechercheComponent;
  let fixture: ComponentFixture<FormulaireRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
