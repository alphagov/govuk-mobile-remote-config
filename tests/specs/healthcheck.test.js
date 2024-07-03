const fetch = require('node-fetch');
const { containerUrl } = require('../utils');

describe('healthcheck endpoint', () => {
    const url = containerUrl()

    it('returns a healthy message', async () => {
        const res = await fetch(`${url}/healthcheck`)
        const body = await res.json()
        expect(body.status).toEqual('healthy')
    })

    it('has content-type of application/json', async () => {
        const res = await fetch(`${url}/healthcheck`)
        const contentType = res.headers.get('content-type')
        expect(contentType).toEqual('application/json')
    })

    it('has a no-store directive', async () => {
        const res = await fetch(`${url}/healthcheck`)
        expect(res.headers.get('Cache-Control')).toEqual('no-store')
    })
})
