let $ = require('jquery') //loaded jq and assigned to $
let fs = require('fs')
let filename = 'contacts'
lets sno = 0

//for adding
$('#add-to-list').on('click',() => {
	let name = $('#Name').val()
	let email = $('#email').val()

	fs.appendFile('contacts', name + ',' +email + '\n')

	addEntry(name,email)
})
function addEntry(name, email){
	if(name && email){
		sno++
		let updteString = '<tr><td>' + sno + '<td><td>' + name + '</td><td>'+email + '</td></tr>'
		$('#contact-table').append(updteString)

	}
}

function loadAndDisplayContacts(){
	if(fs.existsSync(filename)) {
		let data = fs.readFileSync(filename, 'utf8').split('\n')

		data.forEach((contact, index) =>{
			let [name, email ] = contact.split(',')
			addEntry(name,email)

		})

	} else{
		console.log("File Doesn't Exist. Creating new file.")
		fs.writeFile(filename, '', (err)=>{
			if(err)
				console.log(err)
		})
	}
}


loadAndDisplayContacts()

//for count
let count = 0
$('#click-counter').text(count.toString())
$('#countbtn').on('click', () => {
	count++
	$('#click-counter').text(count)
})