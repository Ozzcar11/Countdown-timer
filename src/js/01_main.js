window.onload = counts()

function counts() {
  const nowDate = new Date()
  let birthDate = new Date([nowDate.getFullYear(), 7, 10].join(','))
  let gap = birthDate - nowDate

  if (gap < 0) {
    birthDate = new Date([nowDate.getFullYear() + 1, 7, 10].join(','))
    gap = birthDate - nowDate
  }

  document.querySelector('.timer__days-count').textContent = Math.floor(gap / 1000 / 60 / 60 / 24)
  document.querySelector('.timer__hours-count').textContent = Math.floor(gap / 1000 / 60 / 60) % 24
  document.querySelector('.timer__minutes-count').textContent = Math.floor(gap / 1000 / 60) % 60
  document.querySelector('.timer__seconds-count').textContent = Math.floor(gap / 1000) % 60

}

setInterval(counts, 1000)