import { describe, expect, it } from 'vitest'
import { foo } from '../main.ts'

describe('Foo', () => {
  it('should fail', () => {
    expect(foo()).toBe('foo')
  })
})
