import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { CardComponent } from '../../components/card/card.component';
import { TogglePlanComponent } from '../../components/toggle-plan/toggle-plan.component';
import { CardPriceComponent } from '../../components/card-price/card-price.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { FaqListComponent } from '../../components/faq-list/faq-list.component';
import { FormRegistrationPlanComponent } from '../../components/form-registration-plan/form-registration-plan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LandingPage,
    CardComponent,
    CardPriceComponent,
    CardListComponent,
    FaqListComponent,
    FormRegistrationPlanComponent,
    TogglePlanComponent,
  ],
})
export class LandingPageModule {}
