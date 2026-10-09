import { describe, expect, it } from "vitest";
import { formatQuantity, scaleQuantity } from "./scale";

describe("calculadora de porções", () => {
  it("dobra a quantidade ao dobrar as porções", () => {
    expect(scaleQuantity(2, 4, 8)).toBe(4);
  });
  it("reduz para 1 porção", () => {
    expect(scaleQuantity(2, 4, 1)).toBe(0.5);
  });
  it("formata frações amigáveis", () => {
    expect(formatQuantity(0.5)).toBe("½");
    expect(formatQuantity(1.25)).toBe("1 ¼");
    expect(formatQuantity(3)).toBe("3");
  });
});
