let AnakinAttack = 30
let ObiWanAttack = 20
let AnakinHealth = 100
let AnakinDefense = 100
if(AnakinAttack > ObiWanAttack)
{console.log("Anakin has the higher attack")} else if(AnakinAttack < ObiWanAttack)
{console.log("ObiWan Has the higher attack")} 
else{console.log(`shits even`)}
if(AnakinAttack < 0){console.log(`boy is dead`)} 
else{AnakinHealth = (AnakinHealth - ObiWanAttack), 
console.log(`Anakin Now Has ${AnakinHealth} Health`)}
console.log(AnakinDefense)
AnakinDefense += 25
if(AnakinHealth <= ObiWanAttack -AnakinDefense)
{console.log("Anakin Broke HIs legs")}
else{AnakinHealth =  (ObiWanAttack - (AnakinDefense + AnakinHealth) ), console.log(AnakinHealth)}
function DestroyAnakin() {
  AnakinHealth = AnakinHealth + Anakin - ObiWanAttack
}
if (AnakinHealth + 50 >= 100){AnakinHealth = 100}
else{ AnakinHealth += 50 ,console.log(`Bro just healed to ${AnakinHealth}`)}
for(i = 0; i <= 5; i++){AnakinHealth -= ObiWanAttack + AnakinAttack, console.log(`Anakins Health is ${AnakinHealth}`)}
AnakinHeath = 100
while(AnakinHeath <= 0){
  (AnakinHeath = AnakinHealth + AnakinDefense - ObiwanAttack)

console.log(AnakinHealth)}
console.log(AnakinHealth)