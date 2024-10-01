import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsFormComponent } from './collaborators-form.component';

describe('CollaboratorsFormComponent', () => {
  let component: CollaboratorsFormComponent;
  let fixture: ComponentFixture<CollaboratorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
