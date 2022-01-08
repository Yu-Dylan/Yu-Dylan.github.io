---
title: HTML and Markdown
author: Dylan Yu
date: 2022-01-08
categories: [Blogging, Tutorial]
tags: [code, tutorial]
math: true
mermaid: true
---

# Headings

<h2 data-toc-skip>H2 - heading</h2>

<h3 data-toc-skip>H3 - heading</h3>

<h4>H4 - heading</h4>

# Lists

## Ordered list

1. Firstly
2. Secondly
3. Thirdly

## Unordered list

- Chapter
  - Section
    - Paragraph

## Task list

- [ ] TODO
- [x] Completed
- [ ] Defeat COVID-19
  - [x] Vaccine production
  - [ ] Economic recovery
  - [ ] People smile again

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

$$ \sum_{n=1}^\infty 1/n^2 = \frac{\pi^2}{6} $$

> **Theorem** (Quadratic formula). Let $a\neq 0$. Then the two solutions to $ax^2 + bx + c = 0$ are given by
> 
> $$ x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}. $$

# Footnotes

[^fn1]: The footnote source
[^fn2]: The 2nd footnote source