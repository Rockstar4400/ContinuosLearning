import { Service, signal, computed } from '@angular/core';

@Service({ autoProvided: false })  // I'll manage where this lives
export class DraftPostService {
  title = signal('');
  body = signal('');
  isValid = computed(() => this.title().length > 3 
  && this.body().length > 10);

  reset() {
    this.title.set('');
    this.body.set('');
  }
}