export function formatCurrency(priceCents) {
  //calling round on the price before the division and ".toFixed"
  //avoids a problem javascript sometimes has with rounding in
  //the toFixed method
  return (Math.round(priceCents) / 100).toFixed(2);
};

export default formatCurrency;