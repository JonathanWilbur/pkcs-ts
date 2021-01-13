/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { nistAlgorithms } from "../PKCS5v2-1/nistAlgorithms.va";
export { nistAlgorithms } from "../PKCS5v2-1/nistAlgorithms.va";

/* START_OF_SYMBOL_DEFINITION aes */
/**
 * @summary aes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes OBJECT IDENTIFIER ::= { nistAlgorithms 1 }
 * ```
 *
 * @constant
 */
export const aes: OBJECT_IDENTIFIER = new _OID([1], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION aes */

/* eslint-enable */
