// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper');

// Add a listener to parent element... event will bubble up from children
buttonWrapper.addEventListener(
    "click",
    function (event) {
        
        // event.target holds reference to clicked element.
        // It is a DOM node, so all DOM methods are available.
        // We can copy it to local variable so we have less typing to do!
        var clicked = event.target;
                
        // Get data-action attribute from element
        var data = clicked.getAttribute('data-action');
        
		// Applying a filter so that we only respond to clicks on
		// buttons that have a "data-action" attribute.
		// getAttribute returns "null" if attribute is not present on element.
        if (data != null) {
            // We have something to work with!
            console.log(data);
        }
        
    }
);
