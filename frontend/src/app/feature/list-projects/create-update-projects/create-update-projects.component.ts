import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-update-projects',
  templateUrl: './create-update-projects.component.html',
  styleUrls: ['./create-update-projects.component.scss'],
})
export class CreateUpdateProjectsComponent implements OnInit {
  form: FormGroup;
  mode: 'Create' | 'Update' = 'Create';
  projectStatusList = [
    { id: 0, name: "New" },
    { id: 1, name: "Not yet started" },
    { id: 2, name: "In-Progress" },
    { id: 3, name: "Pending" },
    { id: 4, name: "Rejected" },
    { id: 5, name: "Completed" },
    { id: 6, name: "On Hold" },
    { id: 7, name: "Cancelled" },
    { id: 8, name: "Approved" },
    { id: 9, name: "In Review" },
    { id: 10, name: "Archived" },
    { id: 11, name: "Under Development" },
    { id: 12, name: "Testing" },
    { id: 13, name: "Deployment" },
    { id: 14, name: "Maintenance" },
    { id: 15, name: "Bug Fixes" }
  ];
  organizationId=localStorage.getItem('organizationId');
  constructor(private fb: FormBuilder, private projectService: ProjectService,private dialog:MatDialog) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  save() {
    console.log(this.form.value);
    const req = {
      name: this.form.get('name').value.toUpperCase(),
      status: this.form.get('status').value,
      userId: 1,
      organizationId: parseInt(this.organizationId),
      createdBy: 'ms.admin'
    }
    this.projectService.createUpdateProject(req).subscribe(response => {
      console.log(response);
      this.dialog.closeAll();

    }, (error => {
      console.log(error);

    }))
  }
}
