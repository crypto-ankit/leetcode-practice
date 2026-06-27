# Print Full Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print a **Full Pyramid** star pattern with **N** rows.

- The **first row** contains **1** star.
- The **second row** contains **3** stars.
- Each subsequent row contains **2 more stars** than the previous row.
- The **Nth row** contains **(2 × N - 1)** stars.
- The stars are **center aligned** by printing leading spaces.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-full-pyramid-pattern-star-pattern/

---

## Example

### Input

```text
5
```

### Output

```text
    *
   ***
  *****
 *******
*********
```

---

## Approach

The pattern consists of **N rows**.

For each row:

- Print the required number of **leading spaces**.
- Print the required number of **stars**.
- Print the same number of **trailing spaces** (optional for console output).

The number of spaces decreases by **1** in every row, while the number of stars increases by **2**.

---

## Dry Run (N = 5)

| Row | Leading Spaces | Stars | Trailing Spaces | Output |
|------|----------------|-------|-----------------|--------|
| 1 | 4 | 1 | 4 | `    *` |
| 2 | 3 | 3 | 3 | `   ***` |
| 3 | 2 | 5 | 2 | `  *****` |
| 4 | 1 | 7 | 1 | ` *******` |
| 5 | 0 | 9 | 0 | `*********` |

---

## Explanation

### Outer Loop

The outer loop controls the number of rows.

```javascript
for (let i = 1; i <= n; i++)
```

- Starts from row `1`.
- Continues until row `n`.
- Each iteration prints one row of the pyramid.

---

### First Inner Loop (Print Leading Spaces)

The first inner loop prints the leading spaces.

```javascript
for (let j = 1; j <= n - i; j++)
```

For each row:

- Row 1 → `n - 1` spaces
- Row 2 → `n - 2` spaces
- Row 3 → `n - 3` spaces
- ...
- Last Row → `0` spaces

These spaces center-align the pyramid.

---

### Second Inner Loop (Print Stars)

The second inner loop prints the stars.

```javascript
for (let j = 1; j <= 2 * i - 1; j++)
```

For each row:

- Row 1 → `1` star
- Row 2 → `3` stars
- Row 3 → `5` stars
- ...
- Row N → `(2 × N - 1)` stars

The expression `2 * i - 1` always generates odd numbers:

```text
1, 3, 5, 7, 9, ...
```

---

### Third Inner Loop (Print Trailing Spaces)

The third inner loop prints trailing spaces.

```javascript
for (let j = 1; j <= n - i; j++)
```

These spaces are **optional** and are not required to display the pyramid correctly in the console.

They simply make each row have the same width.

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |
