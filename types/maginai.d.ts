declare namespace maginaiTypes {
  type DrawInfoRect = {
    cvs: OffscreenCanvas;
    ctx: OffscreenCanvasRenderingContext2D;
    rect: [number, number, number, number];
  };

  type DrawInfoTLWH = {
    cvs: OffscreenCanvas;
    ctx: OffscreenCanvasRenderingContext2D;
    top: number;
    left: number;
    width: number;
    height: number;
  };
}
