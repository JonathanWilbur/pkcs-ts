/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs } from "../PKCS-12/pkcs.va";
export { pkcs } from "../PKCS-12/pkcs.va";

/* START_OF_SYMBOL_DEFINITION pkcs_12 */
/**
 * @summary pkcs_12
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-12 OBJECT IDENTIFIER ::= {pkcs 12}
 * ```
 *
 * @constant
 */
export const pkcs_12: OBJECT_IDENTIFIER = new _OID([12], pkcs);
/* END_OF_SYMBOL_DEFINITION pkcs_12 */

/* eslint-enable */
