let marks=[25,55,70,85,95];
highestmarks=marks[0];
for(let i=1;i<marks.length;i++){
    highestmarks = (marks[i] >highestmarks) ? marks[i] : highestmarks;
}
console.log("The highest marks scored by any student in the class: " + highestmarks);