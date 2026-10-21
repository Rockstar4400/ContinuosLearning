import { computed, Service, signal } from "@angular/core";
import { Item } from "../models/item";

@Service()
export class DataService {
    private signalItem = signal(Item);
    private currentClasses = signal<Record<string,boolean>>({});

    readonly currentItem = this.signalItem
    
    nameService = computed(() => this.currentItem.name);
    
    setUppercaseName(name: string) {
        
    }
}