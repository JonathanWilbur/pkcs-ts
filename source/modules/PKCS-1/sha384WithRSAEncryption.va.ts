/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha384WithRSAEncryption */
/**
 * @summary sha384WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384WithRSAEncryption      OBJECT IDENTIFIER ::= { pkcs-1 12 }
 * ```
 *
 * @constant
 */
export const sha384WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [12],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha384WithRSAEncryption */

/* eslint-enable */
