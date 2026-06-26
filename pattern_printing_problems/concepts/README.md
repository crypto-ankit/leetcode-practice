## Count What Each Row Contains

Before writing any inner loop, ask yourself:

- How many spaces?
- How many stars?
- How many numbers?
- How many alphabets?

Create a table.

| Row | Spaces | Stars |
|------|--------|-------|
| 1 | ? | ? |
| 2 | ? | ? |
| 3 | ? | ? |

This is the **most important step**.

Once you know how many characters each row should contain, finding the loop conditions becomes much easier.

The values in this table will help you derive formulas using `i` (current row) and `n` (total rows).

## Find the Relationship with `i` and `n`

After creating the table, find a relationship between:

- `i` → Current row
- `n` → Total rows

The formulas you derive tell you **how many times each inner loop should run**.

# Pattern Printing - Core Concepts

## 1. The Outer Loop Always Represents Rows

The outer loop decides **which row** is currently being printed.

```javascript
for (let i = 1; i <= n; i++)
```

or

```javascript
for (let i = n; i >= 1; i--)
```

Think of `i` as the **current row**.

---

## 2. The Inner Loop Prints Characters

The inner loop prints the characters present in the current row.

Examples:

- Spaces
- Stars (`*`)
- Numbers
- Alphabets

If a row contains both spaces and stars, you need **two inner loops**.

```javascript
// Print spaces
for (...)

// Print stars
for (...)
```

---

## 3. First Understand the Pattern

Never start writing loops immediately.

First draw the pattern and count what each row contains.

Example:

```text
*****
 ****
  ***
   **
    *
```

| Row | Spaces | Stars |
|------|--------|-------|
| 1 | 0 | 5 |
| 2 | 1 | 4 |
| 3 | 2 | 3 |
| 4 | 3 | 2 |
| 5 | 4 | 1 |

This table tells you exactly how many times each inner loop should run.

---

## 4. Find the Relationship with `i` and `n`

Once you have the table, express the counts using:

- `i` → Current row
- `n` → Total rows

Examples:

| Pattern | Formula |
|----------|---------|
| Stars increase | `i` |
| Stars decrease | `n - i + 1` *(when `i` increases)* |
| Spaces increase | `i - 1` |
| Spaces decrease | `n - i` |

If the outer loop is decreasing (`i = n` to `1`), sometimes `i` itself already represents the required count.

---

## 5. Decide the Inner Loop Limit

The number of iterations of an inner loop is simply the value you found in the table.

For example:

If the table says

| Row | Stars |
|------|-------|
| 1 | 5 |
| 2 | 4 |
| 3 | 3 |

then the stars loop should run exactly that many times.

If the relationship is

```text
Stars = i
```

then write

```javascript
for (let j = 1; j <= i; j++)
```

If the relationship is

```text
Spaces = n - i
```

then write

```javascript
for (let j = 1; j <= n - i; j++)
```

**The inner loop limit is always equal to the number of characters that should appear in that row.**

---

## Golden Rule

1. Draw the pattern.
2. Count spaces, stars, numbers, etc., for each row.
3. Find the relationship using `i` (current row) and `n` (total rows).
4. Use that relationship as the inner loop condition.

**Don't memorize formulas. Derive them from the pattern.**