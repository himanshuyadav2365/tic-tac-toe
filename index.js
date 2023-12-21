let btn = document.querySelectorAll("button");
let first = true;
let count=0
btn.forEach((b) => {
  b.addEventListener("click", () => { 
    if (first && b.innerText=="") {
      b.innerText = "O";
      first = false;
      count++
      if(count==9){
        alert("Draw")
    }
      checkWinner()
    } else if(b.innerText=="") {
      b.innerText = "X";
      first = true;
      count++
      if(count==9){
        alert("Draw")
    }
      checkWinner()
    }
  });
});

let winners=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

function checkWinner(){

    
    for(let i=0;i<winners.length;i++){
        // for(let j=0;j<winners[0].length;j++){

        // }
        let idx1=winners[i][0]
        let idx2=winners[i][1]
        let idx3=winners[i][2]

        if(btn[idx1].textContent==btn[idx2].textContent && btn[idx1].textContent==btn[idx3].textContent){
            if(btn[idx1].textContent!=""){
                alert(`Winner is ${btn[idx1].textContent}` )
            }
           
        }
    }
}

