import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor (){
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-loging-form');

      if(savedForm){
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(()=> {
        this.form().controls['email'].setValue(savedEmail);
        }, 1)
      }

      const subscription = this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => window.localStorage.setItem('saved-loging-form',
          JSON.stringify({email: value.email})
        ),
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm){
    if(formData.form.invalid){
      return;
    }

    const enterEmail = formData.form.value.email;
    const enterPassword = formData.form.value.password;

    formData.form.reset();
  }
}
