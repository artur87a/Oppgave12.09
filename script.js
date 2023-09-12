
function clickme() {
    let name1 = document.getElementById("ele1").value;
    let name2 = document.getElementById("ele2").value;
    let names = name1 +(" ")+ name2;
    console.log(names)
    let namesParagraph = document.getElementById("full");
    namesParagraph.textContent = names;
    
  }
