export const getButtonClassName = (value) => {
  if (value === '0') return 'zero';
  if (value === '=') return 'equals';

  return '';
};
