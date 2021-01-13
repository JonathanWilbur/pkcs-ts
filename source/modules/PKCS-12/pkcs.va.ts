/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { rsadsi } from "../PKCS-12/rsadsi.va";
export { rsadsi } from "../PKCS-12/rsadsi.va";

/* START_OF_SYMBOL_DEFINITION pkcs */
/**
 * @summary pkcs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs    OBJECT IDENTIFIER ::= {rsadsi pkcs(1)}
 * ```
 *
 * @constant
 */
export const pkcs: OBJECT_IDENTIFIER = new _OID([/* pkcs */ 1], rsadsi);
/* END_OF_SYMBOL_DEFINITION pkcs */

/* eslint-enable */
