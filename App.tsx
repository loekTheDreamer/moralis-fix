// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';
// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';
// Import the ethers library
import {ethers} from 'ethers';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// const Moralis = require('moralis/react-native.js');
import Moralis from 'moralis/react-native';
// import Moralis from ""

const App = () => {
  const asyncFunc = async () => {
    await Moralis.start({
      serverUrl: 'https://ycedhlwbj4xn.usemoralis.com:2053/serve',
      appId: 'rCBlcHAqw7H4ZVG9VAHZevQPvg091wn28ab6AJyH',
    });
    // Get the initialized web3 instance from Ethers.js

    //@ts-ignore
    await Moralis.enableWeb3();
    //@ts-ignore

    const web3 = Moralis.web3;
    console.log('web3', web3);
    // await Moralis.enableWeb3();
    // const web3 = Moralis.web3;
    // console.log(web3);
  };
  asyncFunc();

  // await Moralis.start({
  //   serverUrl: "rCBlcHAqw7H4ZVG9VAHZevQPvg091wn28ab6AJyH",
  //   appId: "YOUR_APP_ID",
  // });

  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
