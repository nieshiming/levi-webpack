export const a = 1;

console.log(process.env);

function asyncImport() {
  new Promise((resolve) => resolve(2));

  return import(/* webpackChunkName: "dayjs" */ "dayjs").then((res) => {
    console.log("init dayjs");
  });
}

asyncImport();
