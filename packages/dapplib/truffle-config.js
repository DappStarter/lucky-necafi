require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture street crawl mirror coast hard light army gas'; 
let testAccounts = [
"0x29c7367a95d8818a5751c57362f55ebd53708c15261e8d8461c7a207d72da660",
"0x01872205d9a3f11ba22c906fd2035c2a2a5212ede290bb0565326a9832ab3a7f",
"0xf50c19bfba5bda51c4a9f8cdfd6999f360ccf134105b21aa4eae6d77814016d0",
"0x340f6ddbea9ec804ec69264648da061d6e6942a60f1bfe65eee7b25099ce3c01",
"0xc912723cc0c403b2b660ec013312a0adc91337a627d25fe5e43198082a6ad2a6",
"0xa66a182798f9ec1ef3cad675acf8ff9263f60581b7a247ecb3645e8588051281",
"0x42fc2cc69511a4477b33c37b54ce4061530fb5e69f6f45bb874b0b9ba78995b2",
"0x57754d605435f6ea8ac3e096b77aadb11b7ed8bb2203ea749a7cf0c8f3abd5c8",
"0xab026aea819cd1732127eaea16117f08880d1a60096e7ad6f37a723e6dde52ff",
"0x1965a042d82e8ef1cb0e877559da753531040b66e59f12e72391aaa83f86d3cc"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
