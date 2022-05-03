// Code your solutions in this file

function writeCards(nameList, event) {
  let writtenCards = []
  for(let i=0; i < nameList.length; i++) {
    writtenCards.push(`Thank you, ${nameList[i]}, for the wonderful ${event} gift!`)
  }
  return writtenCards;
}

function countDown(i) {
  while(i >= 0) {
    console.log(i)
    i--
  }
}
