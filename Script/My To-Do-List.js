const savedMonday = JSON.parse(localStorage.getItem('Monday'))
    const savedTuesday = JSON.parse(localStorage.getItem('Tuesday'))
    const savedWednsday = JSON.parse(localStorage.getItem('Wednsday'))
    const savedThursday = JSON.parse(localStorage.getItem('Thursday'))
    const savedFriday = JSON.parse(localStorage.getItem('Friday'))
    const savedSaturday = JSON.parse(localStorage.getItem('Saturday'))
    const savedSunday = JSON.parse(localStorage.getItem('Sunday'))
    const monday = savedMonday || []
    const tuesday = savedTuesday || []
    const wednsday = savedWednsday || []
    const thursday = savedThursday || []
    const friday = savedFriday || []
    const saturday = savedSaturday || []
    const sunday = savedSunday || []
    renderList('.div-Monday', 'Monday')
    renderList('.div-Tuesday', 'Tuesday')
    renderList('.div-Wednsday', 'Wednsday')
    renderList('.div-Thursday', 'Thursday')
    renderList('.div-Friday', 'Friday')
    renderList('.div-Saturday', 'Saturday')
    renderList('.div-Sunday', 'Sunday')
    
    function addTask(array, div, input, arrayName) {
      const textInput = document.querySelector(input)
      const textValue = textInput.value

      const objectInput = {
        textValue,
      }
      if (textValue === '') {
          return;
      }
      array.push(objectInput)
      textInput.value = ''
      console.log(array)
      renderList(div, arrayName)
    }
    
    function renderList(div, arrayName) {

      if (arrayName === 'Monday') {
        arrayString = 'monday'
        array = monday
      } else if (arrayName === 'Tuesday') {
        arrayString = 'tuesday'
        array = tuesday
      } else if (arrayName === 'Wednsday') {
        arrayString = 'wednsday'
        array = wednsday
      } else if (arrayName === 'Thursday') {
        arrayString = 'thursday'
        array = thursday
      } else if (arrayName === 'Friday') {
        arrayString = 'friday'
        array = friday
      } else if (arrayName === 'Saturday') {
        arrayString = 'saturday'
        array = saturday
      } else if (arrayName === 'Sunday') {
        arrayString = 'sunday'
        array = sunday
      }

      let renderdList = ''
      for (let i = 0; i < array.length; i++) {
        const listIndex = array[i]
        const html = `
          <div>
            ${listIndex.textValue}
          </div>
          <button class="delete-Button" onclick="${arrayString}.splice(${i}, 1); renderList('${div}', '${arrayName}')">
            -
          </button>
          `
  
        renderdList += html
      }

      localStorage.setItem('Monday', JSON.stringify(monday))
      localStorage.setItem('Tuesday', JSON.stringify(tuesday))
      localStorage.setItem('Wednsday', JSON.stringify(wednsday))
      localStorage.setItem('Thursday', JSON.stringify(thursday))
      localStorage.setItem('Friday', JSON.stringify(friday))
      localStorage.setItem('Saturday', JSON.stringify(saturday))
      localStorage.setItem('Sunday', JSON.stringify(sunday))
      
      const box = document.querySelector(div)
      box.innerHTML = renderdList
      console.log(array)
      console.log(renderdList)
    }


    function pressEnter(array, div, input, arrayName) {
      if (event.key === 'Enter') {
        addTask(array, div, input, arrayName)
      }
    }
