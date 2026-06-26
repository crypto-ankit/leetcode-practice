# Print Left Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print a **Left Half Pyramid** star pattern with **N** rows.

- The **first row** contains **1** star.
- The **second row** contains **2** stars.
- Each subsequent row contains **one more star** than the previous row.
- The **Nth row** contains **N** stars.
- All stars are **right aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-left-half-pyramid-pattern-star-pattern/

---

## Example

### Input

```text
5
```

### Output

```text
    *
   **
  ***
 ****
*****
```

---

## Approach

The pattern consists of **N rows**.

For each row:

- Print the required number of **leading spaces**.
- Then print the required number of **stars**.

The number of spaces decreases by **1** in every row, while the number of stars increases by **1**.

---

## Dry Run (N = 5)

| Row | Spaces | Stars | Output |
|------|--------|-------|--------|
| 1 | 4 | 1 | `    *` |
| 2 | 3 | 2 | `   **` |
| 3 | 2 | 3 | `  ***` |
| 4 | 1 | 4 | ` ****` |
| 5 | 0 | 5 | `*****` |

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

### First Inner Loop (Print Spaces)

The first inner loop prints the leading spaces.

```javascript
for (let j = 1; j <= n - i; j++)
```

For each row:

- Row 1 → `n - 1` spaces
- Row 2 → `n - 2` spaces
- Row 3 → `n - 3` spaces
- ...
- Row N → `0` spaces

This right-aligns the stars.

---

### Second Inner Loop (Print Stars)

The second inner loop prints the stars.

```javascript
for (let j = 1; j <= i; j++)
```

For each row:

- Row 1 → `1` star
- Row 2 → `2` stars
- Row 3 → `3` stars
- ...
- Row N → `N` stars

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |
