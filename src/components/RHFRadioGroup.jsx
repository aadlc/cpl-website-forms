import * as React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { Controller } from 'react-hook-form';

/**
 * RHFRadioGroup is a custom radio group component integrated with React Hook Form.
 * It uses Material-UI components to render a group of radio buttons.
 * 
 * Props:
 * - control: The control object provided by React Hook Form for managing form state.
 * - error: Boolean indicating if there's an error in the radio group.
 * - helperText: String providing additional information or instructions.
 * - label: String for the label of the radio group.
 * - name: String specifying the name of the field in the form.
 * - options: Array of objects representing each radio option.
 * - optionLabelKey: String specifying the key to use for option labels from the options object. Defaults to 'label'.
 * - optionValueKey: String specifying the key to use for option values from the options object. Defaults to 'value'.
 * - required: Boolean indicating if the radio group is required.
 * - row: Boolean to display the radio buttons in a row. Defaults to false (column display).
 * 
 * The component uses the Controller from React Hook Form to link the RadioGroup with the form state.
 * Each radio button is represented by a FormControlLabel component.
 */
const RHFRadioGroup = ({ 
  control, 
  error, 
  helperText,
  label, 
  name, 
  options, 
  optionLabelKey = 'label',
  optionValueKey = 'value',
  required, 
  row = false,
}) => {
  return (
    <Box mt={2} mb={1}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl component='fieldset' error={error}>
            <FormLabel component='legend' required={required}>{label}</FormLabel>
            <RadioGroup row={row} {...field}>
              {options.map((option, index) => (
                <FormControlLabel
                  key={index + option}
                  value={option[optionValueKey]}
                  control={<Radio />}
                  label={option[optionLabelKey]}
                />
              ))}
            </RadioGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default RHFRadioGroup;
