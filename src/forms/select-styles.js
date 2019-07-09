const customStyles = {
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    lineHeight: 0,
  }),
  input: provided => ({
    ...provided,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
    fontWeight: '600',
    color: 'rgb(54, 54, 54)',
    position: 'absolute',
    width: '100%',
    '& input': {
      position: 'absolute',
      zIndex: 100,
      height: 20,
      backgroundColor: '#fff !important',
      backgroundImage: 'none',
      '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
      'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
      '-webkit-transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      '-o-transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      '&:focus': {
        borderColor: '#0088ce !important',
        outline: 0,
        '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(0,136,206,.6)',
        'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(0,136,206,.6)',
      },
    },
  }),
  placeholder: (provided, { isDisabled }) => ({
    ...provided,
    padding: 0,
    color: isDisabled ? 'rgba(77, 82, 88, 0.4)' : '#999999',
    fontWeight: '600',
    paddingLeft: 0,
    marginLeft: 0,
    position: 'relative',
    top: 10,
  }),
  option: (provided, {
    isFocused, isSelected, isMulti, breakAll,
  }) => ({
    ...provided,
    'background-color': isSelected ? '#0088ce' : isFocused ? '#def3ff' : '#ffffff', // eslint-disable-line no-nested-ternary
    'border-color': isSelected ? '#0088ce' : isFocused ? '#bee1f4' : 'transparent', // eslint-disable-line no-nested-ternary
    'border-style': 'solid',
    'border-width': '1px 0',
    'word-break': breakAll ? 'break-all' : 'break-word',
    color: isSelected ? '#fff' : isFocused ? '#4d5258' : provided.color, // eslint-disable-line no-nested-ternary
    padding: '1px 10px',
    fontWeight: '400',
    cursor: 'pointer',
    '&::after': {
      fontFamily: 'FontAwesome',
      color: isMulti && isSelected ? 'white' : null,
      content: isMulti && isSelected ? '" \\f00c "' : null,
      float: isMulti ? 'right' : 'initial',
    },
  }),
  dropdownIndicator: (provided, { isDisabled }) => ({
    ...provided,
    color: 'rgb(77, 82, 88)',
    padding: 0,
    paddingRight: 8,
    display: isDisabled ? 'none' : 'initial',
    '&:hover': {
      color: 'rgb(77, 82, 88)',
    },
    svg: {
      height: 16,
    },
  }),
  container: provided => ({
    ...provided,
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    padding: 0,
    border: '1px solid transparent',
    'border-color': 'rgb(187, 187, 187)',
    display: 'inline-flex',
    minWidth: 250,
    maxWidth: 'calc(100% - 2px)',
  }),
  singleValue: (provided, { isDisabled }) => ({
    ...provided,
    minHeight: 20,
    'font-size': 12,
    marginLeft: 0,
    fontWeight: '600',
    color: isDisabled ? 'rgba(54, 54, 54, 0.4)' : 'rgb(54, 54, 54)',
    position: 'relative',
    textOverflow: 'clip',
    top: 10,
    maxWidth: '100%',
  }),
  menu: (provided, { selectProps: { isSearchable } }) => ({
    ...provided,
    background: '#fff',
    margin: 0,
    borderRadius: 0,
    paddingTop: isSearchable ? 36 : 5,
    paddingBottom: 5,
    marginTop: 1,
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    width: '100%',
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    'box-shadow': '0 2px 3px rgba(3, 3, 3, 0.1)',
    padding: 0,
    minHeight: 'initial',
    'background-color': '#f1f1f1',
    color: '#4d5258',
    'background-image': 'linear-gradient(to bottom, #fafafa 0%, #ededed 100%)',
    'background-repeat': 'repeat-x',
    cursor: 'pointer',
    'white-space': 'nowrap',
    'font-size': 12,
    'border-radius': 1,
    'font-weight': '600',
    '&:hover': {
      'background-color': '#f1f1f1',
      'background-image': 'none',
      'border-color': '#bbbbbb',
      color: '#4d5258',
    },
    justifyContent: 'left',
  }),
  multiValue: (provided, { isDisabled }) => ({
    ...provided,
    background: 'transparent',
    paddigTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    margin: 0,
    minWidth: 'initial',
    '&:nth-last-child(2)': {
      marginRight: 2,
    },
    '&:not(:first-child)': {
      '::before': {
        content: '",\\00a0"',
        'font-size': 12,
        paddingLeft: 0,
        paddingRight: 0,
        fontWeight: '600',
        color: isDisabled ? 'rgba(54, 54, 54, 0.4)' : 'rgb(54, 54, 54)',
      },
    },
  }),
  multiValueRemove: () => ({
    display: 'none',
    padding: 0,
  }),
  multiValueLabel: (provided, { isDisabled }) => ({
    ...provided,
    'font-size': 12,
    padding: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: '600',
    color: isDisabled ? 'rgba(54, 54, 54, 0.4)' : 'rgb(54, 54, 54)',
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: 0,
    color: '#4d5258',
    '&:hover': {
      color: '#4d5258',
    },
    svg: {
      height: 16,
    },
  }),
  valueContainer: (provided, {
    selectProps: {
      menuIsOpen,
      isSearchable,
      inputValue,
      placeholder,
      value = [],
      isClearable,
      id,
    },
    isMulti,
    hasValue,
  }) => {
    const selectContainer = document.getElementById(id);
    const showPlaceholder = isSearchable && !hasValue && inputValue !== '';
    const showValue = isSearchable && hasValue && inputValue !== '';
    const valueStub = {
      content: !isMulti // eslint-disable-line no-nested-ternary
        ? showPlaceholder ? `"${placeholder}"` // eslint-disable-line no-nested-ternary
          : showValue ? `"${value[0].label}"` : '""' : '""',
      color: showPlaceholder ? '#999999' : '#363636',
      fontWeight: '600',
      minHeight: 20,
    };
    const clearableWidth = isClearable && hasValue ? 20 : 0;
    return ({
      ...provided,
      minHeight: 24,
      overflow: 'visible',
      flexWrap: 'initial',
      flex: 'none',
      width: `calc(100% - ${isClearable && hasValue ? '48px' : '28px'})`,
      '& input': {
        position: 'absolute',
        top: selectContainer ? Math.max(selectContainer.offsetHeight, 30) : 30,
        width: `${menuIsOpen ? `calc(100% + ${clearableWidth}px)` : '0%'} !important`,
        padding: menuIsOpen ? '2px 6px !important' : '0',
        border: menuIsOpen ? '1px solid #bbb !important' : 'none',
        borderRadius: menuIsOpen ? 1 : 0,
      },
      '&:before': {
        ...valueStub,
      },
    });
  },
};

export default customStyles;
