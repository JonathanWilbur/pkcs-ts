/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION smime */
/**
 * @summary smime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smime                              OBJECT IDENTIFIER ::= {pkcs-9 16}
 * ```
 *
 * @constant
 */
export const smime: OBJECT_IDENTIFIER = new _OID([16], pkcs_9);
/* END_OF_SYMBOL_DEFINITION smime */

/* eslint-enable */
