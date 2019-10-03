
package com.tradedepot.react.shopagent;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.Callback;

import co.tradedepot.shop.sdk.checkout.Checkout;
import co.tradedepot.shop.sdk.checkout.Registration;

public class RNAgentCheckoutModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;
  public static final String TAG = "ShopTopUpAgent";

  public RNAgentCheckoutModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNAgentCheckout";
  }

  @ReactMethod
  public void registerAgent(ReadableMap options, Promise promise) {
    try {
        if(options.hasKey("agentId") && options.hasKey("firstName") && options.hasKey("lastName") && options.hasKey("phoneNumber") && options.hasKey("countryCode") &&
                options.hasKey("longitude") && options.hasKey("latitude") && options.hasKey("company") & options.hasKey("address")) {
          Registration registration = Registration.Builder.create()
                  .agentId(options.getString("agentId"))
                  .firstName(options.getString("firstName"))
                  .lastName(options.getString("lastName"))
                  .phoneNumber(options.getString("phoneNumber"))
                  .countryCode(options.getString("countryCode"))
                  .company(options.getString("company"))
                  .latitude(options.getDouble("latitude"))
                  .longitude(options.getDouble("longitude"))
                  .address(options.getString("address")).build();
          Checkout.registerAgent(registration);
        } else {
        Log.e(TAG, "registerAgent is called with incomplete details");
      }
    } catch (Exception e) {
      Log.e(TAG, "shoptopupAgent not initialized");
    }
  }

  @ReactMethod
  public void openCart () {
    try{
        Checkout.openCart();
    } catch (Exception e) {
      Log.e(TAG, "shoptopupAgent not initialized");
    }
   
  }

}