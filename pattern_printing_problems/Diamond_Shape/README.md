# Print Diamond Shape

## Problem Statement

Given an integer **N**, print a **Diamond Shape** star pattern with **2N** rows.

- The **upper half** starts with **1** star and increases by **1** star in each row until it reaches **N** stars.
- The **lower half** starts with **N** stars and decreases by **1** star in each row until only **1** star remains.
- Each row is **center aligned** by printing leading spaces.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-print-diamond-shape/

---

## Example

### Input

```text
5
```

### Output

```text
    *
   * *
  * * *
 * * * *
* * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

---

## Approach

The pattern consists of **two halves**:

1. **Upper Half**
   - Stars increase from **1** to **N**.
   - Leading spaces decrease from **N - 1** to **0**.

2. **Lower Half**
   - Stars decrease from **N** to **1**.
   - Leading spaces increase from **0** to **N - 1**.

Since both halves follow the same logic, a helper function is used to print a single row.

---

## Dry Run (N = 5)

| Row | Spaces | Stars |
|------|--------|-------|
| 1 | 4 | 1 |
| 2 | 3 | 2 |
| 3 | 2 | 3 |
| 4 | 1 | 4 |
| 5 | 0 | 5 |
| 6 | 0 | 5 |
| 7 | 1 | 4 |
| 8 | 2 | 3 |
| 9 | 3 | 2 |
| 10 | 4 | 1 |

---

## Explanation

### Helper Function

A helper function prints a single row of the pattern.

```javascript
const printRow = (n, i) => {
```

For each row:

- Print leading spaces.
- Print stars.
- Move to the next line.

---

### Print Leading Spaces

The number of spaces before the stars is:

```javascript
n - i
```

```javascript
for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ');
}
```

---

### Print Stars

The number of stars printed is equal to the current row.

```javascript
for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
}
```

A space is printed after every star to maintain the diamond shape.

---

### Print Upper Half

The upper half increases the number of stars.

```javascript
for (let i = 1; i <= n; i++) {
    printRow(n, i);
}
```

---

### Print Lower Half

The lower half decreases the number of stars.

```javascript
for (let i = n; i >= 1; i--) {
    printRow(n, i);
}
```

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |

> The program prints characters directly using `process.stdout.write()`, so no additional string is stored.

---

## Key Learning

- Break complex patterns into **smaller reusable functions**.
- If two parts of a pattern follow the same logic, avoid duplicating code by creating a helper function.
- For center-aligned patterns:
  - **Leading Spaces = `N - Current Row`**
  - **Stars = `Current Row`**
- Reusing the same helper function for both halves makes the code cleaner, easier to maintain, and easier to explain during interviews.