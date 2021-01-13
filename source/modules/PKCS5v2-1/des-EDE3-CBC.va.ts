/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";
export { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION des_EDE3_CBC */
/**
 * @summary des_EDE3_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * des-EDE3-CBC OBJECT IDENTIFIER ::= {encryptionAlgorithm 7}
 * ```
 *
 * @constant
 */
export const des_EDE3_CBC: OBJECT_IDENTIFIER = new _OID(
    [7],
    encryptionAlgorithm
);
/* END_OF_SYMBOL_DEFINITION des_EDE3_CBC */

/* eslint-enable */
