import { NativeModules } from 'react-native';

const { RNShopCheckout } = NativeModules;

/**
 * @class IntercomClient
 */

class AgentCheckout {

  register(options) {
    return RNShopCheckout.registerAgent(options);
  }

  openProducts() {
    return RNShopCheckout.openProducts();
  }

  openTransactions() {
    return RNShopCheckout.openTransactions();
  }

  logout() {
    return RNShopCheckout.logout();
  }
  
}

module.exports = new AgentCheckout();