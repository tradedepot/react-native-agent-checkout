import { NativeModules, NativeEventEmitter } from 'react-native';

const { RNAgentCheckout } = NativeModules;

/**
 * @class IntercomClient
 */

class AgentCheckout {

  registerAgent(options) {
    return RNAgentCheckout.registerAgent(options);
  }

  openCart() {
    return RNAgentCheckout.openCart();
  }

  openTransactions() {
    return RNAgentCheckout.openTransactions();
  }
  
}

module.exports = new AgentCheckout();