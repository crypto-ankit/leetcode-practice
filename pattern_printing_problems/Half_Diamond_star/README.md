# Print Half Diamond Star Pattern

## Problem Statement

Given an integer **N**, print a **Half Diamond** star pattern.

- The upper half starts with **1** star and increases by **1** star in each row until it reaches **N** stars.
- The lower half starts with **N - 1** stars and decreases by **1** star in each row until only **1** star remains.
- All stars are **left aligned**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-to-print-half-diamond-star-pattern/

---

## Example

### Input

```text
6
```

### Output

```text
*
**
***
****
*****
******
*****
****
***
**
*
```

---

## Approach

The pattern consists of **two halves**:

1. **Upper Half**
   - Print rows from **1** star to **N** stars.

2. **Lower Half**
   - Print rows from **N - 1** stars down to **1** star.

Each row prints only stars, so only **one inner loop** is required for each half.

---

## Dry Run (N = 5)

| Row | Stars | Output |
|------|-------|--------|
| 1 | 1 | `*` |
| 2 | 2 | `**` |
| 3 | 3 | `***` |
| 4 | 4 | `****` |
| 5 | 5 | `*****` |
| 6 | 4 | `****` |
| 7 | 3 | `***` |
| 8 | 2 | `**` |
| 9 | 1 | `*` |

---

## Explanation

### Upper Half

The first outer loop prints the upper half of the diamond.

```javascript
for (let i = 1; i <= n; i++)
```

For each row:

- Row 1 → `1` star
- Row 2 → `2` stars
- Row 3 → `3` stars
- ...
- Row N → `N` stars

The inner loop prints the stars.

```javascript
for (let j = 1; j <= i; j++)
```

---

### Lower Half

The second outer loop prints the lower half of the diamond.

```javascript
for (let i = n - 1; i >= 1; i--)
```

For each row:

- Row 1 → `N - 1` stars
- Row 2 → `N - 2` stars
- ...
- Last Row → `1` star

The inner loop again prints the required number of stars.

```javascript
for (let j = 1; j <= i; j++)
```

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N²)** |
| **Auxiliary Space Complexity** | **O(1)** |
