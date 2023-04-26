import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteProfilComponent } from './plante-profil.component';

describe('PlanteProfilComponent', () => {
  let component: PlanteProfilComponent;
  let fixture: ComponentFixture<PlanteProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanteProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanteProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
