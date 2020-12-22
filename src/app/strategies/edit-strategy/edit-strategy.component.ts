import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-edit-strategy',
  templateUrl: './edit-strategy.component.html',
  styleUrls: ['./edit-strategy.component.css']
})
export class EditStrategyComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Name of your strategies',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Description of your strategies',
        rows: 10
      }
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(model) {
    console.log(model);
  }

}
