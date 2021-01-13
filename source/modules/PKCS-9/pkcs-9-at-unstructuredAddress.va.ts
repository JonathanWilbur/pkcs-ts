/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va";
export { pkcs_9 } from "../PKCS-9/pkcs-9.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_unstructuredAddress */
/**
 * @summary pkcs_9_at_unstructuredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-unstructuredAddress OBJECT IDENTIFIER ::= {pkcs-9 8}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_unstructuredAddress: OBJECT_IDENTIFIER = new _OID(
    [8],
    pkcs_9
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_unstructuredAddress */

/* eslint-enable */
