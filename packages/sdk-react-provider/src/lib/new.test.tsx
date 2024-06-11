import React from 'react';
import { render } from '@testing-library/react';
import { MoneriumProvider } from './provider';

describe('MoneriumProvider', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MoneriumProvider
        clientId="testClientId"
        redirectUrl="http://localhost"
        environment="sandbox"
      >
        <div>Test Child</div>
      </MoneriumProvider>
    );

    expect(container).toBeTruthy();
  });
});
