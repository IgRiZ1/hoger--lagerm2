import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*function random(min, max , raden) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (raden == num){
        console.log('juist getal geraden'); 
         
    } else {
        console.log('fout getal');
    }
}
return num ;
  
  
  console.log(random(1,10,4)) */
  async function game() {
  let min = parseFloat(await userInput.question('minimum getal? '));
  let max = parseFloat(await userInput.question('maximum getal? '));
  let raden = parseFloat(await userInput.question('welke cijfer wil je raden? '));
  
 async function random(min, max, raden) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      let chance = 0;
      while (chance < 3) {  
          if (raden === num) {
              console.log('Juist getal geraden');
              return;
          } else {
              console.log('Fout geraden, probeer opnieuw');
          }
          chance++;
      
          if (chance < 3){
             let nieuweraden = parseFloat( await userInput.question('welke cijfer wil je raden? '))
          } 
      console.log('Geen pogingen meer over. Het juiste nummer was: ' + num);
  }
}
  

  random(min, max, raden);


}

game()
  