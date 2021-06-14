export const calculateGross = (monthlyRent, listPrice) => {
  if (monthlyRent == null || isNaN(+monthlyRent)) {
    return;
  }

  if (listPrice == null || isNaN(+listPrice)) {
    return;
  }

  return (monthlyRent * 12) / listPrice;
};
