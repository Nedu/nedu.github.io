---
path: "/converting-from-a-truth-table-to-a-boolean-expression"
date: "2018-11-13"
title: "How to Convert from a Truth Table to a Boolean Expression"
author: "Nedu Robert"
---

Have you ever wondered how to derive a Boolean expression from a truth table? In this post, I will show you how to.

Given a truth table representation of a Boolean function, it is quite possible to derive the Boolean expression for that function. Focusing on all rows in the truth table where the output is 1, determine the expression for that single row that makes only that row output 1 and then Or together all expressions you have determined to give you the Boolean expression.

An example illustrating this is as follows: Given the following truth table, we are going to derive its Boolean expression.

| x | y | z | output |
| --|:-:| -:| -----: |
| 0 | 0 | 0 |   0    |
| 0 | 0 | 1 |   0    |
| 0 | 1 | 0 |   1    |
| 0 | 1 | 1 |   0    |
| 1 | 0 | 0 |   1    |
| 1 | 0 | 1 |   0    |
| 1 | 1 | 0 |   1    |
| 1 | 1 | 1 |   0    |

There are three rows with their outputs as 1. Starting with the first one which is row 3, we determine that the expression that makes the output for only row 3 to be 1 is $\overline{x}$y$\overline{z}$. Using the same technique we come up with x$\overline{y}$$\overline{z}$ for row 5 and xy$\overline{z}$ for row 7.

Now Oring together this three expressions we have come up with, we get $\overline{x}$y$\overline{z}$ + x$\overline{y}$$\overline{z}$ + xy$\overline{z}$ as the Boolean expression for this truth table.