/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA224 */
/**
 * @summary id_hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA224 OBJECT IDENTIFIER ::= {digestAlgorithm 8}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA224: OBJECT_IDENTIFIER = new _OID(
    [8],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA224 */

/* eslint-enable */
