/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA1 */
/**
 * @summary id_hmacWithSHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA1 OBJECT IDENTIFIER ::= {digestAlgorithm 7}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA1: OBJECT_IDENTIFIER = new _OID(
    [7],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA1 */

/* eslint-enable */
