import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// ng-zorro modules
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

// icons
import {
  CopyrightCircleFill,
  QuestionCircleFill,
  CopyrightCircleOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [
  CopyrightCircleFill,
  QuestionCircleFill,
  CopyrightCircleOutline,
];

// lforms components
import { LhcItemChoiceComponent } from '../lhc-item-choice/lhc-item-choice.component';
import { LhcItemChoiceCheckBoxComponent } from '../lhc-item-choice-check-box/lhc-item-choice-check-box.component';
import { LhcItemChoiceRadioButtonComponent } from '../lhc-item-choice-radio-button/lhc-item-choice-radio-button.component';
import { LhcItemChoiceAutocompleteComponent } from '../lhc-item-choice-autocomplete/lhc-item-choice-autocomplete.component';
import { LhcItemComponent } from '../lhc-item/lhc-item.component';
import { LhcUnitComponent } from '../lhc-unit/lhc-unit.component';
import { LhcInputComponent } from '../lhc-input/lhc-input.component';
import { LhcItemSimpleTypeComponent } from '../lhc-item-simple-type/lhc-item-simple-type.component';
import { LhcItemQuantityComponent } from '../lhc-item-quantity/lhc-item-quantity.component';
import { LhcAutocompleteComponent } from '../common/lhc-autocomplete/lhc-autocomplete.component';
import { LhcValidateComponent } from '../lhc-validate/lhc-validate.component';
import { LhcFormComponent } from '../lhc-form/lhc-form.component';
import { LhcItemGroupComponent } from '../lhc-item-group/lhc-item-group.component';
import { LhcItemBooleanComponent } from '../lhc-item-boolean/lhc-item-boolean.component';
import { LhcItemDateComponent } from '../lhc-item-date/lhc-item-date.component';
import { LhcItemTimeComponent } from '../lhc-item-time/lhc-item-time.component';
import { LhcItemDatetimeComponent } from '../lhc-item-datetime/lhc-item-datetime.component';
import { LhcItemTextComponent } from '../lhc-item-text/lhc-item-text.component';
import { LhcItemQuestionTextComponent } from '../lhc-item-question-text/lhc-item-question-text.component';
import { LhcItemQuestionComponent } from '../lhc-item-question/lhc-item-question.component';
import { LhcItemDisplayComponent } from '../lhc-item-display/lhc-item-display.component';
import { LhcGroupVerticalComponent } from '../lhc-group-vertical/lhc-group-vertical.component';
import { LhcGroupHorizontalComponent } from '../lhc-group-horizontal/lhc-group-horizontal.component';
import { LhcGroupMatrixComponent } from '../lhc-group-matrix/lhc-group-matrix.component';
import { LhcGroupTabsComponent } from '../lhc-group-tabs/lhc-group-tabs.component';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { LhcButtonPopoverComponent } from '../lhc-button-popover/lhc-button-popover.component';
import { LhcItemAttachmentComponent } from '../lhc-item-attachment/lhc-item-attachment.component';
import { LhcItemMessagesComponent } from '../lhc-item-messages/lhc-item-messages.component';
import { LhcGroupGridComponent } from '../lhc-group-grid/lhc-group-grid.component';

/**
 * Testing module that provides all the necessary imports and declarations
 * for lforms component testing. This avoids duplicating the complex module
 * setup across individual test files.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule, // Use NoopAnimationsModule instead of BrowserAnimationsModule for tests
    NzRadioModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzGridModule,
    NzPopoverModule,
    NzIconModule.forRoot(icons),
    NzSwitchModule,
    NzToolTipModule,
    NzTabsModule,
  ],
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
    LhcItemQuestionComponent,
    LhcItemDisplayComponent,
    LhcGroupVerticalComponent,
    LhcGroupHorizontalComponent,
    LhcGroupMatrixComponent,
    LhcGroupTabsComponent,
    SafeHtmlPipe,
    LhcButtonPopoverComponent,
    LhcItemAttachmentComponent,
    LhcItemMessagesComponent,
    LhcGroupGridComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzGridModule,
    NzPopoverModule,
    NzIconModule,
    NzSwitchModule,
    NzToolTipModule,
    NzTabsModule,
    // Export all components
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
    LhcItemQuestionComponent,
    LhcItemDisplayComponent,
    LhcGroupVerticalComponent,
    LhcGroupHorizontalComponent,
    LhcGroupMatrixComponent,
    LhcGroupTabsComponent,
    SafeHtmlPipe,
    LhcButtonPopoverComponent,
    LhcItemAttachmentComponent,
    LhcItemMessagesComponent,
    LhcGroupGridComponent,
  ],
})
export class LFormsTestingModule {}
