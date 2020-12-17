const { Observable, Subject, of, interval, pipe  } = require('rxjs');
const { map, first, concatAll, mergeAll, switchAll, exhaust, multicast } = require('rxjs/operators');

let observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setInterval(() => {
        console.log('just before subscribe');
        subscriber.next(4);
        //subscriber.complete();
    }, 1000);

    //throw new Error("AAAAA");

    setTimeout(() => subscriber.complete(), 3000);
});


const subject = new Subject();
const multicasted = observable.pipe(multicast(subject));

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
