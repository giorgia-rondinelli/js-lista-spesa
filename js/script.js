const listaSpesa = [ 'pasta','pomodori', 'latte','uova ','insalata','succo di frutta']
let i =0
while(i<listaSpesa.length){ 
  
document.getElementById('lista').innerHTML+=`<div>${listaSpesa[i]}</div>`
  console.log(listaSpesa[i])
  i++
  

 
}

