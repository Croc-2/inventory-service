export class InventoryStore {
  constructor(items = []) {
    this.items = new Map(
      items.map((item) => [item.sku, { ...item }]),
    );
  }

  list() {
    return [...this.items.values()].map((item) => ({ ...item }));
  }

  get(sku) {
    const item = this.items.get(sku);
    return item ? { ...item } : null;
  }

  setStock(sku, quantity) {
    if (!Number.isInteger(quantity) || quantity < 0) {
      throw new TypeError("quantity must be a non-negative integer");
    }

    const item = this.items.get(sku);
    if (!item) {
      throw new Error(`unknown SKU: ${sku}`);
    }

    const updated = { ...item, quantity };
    this.items.set(sku, updated);
    return { ...updated };
  }
}
