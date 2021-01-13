/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA512 */
/**
 * @summary id_hmacWithSHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512 OBJECT IDENTIFIER ::= {digestAlgorithm 11}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512: OBJECT_IDENTIFIER = new _OID(
    [11],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA512 */

/* eslint-enable */
