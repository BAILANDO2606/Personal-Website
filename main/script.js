document.addEventListener('DOMContentLoaded', function () {
	const dropdownBtn = document.querySelector('.btn')
	const dropdownContent = document.querySelector('.dropdown-content')

	dropdownBtn.addEventListener('click', function () {
		dropdownContent.style.display =
			dropdownContent.style.display === 'block' ? 'none' : 'block'
	})

	document.addEventListener('click', function (e) {
		if (
			!dropdownBtn.contains(e.target) &&
			!dropdownContent.contains(e.target)
		) {
			dropdownContent.style.display = 'none'
		}
	})
})
