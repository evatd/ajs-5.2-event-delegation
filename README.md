# ajs-5.2-event-delegation
**Advanced JavaScript | Lecture 5 Task 2**

Solution to the following task:

### Task

In exercise2.js, add an event listener for clicks on the div that has the id: button-wrapper.
In the listener function, simply console.log the currentTarget property of the event object
Test the page by clicking the buttons. What do you see in the console?
Clearly, the currentTarget property will not help us here as it always points to the button- wrapper!
Amend your code so that you console.log the target property of the event object. Test your code again. What do you see in the console?
Using event.target, we can determine which button was clicked from inside our event handler (which is triggered for all buttons) and perform the necessary action.


Remember, Javascript can access an element’s attributes with getAttribute: var attr = element.getAttribute('data-action');
- Use getAttribute to retrieve the value stored in the data-action attribute for the button that was clicked
- console.log the value of the data-action attribute
