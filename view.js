let $ = require('jquery') //loaded jq and assigned to $
let count = 0
$('#click-counter').text(count.toString())
$('#countbtn').on('click', () => {
	count++
	$('#click-counter').text(count)
})