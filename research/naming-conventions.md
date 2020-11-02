# CSS Naming conventions

One of the difficult things in computer science and programming in general is naming things and naming things in CSS is no different even though some developers don't consider CSS as a real programming language but that's beginning to change with the addition of **CSS variables.**

When you work on a small sized project you might not give a priority to your selector names or how your project is structured but if by any chance the project becomes bigger than you expect then you will have to keep track of your selectors and using a naming convention can make this easy.

Naming conventions can be considered as an advanced concept in CSS therefore we'll briefly talk about them and I'll leave you to chose based on personal preferences and the size or structure of your project.

Contrary to the tradition of this series this post is **more of theory than code.**

There are two things that can come to mind when you open your CSS codebase (after a long period of time) or that of another developer:

WOW! this is cool
Oh My God who wrote this?
If you taught of the first option then you are in luck as the developer already did some heavy lifting and the code should be easy to maintain or modify. But, if its the second option you'll have lot of work on your hands and there should be an indication that you'll rename some selectors and following a naming convention will at least (to some extent) prevent another developer from going through a mental exercise of coming up with meaningful selector names.

The following are naming conventions that you can employ:

* BEM
* SMACSS
* ITCSS
* OOCSS
* AMCSS

## BEM

**BEM** stands for Block Element Modifier and it is a methodology developed by the folks at yandex in the year 2009. The idea behind BEM is to divide the user interface into independent blocks.

## SMACSS

**SMACSS** stands for Scalable and Modular Architecture for CSS and it was created by Johnathan Snook.

**SMACSS** is about categorizing CSS rules into 5:

1. Base
2. Layout
3. Module
4. State
5. Theme

 **Base rules**

**Base rules** are the defaults and they can include attribute selectors, pseudo-class selectors, child selectors or sibling selectors.

> html { <br>
  /* code here */ <br>
}
div:hover { <br>
  /* code here */ <br>
}
[class^="my_selector"] { <br>
  /* code here */ <br>
}

**Layout rules**

Layout rules divide the page into sections e.g header, footer e.t.c

Take a look at the following layout:

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/02/holy-grail-example.jpg?ssl=1)

The resulting CSS rules can be:

> #header { <br>
  /* code here */ <br>
}
#sidebar { <br>
  /* code here */ <br>
}
#main { <br>
  /* code here */ <br>
}
#footer { <br>
  /*code here*/ <br>
}

**Module rules**

Modules are the reusable modular part of design. They can include:

* navigation bars
* dialog boxes

**State rules**

State rules are ways to describe how the modules or layouts will look like when in a particular state.

A state can be any of the following:

* collapsed
* expanded
* disabled

The CSS will then look like the following:

> .is-disabled { <br>
  cursor: not-allowed; <br>
}
.collapsed { <br>
  visibility: hidden; <br>
}
.expanded {  <br>
  visibility: visible; <br>
}

You should know that these states can be toggled with JavaScript as we'll demonstrate later in the series.

**Theme rules**

Theme rules are similar to state rules in that they describe how modules or layouts might look.

This is just an introduction to **SMACSS.** I'll encourage you to read the book online if you ever intend to use it.

## ITCSS

**ITCSS** stands for Inverted Triangle CSS and its main philosophy is to help you organize your project CSS files in such a way that you can better deal the cascade, selectors and specificity.

**ITCSS** is partially proprietary meaning no official specification or documentation exists just an homepage stating its creator.

## OOCSS

OOCSS means Object Oriented CSS and its purpose is to encourage code reuse and ultimately stylesheets that are easier to maintain.

OOCSS is centered around two main principles:

* Separation of structure from skin
* Separation of container and content

If you are interested in OOCSS you should read this introductory guide on smashing magazine.

## AMCSS

**AMCSS** is short for Attribute Module for CSS and the whole idea is about using HTML attributes and their values rather than classes for styling elements.

> [am-Button] { <br>
  /* code here */ <br>
}
[am-Button~="primary"] { <br>
  /* code for primary button here */ <br>
}

From a beginners perspective i consider this advanced. But if you are curious you can visit the project page

Another naming convention is **SUIT CSS** naming conventions which relies on structured class names and meaningful hyphens. Again i consider this advanced, but you can visit the project page for more information.

