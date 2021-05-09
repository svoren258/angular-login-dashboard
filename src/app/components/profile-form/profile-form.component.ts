import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

const MOCK_POST_API_ENDPOINT = 'https://postman-echo.com/post';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone_number: ['', [Validators.required]]
  });

  constructor(private readonly fb: FormBuilder,
              private readonly snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  async submitForm(): Promise<void> {
    if (this.profileForm.valid) {
      try {
        await this.sendFromDataToApi();
        this.openSnackBar('Success!', 'OK');
      } catch (error) {
        console.error(error);
      }
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.profileForm.reset();
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }

  async sendFromDataToApi(): Promise<Response> {
    return await fetch(MOCK_POST_API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.profileForm.value),
    });
  }
}
