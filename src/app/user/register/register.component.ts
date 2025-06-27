import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil, combineLatest } from 'rxjs';
import * as AuthActions from '../../store/user/user.actions';
import * as AuthSelectors from '../../store/user/user.selectors';
import { Router } from '@angular/router';
import { ToastService } from '../../ui/toast/toast.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, FloatLabel, ToastModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private router = inject(Router);
  private toastService = inject(ToastService);
  private destroy$ = new Subject<void>();

  formGroup: FormGroup;
  isLoading = toSignal(this.store.select(AuthSelectors.selectAuthLoading), { initialValue: false });
  hasError = toSignal(this.store.select(AuthSelectors.selectAuthError), { initialValue: null });
  isSuccess = toSignal(this.store.select(AuthSelectors.selectRegistrationSuccess), { initialValue: false });
  errorMessage = '';

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    combineLatest([
      this.store.select(AuthSelectors.selectRegistrationSuccess),
      this.store.select(AuthSelectors.selectAuthError)
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(([isSuccess, error]) => {
      if (isSuccess) {
        this.toastService.showSuccess(
          'Your account has been created successfully! You can now sign in.',
          'Registration Successful'
        );
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }

      if (error) {
        this.toastService.showError(
          error,
          'Registration Failed'
        );
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value
      ? null
      : { passwordMismatch: true };
  }

  isFieldInvalid(field: string): boolean {
    const control = this.formGroup.get(field);
    return !!(control && control.invalid && control.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.formGroup.get(fieldName);
    if (!field || !field.errors) {
      return '';
    }
    if (field.errors['required']) {
      return `${fieldName} is required.`;
    }
    if (field.errors['email']) {
      return 'Please enter a valid email address.';
    }
    if (field.errors['minlength']) {
      return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters long.`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
    };
    return labels[fieldName] || fieldName;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;

      this.store.dispatch(AuthActions.register({
        credentials: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      }));

      console.log('Registration action dispatched:', formData);

    } else {
      this.formGroup.markAllAsTouched();
      this.errorMessage = 'Please fix the errors above';
    }
  }

  onClearError() {
    this.store.dispatch(AuthActions.clearError());
    this.errorMessage = '';
  }
}
