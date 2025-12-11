import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LhcItemDisplayComponent } from './lhc-item-display.component';
import { LFormsTestingModule } from '../testing/lforms-testing.module';
import { LhcDataService } from '../../lib/lhc-data.service';

describe('LhcItemDisplayComponent', () => {
  let component: LhcItemDisplayComponent;
  let fixture: ComponentFixture<LhcItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LFormsTestingModule],
      providers: [LhcDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhcItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
