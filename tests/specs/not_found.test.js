const fetch = require('node-fetch');
const { containerUrl } = require('../utils');

describe('not found', () => {
    const url = containerUrl()

    it('returns not found message for nonsense URL', async () => {
        const res = await fetch(`${url}/not-a-real-endpoint`)
        const body = await res.json()
        expect(body.message).toEqual('not found')
    })

    it('works for a subpath that exists but not the document', async () => {
        const res = await fetch(`${url}/appinfo/does-not-exist`)
        const body = await res.json()
        expect(body.message).toEqual('not found')
    })

    it('works for a deeply nested subpath', async () => {
        const res = await fetch(`${url}/appinfo/this/fake/path/does-not-exist`)
        const body = await res.json()
        expect(body.message).toEqual('not found')
    })
})
