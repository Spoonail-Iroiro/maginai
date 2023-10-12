import { it, vi, should } from 'vitest';
import { CancelableModEvent } from '@/modules/event/cancelable-mod-event.js';

it('calls handlers when invoke is called', () => {
  // TODO: vi.spyOn(ModEvent)?
  const event = new CancelableModEvent('Test');
  const [h1, h2] = [vi.fn(), vi.fn()];
  // ModEventから継承したaddHandlerを呼ぶ
  event.addHandler(h1);
  event.addHandler(h2);
  const handled = event.invoke({ test: 3 });
  handled.should.be.equal(false);
  [h1.mock.lastCall, h2.mock.lastCall].should.be.deep.equal([
    [{ test: 3 }],
    [{ test: 3 }],
  ]);
});

it('stops calling handlers after a handler returned true', () => {
  const event = new CancelableModEvent('Test');

  // h1はtrueを返すのでh2が呼ばれないはず
  const [h1, h2] = [vi.fn().mockReturnValue(true), vi.fn()];
  event.addHandler(h1);
  event.addHandler(h2);

  const handled = event.invoke({ test: 5 });
  handled.should.be.equal(true);

  [
    // h2が呼ばれていないことを確認
    h1.mock.lastCall,
    h2.mock.lastCall,
  ].should.be.deep.equal([[{ test: 5 }], undefined]);
});
