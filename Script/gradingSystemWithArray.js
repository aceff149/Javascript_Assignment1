function studentGrading (studentName, studentScore) {
    // 90 - 100.           A
    // 80 - 89.            B
    // 70 - 79             C
  
    let studentGrade 
  
    if ((studentScore>=90) && (studentScore <=100)) 
      studentGrade = "A"
    else if ((studentScore >=80) && (studentScore < 90)) 
      studentGrade = "B"
    else if (studentScore >=70 && studentScore < 80) 
      studentGrade = "C"
    else 
      studentGrade = "F"
    
    console.log (`Hello ${studentName}, your score is ${studentScore} and your grade is ${studentGrade}`)
  
  }
  
  studentGrading("Justin", 96)
  studentGrading("Allie", 82)
  studentGrading("Ryker", 72)

