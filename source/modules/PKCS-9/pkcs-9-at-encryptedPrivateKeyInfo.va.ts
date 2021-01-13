/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";
export { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_encryptedPrivateKeyInfo */
/**
 * @summary pkcs_9_at_encryptedPrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-encryptedPrivateKeyInfo  OBJECT IDENTIFIER ::= {pkcs-9-at 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_encryptedPrivateKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_9_at
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_encryptedPrivateKeyInfo */

/* eslint-enable */
