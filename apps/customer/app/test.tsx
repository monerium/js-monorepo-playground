'use client';
import React from 'react';
import { useAppStore } from '../lib/hooks';

const Test = () => {
  const data = useAppStore();

  console.log(
    '%c data',
    'color:white; padding: 30px; background-color: darkgreen',
    data.getState()
  );

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};
export default Test;
