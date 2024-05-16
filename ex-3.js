// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = Infinity;
// Start coding here
for (let i = 0; i < studentScores.length; i++) {
  if (minScore > studentScores[i]) {
    minScore = studentScores[i];
  }
}
console.log(minScore);
