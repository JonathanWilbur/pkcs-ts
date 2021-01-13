/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va";
export { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_sx_signingTime */
/**
 * @summary pkcs_9_sx_signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-sx-signingTime              OBJECT IDENTIFIER ::= {pkcs-9-sx 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_sx_signingTime: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_9_sx
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_sx_signingTime */

/* eslint-enable */
