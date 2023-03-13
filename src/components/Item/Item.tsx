import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Checkbox, CheckboxProps } from '@mui/material';
import { FormGroup, FormControlLabel } from '@mui/material';


const Item = ({ name }: any) => {
    const [checked, setChecked] = useState(true);
    const [label, setLabel] = useState('label')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  
    return (
      <div>
        <FormControlLabel control={<Checkbox />} label={name} />
      </div>
    );
}

export default Item