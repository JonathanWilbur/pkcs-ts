/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";
export { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_randomNonce */
/**
 * @summary pkcs_9_at_randomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-randomNonce              OBJECT IDENTIFIER ::= {pkcs-9-at 3}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_randomNonce: OBJECT_IDENTIFIER = new _OID(
    [3],
    pkcs_9_at
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_randomNonce */

/* eslint-enable */
