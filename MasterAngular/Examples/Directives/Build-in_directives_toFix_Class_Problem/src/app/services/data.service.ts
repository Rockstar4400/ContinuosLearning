import { model, Service, signal } from "@angular/core";
import { item } from "../models/model-item";

@Service()
export class DataService {
    private signalItem = signal<item>(
        { id: 0, name: 'Teapot', feature: 'stout' }
    );
    private signalClasses = signal<Record<string,boolean>>({});
    private signalSave = signal<boolean>(true);
    private signalisUnchanged = signal<boolean>(true);
    private signalisSpecial = signal<boolean>(true);
    
    readonly currentItem = this.signalItem.asReadonly();
    readonly currentClasses = this.signalClasses.asReadonly();
    readonly canSave = this.signalSave.asReadonly();
    readonly isUnchanged = this.signalisUnchanged.asReadonly();
    readonly isSpecial = this.signalisSpecial.asReadonly();

    saveChange(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.signalSave.set(element.checked);
    }

    modifyChange(event: Event): void {
        const element = event.target as HTMLInputElement;
    this.signalisUnchanged.set(element.checked);
    }

    specialChange(event: Event): void {
        const element = event.target as HTMLInputElement;
        this.signalisSpecial.set(element.checked);
    }
    
    updateCurrentClass() {
        this.signalClasses.update(currentUser => (
            { ...currentUser, 
                canSave: this.canSave(), 
                isUnchanged: this.isUnchanged(), 
                isSpecial: this.isSpecial() 
            }
        ));
    }
    
    updateNameInput(event: Event) {
        const inputEl = event.target as HTMLInputElement;
        this.signalItem.update(current => 
            ({ ...current, name: inputEl.value }));
    }

    updateNameModel(value: string){
        this.signalItem.update(current => 
            ({ ...current, name: value }));
    }

    updateNameModelUpper(value: string){
        this.signalItem.update(current => 
            ({ ...current, name: 
                value.toLocaleUpperCase() }))
    }
}