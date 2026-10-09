import { describe, expect, it } from "vitest";
import { canEarnCertificate } from "./certificate";

describe("certificado do quiz", () => {
  it("libera com 8 acertos ou mais", () => {
    expect(canEarnCertificate(8)).toBe(true);
    expect(canEarnCertificate(7)).toBe(false);
  });
});
