# Palindrome Number

## Problem Statement

Given an integer **N**, determine whether it is a **Palindrome Number**.

A palindrome number reads the same forwards and backwards.

- Positive palindrome numbers return **true**.
- Negative numbers always return **false** because the minus sign (`-`) cannot appear at the end of the number.
- The number `0` is considered a palindrome.

---

## Example

### Input

```text
121
```

### Output

```text
true
```

---

### Input

```text
123
```

### Output

```text
false
```

---

### Input

```text
-121
```

### Output

```text
false
```

---

### Input

```text
0
```

### Output

```text
true
```

---

# Approach

The idea is simple:

1. Store the original number.
2. Reverse the digits of the number.
3. Compare the reversed number with the original number.
4. If both are equal, the number is a palindrome.

---

## Dry Run

### Input

```text
121
```

| Iteration | Last Digit (`n % 10`) | Reverse | Remaining Number |
|-----------|-----------------------|---------|------------------|
| Start | - | 0 | 121 |
| 1 | 1 | 1 | 12 |
| 2 | 2 | 12 | 1 |
| 3 | 1 | 121 | 0 |

Comparison

```text
Original Number = 121
Reversed Number = 121
```

Output

```text
true
```

---

## Dry Run

### Input

```text
123
```

| Iteration | Last Digit | Reverse | Remaining Number |
|-----------|------------|---------|------------------|
| Start | - | 0 | 123 |
| 1 | 3 | 3 | 12 |
| 2 | 2 | 32 | 1 |
| 3 | 1 | 321 | 0 |

Comparison

```text
Original Number = 123
Reversed Number = 321
```

Output

```text
false
```

---

# Explanation

## Handle Special Cases

The number `0` is a palindrome.

```javascript
if (n === 0) return true;
```

Negative numbers are never palindromes.

```javascript
if (n < 0) return false;
```

Example:

```text
-121
```

Reverse:

```text
121-
```

This is not a valid number, so negative numbers cannot be palindromes.

---

## Store Original Number

The original number is required because `n` will change while reversing.

```javascript
const temp = n;
```

---

## Reverse the Number

Extract the last digit using the modulus operator.

```javascript
n % 10
```

Append the extracted digit to the reversed number.

```javascript
reverse = reverse * 10 + (n % 10);
```

Remove the last digit from the original number.

```javascript
n = Math.trunc(n / 10);
```

Complete loop:

```javascript
while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = Math.trunc(n / 10);
}
```

---

## Compare Both Numbers

```javascript
return reverse === temp;
```

If both numbers are equal, the number is a palindrome.

---

# Why Multiply by 10?

Suppose the reverse is currently:

```text
12
```

The next digit is:

```text
3
```

To append the digit:

```text
12 × 10 = 120

120 + 3 = 123
```

So,

```javascript
reverse = reverse * 10 + digit;
```

builds the reversed number digit by digit.

---

# Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(log N)** |
| **Auxiliary Space Complexity** | **O(1)** |

### Why is the Time Complexity O(log N)?

The loop removes one digit during every iteration.

Example:

```text
12345

↓

1234

↓

123

↓

12

↓

1

↓

0
```

A number with **D** digits requires **D** iterations.

Since the number of digits in a decimal number is:

```text
⌊log₁₀(N)⌋ + 1
```

the loop executes **O(log N)** times.

Each iteration performs constant-time operations:

- `%`
- `*`
- `+`
- `Math.trunc()`

Therefore,

```text
Time Complexity = O(log N)
```

---

# Complete Code

```javascript
const isPalindrome = (n) => {
    const temp = n;

    if (n === 0) return true;
    if (n < 0) return false;

    let reverse = 0;

    while (n > 0) {
        reverse = reverse * 10 + (n % 10);
        n = Math.trunc(n / 10);
    }

    return reverse === temp;
};
```

---

# Key Learning

- A palindrome reads the same forwards and backwards.
- Negative numbers are never palindromes.
- Store the original number before modifying it.
- Use `% 10` to extract the last digit.
- Use `Math.trunc(n / 10)` to remove the last digit.
- Build the reversed number using:

```javascript
reverse = reverse * 10 + (n % 10);
```

- Multiply the current reversed number by **10** before appending the next digit.
- The algorithm runs in **O(log N)** time because one digit is removed in each iteration.
- This reverse-number technique is commonly used in many DSA problems, including:
  - Reverse Integer
  - Armstrong Number
  - Sum of Digits
  - Count Digits
  - Happy Number
  - Strong Number