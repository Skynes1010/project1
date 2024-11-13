import { Component } from '@angular/core';

@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrl: './cform.component.css'
})
export class CformComponent {
//delcaron de propiedades o atributos o variables

private courses!:String[];
private response!:String|boolean; //union de tipos
dir:String="Dirección";
title:String="Formulario de registro";
constructor(){
  this.courses = ['Angular', 'React', 'Vue', 'JavaScript','C#'];
  this.response = '';
}

//metodos
public getCourses():String[]{
  return this.courses;
}

public getResponse():String|boolean{
  console.log(this.response);
  return this.response;
}

private resgisterCourse(name:String,age:String,courses:String){
  return this.response=`Se ha inscrito en el curso de ${courses} el estudiante ${name} de edad ${age}`;

}

public getResgisterCourse(name:String,age:String,courses:String){
  console.log(name,age,courses);
  this.resgisterCourse(name,age,courses);
}
}
