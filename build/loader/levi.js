const LeviLoaderUtils = require('loader-utils');

/** 同步loader */
module.exports = function (context) {
  const options = LeviLoaderUtils.getOptions(this);

  console.log('loader配置项:', options);

  const result = context.concat(`console.log("${options.message || '没有配置项'}");`);

  return result;
};

/** 异步loader */
// module.exports = function (context) {
//   let count = 1;
//   const options = LeviLoaderUtils.getOptions(this);
//   const callback = this.async();

//   console.log(options);
//   const timer = setInterval(() => {
//     count = count + 1;
//     console.log(count);
//   }, 1000);

//   setTimeout(() => {
//     callback(null, context);
//     clearInterval(timer);
//   }, 4000);
// };
