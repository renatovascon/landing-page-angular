import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss'],
})
export class FaqListComponent {
  @Input() faqs: any[] = [];

  toggleAnswer(faq: any): void {
    faq.showAnswer = !faq.showAnswer;
  }
}
