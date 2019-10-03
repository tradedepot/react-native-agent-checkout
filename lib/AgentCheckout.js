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
  
}

module.exports = new AgentCheckout();