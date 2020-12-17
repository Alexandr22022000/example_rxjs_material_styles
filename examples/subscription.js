const { Observable, of, interval, pipe  } = require('rxjs');
const { map, first, concatAll, mergeAll, switchAll, exhaust } = require('rxjs/operators');




const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));


subscription.add(childSubscription);
subscription.remove(childSubscription);

setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
}, 1000);
