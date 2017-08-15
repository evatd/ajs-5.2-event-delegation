// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper');

// Add a listener to parent element... event will bubble up from children
buttonWrapper.addEventListener('click', function (event) { // Pass in event object "event" as a parameter!

    // event.target holds reference to clicked element.
    // It is a DOM node, so all DOM methods, like .target, are available.
    // We can copy it to local variable so we have less typing to do!
    var clicked = event.target;

    // Printing to see where the action comes from: e.g. clicking on button 12 prints <p class = "button" data-action="action 12">button 12</p>
    console.log(event.target);

    // Get data-action attribute from element
    var data = clicked.getAttribute('data-action');

    // Printing data: add a filter so we have something to work with!
    // getAttribute returns "null" if attribute is not present on element.
    if (data != null) {
        console.log(data); //Clicking on button 12 prints 'action 12'
    }
});
