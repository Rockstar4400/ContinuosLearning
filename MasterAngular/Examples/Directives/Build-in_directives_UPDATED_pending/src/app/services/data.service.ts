import { Service, signal } from "@angular/core";
import { Item } from "../models/item";

@Service()
export class DataService {
    private currentItem = signal<Item[]>([]);
    private currentClasses = signal<Record<string,boolean>>({});
    
}