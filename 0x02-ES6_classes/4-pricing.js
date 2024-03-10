from Currency import './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency_name} (${this._currency_code})`;
  }

  static convertPrice {
    constructor(amount, conversionRate) {
      return (amount * conversionRate);
    }
  }
}
 
