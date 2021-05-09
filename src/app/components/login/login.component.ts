import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private readonly fb: FormBuilder,
              private readonly router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    if (this.loginForm.valid) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/');
    } else {
      this.loginForm.markAsTouched();
    }
  }
}
