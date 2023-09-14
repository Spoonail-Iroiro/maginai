(function () {
  const logger = maginai.logging.getLogger('sample2-2');
  const postprocess = maginai
    .loadJsData('./js/mod/mods/sample2-2/data.js')
    .then((loaded) => logger.info(loaded));
  maginai.setModPostprocess(postprocess);
})();
