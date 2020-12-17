const { Observable, Subject, of, interval, pipe  } = require('rxjs');
const { map, first, concatAll, mergeAll, switchAll, exhaust, multicast } = require('rxjs/operators');
const { ajax } = require('rxjs/ajax');



ajax('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log)
// {request, response: {userId, id, title, completed}, responseType, status}


ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log)
// {userId, id, title, completed}



// {...}
