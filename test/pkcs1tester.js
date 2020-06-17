const fs = require("fs");
const pkcs = require("../dist/node/index");
const pk = new pkcs.PKCS1.RSAPrivateKey(
    0,
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
    new Uint8Array([ 0x80 ]),
);

fs.writeFileSync("pkcs1.der", pkcs.PKCS1._encode_RSAPrivateKey(pk).toBytes());
