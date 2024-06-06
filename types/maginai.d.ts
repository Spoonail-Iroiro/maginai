declare namespace maginaiTypes {
  /**
   * @internal
   */
  type DrawInfoRect = {
    cvs: OffscreenCanvas;
    ctx: OffscreenCanvasRenderingContext2D;
    rect: [number, number, number, number];
  };

  /**
   * @internal
   */
  type DrawInfoTLWH = {
    cvs: OffscreenCanvas;
    ctx: OffscreenCanvasRenderingContext2D;
    top: number;
    left: number;
    width: number;
    height: number;
  };
}
