/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha224WithRSAEncryption */
/**
 * @summary sha224WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryption      OBJECT IDENTIFIER ::= { pkcs-1 14 }
 * ```
 *
 * @constant
 */
export const sha224WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [14],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha224WithRSAEncryption */

/* eslint-enable */
