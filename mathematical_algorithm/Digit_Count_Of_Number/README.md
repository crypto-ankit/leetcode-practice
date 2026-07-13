# Count Digits in a Number

## Problem Statement

Given an integer **N**, count the total number of digits present in the number.

- The minus sign (`-`) is **not** considered a digit.
- If the number is `0`, the digit count is **1**.
- Solve the problem using:
  1. **Iterative Approach**
  2. **Logarithmic Approach**

---

## Example

### Input

```text
12345
```

### Output

```text
5
```

---

### Input

```text
-9876
```

### Output

```text
4
```

---

### Input

```text
0
```

### Output

```text
1
```

---

# Approach 1: Iterative Method

The idea is simple:

- Remove the last digit by dividing the number by **10**.
- Increment the digit count.
- Repeat until the number becomes **0**.

Unlike `Math.floor()`, `Math.trunc()` correctly handles both positive and negative numbers, so no extra handling for negative numbers is required.

---

## Dry Run

### Input

```text
12345
```

| Iteration | Number | Count |
|-----------|--------|-------|
| Start | 12345 | 0 |
| 1 | 1234 | 1 |
| 2 | 123 | 2 |
| 3 | 12 | 3 |
| 4 | 1 | 4 |
| 5 | 0 | 5 |

Output

```text
5
```

---

### Dry Run (Negative Number)

### Input

```text
-123
```

| Iteration | Number | Count |
|-----------|--------|-------|
| Start | -123 | 0 |
| 1 | -12 | 1 |
| 2 | -1 | 2 |
| 3 | 0 | 3 |

Output

```text
3
```

---

## Explanation

### Handle Zero

The number `0` has exactly one digit.

```javascript
if (n === 0) {
    return 1;
}
```

---

### Count Digits

Remove the last digit using integer division.

```javascript
while (n !== 0) {
    n = Math.trunc(n / 10);
    count++;
}
```

---

### Why `Math.trunc()` instead of `Math.floor()`?

`Math.trunc()` removes the decimal part by moving towards **0**.

Example:

```javascript
Math.trunc(-123 / 10)
```

```text
-12
```

```javascript
Math.trunc(-12 / 10)
```

```text
-1
```

```javascript
Math.trunc(-1 / 10)
```

```text
0
```

The loop terminates correctly.

---

### Why can't we use `Math.floor()`?

`Math.floor()` always rounds towards **negative infinity (`-∞`)**.

Example:

```javascript
Math.floor(-1 / 10)
```

```text
Math.floor(-0.1)

↓

-1
```

The value never becomes `0`.

Example:

```text
-123

↓

-13

↓

-2

↓

-1

↓

-1

↓

-1
```

The loop never terminates, resulting in an **infinite loop**.

---

# Approach 2: Logarithmic Method

Instead of repeatedly dividing the number, we can use the mathematical formula:

```text
Digits = ⌊log₁₀(N)⌋ + 1
```

Since logarithms are defined only for positive numbers, convert negative numbers using `Math.abs()` before applying the formula.

---

## Explanation

### Handle Zero

```javascript
if (n === 0) {
    return 1;
}
```

---

### Convert Negative Number

```javascript
n = Math.abs(n);
```

The minus sign (`-`) is not a digit, and `Math.log10()` does not accept negative numbers.

---

### Calculate Digit Count

```javascript
return Math.floor(Math.log10(n)) + 1;
```

---

### Why `Math.floor()` + 1?

Example:

```text
N = 345
```

```text
log₁₀(345)

≈ 2.5378
```

```javascript
Math.floor(2.5378) + 1

↓

2 + 1

↓

3
```

345 has **3 digits**.

---

### Why can't we use `Math.ceil()`?

It fails for numbers that are exact powers of **10**.

Example:

```text
N = 100
```

```javascript
Math.ceil(Math.log10(100))

↓

Math.ceil(2)

↓

2 
```

Correct answer:

```javascript
Math.floor(Math.log10(100)) + 1

↓

2 + 1

↓

3 ✅
```

---

## Complexity Analysis

### Iterative Approach

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(log N)** |
| **Auxiliary Space Complexity** | **O(1)** |

The loop runs once for every digit in the number.

---

### Logarithmic Approach

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(1)** |
| **Auxiliary Space Complexity** | **O(1)** |

The solution uses built-in mathematical functions and does not iterate through the digits.

> **Note:** In interviews, the iterative solution is generally preferred because it demonstrates understanding of digit extraction using integer division.

---

# Complete Code

## Iterative Approach

```javascript
const countDigit = (n) => {
    let count = 0;

    if (n === 0) {
        return 1;
    }

    while (n !== 0) {
        n = Math.trunc(n / 10);
        count++;
    }

    return count;
};
```

---

## Logarithmic Approach

```javascript
const countDigitWithLog = (n) => {
    if (n === 0) {
        return 1;
    }

    n = Math.abs(n);

    return Math.floor(Math.log10(n)) + 1;
};
```

---

# Key Learning

- Every division by **10** removes the last digit of an integer.
- `0` is a special case and has **one digit**.
- `Math.trunc()` behaves like integer division and works correctly for both positive and negative numbers.
- `Math.floor()` should not be used for integer division on negative numbers because it rounds towards **−∞**, which can lead to infinite loops.
- The logarithmic formula for counting decimal digits is:

```text
⌊log₁₀(N)⌋ + 1
```

- `Math.log10()` only works for positive numbers, so use `Math.abs()` first.
- Never replace `Math.floor(Math.log10(n)) + 1` with `Math.ceil(Math.log10(n))`, as it gives incorrect results for powers of **10**.
- Although the logarithmic approach is more efficient, the iterative approach is preferred in DSA interviews because the same digit extraction technique is reused in many problems such as:
  - Reverse Integer
  - Palindrome Number
  - Armstrong Number
  - Sum of Digits
  - Happy Number
  - Count Digits That Divide a Number