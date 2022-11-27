const wordsTags = document.getElementById('tags');
const textareaWords = document.getElementById('textarea');

textareaWords.focus();

textareaWords.addEventListener('keyup', (event)=>{

  createWordsTags(event.target.value)

  if(event.key === 'Enter'){

    setTimeout(()=>{
      event.target.value = ''
    }, 10);

    randomSelect();


  }

})

const createWordsTags = input=>{
  const words = input.split(',').filter(words => words.trim() !== ' ').map(word => word.trim())
  wordsTags.innerHTML = ''

  words.forEach(word => {
    const wordTag = document.createElement('span');
    wordTag.classList.add('tag')
    wordTag.innerHTML = word;
    wordsTags.appendChild(wordTag)
  })
}

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(()=>{
    const randomWord = selectRandomWord();
    highlight(randomWord)

    setTimeout(()=>{
      unhighlight(randomWord)
    },100)
  }, 100);

  setTimeout(()=>{
    clearInterval(interval)
    setTimeout(() => {
      const randomWord = selectRandomWord()
        highlight(randomWord)
    },100)
  }, times *100)
}

const selectRandomWord = () => {
  const words = document.querySelectorAll('.tag')
  return words[Math.floor(Math.random() * words.length)]
}

const highlight = (word) => {
  word.classList.add('highlight');
}


const unhighlight = (word) => {
  word.classList.remove('highlight');
}
