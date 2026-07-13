# Factorial of a Number

## Problem Statement

Given a non-negative integer **N**, find its **factorial**.

The factorial of a number is the product of all positive integers from **1** to **N**.

It is denoted by **N!**.

Mathematically,

```text
0! = 1
1! = 1

N! = N × (N - 1) × (N - 2) × ... × 2 × 1
```

Solve the problem using:

1. **Iterative Approach**
2. **Recursive Approach**

---

## Example

### Input

```text
5
```

### Output

```text
120
```

Explanation:

```text
5!

= 5 × 4 × 3 × 2 × 1

= 120
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

### Input

```text
1
```

### Output

```text
1
```

---

# Approach 1: Iterative Method

The idea is simple:

- Start with a factorial value of **1**.
- Multiply it by every number from **2** to **N**.
- Return the final result.

---

## Dry Run

### Input

```text
5
```

| Iteration | i | Factorial |
|-----------|---|-----------|
| Start | - | 1 |
| 1 | 2 | 2 |
| 2 | 3 | 6 |
| 3 | 4 | 24 |
| 4 | 5 | 120 |

Output

```text
120
```

---

## Explanation

### Handle Base Cases

Both `0!` and `1!` are equal to **1**.

```javascript
if (n === 0 || n === 1) {
    return 1;
}
```

---

### Initialize Factorial

```javascript
let factorial = 1;
```

Initially,

```text
factorial = 1
```

---

### Multiply Numbers

Multiply the current factorial with every number from **2** to **N**.

```javascript
for (let i = 2; i <= n; i++) {
    factorial *= i;
}
```

Example:

```text
factorial = 1

↓

1 × 2 = 2

↓

2 × 3 = 6

↓

6 × 4 = 24

↓

24 × 5 = 120
```

---

## Approach 2: Recursive Method

Recursion is based on the mathematical definition of factorial.

```text
5!

=

5 × 4!

=

5 × 4 × 3!

=

5 × 4 × 3 × 2!

=

5 × 4 × 3 × 2 × 1!

=

120
```

Instead of using a loop, the function repeatedly calls itself with a smaller number until it reaches the base case.

---

## Dry Run

### Input

```text
5
```

Function calls:

```text
factorial(5)

↓

5 × factorial(4)

↓

5 × 4 × factorial(3)

↓

5 × 4 × 3 × factorial(2)

↓

5 × 4 × 3 × 2 × factorial(1)

↓

5 × 4 × 3 × 2 × 1

↓

120
```

---

## Explanation

### Base Case

The recursion stops when the number becomes **0**.

```javascript
if (n === 0) {
    return 1;
}
```

Without this base case, the function would continue calling itself forever, causing a **Stack Overflow**.

---

### Recursive Call

```javascript
return n * factorialByRecursion(n - 1);
```

Every recursive call multiplies the current number by the factorial of the previous number.

Example:

```text
factorial(4)

↓

4 × factorial(3)

↓

4 × 3 × factorial(2)

↓

4 × 3 × 2 × factorial(1)

↓

24
```

---

# Complexity Analysis

## Iterative Approach

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N)** |
| **Auxiliary Space Complexity** | **O(1)** |

The loop runs **N - 1** times.

Only one extra variable (`factorial`) is used.

---

## Recursive Approach

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N)** |
| **Auxiliary Space Complexity** | **O(N)** |

Although recursion does not explicitly use an array or another data structure, each recursive function call is stored in the **Call Stack**.

For **N** recursive calls, the call stack stores **N** stack frames.

Example:

```text
factorial(5)

↓

factorial(4)

↓

factorial(3)

↓

factorial(2)

↓

factorial(1)
```

Only after reaching the base case does the recursion begin returning values.

Therefore,

```text
Auxiliary Space = O(N)
```

---

# Complete Code

## Iterative Approach

```javascript
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
};
```

---

## Recursive Approach

```javascript
const factorialByRecursion = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * factorialByRecursion(n - 1);
};
```

---

# Key Learning

- Factorial is the product of all positive integers from **1** to **N**.
- Both `0!` and `1!` are equal to **1**.
- The iterative solution uses a loop and is more memory-efficient.
- The recursive solution directly follows the mathematical definition of factorial.
- Every recursive solution must have a **base case** to avoid infinite recursion.
- Although both approaches have the same **O(N)** time complexity, the iterative approach is generally preferred because it uses **O(1)** auxiliary space, while recursion uses **O(N)** due to the call stack.
- For very large values of **N**, factorial grows extremely quickly and may exceed JavaScript's `Number.MAX_SAFE_INTEGER`. In such cases, `BigInt` should be used for accurate results.