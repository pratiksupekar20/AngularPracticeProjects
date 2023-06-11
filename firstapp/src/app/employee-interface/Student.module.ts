
export interface Student{
  rollNumber:number;
  name:string;
  age:number;
  subject:Subject[];
}

export interface Subject{

  subjectName:string;
  mark:number;
}