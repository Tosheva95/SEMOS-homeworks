# HTML5 Game Engines

**A game engine**, also known as a game architecture, game framework or gameframe, is a software-development environment designed for people to build video games. Developers use game engines to construct games for consoles, mobile devices, and personal computers. The core functionality typically provided by a game engine includes a rendering engine ("renderer") for 2D or 3D graphics, a physics engine or collision detection (and collision response), sound, scripting, animation, artificial intelligence, networking, streaming, memory management, threading, localization support, scene graph, and may include video support for cinematics. Implementers often economize on the process of game development by reusing/adapting, in large part, the same game engine to produce different games or to aid in porting games to multiple platforms.

## Why Developers Use Game Engines

Every language and library is at some level an abstraction. Developers don’t write their code in binary. Most don’t use an assembly language, and even C is considered too cumbersome for the majority of modern developers, which is why higher-level languages, i.e. languages that abstract more behaviors, are the most used and most in-demand for developers.

Although JavaScript is a higher level language, it still asks a lot of the developer when it comes to the sort of logic demanded by games. What is the edge of the map? How do I draw assets continuously as a player moves? How do I accept input from a gamepad, keyboard, mouse, and touch? What animation plays when x enemy dies as opposed to y enemy dies? What happens when a game starts? How do you load a saved game? What constitutes game over? All these questions have to be answered in order to have a proper playable game. While it’s possible to answer these questions in JavaScript — or even binary! — you will save yourself a lot of work by giving the most fundamental and oft-repeated concepts to a game engine.

While Unreal and Unity and Crytek are awesome free tools for game developers, they are not intended for a web audience. To make a game built from the ground-up to play nicely in a browser window, it’s better to use tools with that goal in mind.

Enter HTML 5 game engines.

My partner and I knew we wanted to make a game, but we also knew we didn’t want to figure out all the math and physics and states when there were a host of libraries out there. After poking through the options on HTML5 Game Engine, our list of tools boiled down to some obvious candidates.
There are two major flavors of HTML5 game engines: those with a GUI and those without. Perhaps unsurprisingly, the two most robust GUI engines are also the most popular. 

# HTML 5 Game Development

To put it simple, HTML 5 Game Development is what we call game development that runs in a browser, that uses the exact same languages and tools of front-end development. By knowing HTML, CSS and JavaScript it is already possible to create simple games able to run on your every platform equipped with a browser. But that has been possible for a long time and, although some pretty addictive games can be created using that technology, to talk about HTML 5 game development is to talk about the canvas API.

Created by Apple as an alternative to Flash, canvas is a simple yet powerful api that allows to draw graphics via scripting, having control on every single individual pixel. It can be used for both 2D graphics and 3D graphics (through webgl), but in this series of articles I will focus on 2D since it is the only context I have experience with and doesn’t require use to learn to use a completely different language.

Okay, great but… why HTML 5 then? What are the advantages?

JavaScript is one of the most popular programming languages in the world (first on GitHub) and that means the community and the support you can receive is unparalleled.
Making a game that runs in a browser means that the user doesn’t have to update it, since every time they run it they are automatically using the latest version.
And since browser nowadays get updated automatically, that means you can use everything your target browsers support without having to worry about leaving some users behind, since it simply what happen.
Also, since it runs in a browser, the users don’t need to install any extra library or tool.


