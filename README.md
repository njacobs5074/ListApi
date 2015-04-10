#List API seed

Linked lists are a very basic data structure that form the cornerstone of many
data structures in common use on the Internet today. In this exercise, you
will be filling out an existing API in order to get all the test cases to
pass.

The test cases can be run in your browser. Follow the
instructions below to get going:

* Fork this repo and clone it to your machine
* Open the file called `test-setup.html` in your browser.
* Open the ```list.js``` and ```list-test.js``` files in a text editor.
* Refresh your browser each time you make (and save) a change to see how your code passes tests
* When the tests go green, you are done!

The [API](http://en.wikipedia.org/wiki/Application_programming_interface)
allows basic manipulation of a singly linked list. For example:

```javascript
  var l = new List()
  l.add("a")
  l.add("b")
  l.add("c")
  var d = l.pop()              // d === "c"
  var h = l.head()             // h === "b"
  var len = list.length()      // len === 2

```

The idea of this exercise is to first understand how the list works by reading
the code. We store the list as a a linked list if ```Item()``` types wrapped
in a ```List()``` object and work from there. Each function that you need to
implement has been declared for you and the comments above each one should
tell you what that function is supposed to do. We will also go through the API
in class.


# Finishing up

Complete your task by doing the following:

* Integrate your project into Travis and add a build badge to the README.md in your fork of the project
  - First, get yourself an account on [Travis](https://travis-ci.org). Basically, you just log in using your Github account.
  - Find your fork of the repo from the Travis menu (the "+" on the near the top on the left) and add it to the build.
  - Add the build passing badge. Here is an [example](https://github.com/davidmweber/scopus). It is just a 
    URL you can copy and paste from the Travis site.
  - Travis builds each time you commit so make and push a small change to see it's effect.

* Make sure the build is green (good)
* Ensure that your code is properly formatted and commented.
* Send Andre an email with the URL for your fork of the repo for evaluation
* Boom! You are done.

Note that you *have* to have your own fork and have committed the finished code to the forked github repo for this to work.


