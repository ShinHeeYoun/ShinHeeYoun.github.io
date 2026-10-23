import { describe, it, expect } from 'vitest'
import { ERS_URL } from './ers'
import { SERVER_API_BASE } from './serverApi'

describe('ERS_URL', () => {
  it('is an https address, or the browser would refuse to show it inside this https site', () => {
    expect(new URL(ERS_URL).protocol).toBe('https:')
  })

  it('is on the same server name as the status card, which already has a certificate', () => {
    expect(new URL(ERS_URL).hostname).toBe(new URL(SERVER_API_BASE).hostname)
  })

  it('points at the viewer page', () => {
    expect(new URL(ERS_URL).pathname).toBe('/ReportingServer/html5/sample/QS.jsp')
  })
})
