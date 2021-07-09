import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector,  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { LhcItemChoiceComponent } from './lhc-item-choice/lhc-item-choice.component';
import { LhcItemChoiceCheckBoxComponent } from './lhc-item-choice-check-box/lhc-item-choice-check-box.component';
import { LhcItemChoiceRadioButtonComponent } from './lhc-item-choice-radio-button/lhc-item-choice-radio-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import * as ucumPkg from '@lhncbc/ucum-lhc';
import LhcFormUtils from '../lib/lforms/lhc-form-utils.js';
import LhcFormData  from '../lib/lforms/lhc-form';
import LhcHL7 from '../lib/lforms/lhc-hl7.js';

import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

//import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { CommonUtilsService } from '../lib/common-utils.service';
import { ValidateService } from '../lib/validate.service';
import { LhcDataService } from '../lib/lhc-data.service';
import { WindowService } from '../lib/window.service';

import { LhcItemChoiceAutocompleteComponent } from './lhc-item-choice-autocomplete/lhc-item-choice-autocomplete.component';
import { LhcItemComponent } from './lhc-item/lhc-item.component';
import { LhcUnitComponent } from './lhc-unit/lhc-unit.component';
import { LhcInputComponent } from './lhc-input/lhc-input.component';
import { LhcItemSimpleTypeComponent } from './lhc-item-simple-type/lhc-item-simple-type.component';
import { LhcItemQuantityComponent } from './lhc-item-quantity/lhc-item-quantity.component';
import { LhcAutocompleteComponent } from './common/lhc-autocomplete/lhc-autocomplete.component';
import { LhcValidateComponent } from './lhc-validate/lhc-validate.component';
import { LhcFormComponent } from './lhc-form/lhc-form.component';
import { LhcItemGroupComponent } from './lhc-item-group/lhc-item-group.component';
import { LhcItemBooleanComponent } from './lhc-item-boolean/lhc-item-boolean.component';
import { LhcItemDateComponent } from './lhc-item-date/lhc-item-date.component';
import { LhcItemTimeComponent } from './lhc-item-time/lhc-item-time.component';
import { LhcItemDatetimeComponent } from './lhc-item-datetime/lhc-item-datetime.component';
import { LhcItemTextComponent } from './lhc-item-text/lhc-item-text.component';
import { LhcItemQuestionTextComponent } from './lhc-item-question-text/lhc-item-question-text.component';
import { LhcItemPopoverComponent } from './lhc-item-popover/lhc-item-popover.component';
import { LhcItemQuestionComponent } from './lhc-item-question/lhc-item-question.component';
import { LhcItemDisplayComponent } from './lhc-item-display/lhc-item-display.component';
import { LhcChangeDetectionComponent } from './lhc-change-detection/lhc-change-detection.component';
import { LhcWatcherComponent} from './lhc-watcher/lhc-watcher.component';
import { LhcGroupVerticalComponent } from './lhc-group-vertical/lhc-group-vertical.component';
import { LhcGroupHorizontalComponent } from './lhc-group-horizontal/lhc-group-horizontal.component';
import { LhcGroupMatrixComponent } from './lhc-group-matrix/lhc-group-matrix.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    LhcItemChoiceComponent,
    LhcItemChoiceCheckBoxComponent,
    LhcItemChoiceRadioButtonComponent,
    LhcItemChoiceAutocompleteComponent,
    LhcItemComponent,
    LhcUnitComponent,
    LhcItemSimpleTypeComponent,
    LhcInputComponent,
    LhcItemQuantityComponent,
    LhcAutocompleteComponent,
    LhcValidateComponent,
    LhcFormComponent,
    LhcItemGroupComponent,
    LhcItemBooleanComponent,
    LhcItemDateComponent,
    LhcItemTimeComponent,
    LhcItemDatetimeComponent,
    LhcItemTextComponent,
    LhcItemQuestionTextComponent,
    LhcItemPopoverComponent,
    LhcItemQuestionComponent,
    LhcItemDisplayComponent,
    LhcChangeDetectionComponent,
    LhcWatcherComponent,
    LhcGroupVerticalComponent,
    LhcGroupHorizontalComponent,
    LhcGroupMatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzGridModule,
    NzPopoverModule,
    NzIconModule,
    NzSwitchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    CommonUtilsService,
    ValidateService,
    LhcDataService,
    WindowService],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    // NO_ERRORS_SCHEMA
  ],
})

export class AppModule {
  constructor(private injector: Injector) {

    //customElements.define('wc-lhc-item-choice', createCustomElement(LhcItemChoiceComponent,
    //  { injector: injector, strategyFactory: new ElementZoneStrategyFactory(LhcItemChoiceComponent, injector) }));

    let lforms = {
      LFormsData: LhcFormData,
      HL7: LhcHL7,
      ucumPkg: ucumPkg,
      Util: LhcFormUtils,
      version: "29.0.0"
    }

    lforms.Util.FHIRSupport = {
      'STU3': 'partial',
      'R4': 'WIP'
    };

    console.log(lforms);

    window['LForms'] = lforms;

    customElements.define('wc-lhc-item', createCustomElement(LhcItemComponent, { injector: this.injector }));
    customElements.define('wc-lhc-form', createCustomElement(LhcFormComponent, { injector: this.injector }));
  }
  ngDoBootstrap() {}
}

