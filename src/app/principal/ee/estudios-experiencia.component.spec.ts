import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosExperienciaComponent } from './estudios-experiencia.component';

describe('EstudiosExperienciaComponent', () => {
  let component: EstudiosExperienciaComponent;
  let fixture: ComponentFixture<EstudiosExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
