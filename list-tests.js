QUnit.test("A new list is empty", function (assert) {
    var l = new List();
    assert.equal(l.empty(), true);
    assert.equal(l.head(), null);
});

QUnit.test("It is really a list", function (assert) {
    var l = new List();
    l.add("a");
    l.add("b");
    l.add("c");
    assert.equal(l.item.data, "c");
    assert.equal(l.item.tail.data, "b");
    assert.equal(l.item.tail.tail.data, "a");
    assert.equal(l.item.tail.tail.tail, null);
});

QUnit.test("Head of the list contains most recent addition", function (assert) {
    var l = new List();
    l.add("a");
    assert.equal(l.head(), "a");
    l.add("b");
    assert.equal(l.head(), "b");
    l.add("c");
    l.add("d");
    assert.equal(l.head(), "d");
});

QUnit.test("Returns the correct length of a list", function (assert) {
    var l = new List();
    assert.equal(l.length(), 0);
    l.add("a");
    l.add("b");
    l.add("c");
    assert.equal(l.length(), 3);
    l.pop();
    assert.equal(l.length(), 2);
    l.pop();
    l.pop();
    assert.equal(l.length(), 0);
});

QUnit.test("Pop gets the most recent element off the list", function (assert) {
    var l = new List();
    l.add("a");
    l.add("b");
    l.add("c");

    assert.equal(l.pop(), "c");
    assert.equal(l.head(), "b");
    assert.equal(l.length(), 2);

    assert.equal(l.pop(), "b");
    assert.equal(l.head(), "a");
    assert.equal(l.length(), 1);

    assert.equal(l.pop(), "a");
    assert.equal(l.head(), null);
    assert.equal(l.length(), 0);

    // Any further pop()s return null
    assert.equal(l.pop(), null);
    assert.equal(l.head(), null);
    assert.equal(l.empty(), true);
});

QUnit.test("Returns the last element in the list", function (assert) {
    var l = new List();
    assert.equal(l.last(), null);
    l.add("a");
    l.add("b");
    l.add("c");
    assert.equal(l.last(), "a");
    assert.equal(l.length(), 3);
});

QUnit.test("Sorts a list alphabetically", function (assert) {
    var l = new List();
    l.sort(); // Must not fail on empty list
    assert.equal(l.last(), null);
    l.add("c");
    l.add("a");
    l.add("b");
    l.add("a");
    l.sort();
    assert.equal(l.pop(), "a");
    assert.equal(l.pop(), "a");
    assert.equal(l.pop(), "b");
    assert.equal(l.pop(), "c");

});

QUnit.test("Sorts a list of names alphabetically", function (assert) {
    var l = new List();
    l.add("Nick");
    l.add("Dave");
    l.add("Cara");
    l.add("Andre");

    l.sort();

    assert.equal(l.pop(), "Andre");
    assert.equal(l.pop(), "Cara");
    assert.equal(l.pop(), "Dave");
    assert.equal(l.pop(), "Nick");

    assert.equal(l.length(), 0);
});

QUnit.test("Sorts a list of numbers alphabetically", function (assert) {
    var l = new List();

    l.add("4");
    l.add("5");
    l.add("9");
    l.add("7");
    l.add("1");
    l.add("3");

    l.sort();

    assert.equal(l.pop(), "1");
    assert.equal(l.pop(), "3");
    assert.equal(l.pop(), "4");
    assert.equal(l.pop(), "5");
    assert.equal(l.pop(), "7");
    assert.equal(l.pop(), "9");
});