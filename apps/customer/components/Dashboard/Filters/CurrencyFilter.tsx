import { Dispatch, SetStateAction, memo } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Currency } from '@monerium/sdk';
import TokenIcon from '../../Tokens/Icon';
import s from './CurrencyFilter.module.scss';

const CurrencyFilter = memo(
  ({
    selected,
    setSelected,
  }: {
    selected: Currency;
    setSelected: Dispatch<SetStateAction<Currency>>;
  }) => {
    return (
      <FormControl size="small">
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value as Currency)}
          displayEmpty
        >
          <MenuItem value="eur">
            <TokenIcon currency={'eur' as Currency} className={s.icon} /> EURe
          </MenuItem>
          <MenuItem value="gbp">
            <TokenIcon currency={'gbp' as Currency} className={s.icon} /> GBPe
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
);
export default CurrencyFilter;
