// async code

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("time out");
  fetchData()
    .then((text) => {
      console.log(text);
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
