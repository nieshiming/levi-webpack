class Levi_Plugin {
  apply(complier) {
    complier.plugin('done', () => {
      console.log('levi_pluin');
    });
  }
}

module.exports = Levi_Plugin;
