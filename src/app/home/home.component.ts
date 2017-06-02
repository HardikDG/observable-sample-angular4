import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  numbersSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
    .map(
      (data: number) => {
          return data * 2;
      });
    this.numbersSubscription = myNumbers.subscribe(
      (currentNumber:number) => console.log(currentNumber)
    )

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next(" normal package sent");
      }, 2000);
      setTimeout(() => {
        observer.next(" second package sent");
      }, 4000);
      setTimeout(() => {
        // observer.error("error in package sent");
      // }, 5000);
      observer.complete();
      }, 5000);
    });

    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error) },
      () => { console.log("compled the observable packet"); },
    );

  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
  }

}
