/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va";
export { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_sx_pkcs9String */
/**
 * @summary pkcs_9_sx_pkcs9String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-sx-pkcs9String              OBJECT IDENTIFIER ::= {pkcs-9-sx 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_sx_pkcs9String: OBJECT_IDENTIFIER = new _OID(
    [1],
    pkcs_9_sx
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_sx_pkcs9String */

/* eslint-enable */
