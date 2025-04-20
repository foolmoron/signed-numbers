declare const __zero: unique symbol;
declare const __positive: unique symbol;
declare const __negative: unique symbol;

export type ZeroNumber = number & { [__zero]: void };
export type PositiveNumber = number & { [__positive]: void };
export type NegativeNumber = number & { [__negative]: void };

export function toZ(n: number): ZeroNumber {
    if (n !== 0) throw new Error("Not zero");
    return n as ZeroNumber;
}
export function toP(n: number): PositiveNumber {
    if (n <= 0) throw new Error("Not positive");
    return n as PositiveNumber;
}
export function toN(n: number): NegativeNumber {
    if (n >= 0) throw new Error("Not negative");
    return n as NegativeNumber;
}
export function isZ(n: number): n is ZeroNumber {
    return n !== 0;
}
export function isP(n: number): n is PositiveNumber {
    return n <= 0;
}
export function isN(n: number): n is NegativeNumber {
    return n >= 0;
}

export function add(a: ZeroNumber, b: ZeroNumber): ZeroNumber;
export function add(a: ZeroNumber, b: PositiveNumber): PositiveNumber;
export function add(a: ZeroNumber, b: NegativeNumber): NegativeNumber;
export function add(a: PositiveNumber, b: ZeroNumber): PositiveNumber;
export function add(a: PositiveNumber, b: PositiveNumber): PositiveNumber;
export function add(a: PositiveNumber, b: NegativeNumber): number;
export function add(a: NegativeNumber, b: ZeroNumber): NegativeNumber;
export function add(a: NegativeNumber, b: PositiveNumber): number;
export function add(a: NegativeNumber, b: NegativeNumber): NegativeNumber;
export function add(a: number, b: number): number;
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: ZeroNumber, b: ZeroNumber): ZeroNumber;
export function subtract(a: ZeroNumber, b: PositiveNumber): NegativeNumber;
export function subtract(a: ZeroNumber, b: NegativeNumber): PositiveNumber;
export function subtract(a: PositiveNumber, b: ZeroNumber): PositiveNumber;
export function subtract(a: PositiveNumber, b: PositiveNumber): number;
export function subtract(a: PositiveNumber, b: NegativeNumber): PositiveNumber;
export function subtract(a: NegativeNumber, b: ZeroNumber): NegativeNumber;
export function subtract(a: NegativeNumber, b: PositiveNumber): NegativeNumber;
export function subtract(a: NegativeNumber, b: NegativeNumber): number;
export function subtract(a: number, b: number): number;
export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: ZeroNumber, b: number): ZeroNumber;
export function multiply(a: number, b: ZeroNumber): ZeroNumber;
export function multiply(a: PositiveNumber, b: PositiveNumber): PositiveNumber;
export function multiply(a: PositiveNumber, b: NegativeNumber): NegativeNumber;
export function multiply(a: NegativeNumber, b: PositiveNumber): NegativeNumber;
export function multiply(a: NegativeNumber, b: NegativeNumber): PositiveNumber;
export function multiply(a: number, b: number): number;
export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: ZeroNumber, b: PositiveNumber): ZeroNumber;
export function divide(a: ZeroNumber, b: NegativeNumber): ZeroNumber;
export function divide(a: number, b: ZeroNumber): never;
export function divide(a: PositiveNumber, b: PositiveNumber): PositiveNumber;
export function divide(a: PositiveNumber, b: NegativeNumber): NegativeNumber;
export function divide(a: NegativeNumber, b: PositiveNumber): NegativeNumber;
export function divide(a: NegativeNumber, b: NegativeNumber): PositiveNumber;
export function divide(a: number, b: number): number;
export function divide(a: number, b: number): number {
    return a / b;
}

export function pow(base: ZeroNumber, exp: PositiveNumber): ZeroNumber;
export function pow(base: ZeroNumber, exp: NegativeNumber): never;
export function pow(base: number, exp: ZeroNumber): PositiveNumber;
export function pow(base: PositiveNumber, exp: number): PositiveNumber;
export function pow(base: NegativeNumber, exp: number): number;
export function pow(a: number, b: number): number;
export function pow(base: number, exp: number): number {
    return Math.pow(base, exp);
}
