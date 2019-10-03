
# react-native-agent-checkout

## Getting started

`$ npm install react-native-agent-checkout --save`

### Mostly automatic installation

`$ react-native link react-native-agent-checkout`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-agent-checkout` and add `RNAgentCheckout.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAgentCheckout.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.tradedepot.react.shopagent.RNAgentCheckoutPackage;` to the imports at the top of the file
  - Add `new RNAgentCheckoutPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-agent-checkout'
  	project(':react-native-agent-checkout').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-agent-checkout/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-agent-checkout')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAgentCheckout.sln` in `node_modules/react-native-agent-checkout/windows/RNAgentCheckout.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Agent.Checkout.RNAgentCheckout;` to the usings at the top of the file
  - Add `new RNAgentCheckoutPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAgentCheckout from 'react-native-agent-checkout';

// TODO: What to do with the module?
RNAgentCheckout;
```
  