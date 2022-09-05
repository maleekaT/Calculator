function clearScreen(){

    document.getElementById("resultat").value = ''
    
    }

function display(a){

    document.getElementById("resultat").value += a
    

    document.getElementById('resultat').value = eval(document.getElementById('resultat').value);
    
    }


function solve(){


    document.getElementById('resultat').value = eval(document.getElementById('resultat').value);

    }   
