import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MUMBAI = 80001,
  POLYGON = 137
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.ROPSTEN]: '0x4AF33C748f85C2F44591e42986c1eD6978D4cc41',
  [ChainId.GÖRLI]: '0xa034f8bc08196a2CC3E7b368aE28E290D8699E14',
  [ChainId.KOVAN]: '0xdfD8C04b97ff4a0390b07f52653106584ff5d721',
  [ChainId.POLYGON]: '0xdaFBf3551B68f6c5C542B849c8A7E78399C8B773',
  [ChainId.MAINNET]: '0x4AF33C748f85C2F44591e42986c1eD6978D4cc41',
  [ChainId.MUMBAI]: '0xa034f8bc08196a2CC3E7b368aE28E290D8699E14',
  [ChainId.RINKEBY]: '0xdfD8C04b97ff4a0390b07f52653106584ff5d721'
}

export const INIT_CODE_HASH = '0x0295189ab91379a7a2ac3a904ff39d9b8b0fa99f6b8ce954ee65fe6554e6a332'

export const RINKEBY_WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
