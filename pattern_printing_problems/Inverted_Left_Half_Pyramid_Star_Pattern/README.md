# Print Inverted Left Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print an **Inverted Left Half Pyramid** star pattern with **N** rows.

- The **first row** contains **N** stars.
- The **second row** contains **N - 1** stars.
- Each subsequent row contains **one less star** than the previous row.
- The **Nth row** contains **1** star.
- All stars are **right aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-inverted-left-half-pyramid-pattern-star-pattern/

---

## Example

### Input

```text
5
```

### Output

```text
*****
 ****
  ***
   **
    *
```

---

## Approach

The pattern consists of **N rows**.

For each row:

- Print the required number of **leading spaces**.
- Then print the required number of **stars**.

The number of spaces increases by **1** in every row, while the number of stars decreases by **1**.

---

## Dry Run (N = 5)

| Row | Spaces | Stars | Output |
|------|--------|-------|--------|
| 1 | 0 | 5 | `*****` |
| 2 | 1 | 4 | ` ****` |
| 3 | 2 | 3 | `  ***` |
| 4 | 3 | 2 | `   **` |
| 5 | 4 | 1 | `    *` |

---

## Explanation

### Outer Loop

The outer loop controls the number of rows.

```javascript
for (let i = n; i >= 1; i--)
```

- Starts from row `n`.
- Continues until row `1`.
- Each iteration prints one row of the pyramid.

---

### First Inner Loop (Print Spaces)

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

This right-aligns the stars.

---

### Second Inner Loop (Print Stars)

The second inner loop prints the stars.

```javascript
for (let j = 1; j <= i; j++)
```

For each row:

- Row 1 → `N` stars
- Row 2 → `N - 1` stars
- Row 3 → `N - 2` stars
- ...
- Last Row → `1` star

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |
