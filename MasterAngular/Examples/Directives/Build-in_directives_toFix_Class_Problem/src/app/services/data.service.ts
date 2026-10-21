import { computed, Service, signal } from "@angular/core";
import { item } from "../models/model-item";

@Service()
export class DataService {
    private signalItem = signal<item>({ id: 0, name: 'Teapot', feature: 'stout' });
    private currentClasses = signal<Record<string,boolean>>({});

    readonly currentItem = this.signalItem.asReadonly();
    
    updateName(event: Event) {
        const inputEl = event.target as HTMLInputElement;
        this.signalItem.update(current => ({ ...current, name: inputEl.value }));
    }

    setUppercaseName(name: string) {
        
    }
}