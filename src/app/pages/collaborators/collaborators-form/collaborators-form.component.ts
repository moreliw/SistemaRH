import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collaborators-form',
  templateUrl: './collaborators-form.component.html',
  styleUrl: './collaborators-form.component.scss',
})
export class CollaboratorsFormComponent {
  formValue: FormGroup;
  title: string;
  constructor(
    private location: Location,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formValue = fb.group({
      name: [null, Validators.required],
      position: [null, null],
      startDate: [null, null],
    });

    if (this.route.snapshot.paramMap.get('id') === null) {
      this.title = 'Adicionar';
    } else {
      this.title = 'Editar';
    }
  }

  goBack() {
    this.location.back();
  }

  submit() {
    console.log(this.formValue.value);
    this.goBack();
  }
}
