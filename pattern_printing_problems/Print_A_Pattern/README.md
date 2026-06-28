# Print Alphabet "A" Using Stars

## Problem Statement

Given an integer **N**, print the **alphabet "A"** using stars (`*`).

- The **first row** prints the top horizontal line.
- The **middle row** prints the horizontal bar of the alphabet.
- All other rows print the left and right vertical lines.
- The width of the pattern is determined based on **N**.

---

## Reference

**GeeksforGeeks:** https://www.geeksforgeeks.org/dsa/program-print-alphabet-using-stars/

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
***
* *
* *
```

---

### Input

```text
10
```

### Output

```text
 ****
*    *
*    *
*    *
*    *
******
*    *
*    *
*    *
*    *
```

---

## Approach

Unlike pyramid patterns, this is a **2D Matrix Pattern**.

- Traverse every **row**.
- Traverse every **column**.
- For each cell `(row, column)`, decide whether to print:
  - `*`
  - or a space.

The pattern consists of three parts:

1. **Top Horizontal Line**
2. **Middle Horizontal Bar**
3. **Left and Right Vertical Lines**

---

## Dry Run (N = 5)

```
Width = Math.floor(5 / 2) + 1 = 3
Middle Row = Math.floor(5 / 2) = 2
```

| Row | Pattern Printed |
|------|-----------------|
| 0 | ` * ` |
| 1 | `* *` |
| 2 | `***` |
| 3 | `* *` |
| 4 | `* *` |

---

## Explanation

### Determine Width

The width of the alphabet is calculated as:

```javascript
const width = Math.floor(n / 2) + 1;
```

This provides a proportional width for the alphabet based on the number of rows.

---

### Determine Middle Row

The horizontal bar of the alphabet is printed on:

```javascript
const middle = Math.floor(n / 2);
```

---

### Traverse Rows

The outer loop iterates through every row.

```javascript
for (let i = 0; i < n; i++)
```

---

### Traverse Columns

The inner loop iterates through every column.

```javascript
for (let j = 0; j < width; j++)
```

---

### Print the Top Horizontal Line

The first row prints stars except at the two corners.

```javascript
if (i == 0) {
    if (j > 0 && j < width - 1)
        process.stdout.write('*');
    else
        process.stdout.write(' ');
}
```

---

### Print the Middle Horizontal Bar

The middle row is completely filled with stars.

```javascript
else if (i == middle) {
    process.stdout.write('*');
}
```

---

### Print the Vertical Lines

For all remaining rows, print stars only on the first and last columns.

```javascript
else if (j == 0 || j == width - 1) {
    process.stdout.write('*');
}
```

---

### Print Empty Spaces

Every remaining position contains a space.

```javascript
else {
    process.stdout.write(' ');
}
```

---

## Complexity Analysis

| Complexity | Value |
|------------|-------|
| **Time Complexity** | **O(N × W)** where **W = Math.floor(N / 2) + 1** |
| **Auxiliary Space Complexity** | **O(1)** |

> Since `W` is proportional to `N`, the time complexity can also be written as **O(N²)**.

---

## Key Learning

Unlike pyramid patterns, alphabet patterns are solved using **rows and columns**.

For every position `(i, j)`, ask:

- Is this cell part of the **top horizontal line**?
- Is it part of the **middle horizontal bar**?
- Is it part of the **left or right vertical line**?

If **yes**, print `*`; otherwise, print a space.

This row-and-column approach can be applied to print other alphabets and shapes such as **B, C, D, H, X, Z, Heart, Butterfly**, and many more.