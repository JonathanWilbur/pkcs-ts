/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { aes } from "../PKCS5v2-1/aes.va";
export { aes } from "../PKCS5v2-1/aes.va";

/* START_OF_SYMBOL_DEFINITION aes192_CBC_PAD */
/**
 * @summary aes192_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes192-CBC-PAD OBJECT IDENTIFIER ::= { aes 22 }
 * ```
 *
 * @constant
 */
export const aes192_CBC_PAD: OBJECT_IDENTIFIER = new _OID([22], aes);
/* END_OF_SYMBOL_DEFINITION aes192_CBC_PAD */

/* eslint-enable */
