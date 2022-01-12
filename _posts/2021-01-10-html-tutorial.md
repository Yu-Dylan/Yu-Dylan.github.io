---
title: HTML Tutorial
author: Dylan Yu
date: 2022-01-10
categories: [Blogging, Tutorial]
tags: [code, tutorial]
math: true
mermaid: true
---

[W3Schools](https://www.w3schools.com/html/html_intro.asp) has a pretty good HTML tutorial. Output of the following code can be found [here](https://yu-dylan.github.io/protected/tutorials/html-tutorial/) (password: `html`).
```html
<!DOCTYPE html>
<html>
<body>

<h1>Heading (H1)</h1>
<h2>Smaller heading (H2)</h2>
<h3>Even smaller heading (H3)</h3>
<h4>Even smaller smaller heading (H4)</h4>
  
<h1>Lists (H1)</h1>
<h2>Ordered list</h2>
<p>A paragraph.</p>
<ol>
<li>Chapter</li>
  <ol>
    <li>Section</li>
    <ol>
      <li>Paragraph</li>
    </ol>
  </ol>
</ol>
<h2>Unordered list</h2>
<ul>
  <li>Chapter</li>
  <ul>
    <li>Section</li>
    <ul>
      <li>Paragraph</li>
    </ul>
  </ul>
</ul>
<h2>Task list</h2>
Not covered.
<h2>Description list</h2>
<dl>
  <dt>Sun</dt>
  <dd>the star around which the earth orbits</dd>
  <dt>Moon</dt>
  <dd>the natural satellite of the earth, visible by reflected light from the sun</dd>
</dl>

<h1>Code</h1>
<h2>Inline code</h2>
This is an example of <code>inline code</code>.
<h2>Code block</h2>
Regular block:
<pre>
  <code>
    This is a common code snippet, without syntax highlight and line number.
  </code>
</pre>
I won't cover syntax highlighting for HTML; it requires <a href="https://dev.to/ehlo_250/how-to-add-syntax-highlighting-to-code-snippets-on-your-website-app-or-blog-2mi2">JavaScript</a>.

<h1>Miscellaneous</h1>
<h2>Block quote</h2>
<blockquote cite="quote-source">
This is a block quote.<sup><a href="#fn1" id="ref1">1</a></sup>
</blockquote>
  
<h2>Tables</h2>
<table>
  <tr>
    <th>Programming Language</th>
    <th>Inventor</th>
    <th>Useful for</th>
  </tr>
  <tr>
    <td>Java</td>
    <td>James Gosling</td>
    <td>Passing the AP</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>Guido von Rossum</td>
    <td>Training bots</td>
  </tr>
  <tr>
    <td>Wolfram Language</td>
    <td>Stephen Wolfram</td>
    <td>Doing your homework</td>
  </tr>
</table>

<h2>Links</h2>
<a href="https://yu-dylan.github.io/">https://yu-dylan.github.io/</a> or <a href="https://yu-dylan.github.io/">click this/</a>.

<h2>LaTeX</h2>
Not covering this. You can find the answer on <a href="https://tex.stackexchange.com/questions/23804/how-to-incorporate-tex-mathematics-into-a-website">tex.SE</a>.

<h1>Footnotes</h1>
<sup id="fn1">The footnote source<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

</body>
</html>
```
