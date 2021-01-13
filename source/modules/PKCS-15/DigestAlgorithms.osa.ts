/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { DigestAlgorithms_Union0_Intersection0_Element } from "../PKCS-15/DigestAlgorithms-Union0-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION DigestAlgorithms */
/**
 * @summary DigestAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY sha-1},
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const DigestAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    DigestAlgorithms_Union0_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION DigestAlgorithms */

/* eslint-enable */
