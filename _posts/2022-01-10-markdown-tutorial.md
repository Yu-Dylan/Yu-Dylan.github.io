---
title: Markdown Tutorial
author: Dylan Yu
date: 2022-01-10
categories: [Blogging, Tutorial]
tags: [code, tutorial]
math: true
mermaid: true
---

# Heading (H1)

## Smaller heading (H2)

### Even smaller heading (H3)

#### Even smaller smaller heading (H4)

# Lists

## Ordered list

1. Apples
2. Bananas
3. Carrots

## Unordered list

- Chapter
  - Section
    - Paragraph

## Task list

- [ ] Do my physics HW
- [ ] Finish my english paper
  - [x] Find sources online
  - [ ] Write the paper
  - [ ] Pray
- [x] Do my math HW

## Description list

Sun
: the star around which the earth orbits

Moon
: the natural satellite of the earth, visible by reflected light from the sun

# Code

## Inline

This is an example of `inline code`.

## Code block

Regular block:

```
This is a common code snippet, without syntax highlight and line number.
```

Specific languages (e.g. Java):

```java
System.out.println("Hello world!");
```

# Miscellaneous

## Block quote

> This is a block quote.[^fn1]

## Tables

| Programming Language | Inventor         | Useful for          |
|:---------------------|:-----------------|--------------------:|
| Java                 | James Gosling    | Passing the AP      |
| Python               | Guido von Rossum | Training bots       |
| Wolfram Language     | Stephen Wolfram  | Doing your homework |

## Links

<https://yu-dylan.github.io/> or [click this](https://yu-dylan.github.io/).

## LaTeX

Powered by [MathJax](https://www.mathjax.org/):[^fn2]

$$ \sum_{n=1}^\infty \frac1{n^2} = \frac{\pi^2}{6} $$

> **Theorem** (Quadratic formula). Let $a\neq 0$. Then the two solutions to $ax^2 + bx + c = 0$ are given by
> 
> $$ x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}. $$

# Footnotes

[^fn1]: The footnote source
[^fn2]: The 2nd footnote source
