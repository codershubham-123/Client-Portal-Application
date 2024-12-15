import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup | any;
  constructor(private authService: AuthService){}

  
  ngOnInit(): void {
    // Initialize the FormGroup with FormControl
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  // Handle form submission
  onSubmit() : void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          // Handle the API response here
          console.log('Login successful:', response);
  
          // Store the response token (if any) in local storage
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
          }
  
          // Reset the form after successful login
          this.loginForm.reset();
  
        },
        (error) => {
          // Handle errors here
          console.error('Login failed:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  


}
