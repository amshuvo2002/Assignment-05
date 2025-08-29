1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById selects one element by its id. getElementsByClassName selects all elements with a class, returns live HTMLCollection. querySelector selects the first element that matches a CSS selector. querySelectorAll → selects all elements matching a CSS selector, returns static NodeList.

2.How do you create and insert a new element into the DOM?

Ans: I create a new element. Then, I can set its text, HTML, or attributes. Finally, I insert it into the DOM, either at the end of a parent or before a specific element.

3.What is Event Bubbling and how does it work?

Ans:Event Bubbling is when an event on a child element automatically propagates upward to its parent elements.
How it works:
The event happens first on the target element (the innermost element where the action occurs).
Then it bubbles up to each parent element in order (child → parent → ancestor → document).
Each parent can listen for the event and respond if needed.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation in JavaScript is a technique where a single event listener is added to a parent element instead of adding separate listeners to multiple child elements.
It works because of event bubbling: when an event occurs on a child element, it bubbles up to the parent, which can handle the event for all its children.
Why it is useful:
Reduces the number of event listeners, improving performance.
Works for dynamically added elements that didn’t exist when the page loaded.
Makes code simpler and easier to maintain.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() → stops the default browser behavior for an event.
Example: Prevent a link from navigating, or prevent a form from submitting.
It does not stop the event from bubbling.

stopPropagation() → stops the event from bubbling (or capturing) to parent elements.
Example: Clicking a button won’t trigger click handlers on parent elements.
It does not stop the default browser behavior.