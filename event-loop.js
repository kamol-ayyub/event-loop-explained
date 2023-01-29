'use strict';
{
  // new Promise((resolve) => {
  //   console.log('console in promise');
  //   resolve('resolved promise');
  // }).then((res) => {
  //   console.log('after resolve function in promise');
  //   console.log(res);
  // });
  // let num;
  // console.log(1);
  // for (let index = 0; index < 9999999999; index++) {
  //   num = index;
  // }
  // setTimeout(() => {
  //   console.log(`log to console after 1 second ${3}`);
  // }, 1000);
  // console.log(4);
  // setTimeout(() => {
  //   console.log(2);
  // }, 0);
}
// {
//   console.log('first console');
//   (async () => {
//     let resp;
//     console.log('first fetch started executing');
//     fetch('https://jsonplaceholder.typicode.com/photos').then((res) => {
//       resp = res;
//       console.log('log after first fetch arrived');
//     });
//     console.log('log after first response arrived');
//     // let data = response.json();
//     // console.log('first fetch finished executing');
//   })();
//   console.log('second console');

//   setTimeout(() => {
//     console.log('first settimeout');
//   }, 0);

//   (async () => {
//     console.log('second fetch started executing');
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log('log after second response arrived');
//     let data = response.json();
//     console.log('second fetch finished executing');
//   })();
//   console.log('third console');
//   setTimeout(() => {
//     console.log('second settimeout');
//   }, 0);
// }
// {
//   console.log('stack [1]');

//   setTimeout(() => {
//     console.log('macro [2]');
//   }, 0);

//   setTimeout(() => {
//     console.log('macro [3]');
//   }, 0);

//   const p = Promise.resolve();
//   for (let index = 0; index < 2; index++) {
//     p.then(() => {
//       setTimeout(() => {
//         console.log('macro [4]');
//         setTimeout(() => console.log('macro [5]'), 0);
//         p.then(() => console.log('micro [6]'));
//       }, 0);
//       console.log('micro [7]');
//     });
//   }
//   console.log('stack [8]');
// }

(async () => {
  console.log('first fetch started executing');
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(() => {
      console.log('log after first fetch arrived');
      return 1;
    })
    .finally(() => {
      console.log('finally block');
    })
    .then(() => {
      console.log('second then func');
      return 2;
    })
    .then(() => {
      console.log('third then func');
      return 3;
    });
  console.log('log after first response arrived');
})();
