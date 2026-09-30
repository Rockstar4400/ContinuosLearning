# Angular `@Service` Decorator Demo
 
Demo project for a YouTube tutorial demonstrating Angular's New `@Service` Decorator.
 
## What This Demo Shows
 
This app demonstrates the new `@Service` decorator landing in Angular v22, including:
 
- Replacing `@Injectable({ providedIn: 'root' })` with `@Service()`
- The constructor DI compiler guard
- Component-scoped services using `@Service({ autoProvided: false })`

## Running the App
 
```bash
npm install
ng serve
```
 
Then open `http://localhost:4200`.
 
## API
 
Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free public REST API, no key required.
 
## Requirements
 
- Angular v22+
- Node.js 18+

## Related
 
- [Angular v22 `@Service` PR](https://github.com/angular/angular/commit/8f3d0b9d97424e058eb7bce57d80833fb68dec4a)
- [httpResource API docs](https://angular.dev/api/common/http/httpResource)