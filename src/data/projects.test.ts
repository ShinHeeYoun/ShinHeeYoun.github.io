import { describe, it, expect } from 'vitest'
import { projects } from './projects'

describe('projects data', () => {
  it('has unique, URL-safe ids (they become /projects/:id routes)', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9-]+$/)
    }
  })

  it('gives every project the text its list card and detail page render', () => {
    expect(projects.length).toBeGreaterThan(0)
    for (const project of projects) {
      expect(project.title.trim()).not.toBe('')
      expect(project.summary.trim()).not.toBe('')
      expect(project.overview.trim()).not.toBe('')
      expect(project.tags.length).toBeGreaterThan(0)
      expect(project.points.length).toBeGreaterThan(0)
      for (const point of project.points) {
        expect(point.trim()).not.toBe('')
      }
    }
  })
})
