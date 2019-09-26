function containLabels(element, ...labelsToCheck) {
  // Query for all label elements in the specified element
  const intersection = Array.from(element.querySelectorAll('.label'))

      // map to the label text
      .map(e => e.innerHTML) 

      // check if the label is in the passed in array
      .filter(l => labelsToCheck.includes(l));
  
  // If the intersection is equal to the passed in array, we have a match
  return intersection.length == labelsToCheck.length;
}

// 1 - Start from the product root element
Array.from(document.querySelectorAll('.item'))
  
  // 2 - Filter the list to only include the ones with both labels
  .filter(e => containLabels(e, 'organic', 'fruit'))

  // 3 - Find the product name
  .map(p => p.querySelector('.content a.header'))
  .map(a => a.innerHTML)

  // 4 - Print to the console
  .forEach(console.log);
