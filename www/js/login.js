function login() {
	if($('name').length < 3) {
		alert('Введите имя длинной больше 3-х букв')
		return
	}

	localStorage.name = $('name').value
	move('order')
}