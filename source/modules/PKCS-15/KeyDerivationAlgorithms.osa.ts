/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { PBKDF2Algorithms } from "../PKCS5v2-1/PBKDF2Algorithms.osa";

/* START_OF_SYMBOL_DEFINITION KeyDerivationAlgorithms */
/**
 * @summary KeyDerivationAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     PBKDF2Algorithms,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const KeyDerivationAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    ...PBKDF2Algorithms,
];
/* END_OF_SYMBOL_DEFINITION KeyDerivationAlgorithms */

/* eslint-enable */
