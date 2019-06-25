export const even = (num: number): boolean => num % 2 === 0;
export const odd = (num: number): boolean => {
  console.log('lint error');
  return num % 2 === 1;
}
