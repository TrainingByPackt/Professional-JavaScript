// Func to find all of the siblings of a specified element.
function getAllSiblings(element) {
    const siblings = [];

    /**Iterate over all previous siblings elements using a
     *  While loop and the previousElementSibling attribute and pushing them into the array*/
    let previous = element.previousElementSibling;
    while (previous) {
        previous = previous.previousElementSiblings;
        siblings.push(previous);
    }

    // same for all the siblings coming after the specified element.
    let next = element.nextElementSibling;
    while (next) {
        next = next.nextElementSibling;
        siblings.push(next);
    }

    return siblings;
}

/** Now that we have our getSiblings func we are looking for the products using
 * querySelectorAll func and some array mapping and filtering to find and print the data that we want.*/

// Start by finding all the labels with the content "organic"
Array.from(document.querySelectorAll(".label"))
.filter(e => e.innerHTML === "organic")

// Filter the ones that dont have a sibling label "fruit".
.filter(e => getAllSiblings(e).filter(s => s.innerHTML === "fruit").length > 0)

// Find root product element.
.map(e => e.closest(".item"))

// Find product name
.map(p => p.querySelector(".content a.header").innerHTML)

// Print to console
.forEach(console.log);