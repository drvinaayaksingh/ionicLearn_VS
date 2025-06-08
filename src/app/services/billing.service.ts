import { Injectable } from '@angular/core';


export interface BillItem {
  name: string;
  price: number;
  qty: number;
  discountAmount: number;
  discountPercent: number;
}

export interface BillTotals {
  unitTotal: number;
  totalQty: number;
  totalDiscount: number;
  totalNet: number;
  grossDiscountAmount: number;
  grossNet: number;
}

@Injectable({
  providedIn: 'root'
})

export class BillingService {
  private items: BillItem[] = [];
  private grossDiscount = { amount: 0, percent: 0 };

  addItem(item: BillItem) {
    this.items.push(item);
  }
  getItems(): BillItem[] {
    return this.items;
  }

  calculateItemDiscount(item: BillItem): number {
    if (item.discountAmount) {
      return item.discountAmount;
    }
    return item.price * item.qty * (item.discountPercent / 100);
  }

  calculateItemTotal(item: BillItem): number {
    const gross = item.price * item.qty;
    const disc = this.calculateItemDiscount(item);
    return gross - disc;
  }

  calculateTotals(): BillTotals {
    const unitTotal = this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const totalQty = this.items.reduce((sum, i) => sum + i.qty, 0);
    const totalDiscount = this.items
      .reduce((sum, i) => sum + this.calculateItemDiscount(i), 0);

    const totalNet = unitTotal - totalDiscount;
    // gross-level discount
    const grossDiscountAmount = this.grossDiscount.amount
      || totalNet * (this.grossDiscount.percent / 100);
    const grossNet = totalNet - grossDiscountAmount;

    return { unitTotal, totalQty, totalDiscount, totalNet, grossDiscountAmount, grossNet };
  }

  setGrossDiscount(d: { amount: number; percent: number }) {
    this.grossDiscount = d;
  }
}
