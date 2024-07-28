import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeeModels } from '../model/employeeModel';

@Component({
  selector: 'app-create-update-emplee',
  // standalone: true,
  // imports: [],
  templateUrl: './create-update-emplee.component.html',
  styleUrl: './create-update-emplee.component.scss'
})
export class CreateUpdateEmpleeComponent implements OnInit {
  form: FormGroup;
  mode: 'Create' | 'Update' = 'Create';
  employee: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private employeeService: UserService, private dialog: MatDialog) {
    console.log("data" + JSON.stringify(this.employee));
    this.employee = data.employee
    if (this.employee !==null && this.employee !==undefined) {
      this.mode = 'Update'
    } else {
      this.employee = new EmployeeModels({});
    }

    this.form = this.fb.group({
      firstName: ['' || this.employee.firstName, [Validators.required]],
      lastName: ['' || this.employee.lastName, [Validators.required]],
      dateOfBirth: ['' || this.employee.dateOfBirth, [Validators.required]],
      email: ['' || this.employee.email, [Validators.required, Validators.email]],
      phoneNumber: ['' || this.employee.phoneNumber, [Validators.required]],
      hireDate: ['' || this.employee.hireDate, [Validators.required]],
      salary: ['' || this.employee.salary, [Validators.required, Validators.min(0)]],
      department: ['' || this.employee.department, [Validators.required]],
      position: ['' || this.employee.position, [Validators.required]],
      emergencyContactName: ['' || this.employee.emergencyContactName, [Validators.required]],
      emergencyContactPhone: ['' || this.employee.emergencyContactPhone, [Validators.required]],
      emergencyContactRelationship: ['' || this.employee.emergencyContactRelationship, [Validators.required]],
      pfAccountNumber: ['' || this.employee.pfAccountNumber, [Validators.required]],
      pfContribution: ['' || this.employee.pfContribution, [Validators.required, Validators.min(0)]],
      pfJoinDate: ['' || this.employee.pfJoinDate],
      pfExitDate: ['' || this.employee.pfExitDate],
      organizationId: ['']
    });
  }

  ngOnInit(): void { }

  save() {
    console.log(this.form.value);
    this.form.get('organizationId').setValue(1)
    const req = this.form.value;

    this.employeeService.createUpdateEmployee(req).subscribe(response => {
      console.log(response);
      this.dialog.closeAll();
    }, (error) => {
      console.log(error);
    });
  }
}