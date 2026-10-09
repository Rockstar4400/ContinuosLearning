import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObjUser } from '../../models/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true
})

export class UserComponent implements OnInit, 
OnDestroy {
  user = ObjUser;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { 
    this.paramsSubscription = Subscription.EMPTY;
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription =
    this.route.params
    .subscribe(
      (params: Params) => {
        this.user!.id = params['id'];
        this.user!.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
