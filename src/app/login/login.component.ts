import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log : boolean = false;
  singupUsers : any[] =[];
  signupObj : any ={
   userName:'',
   email:'',
   password:''
  };
  loginObj:any={
   userName:'',
   password:''
  }
  constructor(private router :Router){}
  ngOnInit(){
   const localdata = localStorage.getItem('signUpUsers');
   if(localdata != null){
     this.singupUsers= JSON.parse(localdata);
   }
  }
  onLogin(){
   debugger
   const isUserExist = this.singupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
   if(isUserExist != undefined){
     alert("User Login Successfully");
     this.router.navigate(['/home']);
     
     
   }
   else{
     alert("Wrong Credentials");
     this.router.navigate(['']);
   }
  }
  onSingup(){
   this.singupUsers.push(this.signupObj);
   localStorage.setItem('signUpUsers',JSON.stringify(this.singupUsers));
   this.signupObj  ={
     userName:'',
     email:'',
     password:''
    };
    alert("Credentials submitted.")
 }
}
