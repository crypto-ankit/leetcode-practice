# Print Right Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print a **Right Half Pyramid** star pattern with **N** rows.

- The **first row** contains **1** star.
- The **second row** contains **2** stars.
- Each subsequent row contains **one more star** than the previous row.
- The **Nth row** contains **N** stars.
- All stars are **left aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-right-half-pyramid-pattern-star-pattern/

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

- Print the required number of **stars**.
- The number of stars increases by **1** in every row.

Since the stars are **left aligned**, no spaces are required.

---

## Dry Run (N = 5)

| Row | Stars | Output |
|------|-------|--------|
| 1 | 1 | `*` |
| 2 | 2 | `**` |
| 3 | 3 | `***` |
| 4 | 4 | `****` |
| 5 | 5 | `*****` |

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

### Inner Loop (Print Stars)

The inner loop prints stars for the current row.

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
