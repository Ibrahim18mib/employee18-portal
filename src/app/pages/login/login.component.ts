import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
  };

  router = inject(Router);

  onLogin() {
    if (
      this.loginObj.username === 'mib' &&
      this.loginObj.password === 'mib123'
    ) {
      this.router.navigateByUrl('dashboard');
    } else {
      alert("Wrong Credentials!!!")
    }
  }
}
