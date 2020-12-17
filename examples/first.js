const { Observable, of, interval, pipe  } = require('rxjs');
const { map, first, concatAll, mergeAll, switchAll, exhaust } = require('rxjs/operators');

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


//observable = first()(map(x => x + x)(observable));

/*observable = pipe(
    map(x => {
        if (x > 2) throw new Error('ERROR!');
        return of("R:", x);
    }),
    exhaust(),
)(observable);*/



const subscription = observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete(result) { console.log('done', result); }
});

const subscription2 = observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete(result) { console.log('done', result); }
});

console.log(subscription.closed);

subscription.add(subscription2);

console.log(subscription.closed);
