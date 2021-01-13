/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha1WithRSAEncryption */
/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption        OBJECT IDENTIFIER ::= { pkcs-1 5 }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: OBJECT_IDENTIFIER = new _OID([5], pkcs_1);
/* END_OF_SYMBOL_DEFINITION sha1WithRSAEncryption */

/* eslint-enable */
