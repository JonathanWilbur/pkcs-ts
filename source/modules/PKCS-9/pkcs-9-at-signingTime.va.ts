/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_signingTime */
/**
 * @summary pkcs_9_at_signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-signingTime         OBJECT IDENTIFIER ::= {pkcs-9 5}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_signingTime: OBJECT_IDENTIFIER = new _OID([5], pkcs_9);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_signingTime */

/* eslint-enable */
