[**Monerium SDK v2.12.1**](../README.md) • **Docs**

---

[Monerium SDK v2.12.1](../README.md) / NetworkSemiStrict

# Type alias: NetworkSemiStrict\<C\>

> **NetworkSemiStrict**\<`C`\>: `C` _extends_ `"ethereum"` ? [`EthereumTestnet`](EthereumTestnet.md) \| `"mainnet"` : `C` _extends_ `"gnosis"` ? [`GnosisTestnet`](GnosisTestnet.md) \| `"mainnet"` : `C` _extends_ `"polygon"` ? [`PolygonTestnet`](PolygonTestnet.md) \| `"mainnet"` : `never`

## Type parameters

• **C** _extends_ [`Chain`](Chain.md)

## Source

[types.ts:23](https://github.com/monerium/js-monorepo/blob/26e2ea0861cb901d7ae432326a3f8b4932fe0d47/packages/sdk/src/types.ts#L23)
