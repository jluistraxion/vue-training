export const formatMoney = (amount) => {
  let objCurrency = {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  };

  const hasDecimals = amount % 1 !== 0;
  if (hasDecimals) {
    objCurrency.maximumFractionDigits = 2;
  }

  return new Intl.NumberFormat('es-MX', objCurrency).format(amount)
}