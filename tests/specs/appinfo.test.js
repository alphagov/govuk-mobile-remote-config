const fetch = require('node-fetch');
const { containerUrl } = require('../utils');

describe('appinfo', () => {
    const url = containerUrl()

    it('returns Android config', async () => {
        const res = await fetch(`${url}/appinfo/android`)
        const body = await res.json()
        expect(body.platform).toEqual('Android')
    })

    it('returns iOS config', async () => {
        const res = await fetch(`${url}/appinfo/ios`)
        const body = await res.json()
        expect(body.platform).toEqual('iOS')
    })
})
