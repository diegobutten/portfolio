const colors = ['pink', 'green', 'purple', 'orange', 'cyan', 'red']
let index = 0

$(window).scroll(function () {
  const nav = $('#navbar')

  if ($(this).scrollTop() > nav.height()) {
    nav.parent().removeClass('bg-opacity-75').addClass('bg-opacity-90')
  } else {
    nav.parent().removeClass('bg-opacity-90').addClass('bg-opacity-75')
  }
})

let startX = 0
let endX = 0

const carousel = document.querySelector('#projects')

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX
})

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX
  handleSwipe()
})

function handleSwipe() {
  const distance = startX - endX
  if (Math.abs(distance) < 50) return

  if (distance > 0) {
    showProject((index + 1) % totalProjects)
  } else {
    showProject((index - 1 + totalProjects) % totalProjects)
  }
}

const projectLists = document.querySelectorAll('.project-list')
const totalProjects = projectLists.length

const projects = document.getElementById('projects')
const headerText = document.getElementById('header-text')
const subHeaderText = document.getElementById('sub-header-text')

const updateTheme = (color, action) => {
  projects.classList[action](`bg-${color}-600`)
  headerText.classList[action](`text-${color}-400`)
  subHeaderText.classList[action](`text-${color}-400`)
  subHeaderText.classList[action](`border-${color}-400`)
}

const showProject = (newIndex) => {
  projectLists[index].classList.add('hidden')
  updateTheme(colors[index], 'remove')

  index = newIndex

  projectLists[index].classList.remove('hidden')
  updateTheme(colors[index], 'add')
}

const handleClickArrow = (e) => {
  const btn = e.currentTarget
  const nextIndex = btn.classList.contains('arrow-next')
    ? (index + 1) % totalProjects
    : (index - 1 + totalProjects) % totalProjects

  showProject(nextIndex)
}

document.querySelectorAll('.arrow-next, .arrow-prev').forEach((btn) => {
  btn.addEventListener('click', handleClickArrow)
})

setInterval(() => {
  document.querySelector('.arrow-next')?.click()
}, 10000)

$(document).on({
  mouseenter() {
    $(this).addClass('z-10')
  },
  mouseleave() {
    $(this).removeClass('z-10')
  },
}, '.language')
