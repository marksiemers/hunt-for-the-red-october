$(document).ready(function(){
  var $redOctober = $('.red-october')
  var column_index = $redOctober.closest('td').index()
  var column_number = column_index + 1

  // Traverse "down" the DOM for Descendent / Child
  var $redOctoberImg = $redOctober.find('img')
  $redOctoberImg.attr('src','img/white-submarine.svg')

  // Traverse "up" the DOM for Ancestor / Parent
  var $redOctoberCell = $redOctober.closest('td')
  $redOctoberCell.css('background', 'red')

  // Traverse up, then down the DOM for "Cousin" or "Relative"
  var $row = $redOctober.closest('tr').find('td')

  var $column = $redOctober.closest('table').find('tr td:nth-child('+column_number+')')
  var $tableRow = $redOctober.closest('tr')
  var $column_header = $($redOctober.closest('table').find('th').get(column_index))

  // Style the row
  $row.css('border','solid yellow')
  $row.not($redOctoberCell).css('background-color', '#51adf6')
  $tableRow.find('td:first-child').css('background','yellow')
  $tableRow.prev().find('td').css('border-bottom','none')
  $tableRow.next().find('td').css('border-top','none')

  // Style the column
  $column.css('border','solid yellow')
  $column.not($redOctoberCell).css('background-color', '#51adf6')
  $column.prev().find('td').css('border-right','none')
  $column.next().find('td').css('border-left','none')
  $column_header.css('background', 'yellow')

  // $redOctober.closest('td').css('border', 'solid red')
})
