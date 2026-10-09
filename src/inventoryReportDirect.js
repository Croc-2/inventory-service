function createInventoryReport(items) {
  return items
    .map((item) => `${item.sku}: ${item.quantity}`)
    .join("\n");
}

module.exports = { createInventoryReport };
