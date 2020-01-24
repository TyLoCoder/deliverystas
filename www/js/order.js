let list = []

function add() {
	var prodc = prompt('Наименование товара')
	var count = prompt('Количество')

	list.push([prodc,count])

	$('output').innerHTML = ''
	for(var i = 0; i < list.length; i++) {
		var blc = document.createElement('li')

		var txt = document.createElement('p')
			txt.innerText = list[i][0] + '(' + list[i][1] + ')'

		var dlt = document.createElement('i')
			dlt.classList.add('material-icons')
			dlt.innerText = 'close'
			dlt.setAttribute('onclick', 'rem(' + i + ')')

		blc.append(txt)
		blc.append(dlt)
		$('output').append(blc)
	}
}

function rem(id) {
	list.splice(id, 1)

	$('output').innerHTML = ''
	for(var i = 0; i < list.length; i++) {
		var blc = document.createElement('li')

		var txt = document.createElement('p')
			txt.innerText = list[i][0] + '(' + list[i][1] + ')'

		var dlt = document.createElement('i')
			dlt.classList.add('material-icons')
			dlt.innerText = 'close'
			dlt.setAttribute('onclick', 'rem(' + i + ')')

		blc.append(txt)
		blc.append(dlt)
		$('output').append(blc)
	}
}

function go() {
	if(list.length < 1) {
		alert('Список не должен быть пустым!')
		return
	}

	var form = JSON.stringify({
		name: localStorage.name,
		list: Object.assign({}, list)
	})

	var xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://sheptevapartners.ru/ds_api/?order=' + encodeURIComponent(form))
	xhr.send()

	xhr.onreadystatechange = () => {
		if(xhr.readyState == 4 || xhr.status == 200) {
			if(JSON.parse(xhr.responseText).code == 1) {
				move('search')
			}
		}
		console.log(xhr.responseText);
	}
}