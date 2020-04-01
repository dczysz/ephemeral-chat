export const validateInput = (
  value: string,
  maxLength: number,
  defaultValue?: string
) => {
  let _value = value.trim();

  // Check length, return false
  if (_value.length < 1) {
    if (!defaultValue) return '';
    _value = defaultValue;
  } else if (_value.length > maxLength) {
    if (!defaultValue) return '';
    _value = _value.substring(0, maxLength);
  }

  // Remove bad chars
  _value = _value.replace(
    /`|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|"|;|:|\s/g,
    ''
  );

  return _value;
};
