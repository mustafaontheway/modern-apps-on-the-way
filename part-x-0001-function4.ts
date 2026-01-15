type discountRates = 0.12 | 0.18

function calculateSales(price: number, salesQuantity: number): number {

    const discount: discountRates = salesQuantity > 1000 ? 0.18 : 0.12

    return salesQuantity * (1 - discount) * price
}
