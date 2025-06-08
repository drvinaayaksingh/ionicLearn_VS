import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BillingService, BillTotals } from '../services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})

export class BillingPage implements OnInit {
  form = this.fb.group({
    items: this.fb.array([]),
    grossDiscountAmount: [0],
    grossDiscountPercent: [0],
  });
  totals: BillTotals = {} as any;

  constructor(private fb: FormBuilder, private billing: BillingService) {}

  ngOnInit() {
    this.addItemRow();
    this.recalculateTotals();
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItemRow() {
    const fg = this.fb.group({
      name: [''],
      price: [0, [Validators.min(0)]],
      qty: [1, [Validators.min(1)]],
      discountAmount: [0, [Validators.min(0)]],
      discountPercent: [0, [Validators.min(0), Validators.max(100)]],
      lineTotal: [{ value: 0, disabled: true }]
    });
    fg.valueChanges.subscribe(() => this.updateItemTotal(this.items.length - 1));
    this.items.push(fg);
  }

  updateItemTotal(index: number) {
    const fg = this.items.at(index);
    const item = fg.value;
    const total = this.billing.calculateItemTotal(item);
    fg.get('lineTotal')!.setValue(total, { emitEvent: false });
    this.recalculateTotals();
  }

  recalculateTotals() {
    this.billing = new BillingService(); // reset service
    this.items.controls.forEach(fg => this.billing.addItem(fg.value));
    this.billing.setGrossDiscount({
      amount: this.form.get('grossDiscountAmount')!.value ?? 0,
      percent: this.form.get('grossDiscountPercent')!.value ?? 0
    });
    this.totals = this.billing.calculateTotals();
  }

  applyGrossDiscount() {
    this.recalculateTotals();
  }

  // inside BillingPage component

/** Line‐item ₹ → % */
onDiscountAmountChange(i: number) {
  const fg = this.items.at(i);
  const price = fg.value.price * fg.value.qty;
  const amt  = fg.value.discountAmount ?? 0;
  const pct  = price ? (amt / price) * 100 : 0;
  fg.get('discountPercent')!
    .setValue(+pct.toFixed(2), { emitEvent: false });
  this.updateItemTotal(i);
}

/** Line‐item % → ₹ */
onDiscountPercentChange(i: number) {
  const fg = this.items.at(i);
  const price = fg.value.price * fg.value.qty;
  const pct   = fg.value.discountPercent ?? 0;
  const amt   = (price * pct) / 100;
  fg.get('discountAmount')!
    .setValue(+amt.toFixed(2), { emitEvent: false });
  this.updateItemTotal(i);
}

/** Gross ₹ → % */
onGrossDiscountAmountChange() {
  const base = this.totals.totalNet;
  const amt  = this.form.value.grossDiscountAmount ?? 0;
  const pct  = base ? (amt / base) * 100 : 0;
  this.form.get('grossDiscountPercent')!
    .setValue(+pct.toFixed(2), { emitEvent: false });
  this.applyGrossDiscount();
}

/** Gross % → ₹ */
onGrossDiscountPercentChange() {
  const base = this.totals.totalNet;
  const pct  = this.form.value.grossDiscountPercent ?? 0;
  const amt  = (base * pct) / 100;
  this.form.get('grossDiscountAmount')!
    .setValue(+amt.toFixed(2), { emitEvent: false });
  this.applyGrossDiscount();
}

}
