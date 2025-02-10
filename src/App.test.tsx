import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders three rotator images, one for the eyes, other for the nose and other for the mouth', () => {
    render(<App />)
    expect(screen.getAllByTestId('rotator')).toHaveLength(3)
  })
  it('renders three buttons with the texts: new mouth, new nose and new eyes', () => {
    render(<App />)
    expect(screen.getByText('Change eyes')).toBeInTheDocument()
    expect(screen.getByText('Change nose')).toBeInTheDocument()
    expect(screen.getByText('Change mouth')).toBeInTheDocument()
  })
})
