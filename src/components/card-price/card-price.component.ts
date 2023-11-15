import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class CardPriceComponent {
  @Input() price: string = '';
  @Input() moeda: string = '';
  @Input() time: string = '';
  @Input() buttonText: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() titleColor: string = '';
  @Input() textSaibaMais: string = '';
  @Input() openText: boolean = false;

  resetCardSize() {
    this.openText = !this.openText;
    this.openText? this.buttonText = 'Pesquisar': this.buttonText = 'Saiba mais'
  }
}
