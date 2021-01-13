/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_smimeCapabilities */
/**
 * @summary pkcs_9_at_smimeCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-smimeCapabilities        OBJECT IDENTIFIER ::= {pkcs-9 15}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_smimeCapabilities: OBJECT_IDENTIFIER = new _OID(
    [15],
    pkcs_9
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_smimeCapabilities */

/* eslint-enable */
