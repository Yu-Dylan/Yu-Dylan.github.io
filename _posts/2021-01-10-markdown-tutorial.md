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

<h2 data-toc-skip>Smaller heading (H2)</h2>

<h3 data-toc-skip>Even smaller heading (H3)</h3>

<h4 data-toc-skip>Even smaller smaller heading (H4)</h4>

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

This is an example of `Inline Code`.

## Code block

Regular block:

```
This is a common code snippet, without syntax highlight and line number.
```

Specific languages (e.g. Java):

```java
System.out.println("Hello world!");
```

# Miscelleanous

## Block Quote

> This line to shows the Block Quote.[^fn1]

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
