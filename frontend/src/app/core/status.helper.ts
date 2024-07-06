import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusHelper {

  constructor() { }

  getLabelForStatus(status: boolean): any {
    if (status) {
      return {
        text: 'Active',
        textClass: 'text-green',
        bgClass: 'bg-green-light',
        previewClass: 'bg-green'
      }
    } else {
      return {
        text: 'Inactive',
        textClass: 'text-red',
        bgClass: 'bg-red-light',
        previewClass: 'bg-red'
      }
    }
  }

  getTextForBooleanFlag(status: boolean): any {
    if (status) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  getLabels(): any {
    return [
      {
        text: 'Active',
        textClass: 'text-green',
        bgClass: 'bg-green-light',
        previewClass: 'bg-green'
      },
      {
        text: 'Inactive',
        textClass: 'text-red',
        bgClass: 'bg-red-light',
        previewClass: 'bg-red'
      },
    ];
  }
}
