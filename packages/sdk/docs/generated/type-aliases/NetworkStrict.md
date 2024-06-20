[**Monerium SDK v2.13.0**](../README.md) • **Docs**

---

[Monerium SDK v2.13.0](../README.md) / NetworkStrict

# Type alias: NetworkStrict\<C, E\>

> **NetworkStrict**\<`C`, `E`\>: `E` _extends_ `"production"` ? `"mainnet"` : `E` _extends_ `"sandbox"` ? `C` _extends_ `"ethereum"` ? [`EthereumTestnet`](EthereumTestnet.md) : `C` _extends_ `"gnosis"` ? [`GnosisTestnet`](GnosisTestnet.md) : `C` _extends_ `"polygon"` ? [`PolygonTestnet`](PolygonTestnet.md) : `never` : `never`

## Type parameters

• **C** _extends_ [`Chain`](Chain.md)

• **E** _extends_ [`ENV`](ENV.md)

## Source

[types.ts:31](https://github.com/monerium/js-monorepo/blob/4397cd6d6b171e9f3bbb7c9a2278e6782b814c1a/packages/sdk/src/types.ts#L31)
