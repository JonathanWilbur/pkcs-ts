/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";
export { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION rc5_CBC_PAD */
/**
 * @summary rc5_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rc5-CBC-PAD OBJECT IDENTIFIER ::= {encryptionAlgorithm 9}
 * ```
 *
 * @constant
 */
export const rc5_CBC_PAD: OBJECT_IDENTIFIER = new _OID(
    [9],
    encryptionAlgorithm
);
/* END_OF_SYMBOL_DEFINITION rc5_CBC_PAD */

/* eslint-enable */
