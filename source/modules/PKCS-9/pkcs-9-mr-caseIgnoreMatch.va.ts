/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_mr } from "../PKCS-9/pkcs-9-mr.va";
export { pkcs_9_mr } from "../PKCS-9/pkcs-9-mr.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_mr_caseIgnoreMatch */
/**
 * @summary pkcs_9_mr_caseIgnoreMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-mr-caseIgnoreMatch          OBJECT IDENTIFIER ::= {pkcs-9-mr 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_mr_caseIgnoreMatch: OBJECT_IDENTIFIER = new _OID(
    [1],
    pkcs_9_mr
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_mr_caseIgnoreMatch */

/* eslint-enable */
