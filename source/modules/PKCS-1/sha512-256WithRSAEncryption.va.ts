/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha512_256WithRSAEncryption */
/**
 * @summary sha512_256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-256WithRSAEncryption  OBJECT IDENTIFIER ::= { pkcs-1 16 }
 * ```
 *
 * @constant
 */
export const sha512_256WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [16],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha512_256WithRSAEncryption */

/* eslint-enable */
