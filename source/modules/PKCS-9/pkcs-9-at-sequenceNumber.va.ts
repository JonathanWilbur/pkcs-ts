/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";
export { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va";

/* START_OF_SYMBOL_DEFINITION pkcs_9_at_sequenceNumber */
/**
 * @summary pkcs_9_at_sequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-sequenceNumber           OBJECT IDENTIFIER ::= {pkcs-9-at 4}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_sequenceNumber: OBJECT_IDENTIFIER = new _OID(
    [4],
    pkcs_9_at
);
/* END_OF_SYMBOL_DEFINITION pkcs_9_at_sequenceNumber */

/* eslint-enable */
