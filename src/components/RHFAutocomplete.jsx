import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'

/**
 * MuiAutocomplete is a custom wrapper component around Material-UI's Autocomplete component.
 * This component is designed to be integrated with React Hook Form for form state management.
 * 
 * Props:
 * - control: Object from React Hook Form to control the input.
 * - getOptionDisabled: Function to determine if an option should be disabled. Defaults to a function that always returns false.
 * - name: String representing the name of the field in the form.
 * - options: Array of option objects to be displayed in the dropdown. Defaults to an empty array.
 * - optionLabelKey: String representing the key in option objects to be used as the label. Defaults to 'label'.
 * - optionValueKey: String representing the key in option objects to be used as the value. Defaults to 'id'.
 * - rest: Spread attribute to pass any additional props needed.
 * 
 * The component uses the Controller component from React Hook Form to integrate the Autocomplete component into the form.
 * The value of the Autocomplete is controlled based on the form's state.
 */
const MuiAutocomplete = ({ 
  control,
  getOptionDisabled = () => false,
  name,
  options = [],
  optionLabelKey = 'label',
  optionValueKey = 'id',
  ...rest
}) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        // Finds the option object from 'options' that matches the current form value.
        const foundOption = Array.isArray(options) ? options.find(option => option[optionValueKey] === field.value) : null

        return (
          <Autocomplete
            value={foundOption ?? null} // Sets the value of the Autocomplete based on the found option.
            onChange={(event, newValue) => {
              // Updates the form state with the new value when the selection changes.
              field.onChange(newValue ? newValue[optionValueKey] : null)
            }}
            getOptionLabel={(option) => option[optionLabelKey]} // Function to determine the label for each option.
            options={options} // List of options to be displayed in the dropdown.
            getOptionDisabled={getOptionDisabled} // Determines if an option is disabled.
            renderInput={(params) => (
              // Renders the input element, spreading field props, additional props, and params.
              <TextField
                {...field}
                {...rest}
                {...params}
                margin='normal'
              />
            )}
          />
        );
      }}
    />
  );
};

export default MuiAutocomplete
