import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HomeservicesService } from '../services/homeservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  iserror = false; 
  constructor(private authService : AuthService, private router: Router, private homeService : HomeservicesService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  submit() {
    if (this.form.valid) {
        this.authService.login(this.username?.value,this.password?.value) .subscribe(data => { 
          console.log("Is Login Success: " + data); 
         if(data) this.router.navigate(['/home']); 
         else { this._snackBar.open("Incorrect Username/Password !!","Login Failed", {duration : 2000});}
    });
    }
    else{
      return;
    }
  }
  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }

}
