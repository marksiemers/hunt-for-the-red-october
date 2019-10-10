# hunt-for-the-red-october
An aide to teaching DOM traversal

This front-end application is meant to aid in teaching DOM traversal.

## Getting started
Clone the repo
```
git clone git@github.com:marksiemers/hunt-for-the-red-october.git
# or
git clone https://github.com/marksiemers/hunt-for-the-red-october.git
```
Open the index.html file
```
cd hunt-for-the-red-october
open index.html
```
Play around with the buttons to see what happens on the board. Then look at the javascript files to see how the DOM traversal is being done.

Each type of traversal can be seen in this function
```javascript
function findSubmarines(cssSelector = '.submarine'){
  // Step one is to find a starting point, everything is relative to this
  var $submarine = $(cssSelector)

  // Traverse "down" the DOM for Descendent / Child
  var $submarineImg = $submarine.find('img')

  // Traverse "up" the DOM for Ancestor / Parent
  var $submarineCell = $submarine.closest('td')

  // Traverse up, then down the DOM for "Cousin" or "Relative"
  var $row = $submarine.closest('tr').find('td')

  // Traversing laterally across the DOM for siblings
  var $siblings = $submarineCell.siblings()

  // After traversing to get the correct elements, change the style on the DOM
  toggleInverseSubmarineImage($submarine,$submarineImg,$submarineCell)
  styleSubmarineRow($row,$submarineCell,$siblings)
  styleSubmarineColumn(getSubmarineColumn($submarine),$submarineCell)
}
```
## Contributing
It would be cool to have some javascript show up in the bottom left corner when a button is clicked - to show what is happening in real time. If anyone wants to implement that, I welcome pull requests.

Also a non-jQuery implementation would be interesting to have, to compare how the code looks with vanilla JS.
