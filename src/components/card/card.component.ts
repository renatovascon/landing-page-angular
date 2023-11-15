import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() iconSrc: string = '';
  @Input() iconName: string = '';
  @Input() titleColor: string = '';
  @Input() title: string = '';
  @Input() context: string = '';
}
