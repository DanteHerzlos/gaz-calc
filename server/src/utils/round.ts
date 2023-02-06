const round = (number: number, r: number): number => {
  const d = Math.pow(10, r)
  return Math.round(number * d) / d;
};

export default round