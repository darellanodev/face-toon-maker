import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders three rotator images, one for the eyes, other for the nose and other for the mouth', () => {
    render(<App />)
    expect(screen.getAllByTestId('rotator')).toHaveLength(3)
  })
})
