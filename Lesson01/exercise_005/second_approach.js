function getAllSiblings(element) {
  const siblings = [];

  // Iterate and store all siblings before element
  let previous = element.previousElementSibling;
  while (previous) {
    siblings.push(previous);
    previous = previous.previousElementSibling;
  }

  // Iterate and store all siblings after element
  let next = element.nextElementSibling;
  while (next) {
    siblings.push(next);
    next = next.nextElementSibling;
  }

  return siblings;
}

// 1 - Start by finding all the labels with content 'organic'
Array.from(document.querySelectorAll('.label'))
  .filter(e => e.innerHTML === 'organic')

  // 2 - Filter the ones that don't have a sibling label 'fruit'
  .filter(e => getAllSiblings(e).filter(s => s.innerHTML === 'fruit').length > 0)

  // 3 - Find root product element
  .map(e => e.closest('.item'))

  // 4 - Find product name
  .map(p => p.querySelector('.content a.header').innerHTML)

  // 5 - Print to the console
  .forEach(console.log);
