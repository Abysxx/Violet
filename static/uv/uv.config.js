self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Violet.codec.xor.encode,
    decodeUrl: Violet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
