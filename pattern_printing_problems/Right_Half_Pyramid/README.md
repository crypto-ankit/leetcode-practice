# Print Right Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print a **Right Half Pyramid** star pattern with **N** rows.

- The **first row** contains **1** star.
- The **second row** contains **2** stars.
- Each subsequent row contains **one more star** than the previous row.
- The **Nth row** contains **N** stars.
- All stars are **left aligned**.

---

##  Example

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

- Use the **outer loop** to iterate through each row.
- For every row, use the **inner loop** to print stars.
- The number of stars printed in each row is equal to the current row number.

---

## Dry Run (N = 5)

| Row | Number of Stars | Output |
|-----|-----------------|--------|
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

### Inner Loop

The inner loop prints stars for the current row.

```javascript
for (let j = 1; j <= i; j++)
```

For each row:

- Row 1 → prints `1` star
- Row 2 → prints `2` stars
- Row 3 → prints `3` stars
- ...
- Row N → prints `N` stars

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Space Complexity** | **O(1)** *(Ignoring the output string used for printing)* |
