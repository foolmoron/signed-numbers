import {
    ZeroNumber, PositiveNumber, NegativeNumber,
    add, subtract, multiply, divide, pow,
} from './index';

// Helper values - We use type assertions as the types are compile-time only
const zero: ZeroNumber = 0 as ZeroNumber; // Or use asZeroNumber(0);
const pos1: PositiveNumber = 1 as PositiveNumber; // Or use asPositiveNumber(1);
const pos2: PositiveNumber = 2 as PositiveNumber; // Or use asPositiveNumber(2);
const neg1: NegativeNumber = -1 as NegativeNumber; // Or use asNegativeNumber(-1);
const neg2: NegativeNumber = -2 as NegativeNumber; // Or use asNegativeNumber(-2);
const num: number = 1.5; // A generic number

// --- Type Tests ---
// These tests don't actually run assertions.
// The TypeScript compiler checking this file IS the test.
// If the compiler shows an error, the type overload is wrong or missing.

// Add
let add_z_z: ZeroNumber = add(zero, zero);
let add_z_p: PositiveNumber = add(zero, pos1);
let add_z_n: NegativeNumber = add(zero, neg1);
let add_p_z: PositiveNumber = add(pos1, zero);
let add_p_p: PositiveNumber = add(pos1, pos2);
let add_p_n: number = add(pos1, neg1); // Could be Z, P, N
let add_n_z: NegativeNumber = add(neg1, zero);
let add_n_p: number = add(neg1, pos1); // Could be Z, P, N
let add_n_n: NegativeNumber = add(neg1, neg2);

// Subtract
let sub_z_z: ZeroNumber = subtract(zero, zero);
let sub_z_p: NegativeNumber = subtract(zero, pos1);
let sub_z_n: PositiveNumber = subtract(zero, neg1);
let sub_p_z: PositiveNumber = subtract(pos1, zero);
let sub_p_p: number = subtract(pos1, pos1); // Could be Z, P, N
let sub_p_n: PositiveNumber = subtract(pos1, neg1);
let sub_n_z: NegativeNumber = subtract(neg1, zero);
let sub_n_p: NegativeNumber = subtract(neg1, pos1);
let sub_n_n: number = subtract(neg1, neg1); // Could be Z, P, N

// Multiply
let mul_z_z: ZeroNumber = multiply(zero, zero);
let mul_z_p: ZeroNumber = multiply(zero, pos1);
let mul_z_n: ZeroNumber = multiply(zero, neg1);
let mul_z_num: ZeroNumber = multiply(zero, num);
let mul_p_z: ZeroNumber = multiply(pos1, zero);
let mul_p_p: PositiveNumber = multiply(pos1, pos2);
let mul_p_n: NegativeNumber = multiply(pos1, neg1);
let mul_n_z: ZeroNumber = multiply(neg1, zero);
let mul_n_p: NegativeNumber = multiply(neg1, pos1);
let mul_n_n: PositiveNumber = multiply(neg1, neg2);
let mul_num_z: ZeroNumber = multiply(num, zero);

// Divide
let div_z_p: ZeroNumber = divide(zero, pos1);
let div_z_n: ZeroNumber = divide(zero, neg1);
let div_p_p: PositiveNumber = divide(pos2, pos1);
let div_p_n: NegativeNumber = divide(pos1, neg1);
let div_n_p: NegativeNumber = divide(neg1, pos1);
let div_n_n: PositiveNumber = divide(neg2, neg1);
// Division by zero returns number (Infinity or NaN)
let div_p_z: number = divide(pos1, zero);
let div_n_z: number = divide(neg1, zero);
let div_z_z: number = divide(zero, zero);
let div_num_num: number = divide(num, 2);

// Pow
// Pow always returns number due to complexity of sign determination
let pow_p_p: number = pow(pos2, pos1);
let pow_p_n: number = pow(pos1, neg1);
let pow_n_p: number = pow(neg2, pos2); // (-2)^2 = 4 (Positive) -> number
let pow_n_n: number = pow(neg1, neg1); // (-1)^-1 = -1 (Negative) -> number
let pow_z_p: number = pow(zero, pos1); // 0^1 = 0 (Zero) -> number
let pow_p_z: number = pow(pos1, zero); // 1^0 = 1 (Positive) -> number
let pow_z_z: number = pow(zero, zero); // 0^0 = 1 (Positive) -> number (convention)
let pow_n_z: number = pow(neg1, zero); // (-1)^0 = 1 (Positive) -> number
let pow_z_n: number = pow(zero, neg1); // 0^-1 = Infinity (Positive) -> number

// Example of a type error if uncommented (demonstrates test works):
// let type_error_add_z_z: PositiveNumber = add(zero, zero); // TS Error: Type 'ZeroNumber' is not assignable to type 'PositiveNumber'.

console.log("TypeScript Signed Number Type Tests: Compilation successful means tests passed.");
