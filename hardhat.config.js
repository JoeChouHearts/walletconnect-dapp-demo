/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xb1190745ef438ee622be67bde8dc4e8baa3621a62746b7ab1171fefd11c7435c","balance":"1000000000000000000000"},{"privateKey":"0x7d061ed7c27af692a7a7817f0c25c326282e3c6a9ec434fce820864805e594bd","balance":"1000000000000000000000"},{"privateKey":"0xdf098ed80632b348ed68bec3807720e9256a090b4a1713f2f2b296fa6ed2045a","balance":"1000000000000000000000"},{"privateKey":"0x80a24b5730a5be63e98f006a91495c6b362e9be5564c23a7e1172c53636fe524","balance":"1000000000000000000000"},{"privateKey":"0x82509c60f16802d47d8ae254dda8dd686cccd26f61c8715686daa3de93f0a5e4","balance":"1000000000000000000000"},{"privateKey":"0x0ab1113a45cd0627919bc27d7873a1f532fd44adcfc13519473ecd7ca8bc502b","balance":"1000000000000000000000"},{"privateKey":"0x1e73d4abd7e1b5e885a78840afb4041289aeed386c71304c78dca1fb5f31213b","balance":"1000000000000000000000"},{"privateKey":"0xf814060c224ec8c83abb7a3db9ec043c6eb817b93a60eaf29337e9f9f38a78c7","balance":"1000000000000000000000"},{"privateKey":"0x1b2c9887f3f2d90baa86b670b9c2a5f5a64a3ee3c9dad23057e6850dbc4a57e0","balance":"1000000000000000000000"},{"privateKey":"0xc0b4919d5b8cb52e3c69a9b66e24219171f465cf885abb67a78955676b6caeb4","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};