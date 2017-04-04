function resetTable(){
  var $table = $('table')
  $table.find('td,th').removeAttr('style')
  $table.find('.submarine').remove()
}

function placeRedOctober(){
  placeSubmarine('<div class="red-october submarine"><img src="img/red-submarine.svg"></div>')
}

function placeYellowSubmarine(){
  placeSubmarine('<div class="yellow-submarine submarine"><img src="img/yellow-submarine.svg"></div>')
}

function placeSubmarine(html){
  var $cells = $('table').find('td:not(:first-child)')
  var cellIndex = Math.floor(Math.random() * $cells.length)
  $($cells.get(cellIndex)).html(html)
}

function findRedOctober(){
  findSubmarines('.red-october')
}

function findYellowSubmarine(){
  findSubmarines('.yellow-submarine')
}

function findAllSubmarines(){
  findRedOctober()
  findYellowSubmarine()
}

function getSubmarineColumn($submarine){
  var column_index = $submarine.closest('td').index()
  var column_number = column_index + 1
  return $submarine.closest('table').find('tr td:nth-child('+column_number+')')
}

function styleSubmarineColumn($column,$submarineCell){
  $column.css('border','solid yellow')
  $column.not($submarineCell).css('background-color', '#51adf6')
  $column.prev().find('td').css('border-right','none')
  $column.next().find('td').css('border-left','none')
  var $column_header = $($submarineCell.closest('table').find('th').get($submarineCell.index()))
  $column_header.css('background', 'yellow')
}

function styleSubmarineRow($row,$submarineCell,$siblings){
  var $tableRow = $row.first().closest('tr')
  $row.css('border','solid yellow')
  $siblings.css('background-color', '#51adf6')
  $tableRow.find('td:first-child').css('background','yellow')
  $tableRow.prev().find('td').css('border-bottom','none')
  $tableRow.next().find('td').css('border-top','none')
}

function toggleInverseSubmarineImage($submarine,$submarineImg,$submarineCell){
  var imageSrc = 'img/white-submarine.svg'
  var backgroundColor = 'red'

  if ($submarine.hasClass('yellow-submarine')) {
    imageSrc = 'img/black-submarine.svg'
    backgroundColor = 'yellow'
  }

  $submarineImg.attr('src', imageSrc)
  $submarineCell.css('background', backgroundColor)
}

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
  var $column = getSubmarineColumn($submarine)
  styleSubmarineColumn($column,$submarineCell)

}

$(document).ready(function(){
  $('#btn-place-red-october').on('click', placeRedOctober)
  $('#btn-find-red-october').on('click', findRedOctober)
  $('#btn-place-yellow-submarine').on('click', placeYellowSubmarine)
  $('#btn-find-yellow-submarine').on('click', findYellowSubmarine)
  $('#btn-find-all-submarines').on('click', findAllSubmarines)
  $('#btn-reset-board').on('click', resetTable)
})
