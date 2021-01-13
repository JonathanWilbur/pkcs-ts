/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs } from "../PKCS5v2-1/pkcs.va";
export { pkcs } from "../PKCS5v2-1/pkcs.va";

/* START_OF_SYMBOL_DEFINITION pkcs_5 */
/**
 * @summary pkcs_5
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-5 OBJECT IDENTIFIER ::= {pkcs 5}
 * ```
 *
 * @constant
 */
export const pkcs_5: OBJECT_IDENTIFIER = new _OID([5], pkcs);
/* END_OF_SYMBOL_DEFINITION pkcs_5 */

/* eslint-enable */
