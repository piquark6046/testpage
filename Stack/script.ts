function ListElement() {
  return document.querySelectorAll('*')
}

function Default() {
  [1,2,3,4].forEach(() => {
    ListElement()
  })
}

Default()

function aSdf() {
  console.log(new Error().stack)
}

aSdf()