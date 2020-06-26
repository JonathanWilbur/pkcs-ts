const forge = require("node-forge");
const crypto = require("crypto");
const generatePKCS12Key = require("../../dist/node/generatePKCS12Key").default;
const DERElement = require("asn1-ts").DERElement;

test("the password processing in generatePKCS12Key() produces the same results as the node-forge equivalent", () => {
    const password = crypto.randomBytes(24).toString("base64");
    const passBuf = new forge.util.ByteBuffer();
    for (let l = 0; l < password.length; l++) {
        passBuf.putInt16(password.charCodeAt(l));
    }
    passBuf.putInt16(0);
    const forgePassword = Buffer.from(passBuf.getBytes(), "binary");
    const pkcsPassword = Buffer.from((() => {
        const el = new DERElement();
        el.bmpString = (password + "\0");
        return el.value;
    })());
    expect(forgePassword).toEqual(pkcsPassword);
});

test("generatePKCS12Key() produces the same results as the node-forge equivalent for small inputs", () => {
    for (let i = 0; i < 50; i++) {
        const password = crypto.randomBytes(24).toString("base64");
        const salt = crypto.randomBytes(24);
        const iterations = crypto.randomBytes(1)[0];
        const n = crypto.randomBytes(1)[0];
        const md = forge.md.sha256.create();
        const forgeKeyBuffer = forge.pkcs12.generateKey(password, forge.util.createBuffer(salt.toString("binary")), 1, iterations, n, md);
        const forgeKey = Buffer.from(forgeKeyBuffer.getBytes(), "binary");
        const pkcsKey = generatePKCS12Key(password, new Uint8Array(salt), 1, iterations, n, "SHA256", 64, 32);
        expect(forgeKey.length).toBe(pkcsKey.length);
        expect(forgeKey).toEqual(pkcsKey);
    }
});

test("generatePKCS12Key() produces the same results as the node-forge equivalent for medium-sized inputs", () => {
    for (let i = 0; i < 10; i++) {
        const password = crypto.randomBytes(24).toString("base64");
        const salt = crypto.randomBytes(24);
        const iterations = crypto.randomBytes(1)[0];
        const n = crypto.randomBytes(1)[0] * crypto.randomBytes(1)[0];
        const md = forge.md.sha256.create();
        const forgeKeyBuffer = forge.pkcs12.generateKey(password, forge.util.createBuffer(salt.toString("binary")), 1, iterations, n, md);
        const forgeKey = Buffer.from(forgeKeyBuffer.getBytes(), "binary");
        const pkcsKey = generatePKCS12Key(password, new Uint8Array(salt), 1, iterations, n, "SHA256", 64, 32);
        expect(forgeKey.length).toBe(pkcsKey.length);
        expect(forgeKey).toEqual(pkcsKey);
    }
});
