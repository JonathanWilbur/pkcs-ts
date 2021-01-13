/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha512WithRSAEncryption */
/**
 * @summary sha512WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryption      OBJECT IDENTIFIER ::= { pkcs-1 13 }
 * ```
 *
 * @constant
 */
export const sha512WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [13],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha512WithRSAEncryption */

/* eslint-enable */
