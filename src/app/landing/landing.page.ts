import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {
  FAQs,
  FORM_FIELDS,
  faqsData,
  textBloks,
  textCard,
  textCardList,
} from './text.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent | undefined;
  section1 : string = 'section1';
  section2 : string = 'section2';
  faqs = FAQs;
  cardDataArray = textCard;
  textBlock = textBloks;
  cardList = textCardList;
  faqData = faqsData;
  meuForm!: FormGroup;
  fields = FORM_FIELDS;
  openText: boolean = false
  

  constructor(private fb: FormBuilder, private user_service : UserDataService) {}

  ngOnInit(): void {
    this.meuForm = this.fb.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpfCnpj: [null, Validators.required],
      tipoPlano: [null, Validators.required],
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element && this.content) {
      this.openText = true;
      const yPosition = element.offsetTop;
      this.content.scrollToPoint(0, yPosition, 1000);
    } else {
      console.error(
        `Element with id ${elementId} not found or content is not available`
      );
    }
  }

  onPlanChange(plan: string): void {
    console.log(`Plano selecionado: ${plan}`);
  }

  sendEmail(payload:any) {
    this.user_service.sendEmail(payload.value)
  }
}
