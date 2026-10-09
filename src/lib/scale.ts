/** Scale an ingredient quantity from the recipe's base servings to the chosen servings. */
export function scaleQuantity(qty: number, baseServings: number, servings: number): number {
  return (qty * servings) / baseServings;
}

/** Format a quantity in pt-BR with friendly fractions. */
export function formatQuantity(n: number): string {
  if (n <= 0) return "0";
  const whole = Math.floor(n);
  const frac = n - whole;
  const fractions: [number, string][] = [[0.25, "¼"], [0.333, "⅓"], [0.5, "½"], [0.667, "⅔"], [0.75, "¾"]];
  for (const [v, s] of fractions) {
    if (Math.abs(frac - v) < 0.04) return whole ? `${whole} ${s}` : s;
  }
  if (frac < 0.04) return String(whole);
  if (frac > 0.96) return String(whole + 1);
  return n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
}
