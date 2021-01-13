/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { aes } from "../PKCS5v2-1/aes.va";
export { aes } from "../PKCS5v2-1/aes.va";

/* START_OF_SYMBOL_DEFINITION aes256_CBC_PAD */
/**
 * @summary aes256_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes256-CBC-PAD OBJECT IDENTIFIER ::= { aes 42 }
 * ```
 *
 * @constant
 */
export const aes256_CBC_PAD: OBJECT_IDENTIFIER = new _OID([42], aes);
/* END_OF_SYMBOL_DEFINITION aes256_CBC_PAD */

/* eslint-enable */
