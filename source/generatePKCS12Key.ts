import * as asn1 from "asn1-ts";
import * as crypto from "crypto";

/**
 * Generate a PKCS12 key from a password, based on the algorithm defined in
 * PKCS #5 (IETF RFC 7292) Appendix B.
 *
 * See: https://tools.ietf.org/html/rfc7292#appendix-B
 *
 * This is based on the `node-forge` implementation.
 *
 * @param password The password from which to generate the key.
 * @param salt A random salt.
 * @param id The ID parameter. 1 = Encipherment key, 2 = IV, 3 = MAC key.
 * @param iter The number of iterations of hashing.
 * @param n The number of bytes to generate.
 * @param hashAlgorithm The hash algorithm to use.
 * @param blockLength The number of bytes in a block, based on the `hashAlgorithm`.
 * @param digestLength The number of bytes in the resulting digest, based on the `hashAlgorithm`.
 */
export default // eslint-disable-next-line
function generatePKCS12Key(
    password: string,
    salt: Uint8Array,
    id: 1 | 2 | 3,
    iter: number,
    n: number,
    hashAlgorithm: string,
    blockLength: number,
    digestLength: number
): Uint8Array {
    let j, l;
    const u = digestLength;
    const v = blockLength;
    let result: Buffer = Buffer.from([]);

    /* Convert password to Unicode byte buffer + trailing 0-byte. */
    const passBuf: Uint8Array = (() => {
        const el = new asn1.DERElement();
        el.bmpString = password + "\0";
        return el.value;
    })();

    /* Length of salt and password in BYTES. */
    const p = passBuf.length;
    const s = salt.length;

    /* 1. Construct a string, D (the "diversifier"), by concatenating v copies of ID. */
    const D = new Uint8Array(v);
    D.fill(id);

    /* 2. Concatenate copies of the salt together to create a string S of length
            v * ceil(s / v) bytes (the final copy of the salt may be trunacted
            to create S).
            Note that if the salt is the empty string, then so is S. */
    const Slen = v * Math.ceil(s / v);
    let S = new Uint8Array(Slen);
    for (l = 0; l < Slen; l++) {
        S[l] = salt[l % s];
    }

    /* 3. Concatenate copies of the password together to create a string P of
            length v * ceil(p / v) bytes (the final copy of the password may be
            truncated to create P).
            Note that if the password is the empty string, then so is P. */
    const Plen = v * Math.ceil(p / v);
    let P = new Uint8Array(Plen);
    for (l = 0; l < Plen; l++) {
        P[l] = passBuf[l % p];
    }

    /* 4. Set I=S||P to be the concatenation of S and P. */
    S = Buffer.concat([S, P]);
    let I = S;
    P = new Uint8Array(0);

    /* 5. Set c=ceil(n / u). */
    const c = Math.ceil(n / u);

    /* 6. For i=1, 2, ..., c, do the following: */
    for (let i = 1; i <= c; i++) {
        /* a) Set Ai=H^r(D||I). (l.e. the rth hash of D||I, H(H(H(...H(D||I)))) */
        let buf = Buffer.concat([D, I]);
        for (let round = 0; round < iter; round++) {
            const hasher = crypto.createHash(hashAlgorithm);
            hasher.update(buf);
            buf = hasher.digest();
        }

        /* b) Concatenate copies of Ai to create a string B of length v bytes (the
            final copy of Ai may be truncated to create B). */
        const B = new Uint8Array(v);
        for (l = 0; l < v; l++) {
            B[l] = buf[l % u];
        }

        /* c) Treating I as a concatenation I0, I1, ..., Ik-1 of v-byte blocks,
            where k=ceil(s / v) + ceil(p / v), modify I by setting
            Ij=(Ij+B+1) mod 2v for each j.  */
        const k = Math.ceil(s / v) + Math.ceil(p / v);
        let Inew = Buffer.from([]);
        for (j = 0; j < k; j++) {
            const chunk = I.slice(0, v);
            I = I.slice(v);
            let x = 0x1ff;
            for (l = B.length - 1; l >= 0; l--) {
                x = x >> 8;
                x += B[l] + chunk[l];
                chunk[l] = x & 0xff;
            }
            Inew = Buffer.concat([Inew, chunk]);
        }
        I = Inew;

        /* Add Ai to A. */
        result = Buffer.concat([result, buf]);
    }

    return result.slice(0, n);
}
