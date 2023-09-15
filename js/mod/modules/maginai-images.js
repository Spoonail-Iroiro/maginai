/**
 * `srcInfo`をもとにctxを使用して(x,y)に画像を貼り付けます
 * （srcInfoがtop/left/width/heightの時用）
 * @param {OffscreenCanvasRenderingContext2D} ctx
 * @param {maginaiTypes.DrawInfoTLWH} srcInfo
 * @param {number} x
 * @param {number} y
 */
function pasteTLWH(ctx, srcInfo, x, y) {
  const c = srcInfo;
  ctx.drawImage(
    c.cvs,
    c.left,
    c.top,
    c.width,
    c.height,
    x,
    y,
    c.width,
    c.height
  );
}

/**
 * `srcInfo`をもとにctxを使用して(x,y)に画像を貼り付けます
 * （srcInfoがrectの時用）
 * @param {OffscreenCanvasRenderingContext2D} ctx
 * @param {maginaiTypes.DrawInfoRect} srcInfo
 * @param {number} x
 * @param {number} y
 */
function pasteRect(ctx, srcInfo, x, y) {
  const c = srcInfo;
  ctx.drawImage(
    c.cvs,
    c.rect[0],
    c.rect[1],
    c.rect[2],
    c.rect[3],
    x,
    y,
    c.rect[2],
    c.rect[3]
  );
}

export { pasteRect, pasteTLWH };
