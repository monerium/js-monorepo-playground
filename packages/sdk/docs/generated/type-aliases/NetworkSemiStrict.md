[**Monerium SDK v2.12.1**](../README.md) • **Docs**

---

[Monerium SDK v2.12.1](../README.md) / NetworkSemiStrict

# Type alias: NetworkSemiStrict\<C\>

> **NetworkSemiStrict**\<`C`\>: `C` _extends_ `"ethereum"` ? [`EthereumTestnet`](EthereumTestnet.md) \| `"mainnet"` : `C` _extends_ `"gnosis"` ? [`GnosisTestnet`](GnosisTestnet.md) \| `"mainnet"` : `C` _extends_ `"polygon"` ? [`PolygonTestnet`](PolygonTestnet.md) \| `"mainnet"` : `never`

## Type parameters

• **C** _extends_ [`Chain`](Chain.md)

## Source

[types.ts:23](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/types.ts#L23)
