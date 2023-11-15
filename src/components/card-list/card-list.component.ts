import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() subtitileFirst: string = '';
  @Input() subtitleSecundary: string = '';
  @Input() text!: Array<{ nameIcon: string; content: string }>;
}
