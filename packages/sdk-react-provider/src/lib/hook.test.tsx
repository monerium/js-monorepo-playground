import '@testing-library/jest-dom';
// eslint-disable-next-line no-redeclare
import { act, render, screen, waitFor } from '@testing-library/react';

import { useMonerium } from './hook';
import { MoneriumProvider } from './provider';

jest.mock('@monerium/sdk', () => {
  const mockMoneriumClient = {
    authorize: jest.fn().mockResolvedValue(true),
    getAccess: jest.fn().mockResolvedValue(true),
    disconnect: jest.fn(),
    getAuthContext: jest
      .fn()
      .mockResolvedValue({ defaultProfile: 'defaultProfile' }),
    getProfile: jest.fn().mockResolvedValue({
      name: 'John Doe',
    }),
    getBalances: jest.fn().mockResolvedValue([
      /* mock balance data */
    ]),
    getOrders: jest.fn().mockResolvedValue([
      /* mock order data */
    ]),
    getTokens: jest.fn().mockResolvedValue([
      /* mock token data */
    ]),
  };

  return {
    MoneriumClient: jest.fn(() => mockMoneriumClient),
    MoneriumContext: jest.fn(() => null),
    // mock other exports as needed
  };
});

// Mock Test Consumer Component
const TestConsumerComponent = () => {
  const context = useMonerium();

  return (
    <div>
      <p data-testid="context">{JSON.stringify(context)}</p>
    </div>
  );
};

describe('useMonerium', () => {
  test('returns the context value when used within a MoneriumProvider', async () => {
    await act(async () => {
      render(
        <MoneriumProvider>
          <TestConsumerComponent />
        </MoneriumProvider>
      );
    });

    await waitFor(() =>
      expect(screen.getByTestId('context')).toHaveTextContent(
        JSON.stringify({
          isAuthorized: true,
          profile: { name: 'John Doe' },
          balances: [],
          loading: false,
          loadingPlaceOrder: false,
          loadingLinkAddress: false,
          loadingBalances: false,
          orders: [],
          tokens: [],
          error: null,
          loadingAuth: false,
        })
      )
    );
  });

  test('throws an error when used outside a MoneriumProvider', async () => {
    // Suppress console error for this test
    const consoleError = console.error;
    console.error = jest.fn();

    let error = null;
    try {
      await act(async () => {
        render(<TestConsumerComponent />);
      });
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
    expect((error as Error)?.message).toMatch(
      'useMonerium must be used within a MoneriumProvider'
    );

    // Restore console error
    console.error = consoleError;
  });
});
