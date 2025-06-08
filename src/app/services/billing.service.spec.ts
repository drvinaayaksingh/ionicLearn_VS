import { TestBed } from '@angular/core/testing';

import { BillingService, BillItem, BillTotals } from './billing.service';

describe('BillingService', () => {
  let service: BillingService;

 beforeEach(() => {
    TestBed.configureTestingModule({ providers: [BillingService] });
    service = TestBed.inject(BillingService);
  });

  it('should start with no items', () => {
    expect(service.getItems()).toEqual([]);
  });

  it('should add an item', () => {
    const item: BillItem = { name: 'X', price: 100, qty: 2, discountAmount: 10, discountPercent: 0 };
    service.addItem(item);
    expect(service.getItems().length).toBe(1);
    expect(service.getItems()[0]).toEqual(item);
  });

  it('should compute item discounted price correctly', () => {
    const item: BillItem = { name: 'Y', price: 50, qty: 3, discountAmount: 15, discountPercent: 0 };
    const total = service.calculateItemTotal(item);
    // (50*3) - 15 = 135
    expect(total).toBe(135);
  });

  it('should compute item discount percent if only percent given', () => {
    const item: BillItem = { name: 'Z', price: 200, qty: 1, discountAmount: 0, discountPercent: 10 };
    const amount = service.calculateItemDiscount(item);
    expect(amount).toBe(20);
    const net = service.calculateItemTotal(item);
    expect(net).toBe(180);
  });

  it('should compute overall totals', () => {
    service.addItem({ name: 'A', price: 100, qty: 1, discountAmount: 10, discountPercent: 0 });
    service.addItem({ name: 'B', price: 50, qty: 2, discountAmount: 0, discountPercent: 20 });
    const totals: BillTotals = service.calculateTotals();
    // Unit total = 100*1 + 50*2 = 200
    expect(totals.unitTotal).toBe(200);
    // Qty total = 1 + 2 = 3
    expect(totals.totalQty).toBe(3);
    // Total discount = 10 + (50*2*0.2) = 10 + 20 = 30
    expect(totals.totalDiscount).toBe(30);
    // Total net = 200 - 30 = 170
    expect(totals.totalNet).toBe(170);
  });

  it('should apply gross-level discount amount and percent', () => {
    service.addItem({ name: 'A', price: 100, qty: 1, discountAmount: 0, discountPercent: 0 });
    service.setGrossDiscount({ amount: 10, percent: 0 });
    const totals = service.calculateTotals();
    expect(totals.grossDiscountAmount).toBe(10);
    expect(totals.grossNet).toBe(90);

    service.setGrossDiscount({ amount: 0, percent: 10 });
    const t2 = service.calculateTotals();
    // gross discount = 100 * 0.1 = 10
    expect(t2.grossDiscountAmount).toBe(10);
    expect(t2.grossNet).toBe(90);
  });
});