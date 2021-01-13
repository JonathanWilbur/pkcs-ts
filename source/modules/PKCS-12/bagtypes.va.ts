/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12 } from "../PKCS-12/pkcs-12.va";
export { pkcs_12 } from "../PKCS-12/pkcs-12.va";

/* START_OF_SYMBOL_DEFINITION bagtypes */
/**
 * @summary bagtypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bagtypes OBJECT IDENTIFIER ::= {pkcs-12 10 1}
 * ```
 *
 * @constant
 */
export const bagtypes: OBJECT_IDENTIFIER = new _OID([10, 1], pkcs_12);
/* END_OF_SYMBOL_DEFINITION bagtypes */

/* eslint-enable */
