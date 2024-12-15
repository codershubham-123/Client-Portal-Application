import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm : FormGroup | any;

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.signupForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required)
    })
  }

  onSubmit(){
      const payload = {
        username : this.signupForm.get('username')?.value,
        password : this.signupForm.get('password')?.value,
        email : this.signupForm.controls['email'].value
      }

      this.authService.signup(payload).subscribe(res=>{
        console.log(res)
      })
    

  }

}
