import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArray, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BillingPage } from './billing.page';
import { BillingService } from '../services/billing.service';


describe('BillingPage', () => {
  let comp: BillingPage;
  let fixture: ComponentFixture<BillingPage>;
  let service: BillingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule],
      providers: [BillingService]
    }).compileComponents();

    fixture = TestBed.createComponent(BillingPage);
    comp = fixture.componentInstance;
    service = TestBed.inject(BillingService);
    fixture.detectChanges();
  });

 function getItemsArray(): FormArray {
    return comp.items as FormArray;
  }

  it('should convert line discount ₹→% correctly', () => {
    const arr = getItemsArray();
    // set price=200,qty=2 => gross=400
    arr.at(0).patchValue({ price: 200, qty: 2, discountAmount: 40, discountPercent: 0 });
    comp.onDiscountAmountChange(0);
    const pct = arr.at(0).get('discountPercent')!.value;
    expect(pct).toBeCloseTo(10); // 40/400*100
  });

  it('should convert line discount %→₹ correctly', () => {
    const arr = getItemsArray();
    arr.at(0).patchValue({ price: 50, qty: 4, discountPercent: 20, discountAmount: 0 });
    comp.onDiscountPercentChange(0);
    const amt = arr.at(0).get('discountAmount')!.value;
    expect(amt).toBeCloseTo(40); // 50*4*0.2
  });

  it('should convert gross discount ₹→% correctly', () => {
    // first ensure line totals produce totalNet=100
    const arr = getItemsArray();
    arr.at(0).patchValue({ price: 100, qty: 1, discountAmount: 0, discountPercent: 0 });
    comp.recalculateTotals();
    expect(comp.totals.totalNet).toBe(100);

    comp.form.get('grossDiscountAmount')!.setValue(25);
    comp.onGrossDiscountAmountChange();
    const gpct = comp.form.get('grossDiscountPercent')!.value;
    expect(gpct).toBeCloseTo(25); // 25/100*100
  });

  it('should convert gross discount %→₹ correctly', () => {
    const arr = getItemsArray();
    arr.at(0).patchValue({ price: 80, qty: 1, discountAmount: 0, discountPercent: 0 });
    comp.recalculateTotals();
    expect(comp.totals.totalNet).toBe(80);

    comp.form.get('grossDiscountPercent')!.setValue(50);
    comp.onGrossDiscountPercentChange();
    const gamt = comp.form.get('grossDiscountAmount')!.value;
    expect(gamt).toBeCloseTo(40); // 80 * 0.5
  });
});