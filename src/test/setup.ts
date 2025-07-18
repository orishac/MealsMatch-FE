import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Make vitest globals available
Object.assign(global, { expect, vi })

// Cleanup after each test
afterEach(() => {
  cleanup()
})