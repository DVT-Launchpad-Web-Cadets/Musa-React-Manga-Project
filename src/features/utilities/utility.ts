export default function formatFollowers(num: number, precision: number = 1) {
  const map = [
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (!found) {
    return num;
  }
  return (num / found.threshold).toFixed(precision) + found.suffix;
}
