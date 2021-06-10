$(window).scroll(function(){
	const nav = $('#navbar')
	const ul = $('#ul')
	const list = $('.list')

	if($(this).scrollTop() > nav.height()){
		nav.addClass('bg-white')
		list.removeClass('text-white').addClass('text-gray-700')
	} else {
		nav.removeClass('bg-white')
		list.addClass('text-white').removeClass('text-gray-700')
	}
})