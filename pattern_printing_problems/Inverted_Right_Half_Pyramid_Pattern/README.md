# Print Inverted Right Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print an **Inverted Right Half Pyramid** star pattern with **N** rows.

- The **first row** contains **N** stars.
- The **second row** contains **N - 1** stars.
- Each subsequent row contains **one less star** than the previous row.
- The **Nth row** contains **1** star.
- All stars are **left aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-inverted-right-half-pyramid-pattern-star-pattern/

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

- Print the required number of **stars**.
- The number of stars decreases by **1** in every row.

Since the stars are **left aligned**, no spaces are required.

---

## Dry Run (N = 5)

| Row | Stars | Output |
|------|-------|--------|
| 1 | 5 | `*****` |
| 2 | 4 | `****` |
| 3 | 3 | `***` |
| 4 | 2 | `**` |
| 5 | 1 | `*` |

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

### Inner Loop (Print Stars)

The inner loop prints stars for the current row.

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
