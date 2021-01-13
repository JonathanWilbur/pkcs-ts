/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";
export { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA384 */
/**
 * @summary id_hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA384 OBJECT IDENTIFIER ::= {digestAlgorithm 10}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA384: OBJECT_IDENTIFIER = new _OID(
    [10],
    digestAlgorithm
);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA384 */

/* eslint-enable */
