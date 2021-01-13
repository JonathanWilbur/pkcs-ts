/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha256WithRSAEncryption */
/**
 * @summary sha256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryption      OBJECT IDENTIFIER ::= { pkcs-1 11 }
 * ```
 *
 * @constant
 */
export const sha256WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [11],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha256WithRSAEncryption */

/* eslint-enable */
