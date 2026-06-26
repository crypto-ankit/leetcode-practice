# Print Inverted Right Half Pyramid Star Pattern

## Problem Statement

Given an integer **N**, print an **Inverted Right Half Pyramid** star pattern with **N** rows.

- The **first row** contains **N** stars.
- The **second row** contains **N - 1** stars.
- Each subsequent row contains **one less star** than the previous row.
- The **Nth row** contains **1** star.
- All stars are **left aligned**.

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

- Use the **outer loop** to iterate from `N` down to `1`.
- For every row, use the **inner loop** to print stars.
- The number of stars printed in each row is equal to the current value of the outer loop variable.

---

## Dry Run (N = 5)

| Row | Number of Stars | Output |
|------|-----------------|--------|
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

### Inner Loop

The inner loop prints stars for the current row.

```javascript
for (let j = 1; j <= i; j++)
```

For each row:

- Row 1 → prints `N` stars
- Row 2 → prints `N - 1` stars
- Row 3 → prints `N - 2` stars
- ...
- Row N → prints `1` star

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Space Complexity** | **O(1)** *(Ignoring the output string used for printing)* |