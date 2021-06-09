$(window).scroll(function(){
	const nav = $('#navbar')
	const ul = $('#ul')
	const list = $('.list')

	if($(this).scrollTop() > nav.height()){
		nav.addClass('bg-white')
		list.removeClass('text-white').addClass('text-blue-500')
	} else {
		nav.removeClass('bg-white')
		list.addClass('text-white').removeClass('text-blue-500')
	}
})