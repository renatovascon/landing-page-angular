import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-plan',
  templateUrl: './toggle-plan.component.html',
  styleUrls: ['./toggle-plan.component.scss'],
})
export class TogglePlanComponent {
  @Output() planChange = new EventEmitter<string>();
  isAnual: boolean = false;

  togglePlan() {
    this.isAnual = !this.isAnual;
    this.planChange.emit(this.isAnual ? 'Anual' : 'Mensal');
  }
}
