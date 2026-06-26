# LeetCode Practice

This repository contains my daily LeetCode and pattern printing practice problems with:
- Problem description
- Optimized approach
- Time & space complexity
- Clean, readable solutions

## Tech Stack
- Language: JavaScript (Node.js)
- Platform: LeetCode

## Problem Categories
- Pattern Printing
- Maths
- Arrays
- Strings
- Linked List
- Stack & Queue
- Binary Search
- Trees
- Dynamic Programming

## Goal
- Improve problem-solving skills
- Prepare for product-based interviews
- Maintain clean, interview-ready solutions

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

Check if installed:
```bash
node -v
npm -v
```

---

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/leetcode-practice.git
cd leetcode-practice
npm install
```

> `npm install` installs `prompt-sync` which is used to take input from the terminal.

---

## How to Run

Each problem has its own `solution.js` inside its own folder.

**General command:**
```bash
node path/to/solution.js
```

**Example:**
```bash
node pattern_printing_problems/Right_Half_Pyramid/solution.js
```

If the problem requires input, you will be prompted in the terminal:
```
Enter number of rows: 5
*
**
***
****
*****
```

---

## Project Structure

```
leetcode-practice/
├── input.js                               ← shared input utility (used by all problems)
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
├── pattern_printing_problems/
│   ├── Right_Half_Pyramid/
│   │   ├── solution.js
│   │   └── README.md
│   └── ...more problems/
│
├── arrays/
│   ├── two_sum/
│   │   ├── solution.js
│   │   └── README.md
│   └── ...more problems/
│
├── strings/
│   └── ...
│
└── ...more categories/
```

---

## Adding a New Problem

1. Create a folder under the relevant category:
```
arrays/problem_name/
```

2. Add your solution:
```
arrays/problem_name/solution.js
```

3. Optionally add a README for the problem:
```
arrays/problem_name/README.md
```

4. Require the shared input utility at the top of `solution.js`:
```javascript
const { input } = require('../../input.js');
```

> Adjust the relative path `../../` based on how deep your file is from the root.

---

## Taking Input

> `input()` always returns a **string**, so convert it based on what you need.

| Input Type | How to Take |
|---|---|
| Integer | `parseInt(input())` |
| Float | `parseFloat(input())` |
| String | `input()` |
| Array (space separated) | `input().split(" ").map(Number)` |
| Multiple inputs one by one | call `input()` multiple times |
| N inputs in a loop | call `input()` inside a `for` loop |