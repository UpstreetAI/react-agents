import { Agent } from '../index';
import { describe, it, expect } from '@jest/globals';

describe('Empty test suite', () => {
  it('should exit without running any actual tests', () => {
    console.log('test', {
      Agent,
    });
    // This test doesn't actually test anything, it just exits successfully
    // expect(true).toBe(true);
  });
});

// If you need to run this test in isolation, you can use:
// npx jest test/index.ts
