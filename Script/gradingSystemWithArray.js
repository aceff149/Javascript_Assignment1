function studentGrading(studentName, studentScore) {
// 90-100.         A
// 80-89.          B
// 70-79.          C

debugger;

let studentGrade = 
((studentScore >= 90) && (studentScore <= 100)) 
    studentGrade = "A"
if ((studentScore >= 80) && (studentScore <= 89))  
    studentGrade = "B"
else if ((studentScore >= 70) && (studentScore <= 79))
    studentGrade = "C"
}
console.log("Hello", studentName, "your grade is", studentGrade)


studentGrading("Allie Efferson", 85)
studentGrading("Jane Smith", 93)
studentGrading("Daniel Brown", 77)
studentGrading("Justin Hoffman", 92)

