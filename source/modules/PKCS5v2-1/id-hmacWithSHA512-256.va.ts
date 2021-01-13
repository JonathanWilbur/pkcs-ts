/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA512_256 */
/**
 * @summary id_hmacWithSHA512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512-256 OBJECT IDENTIFIER ::= {digestAlgorithm 13}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512_256: OBJECT_IDENTIFIER = new _OID(
    [13],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA512_256 */

/* eslint-enable */
