/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { rsadsi } from "../PKCS5v2-1/rsadsi.va";
export { rsadsi } from "../PKCS5v2-1/rsadsi.va";

/* START_OF_SYMBOL_DEFINITION digestAlgorithm */
/**
 * @summary digestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digestAlgorithm OBJECT IDENTIFIER ::= {rsadsi 2}
 * ```
 *
 * @constant
 */
export const digestAlgorithm: OBJECT_IDENTIFIER = new _OID([2], rsadsi);
/* END_OF_SYMBOL_DEFINITION digestAlgorithm */

/* eslint-enable */
