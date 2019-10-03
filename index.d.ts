
  /**
   * openTransactions
   * @returns {Promise<void>}
   */
  export function openTransactions(): Promise<void>;



  /**
   * openCart
   * @returns {Promise<void>}
   */
  export function openCart(): Promise<void>;

  
  /**
   * registerAgent
   * @param {userId: string} | {email: string} options
   * @returns {Promise<void>}
   */
  export function registerAgent(options: {
    agentId?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    countryCode?: string;
    company?: string;
    latitude?: number;
    longitude?: number;
    address?: string;
  }): Promise<void>;
  
  