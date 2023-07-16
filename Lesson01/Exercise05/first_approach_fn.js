/**func that checks whether a product contains a specified list of labels
 * The fist param is for the product root.
 * The second param is for the list of labels to check for.
 * */ 

function containLabels(element, ...labelsToCheck) {
    /**
     * Using some array mapping and filtering to find the intersection
     * between the labels specified in the params and
     * the one that the product being inspected has.
     */
    const intersection = Array.from(element.querySelectorAll(".label"))
    .map(e => e.innerHTML)
    .filter(l => labelsToCheck.includes(l));

    // check whether the product contains labels.
    return intersection.length == labelsToCheck.length;
}

// start from the product root element.
Array.from(document.querySelectorAll(".item"))

// filter the list to only include the ones with both labels.
.filter(e => containLabels(e, "organic", "fruit"))

// find the product name.
.map(p => p.querySelector(".content a.header"))
.map(a => a.innerHTML)

// Print to the console
.forEach(console.log);
