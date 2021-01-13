/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_challengePassword */
/**
 * @summary pkcs_9_at_challengePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-challengePassword   OBJECT IDENTIFIER ::= {pkcs-9 7}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_challengePassword: OBJECT_IDENTIFIER = new _OID(
    [7],
    pkcs_9
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_challengePassword */

/* eslint-enable */
