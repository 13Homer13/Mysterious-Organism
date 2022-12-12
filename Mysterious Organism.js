// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
 
// Returns new instance of pAequor orgqnism as an object
function pAequorFactory(num, dnaArr) {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      let mutetedDna = this.dna.slice();
      let randomNum = Math.floor(Math.random()* 15);
      let base =  mutetedDna[randomNum]; 
      let newBase = returnRandBase();
      while (base === newBase) {
          newBase = returnRandBase();
      } 
      mutetedDna[randomNum] = newBase;
      return mutetedDna;
    },
    compareDNA(newSp) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === newSp.dna[i]) {
              counter++
          }
      }
      let result = (counter / this.dna.length).toFixed(2);
      return `Specimen #${this.specimenNum} and specimen #${newSp.specimenNum} have ${result}% DNA in common.`
    },
    willLikelySurvive() {
      let count = 0;
      for (let base of this.dna) {
          if (base === "C" || base === "G") {
              count++;
          }
      }
      return count/15 >= 0.6;
    }
  }
}

//Creat array of 30 instances of pAequor that have 60% or more to survive
function createArrayOfOrganism() {
    const pAequorGroup = [];
    while ( pAequorGroup.length <= 29) {
       let newOrganism =  pAequorFactory(Math.floor(Math.random()*1000), mockUpStrand());
        if (newOrganism.willLikelySurvive()) {
            pAequorGroup.push(newOrganism);
        }
    }
    return pAequorGroup;
}
const ArrayForTeam = createArrayOfOrganism();
console.log(ArrayForTeam.length);

