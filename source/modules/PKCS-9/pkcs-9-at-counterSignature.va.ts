/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_counterSignature */
/**
 * @summary pkcs_9_at_counterSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-counterSignature    OBJECT IDENTIFIER ::= {pkcs-9 6}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_counterSignature: OBJECT_IDENTIFIER = new _OID(
    [6],
    pkcs_9
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_counterSignature */

/* eslint-enable */
