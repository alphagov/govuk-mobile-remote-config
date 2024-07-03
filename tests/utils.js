module.exports = {
    containerUrl() {
        const ip = global['__TESTCONTAINERS_REMOTE-CONFIG-1_IP__']
        const port = global['__TESTCONTAINERS_REMOTE-CONFIG-1_PORT_80__']
        return `http://${ip}:${port}`
    }
}
