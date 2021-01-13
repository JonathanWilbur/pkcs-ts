/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs15 } from "../PKCS-15/pkcs15.va";
export { pkcs15 } from "../PKCS-15/pkcs15.va";

/* START_OF_SYMBOL_DEFINITION pkcs15_at */
/**
 * @summary pkcs15_at
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-at OBJECT IDENTIFIER ::= {pkcs15 2}
 * ```
 *
 * @constant
 */
export const pkcs15_at: OBJECT_IDENTIFIER = new _OID([2], pkcs15);
/* END_OF_SYMBOL_DEFINITION pkcs15_at */

/* eslint-enable */
