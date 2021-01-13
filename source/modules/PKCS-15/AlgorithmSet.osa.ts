/* eslint-disable */
import { pkcs15_alg_null } from "../PKCS-15/pkcs15-alg-null.oa";
import { PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca";
export { pkcs15_alg_null } from "../PKCS-15/pkcs15-alg-null.oa";
export { PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION AlgorithmSet */
/**
 * @summary AlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmSet PKCS15-ALGORITHM ::= {
 *     pkcs15-alg-null,
 *     ... -- See PKCS #11 for values for the &id field (and parameters)
 * }
 * ```
 *
 * @constant
 * @type {PKCS15_ALGORITHM[]}
 *
 */
export const AlgorithmSet: PKCS15_ALGORITHM[] = [pkcs15_alg_null];
/* END_OF_SYMBOL_DEFINITION AlgorithmSet */

/* eslint-enable */
