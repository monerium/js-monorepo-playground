[**Monerium SDK v2.12.1**](../README.md) • **Docs**

---

[Monerium SDK v2.12.1](../README.md) / MoneriumClient

# Class: MoneriumClient

## Constructors

### new MoneriumClient()

> **new MoneriumClient**(`envOrOptions`?): [`MoneriumClient`](MoneriumClient.md)

#### Parameters

• **envOrOptions?**: [`ENV`](../type-aliases/ENV.md) \| [`ClassOptions`](../type-aliases/ClassOptions.md)

#### Returns

[`MoneriumClient`](MoneriumClient.md)

#### Default

`sandbox`

#### Source

[client.ts:77](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L77)

## Properties

### bearerProfile?

> `optional` **bearerProfile**: [`BearerProfile`](../interfaces/BearerProfile.md)

The bearer profile will be available after authentication, it includes the `access_token` and `refresh_token`

#### Source

[client.ts:58](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L58)

---

### isAuthorized

> **isAuthorized**: `boolean` = `!!this.bearerProfile`

#### Source

[client.ts:66](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L66)

---

### state

> **state**: `undefined` \| `string`

The state parameter is used to maintain state between the request and the callback.

#### Source

[client.ts:72](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L72)

## Methods

### Auth

#### authorize()

> **authorize**(`client`?): `Promise`\<`void`\>

Construct the url to the authorization code flow,
Code Verifier needed for the code challenge is stored in local storage
For automatic wallet link, add the following properties: `address`, `signature` & `chainId`

##### Parameters

• **client?**: [`AuthFlowOptions`](../type-aliases/AuthFlowOptions.md)

##### Returns

`Promise`\<`void`\>

string
[https://monerium.dev/api-docs#operation/auth](https://monerium.dev/api-docs#operation/auth)

##### Source

[client.ts:117](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L117)

---

#### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Cleanups the socket and the subscriptions

##### Returns

`Promise`\<`void`\>

##### Source

[client.ts:492](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L492)

---

#### getAccess()

> **getAccess**(`client`?): `Promise`\<`boolean`\>

Get access to the API

##### Parameters

• **client?**: [`ClientCredentials`](../type-aliases/ClientCredentials.md) \| [`AuthorizationCodeCredentials`](../type-aliases/AuthorizationCodeCredentials.md)

the client credentials

##### Returns

`Promise`\<`boolean`\>

boolean to indicate if access has been granted

##### Source

[client.ts:151](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L151)

---

#### getAuthContext()

> **getAuthContext**(): `Promise`\<[`AuthContext`](../interfaces/AuthContext.md)\>

[https://monerium.dev/api-docs#operation/auth-context](https://monerium.dev/api-docs#operation/auth-context)

##### Returns

`Promise`\<[`AuthContext`](../interfaces/AuthContext.md)\>

##### Source

[client.ts:264](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L264)

---

#### revokeAccess()

> **revokeAccess**(): `Promise`\<`void`\>

Revokes access

##### Returns

`Promise`\<`void`\>

##### Source

[client.ts:505](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L505)

### Accounts

#### getBalances()

> **getBalances**(`profileId`?): `Promise`\<[`Balances`](../interfaces/Balances.md)[]\>

[https://monerium.dev/api-docs#operation/profile-balances](https://monerium.dev/api-docs#operation/profile-balances)

##### Parameters

• **profileId?**: `string`

the id of the profile to fetch balances.

##### Returns

`Promise`\<[`Balances`](../interfaces/Balances.md)[]\>

##### Source

[client.ts:281](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L281)

---

#### linkAddress()

> **linkAddress**(`profileId`, `body`): `Promise`\<`unknown`\>

[https://monerium.dev/api-docs#operation/profile-addresses](https://monerium.dev/api-docs#operation/profile-addresses)

##### Parameters

• **profileId**: `string`

• **body**: [`LinkAddress`](../interfaces/LinkAddress.md)

##### Returns

`Promise`\<`unknown`\>

##### Source

[client.ts:319](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L319)

### Profiles

#### getProfile()

> **getProfile**(`profileId`): `Promise`\<[`Profile`](../interfaces/Profile.md)\>

[https://monerium.dev/api-docs#operation/profile](https://monerium.dev/api-docs#operation/profile)

##### Parameters

• **profileId**: `string`

the id of the profile to fetch.

##### Returns

`Promise`\<[`Profile`](../interfaces/Profile.md)\>

##### Source

[client.ts:273](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L273)

### Orders

#### connectOrderSocket()

> **connectOrderSocket**(): `Promise`\<`void`\>

Connects to the order notifications socket

##### Returns

`Promise`\<`void`\>

##### Source

[client.ts:449](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L449)

---

#### getOrder()

> **getOrder**(`orderId`): `Promise`\<[`Order`](../interfaces/Order.md)\>

[https://monerium.dev/api-docs#operation/order](https://monerium.dev/api-docs#operation/order)

##### Parameters

• **orderId**: `string`

##### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

##### Source

[client.ts:301](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L301)

---

#### getOrders()

> **getOrders**(`filter`?): `Promise`\<[`Order`](../interfaces/Order.md)[]\>

[https://monerium.dev/api-docs#operation/orders](https://monerium.dev/api-docs#operation/orders)

##### Parameters

• **filter?**: [`OrderFilter`](../interfaces/OrderFilter.md)

##### Returns

`Promise`\<[`Order`](../interfaces/Order.md)[]\>

##### Source

[client.ts:293](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L293)

---

#### placeOrder()

> **placeOrder**(`order`, `profileId`?): `Promise`\<[`Order`](../interfaces/Order.md)\>

[https://monerium.dev/api-docs#operation/post-orders](https://monerium.dev/api-docs#operation/post-orders)

##### Parameters

• **order**: [`NewOrder`](../type-aliases/NewOrder.md)

• **profileId?**: `string`

##### Returns

`Promise`\<[`Order`](../interfaces/Order.md)\>

##### Source

[client.ts:334](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L334)

---

#### subscribeOrders()

> **subscribeOrders**(`event`, `handler`): `void`

Subscribe to MoneriumEvent to receive notifications using the Monerium API (WebSocket)
We are setting a subscription map because we need the user to have a token to start the WebSocket connection
[https://monerium.dev/api-docs#operation/profile-orders-notifications](https://monerium.dev/api-docs#operation/profile-orders-notifications)

##### Parameters

• **event**: [`OrderState`](../enumerations/OrderState.md)

The event to subscribe to

• **handler**: [`MoneriumEventListener`](../type-aliases/MoneriumEventListener.md)

The handler to be called when the event is triggered

##### Returns

`void`

##### Source

[client.ts:521](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L521)

---

#### subscribeToOrderNotifications()

> **subscribeToOrderNotifications**(): `WebSocket`

Subscribes to the order notifications socket

##### Returns

`WebSocket`

##### Source

[client.ts:460](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L460)

---

#### unsubscribeOrders()

> **unsubscribeOrders**(`event`): `void`

Unsubscribe from MoneriumEvent and close the socket if there are no more subscriptions

##### Parameters

• **event**: [`OrderState`](../enumerations/OrderState.md)

The event to unsubscribe from

##### Returns

`void`

##### Source

[client.ts:530](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L530)

---

#### uploadSupportingDocument()

> **uploadSupportingDocument**(`document`): `Promise`\<[`SupportingDoc`](../interfaces/SupportingDoc.md)\>

[https://monerium.dev/api-docs#operation/supporting-document](https://monerium.dev/api-docs#operation/supporting-document)

##### Parameters

• **document**: `File`

##### Returns

`Promise`\<[`SupportingDoc`](../interfaces/SupportingDoc.md)\>

##### Source

[client.ts:360](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L360)

### Tokens

#### getTokens()

> **getTokens**(): `Promise`\<[`Token`](../interfaces/Token.md)[]\>

[https://monerium.dev/api-docs#operation/tokens](https://monerium.dev/api-docs#operation/tokens)

##### Returns

`Promise`\<[`Token`](../interfaces/Token.md)[]\>

##### Source

[client.ts:309](https://github.com/monerium/js-monorepo/blob/69aafbf665e06fb1fab9775ca5ee0ba5fb9dbc84/packages/sdk/src/client.ts#L309)
