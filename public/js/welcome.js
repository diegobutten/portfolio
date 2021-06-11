const colors = ['pink', 'green', 'purple']
let index = 0

$(window).scroll(function(){
	const nav = $('#navbar')
	const ul = $('#ul')
	const list = $('.list')

	if($(this).scrollTop() > nav.height()){
		nav.parent().removeClass('bg-opacity-75').addClass('bg-opacity-90')
		// nav.addClass('bg-white')
		// list.removeClass('text-white').addClass('text-gray-700')
	} else {
		nav.parent().removeClass('bg-opacity-90').addClass('bg-opacity-75')
		// nav.removeClass('bg-white')
		// list.addClass('text-white').removeClass('text-gray-700')
	}
})

setInterval(function(){
	$('.arrow-next').click()
}, 10000)

$(document).on('click', '.arrow-next, .arrow-prev', function(){
	const list = $('.project-list')
	let list_index = index;

	list.each((x, div) =>{
		if(x == index){
			$(div).addClass('hidden')
		}
	})

	if($(this).hasClass('arrow-prev')){
		index--
	} else {
		index++
	}

	if(index > 2){
		index = 0
	} else if(index < 0){
		index = 2
	}

	$('#projects').removeClass(`bg-${colors[list_index]}-600`)
	.addClass(`bg-${colors[index]}-600`)

	$('#header-text').removeClass(`text-${colors[list_index]}-400`)
	.addClass(`text-${colors[index]}-400`)

	$('#sub-header-text').removeClass(`text-${colors[list_index]}-400 border-${colors[list_index]}-400`)
	.addClass(`border-${colors[index]}-400`)

	$(`#${index}-project-list`).removeClass('hidden')

})

$(document).on({
	mouseenter: function(){
		$(this).addClass('z-10')
	},
	mouseleave: function(){
		$(this).removeClass('z-10')
	},
}, '.language')



fetch('/users', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		name: 'User 1'
	})
})
.then(res => {
	return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR')) 