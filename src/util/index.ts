export const validateInput = (
  value: string,
  maxLength: number,
  defaultValue?: string,
  removeSpecialChars = false
) => {
  let _value = value.trim();

  // Remove bad chars, replace space with -
  if (removeSpecialChars) {
    _value = _value
      .replace(
        /`|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|"|;|:/g,
        ''
      )
      .replace(/\s+/g, '-');
  }

  // Check length, or return empty string
  if (_value.length < 1) {
    _value = defaultValue || '';
  } else if (_value.length > maxLength) {
    _value = defaultValue ? _value.substring(0, maxLength) : '';
  }

  return _value;
};
