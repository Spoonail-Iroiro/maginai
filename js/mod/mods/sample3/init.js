(function () {
  maginai.setModPostprocess(
    Promise.resolve().then(() => {
      throw new Error('Postprocess uncaught error');
    })
  );
})();
