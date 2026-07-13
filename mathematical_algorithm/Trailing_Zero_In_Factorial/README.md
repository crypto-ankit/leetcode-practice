# Count Trailing Zeros in Factorial

## Problem Statement

Given a non-negative integer **N**, find the number of **trailing zeros** in **N! (N Factorial)**.

A trailing zero is a zero that appears at the **end** of a number.

---

## Examples

### Example 1

### Input

```text
5
```

### Output

```text
1
```

### Explanation

```text
5! = 120
```

There is **1** trailing zero.

---

### Example 2

### Input

```text
10
```

### Output

```text
2
```

### Explanation

```text
10! = 3628800
```

There are **2** trailing zeros.

---

### Example 3

### Input

```text
125
```

### Output

```text
31
```

### Explanation

```
⌊125/5⌋   = 25
⌊125/25⌋  = 5
⌊125/125⌋ = 1

25 + 5 + 1 = 31
```

So, **125!** has **31** trailing zeros.

---

# Approach 1: Compute Factorial and Count Trailing Zeros

## Idea

1. Compute the factorial of **N**.
2. Count how many zeros appear at the end of the factorial.
3. Remove one trailing zero at a time by dividing the factorial by **10**.

---

## Algorithm

1. Calculate **N!**.
2. Initialize `count = 0`.
3. While the last digit of the factorial is `0`:
   - Increment `count`.
   - Remove the last digit using integer division by `10`.
4. Return `count`.

---

## Dry Run (N = 10)

Factorial:

```text
10! = 3628800
```

Count trailing zeros:

```text
3628800 % 10 = 0
count = 1

362880 % 10 = 0
count = 2

36288 % 10 != 0
```

Answer:

```text
2
```

---

## Code

```javascript
const trailingZeroInFactorial = (n) => {
    if (n === 0) return 0;

    let fact = 1;

    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    let count = 0;

    while (fact % 10 === 0) {
        count++;
        fact = Math.trunc(fact / 10);
    }

    return count;
}
```

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N)** |
| **Auxiliary Space Complexity** | **O(1)** |

---

## Limitation

This approach is **not suitable for large values of N**.

### Why?

Factorials grow extremely fast.

For example,

```text
20! = 2432902008176640000
```

JavaScript stores numbers using the **Number** data type, which can exactly represent integers only up to:

```javascript
Number.MAX_SAFE_INTEGER
```

```text
9007199254740991
```

After this limit, JavaScript starts **losing integer precision**.

For very large values such as **125!**, the factorial becomes **Infinity**, making this approach unusable.

---

# Approach 2: Mathematical Approach (Optimal)

## Observation

A trailing zero is created by a factor of **10**.

```
10 = 2 × 5
```

In a factorial,

- Factors of **2** are abundant.
- Factors of **5** are fewer.

Therefore,

> **Number of trailing zeros = Total number of factors of 5 in N!**

---

## Why divide by 5, 25, 125...?

Every multiple of **5** contributes at least **one factor of 5**.

```
5
10
15
20
25
...
```

So,

```text
⌊N/5⌋
```

counts all numbers contributing **one factor of 5**.

---

Some numbers contribute **more than one factor of 5**.

For example,

```
25 = 5 × 5
```

So every multiple of **25** contributes **one extra factor of 5**.

Therefore,

```text
⌊N/25⌋
```

counts the **additional factors of 5**.

---

Similarly,

```
125 = 5 × 5 × 5
```

Every multiple of **125** contributes another extra factor of **5**.

Hence,

```text
⌊N/125⌋
```

counts those extra factors.

---

Continue this process until the power of **5** becomes greater than **N**.

The formula becomes:

```text
⌊N/5⌋ + ⌊N/25⌋ + ⌊N/125⌋ + ...
```

---

## Dry Run (N = 125)

| Power of 5 | Division | Running Total |
|------------|---------:|--------------:|
| 5 | 125 / 5 = 25 | 25 |
| 25 | 125 / 25 = 5 | 30 |
| 125 | 125 / 125 = 1 | 31 |

Next power:

```
625 > 125
```

Stop.

Answer:

```text
31
```

---

## Code

```javascript
const trailingZeroFactorial = (n) => {
    if (n === 0) return 0;

    let count = 0;

    for (let i = 5; i <= n; i *= 5) {
        count += Math.trunc(n / i);
    }

    return count;
}
```

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(log₅ N)** |
| **Auxiliary Space Complexity** | **O(1)** |

---

# Comparison of Both Approaches

| Feature | Compute Factorial | Mathematical Approach |
|---------|-------------------|-----------------------|
| Computes factorial | Yes | No |
| Works for very large N | No | Yes |
| Suffers from integer precision loss | Yes | No |
| Time Complexity | **O(N)** | **O(log₅ N)** |
| Space Complexity | **O(1)** | **O(1)** |
| Recommended for interviews | No | Yes |

---

# Key Learning

- A trailing zero is formed by a factor of **10**.
- Since **10 = 2 × 5**, we count pairs of **2** and **5**.
- In **N!**, factors of **2** are always more frequent than factors of **5**.
- Therefore, the answer depends only on the **total number of factors of 5**.
- Multiples of:
  - **5** contribute one factor of **5**.
  - **25** contribute an additional factor of **5**.
  - **125** contribute yet another factor of **5**.
- The optimal solution counts these factors directly without ever computing the factorial, making it both faster and safe for very large values of **N**.
```