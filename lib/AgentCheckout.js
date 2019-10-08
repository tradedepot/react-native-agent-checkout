import { NativeModules } from 'react-native';

const { RNShopCheckout } = NativeModules;

/**
 * @class IntercomClient
 */

class AgentCheckout {

  register(options) {
    return RNShopCheckout.registerAgent(options);
  }

  openCart() {
    return RNShopCheckout.openCart();
  }

  openTransactions() {
    return RNShopCheckout.openTransactions();
  }
  
}

module.exports = new AgentCheckout();