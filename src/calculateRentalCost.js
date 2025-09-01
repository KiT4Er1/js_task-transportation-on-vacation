/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_COST = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days < MIDDLE_TERM) {
    return BASE_COST * days;
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return BASE_COST * days - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BASE_COST * days - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
