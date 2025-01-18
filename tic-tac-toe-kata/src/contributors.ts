const table = document.getElementById('counthere') as HTMLTableElement

type Contributor = {
  login: string
  html_url: string
  contributions: number
}

function renderContributorsTable(contributors: Contributor[]) {
  let i = 1
  for (const { login, html_url, contributions } of contributors) {
    const row = table.insertRow(i)
    const slNoCell = row.insertCell(0)
    const userNameCell = row.insertCell(1)
    const urlUser = row.insertCell(2)
    const noOfContributions = row.insertCell(3)
    slNoCell.innerText = `${i}`
    userNameCell.innerText = login
    urlUser.innerHTML = `<a href="${html_url}">${html_url}</a>`
    noOfContributions.innerText = `${contributions}`
    i++
  }
  const element = document.getElementById('ct') as HTMLElement
  element.innerHTML = `${i - 1} Contributors`
}

fetch('https://api.github.com/repos/yelynn1/tictactoe/contributors')
  .then((response) => response.json())
  .then((contributors: Contributor[]) => renderContributorsTable(contributors))
  .catch((err) => console.log('Request Failed', err))
