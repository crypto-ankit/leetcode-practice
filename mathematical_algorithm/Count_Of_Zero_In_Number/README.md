# Count Total Zeros in a Number

## Problem Statement

Given an integer **N**, count the total number of **0 digits** present in the number.

- Count every occurrence of the digit **0**.
- The minus sign (`-`) is **not** considered a digit.
- The number `0` itself contains **one zero**.

---

## Example

### Input

```text
10203040
```

### Output

```text
4
```

Explanation:

```text
10203040

Digits:

1 0 2 0 3 0 4 0

Total zeros = 4
```

---

### Input

```text
100200
```

### Output

```text
4
```

---

### Input

```text
987654
```

### Output

```text
0
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

# Approach

The idea is simple:

- Extract the last digit using the modulus operator (`% 10`).
- Check whether the extracted digit is `0`.
- If yes, increment the counter.
- Remove the last digit using integer division.
- Repeat until the number becomes `0`.

---

## Dry Run

### Input

```text
10203040
```

| Iteration | Number | Last Digit | Zero Count |
|-----------|--------|------------|------------|
| Start | 10203040 | - | 0 |
| 1 | 10203040 | 0 | 1 |
| 2 | 1020304 | 4 | 1 |
| 3 | 102030 | 0 | 2 |
| 4 | 10203 | 3 | 2 |
| 5 | 1020 | 0 | 3 |
| 6 | 102 | 2 | 3 |
| 7 | 10 | 0 | 4 |
| 8 | 1 | 1 | 4 |

Output

```text
4
```

---

## Explanation

### Handle Zero

The number `0` itself contains one zero.

```javascript
if (n === 0) {
    return 1;
}
```

---

### Convert Negative Number

The minus sign (`-`) is not a digit.

Convert negative numbers into positive numbers.

```javascript
n = Math.abs(n);
```

Example:

```text
-10020

↓

10020
```

---

### Extract the Last Digit

Use the modulus operator.

```javascript
let rem = n % 10;
```

Example:

```text
12340 % 10

↓

0
```

---

### Count Zero Digits

If the extracted digit is `0`, increase the counter.

```javascript
if (rem === 0) {
    count++;
}
```

---

### Remove the Last Digit

Use integer division.

```javascript
n = Math.trunc(n / 10);
```

Example:

```text
12340

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

---

# Complete Algorithm

```text
Repeat until the number becomes 0:

1. Extract the last digit.
2. Check if it is 0.
3. Increase the counter if needed.
4. Remove the last digit.
```

---

# Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(log N)** |
| **Auxiliary Space Complexity** | **O(1)** |

### Why is the Time Complexity O(log N)?

The loop processes **one digit** in every iteration.

Example:

```text
10203040

↓

1020304

↓

102030

↓

10203

↓

1020

↓

102

↓

10

↓

1

↓

0
```

If the number has **D** digits, the loop executes **D** times.

Since the number of digits in a decimal number is:

```text
⌊log₁₀(N)⌋ + 1
```

the time complexity becomes:

```text
O(log N)
```

---

# Complete Code

```javascript
const countOfZeroInNumber = (n) => {
    if (n === 0) {
        return 1;
    }

    n = Math.abs(n);

    let count = 0;

    while (n > 0) {
        let rem = n % 10;

        if (rem === 0) {
            count++;
        }

        n = Math.trunc(n / 10);
    }

    return count;
};
```

---

# Key Learning

- Use `% 10` to extract the last digit of a number.
- Use `Math.trunc(n / 10)` to remove the last digit.
- The number `0` contains exactly **one zero**.
- Convert negative numbers using `Math.abs()` because the minus sign (`-`) is not a digit.
- The algorithm processes one digit at a time, making the time complexity **O(log N)**.
- Only a constant amount of extra memory is used, so the auxiliary space complexity is **O(1)**.
- The digit extraction technique (`% 10` and `/ 10`) is a fundamental concept used in many DSA problems, including:
  - Count Digits
  - Reverse Integer
  - Palindrome Number
  - Armstrong Number
  - Sum of Digits
  - Happy Number
  - Strong Number
  - Count Even/Odd Digits