/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va";
export { pkcs_1 } from "../PKCS-1/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION rsaEncryption */
/**
 * @summary rsaEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryption    OBJECT IDENTIFIER ::= { pkcs-1 1 }
 * ```
 *
 * @constant
 */
export const rsaEncryption: OBJECT_IDENTIFIER = new _OID([1], pkcs_1);
/* END_OF_SYMBOL_DEFINITION rsaEncryption */

/* eslint-enable */
