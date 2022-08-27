const dp = async () =>{
  const res = await fetch('http://localhost:5000/data')
  const data = await res.json()
  return data
}

const addDptosquares = async () => {
  const dpp = await dp();
const squares = document.querySelector('.squares');
for (var i = 0; i < 365; i++) {
  const level = dpp[i]; 
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
}

addDptosquares();