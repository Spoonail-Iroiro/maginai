import { ModEvent } from '@/modules/event/mod-event';
import { it, vi, should } from 'vitest';
import { applyAllLogger } from '../../test-util.js';

it('has no handlers first', () => {
  const event = new ModEvent('Test');
  event.hasHandler.should.be.equal(false);
});

it('can add handlers and invoke() calls handlers', () => {
  const event = new ModEvent('Test');
  const h1 = vi.fn();
  event.addHandler(h1);
  event.hasHandler.should.be.equal(true);

  const h2 = vi.fn();
  event.addHandler(h2);
  event.hasHandler.should.be.equal(true);

  event.invoke({ a: 2 });
  h1.mock.lastCall.should.be.deep.equal([{ a: 2 }]);
  h2.mock.lastCall.should.be.deep.equal([{ a: 2 }]);
});

it('Errors on a handler does not affect others', () => {
  applyAllLogger((logger) => logger.setLevel('silent', false));
  const event = new ModEvent('Test');
  const mockError = new Error();
  const [h1, h2] = [
    vi.fn().mockImplementation(() => {
      throw mockError;
    }),
    vi.fn(),
  ];
  event.addHandler(h1);
  event.addHandler(h2);
  event.invoke({ a: 1 });

  [h1.mock.lastCall, h2.mock.lastCall].should.deep.equal([
    [{ a: 1 }],
    [{ a: 1 }],
  ]);

  [h1.mock.results, h2.mock.results].should.deep.equal([
    [{ type: 'throw', value: mockError }], //
    [{ type: 'return', value: undefined }], //
  ]);
});

it('can remove handlers', () => {
  const event = new ModEvent('Test');

  const h1 = vi.fn();
  event.addHandler(h1);
  const h2 = vi.fn();
  event.addHandler(h2);

  event.removeHandler(h1);
  event.hasHandler.should.be.equal(true);

  event.invoke({ a: 3 });
  should().not.exist(h1.mock.lastCall);
  h2.mock.lastCall.should.be.deep.equal([{ a: 3 }]);

  event.removeHandler(h2);
  event.hasHandler.should.be.equal(false);
});
