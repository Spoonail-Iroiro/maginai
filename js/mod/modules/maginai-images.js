/**
 *
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
