/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha512_224WithRSAEncryption */
/**
 * @summary sha512_224WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-224WithRSAEncryption  OBJECT IDENTIFIER ::= { pkcs-1 15 }
 * ```
 *
 * @constant
 */
export const sha512_224WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [15],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha512_224WithRSAEncryption */

/* eslint-enable */
