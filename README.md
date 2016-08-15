# pseudo.js
### A pseudocode-to-Javascript compiler
##### by [marianfu](https://github.com/marianfu) and [gabrielprc](https://github.com/gabrielprc)

----
# Definition
First draft of a language definition built around some of the most common practices for writing pseudocode, and what we consider a more practical and human-readable syntax.

## Variables
Variabes are loosely typed (*[duck-typed](https://en.wikipedia.org/wiki/Duck_typing)*).

### Declaration
Variables are initially declared with the `var` keyword. At the declaration, an initial value may or may not be set. A variable only needs to be declared the first time it is referenced; declaring a variable with the same name of another previously declared will result in overriding the previous value of the same name variable.
  - Explicitly setting value at time of declaration `var NUMBER is 2`
  - Declaring variable with no initial value `var NUMBER`

### Assignment
The keyword for assigning a value to a variable is the verb `is`, which is equivalent to using the operator `=`. The variable to be assigned is the left-hand side operand, while the value to assign is on the right-side, with the assignment keyword between both. `NUMBER is 2`

### Values
  - Primitive (numeric, alphanumeric, boolean, void) `NUMBER = 1`
    - Booleans are `true` or `false`.
    - Alphanumeric values (a.k.a. 'strings') are defined between single or double quotation marks, imitating the [usage of quotation marks in Javascript strings](http://www.w3schools.com/js/js_strings.asp).
  - Object (key-value map) `HOUSE has DOOR = 1, HOUSE has WINDOW = 2`
  - Array `NUMBERS = [1, 2, 3]`
  - Function `SUM(NUMA, NUMB){...}`

## Statements
Statements define conditions or loops for the execution of blocks.
- Loops
  - **for each _X_ in _Y_** `for each NUMBER in NUMBERS`
  - **while _condition_** `while NUMBER < 10`
- Conditionals
  - **if _condition_** `if NUMBER < 10`
  - **else** `if NUMBER < 10 ... else ...`
  - **else if _condition_** `if NUMBER < 10 ... else if NUMBER > 100 ...`

### Conditions
A condition used in a statement can be:
- A _boolean_ value (directly as a value or as a variable).
- A function that evaluates to a _boolean_ value.
- A comparison operation.

## Blocks
Blocks are lists of statements to be executed in a logical sequential order (top to bottom).

Blocks are wrapped with curly brackets ( '**{**' and '**}**' ). `{ ... }` 

Although not necessary, for the sake of readability we recommend to separate the brackets from the first and last lines of code with a line break, such as:

    ... {
       var NUMBER is 2
    }
    
rather than

    ... {var NUMBER is 2}

### Scope
Variables accessible within a block are those declared **within the same block** or **outside of it**. Variables defined inside of a lower level block (that is a block _within_ the current scoped block) **cannot** be accessed by it's parent block.
```
... {
    EXTNUMBER is 10
    //  INNUMBER is not 'known' as a variable in this scope
    {
        INNUMBER is 20
        //  Within this block, both INNUMBER and EXTNUMBER are accessible variables.
        //  If EXTNUMBER were to be re-declared in this scope,
        //  it's value (if defined in the superior block) would be overriden
    }
}
```

## Functions
Functions are essentially named blocks, which may receive _parameters_ to be used as variables by the sencentes within said block.

### Declaration
  - Functions are to be named as any other variable, as they _are_ variables
  - The name of a function must precede the opening of a block `SUM { ... }`
  - Functions _can_ receive parameters, which are to be listed and named within parenthesis ( '**(**' and '**)**') _between_ the name of the function and the opening of the block `SUM(NUMA, NUMB) { ... }`
  - If not specified or empty, it will be considered that the function has no parameters. `SUM { ... }` _is equivalent to_ `SUM() { ... }`

### Invocation
  - A function is to be called by its name, followed by the parameters to pass to it between parenthesis (parameters will be passed to the function in the order defined at its declaration; parenthesis are to be used even if no parameters are passed)
  - Call with parameters: `SUM(A, B)`
  - Call without parameters: `SUM()`
  - Functions can be called without passing parameters even when it's declaration does define them. If one or more parameters are not passed, its values within the function's block will be **void**. `SUM()` _is equivalent to_ `SUM(void, void)`

### Return
  - All functions return a value on completing its execution. To explicitly define the return value of a function, it must contain a statement in the form of `return VALUE`, where value can be a variable, an operation, or a call to another function. If not explicitly declared, the return value of a function will be **void**.
  - The **return** statement ends the execution of the function, whether it is the last statement or not.

## Sentences
- A sentence can be composed of
  - The declaration of a [new] variable `NUMBER is 10`
  - A basic operation `NUMA + NUMB`
  - A function call `SUM(NUMA, NUMB)`
- Sentences are **separated by line-breaks**. For the sake of readability, not more than one sentence can be in the same line. The only exceptions to this rule are array declarations and key-value assignations for objects, as several values can be assigned within what is considered in this draft to be a single statement; these multiple value assignations must be comma-separated. `LIST has 1, 2, 3` or `OBJ has PROPA = 1, PROPB = 2`


## Operators

Operators perform operations between a left-hand side and a right-hand side operands, or over one single operand (depending on the definition of the operation). These operands can be variables, function calls (taking its return value), or other operations, which may be enclosed within parenthesis ('**(**' and '**)**'). Parenthesis in operations are used in the same manner as in Mathematics.

### Assignment
- **is** (or '**=**')
  - Basic value assignment operator. Assigns right-hand side value to the left-hand side variable. Using _is_ or '_=_' has the same result. `NUM is 10` _is equivalent to_ `NUM = 10`.
- **has**
  - _has_ defines the left-hand side variable as an **object**, and the right-hand side variable as a property of that object. In the sentence `HOUSE has DOORS = 2`, we are defining a variable `HOUSE` as an object, which has a property `DOORS`, to which we assign the value `2`. Shown as a key-value map: `HOUSE = {DOORS: 2}`.
- **of** (or **in**)
  - _of_ and _in_ are synonims used to access a property of an object. Take for example the object `HOUSE` defined above. `DOORS of HOUSE` or `DOORS in HOUSE` would reference the property `DOORS` in it, to be used as any other variable in a statement, such as a new value assignment or an operation. `DOORS of HOUSE = 4`, `SUM(1, DOORS of HOUSE)`.

### Arithmetic
Arithmetic operators return a number value, with the only exception of the _addition_ operator, which may return a _String_ value if one or both of the operands was also a _String_.
- **+** : Addition.
- **\-** : Substraction
- **\*** : Multiplication.
- **\\** : Division.
- **%** : Remainder.

### Comparison
Comparison operations return a boolean value.
- **==** or **equals** : Equals.
- **\>=** or **greater than or equals** : Greater than or equals.
- **<=** or **lesser than or equals** : Lesser than or equals.
- **!=** or **not equals** : Not equals.
- **\>** or **greater than** : Greater than.
- **<** or **lesser than** : Lesser than.

### Boolean
Boolean operations take boolean values as operands and return another boolean value.
- **and** : Takes two boolean operands, and evaluates to `true` only if both operands are `true`.
- **or** : Takes two boolean operands, and evaluates to `true` if either of both operands are `true`.
- **not** : Takes only a right-hand side boolean operand, and inverts its value.


## Misc
- Indentation is irrelevant to the execution of the code. We do recommend to increase indentation for sentences within a new block.
- Lower and upper-case are indifferent. For the sake of readability, we recommend writing variable names in full upper-case, and the rest of the code (operators, statements) in lower-case.
- All words and symbols defined in this draft as operators, statements, separators, etc., are reserved, and _cannot be used in variable names_.
- The most external block (main thread of execution) carries no curly brackets, they are implicit.

## Examples
_TBD_.
