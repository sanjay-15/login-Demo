import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  email:String = "";
  password:String = "";
  userDetails:any = [];
  user:any = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:""
  };

  showRegistration:boolean = false;
  showLogin:boolean = true;

  openRegistration(){
    this.user = {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
      };

      this.showRegistration = true;
      this.showLogin = false;
  }  

  createAccount(){
    if(this.user.firstName==""||this.user.lastName==""||this.user.email==""||this.user.password==""||this.user.confirmPassword==""){
      alert("all fields are required");
    }else{
    if(this.user.password != this.user.confirmPassword){
      alert("password and confirm password not matched");
    }
    else{
      this.userDetails.push(this.user);
      alert("Account was created");
      this.showRegistration = false;
      this.showLogin = true;
    }
   }
  }

  validate(){
    let isEmailNotMatch = false;
    let isPasswordNotMatch = false;

    for(let i=0;i<this.userDetails.length;i++){
      if(this.userDetails[i].email==this.email){
        isEmailNotMatch = false;
      if(this.userDetails[i].password==this.password){
        isPasswordNotMatch = false;
        alert("Logined Successfully");
        break;
      }
      else{
        isPasswordNotMatch = true;
      }
    }
      else{
        isEmailNotMatch = true;
      }
    }
    if(isEmailNotMatch){
      alert("Enter a valid email");
    }
    else if(isPasswordNotMatch){
      alert("Enter a valid password");
    }
    
  }
}
