# Print Inverted Full Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print an **Inverted Full Pyramid** star pattern with **N** rows.

- The **first row** contains **(2 × N - 1)** stars.
- The **second row** contains **(2 × N - 3)** stars.
- Each subsequent row contains **2 fewer stars** than the previous row.
- The **Nth row** contains **1** star.
- All stars are **center aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-inverted-full-pyramid-pattern-star-pattern/

---

## Example

### Input

```text
5
```

### Output

```text
*********
 *******
  *****
   ***
    *
```

---

## Approach

The pattern consists of **N rows**.

For each row:

- Print the required number of **leading spaces**.
- Print the required number of **stars**.
- Print the same number of **trailing spaces** (optional for console output).

The number of spaces increases by **1** in every row, while the number of stars decreases by **2**.

---

## Dry Run (N = 5)

| Row | Leading Spaces | Stars | Trailing Spaces | Output |
|------|----------------|-------|-----------------|--------|
| 1 | 0 | 9 | 0 | `*********` |
| 2 | 1 | 7 | 1 | ` *******` |
| 3 | 2 | 5 | 2 | `  *****` |
| 4 | 3 | 3 | 3 | `   ***` |
| 5 | 4 | 1 | 4 | `    *` |

---

## Explanation

### Outer Loop

The outer loop controls the number of rows.

```javascript
for (let i = n; i >= 1; i--)
```

- Starts from row `n`.
- Continues until row `1`.
- Each iteration prints one row of the inverted pyramid.

---

### First Inner Loop (Print Leading Spaces)

The first inner loop prints the leading spaces.

```javascript
for (let j = 1; j <= n - i; j++)
```

For each row:

- Row 1 → `0` spaces
- Row 2 → `1` space
- Row 3 → `2` spaces
- ...
- Last Row → `N - 1` spaces

These spaces center-align the pyramid.

---

### Second Inner Loop (Print Stars)

The second inner loop prints the stars.

```javascript
for (let j = 1; j <= 2 * i - 1; j++)
```

For each row:

- Row 1 → `(2 × N - 1)` stars
- Row 2 → `(2 × N - 3)` stars
- Row 3 → `(2 × N - 5)` stars
- ...
- Last Row → `1` star

The expression `2 * i - 1` generates odd numbers while `i` decreases:

```text
9, 7, 5, 3, 1
```

(for `N = 5`)

---

### Third Inner Loop (Print Trailing Spaces)

The third inner loop prints trailing spaces.

```javascript
for (let j = 1; j <= n - i; j++)
```

These spaces are **optional** and are not required to display the pattern correctly in the console.

They simply make each row have the same width.

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |