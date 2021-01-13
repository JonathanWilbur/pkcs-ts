/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";
export { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION rc2CBC */
/**
 * @summary rc2CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rc2CBC OBJECT IDENTIFIER ::= {encryptionAlgorithm 2}
 * ```
 *
 * @constant
 */
export const rc2CBC: OBJECT_IDENTIFIER = new _OID([2], encryptionAlgorithm);
/* END_OF_SYMBOL_DEFINITION rc2CBC */

/* eslint-enable */
