// An object to hold the item we will be
// storing in our list
var ListItem = function (data, tail) {
    this.tail = tail;
    this.data = data;
};

// List implementation
var List = function () {
    this.item = null;

    // Add a data item to the front of the list
    this.add = function (elem) {
        this.item = new ListItem(elem, this.item);
        this.count++;
    };

    // Returns true if the list is empty
    this.empty = function () {
        return this.item == null;
    };

    // Returns the data at the head of the list. If
    // the list is empty, return null. This leaves
    // the list unmodified
    this.head = function () {
        return this.item == null ? null : this.item.data;
    };

    // Remove item off the head of the list and return
    // its value. The new head of the list must be the
    // next element in the list if it exists. If the
    // list is empty, we return null
    this.pop = function () {
        if (this.empty())
            return null;

        var head = this.item.data;
        this.item = this.item.tail;

        return head;
    };

    // Return the number of elements in the list.
    this.length = function () {
        var count = 0;
        for (var p = this.item; p != null; p = p.tail)
            count++;

        return count;
    };

    // Return the last data item in the list if it exists. If
    // not, return null
    this.last = function () {
        var last = null;
        for (var p = this.item; p != null; p = p.tail)
            last = p;
        return last == null ? null : last.data;
    };

    // In place sort of the list from smallest to largest
    this.sort = function () {
        var tmp = null;
        var didSwap = true;
        var pass = 1, numSwaps = 0;

        // Handle empty lists & 1 element lists upfront.
        if (this.item == null || (this.item != null && this.item.tail == null))
            return;

        console.log("List#sort: Sorting " + this.length() + " elements...");
        while (didSwap) {
            didSwap = false;

            console.log("List#sort: pass = " + pass);
            for (p = this.item; p.tail != null; p = p.tail) {
                if (p.data.localeCompare(p.tail.data) > 0) {
                    tmp = p.data;
                    p.data = p.tail.data;
                    p.tail.data = tmp;
                    didSwap = true;
                    ++numSwaps;
                }
            }
            pass++;
        }
        console.log("List#sort: numSwaps = "+ numSwaps);
    };
};

