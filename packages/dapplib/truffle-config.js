require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender ten charge remember nominee champion coral light army gate'; 
let testAccounts = [
"0x8f6ba796d75b0d744a6a34fc6b77ff4cd0bfec1fe84ef70a18484e18792190e2",
"0xb782ed8b30d3a2fd2b99756aa3c0b9d207b69199e3f7550adda397a09692fb10",
"0xcc30a81109567ab4e9d78ded53f1f1145403d09b02e3aa3431441fa2f244d6aa",
"0x54647621db4c64cb4a863afd328a9e86fc82bea3353b9dde3243c07361507dde",
"0x40c8f2ac83c3c13fc786c6213f1ff1c69a40070e5cab7b5498f0d87a4b05bcce",
"0xefb5ba742e408367bbd088ddf4bdb62223b81ef2e681a9a28f5435d1c9176f59",
"0x25450010ce0a3c93351248b457c01b41717fa66eecfa6f5638f6083b502eb155",
"0x242e88b588d76141b274b6587bd8b9953690a17436db59c2763f9f7e1ad5aa16",
"0x366cc42b17d3d7e2f278d05d1e5f760f9499f3067d760f6b7430a2ef37c26962",
"0x2ce57cdf64c3fae7b5308eb4a94ed322fed739b25f23f6c5d27658995ed55d5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
