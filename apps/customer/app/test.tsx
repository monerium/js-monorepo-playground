'use client';
import React from 'react';
import { useAppStore } from '../lib/hooks';
import Button from '@monerium/components/Button';
import s from './test.module.css';

const Test = () => {
  const data = useAppStore();

  console.log(
    '%c data',
    'color:white; padding: 30px; background-color: darkgreen',
    data.getState()
  );

  return (
    <div>
      <h1 className={s.test}>Test</h1>
      <Button
        small
        info
        icon="visibility_off"
        onClick={() => console.log('clicked')}
      >
        Fetch account balance
      </Button>
      <Button
        round
        // info
        icon="visibility_off"
        onClick={() => console.log('clicked')}
      >
        Fetch account balance
      </Button>
    </div>
  );
};
export default Test;
