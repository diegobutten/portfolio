// $(window).scroll(function () {
//   const nav = $('#navbar')

//   if ($(this).scrollTop() > nav.height()) {
//     nav.parent().removeClass('bg-opacity-75').addClass('bg-opacity-90')
//   } else {
//     nav.parent().removeClass('bg-opacity-90').addClass('bg-opacity-75')
//   }
// })

// $(document).on({
//   mouseenter() {
//     $(this).addClass('z-10')
//   },
//   mouseleave() {
//     $(this).removeClass('z-10')
//   },
// }, '.language')

const colors = ['pink', 'green', 'purple', 'orange', 'cyan', "red"]
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

// this is remake for carousel images
// const arrowNext = document.querySelector('.arrow-next')
// const arrowPrev = document.querySelector('.arrow-prev')
// const projectLists = document.querySelectorAll('.project-list')
// const totalProjects = projectLists.length
// const projects = document.getElementById('projects')
// const headerText = document.getElementById('header-text')
// const subHeaderText = document.getElementById('sub-header-text')

// const handleClickArrow = (e) => {
	
// 	const project = projectLists[index]
// 	projects.classList.remove(`bg-${colors[index]}-600`)
// 	headerText.classList.remove(`text-${colors[index]}-400`)
// 	subHeaderText.classList.remove(`text-${colors[index]}-400`)
// 	subHeaderText.classList.remove(`border-${colors[index]}-400`)
// 	projectLists[index].classList.add('hidden')
// 	if (e.currentTarget.classList.contains("arrow-next")) {
// 		if (index === (totalProjects - 1)) {
// 			index = 0
// 		} else {
// 			index++
// 		}
//   } else {
// 		if (index === 0) {
// 			index = (totalProjects - 1)
// 		} else {
// 			index--
// 		}
// 	}
// 	console.log(index)
// 	projects.classList.add(`bg-${colors[index]}-600`)
// 	headerText.classList.add(`text-${colors[index]}-400`)
// 	subHeaderText.classList.add(`text-${colors[index]}-400`)
// 	subHeaderText.classList.add(`border-${colors[index]}-400`)
// 	projectLists[index].classList.remove('hidden')
// }

// arrowNext.addEventListener('click', handleClickArrow)
// arrowPrev.addEventListener('click', handleClickArrow)

// setInterval(function(){
// 	arrowNext.click()
// }, 1000)

let startX = 0;
let endX = 0;

const carousel = document.querySelector("#projects"); // or your carousel container

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const distance = startX - endX;

  // Ignore very small swipes
  if (Math.abs(distance) < 50) return;

  if (distance > 0) {
    // Swipe left → Next
    showProject((index + 1) % totalProjects);
  } else {
    // Swipe right → Previous
    showProject((index - 1 + totalProjects) % totalProjects);
  }
}

// let index = 0;

const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

const projectLists = document.querySelectorAll(".project-list");
const totalProjects = projectLists.length;

const projects = document.getElementById("projects");
const headerText = document.getElementById("header-text");
const subHeaderText = document.getElementById("sub-header-text");

const updateTheme = (color, action) => {
  projects.classList[action](`bg-${color}-600`);
  headerText.classList[action](`text-${color}-400`);
  subHeaderText.classList[action](`text-${color}-400`);
  subHeaderText.classList[action](`border-${color}-400`);
};

const showProject = (newIndex) => {
  projectLists[index].classList.add("hidden");
  updateTheme(colors[index], "remove");

  index = newIndex;

  projectLists[index].classList.remove("hidden");
  updateTheme(colors[index], "add");
};

const handleClickArrow = (e) => {
	console.log(e.currentTarget)
	console.log(e.target)
  const nextIndex = e.currentTarget.classList.contains("arrow-next")
    ? (index + 1) % totalProjects
    : (index - 1 + totalProjects) % totalProjects;
		
  showProject(nextIndex);
};

arrowNext.addEventListener("click", handleClickArrow);
arrowPrev.addEventListener("click", handleClickArrow);

setInterval(() => {
  arrowNext.click();
}, 10000);















// setInterval(function(){
// 	$('.arrow-next').click()
// }, 3000)

// $(document).on('click', '.arrow-next, .arrow-prev', function(){
// 	const list = $('.project-list')
// 	let list_index = index;

// 	list.each((x, div) =>{
// 		if(x == index){
// 			$(div).addClass('hidden')
// 		}
// 	})


// 	if($(this).hasClass('arrow-prev')){
// 		index--
// 	} else {
// 		index++
// 	}

// 	if(index > 4){
// 		index = 0
// 	} else if(index < 0){
// 		index = 4
// 	}


// 	$('#projects').removeClass(`bg-${colors[list_index]}-600`)
// 	.addClass(`bg-${colors[index]}-600`)

// 	$('#header-text').removeClass(`text-${colors[list_index]}-400`)
// 	.addClass(`text-${colors[index]}-400`)

// 	$('#sub-header-text').removeClass(`text-${colors[list_index]}-400 border-${colors[list_index]}-400`)
// 	.addClass(`border-${colors[index]}-400`)

// 	$(`#${index}-project-list`).removeClass('hidden')

// })

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