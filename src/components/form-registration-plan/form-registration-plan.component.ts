import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from './interface-form-registration';

@Component({
  selector: 'app-form-registration-plan',
  templateUrl: './form-registration-plan.component.html',
  styleUrls: ['./form-registration-plan.component.scss'],
})
export class FormRegistrationPlanComponent {
  @Input() meuForm!: FormGroup;
  @Input() fields!: FormField[];
}
