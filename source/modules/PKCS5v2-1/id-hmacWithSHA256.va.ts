/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA256 */
/**
 * @summary id_hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA256 OBJECT IDENTIFIER ::= {digestAlgorithm 9}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA256: OBJECT_IDENTIFIER = new _OID(
    [9],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA256 */

/* eslint-enable */
