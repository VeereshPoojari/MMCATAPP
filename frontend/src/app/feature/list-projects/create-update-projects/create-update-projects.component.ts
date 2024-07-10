import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-update-projects',
  templateUrl: './create-update-projects.component.html',
  styleUrls: ['./create-update-projects.component.scss'],
})
export class CreateUpdateProjectsComponent implements OnInit {
  form: FormGroup;
  mode: 'Create' | 'Update' = 'Create';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['',[Validators.required]]  
    });
  }

  ngOnInit(): void {}

  save() {
   console.log(this.form.value);
   
  }
}
