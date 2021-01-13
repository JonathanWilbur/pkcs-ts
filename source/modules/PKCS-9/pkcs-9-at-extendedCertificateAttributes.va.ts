/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_extendedCertificateAttributes */
/**
 * @summary pkcs_9_at_extendedCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-extendedCertificateAttributes
 *                                 OBJECT IDENTIFIER ::= {pkcs-9 9}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_extendedCertificateAttributes: OBJECT_IDENTIFIER = new _OID(
    [9],
    pkcs_9
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_extendedCertificateAttributes */

/* eslint-enable */
