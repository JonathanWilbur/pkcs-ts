/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { MACAlgorithms_Union0_Intersection0_Element } from "../PKCS-15/MACAlgorithms-Union0-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION MACAlgorithms */
/**
 * @summary MACAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY hMAC-SHA1},
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const MACAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    MACAlgorithms_Union0_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION MACAlgorithms */

/* eslint-enable */
