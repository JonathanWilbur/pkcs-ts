/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { PBES1Algorithms_Union0_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union0-Intersection0-Element.oa";
import { PBES1Algorithms_Union1_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union1-Intersection0-Element.oa";
import { PBES1Algorithms_Union2_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union2-Intersection0-Element.oa";
import { PBES1Algorithms_Union3_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union3-Intersection0-Element.oa";
import { PBES1Algorithms_Union4_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union4-Intersection0-Element.oa";
import { PBES1Algorithms_Union5_Intersection0_Element } from "../PKCS5v2-1/PBES1Algorithms-Union5-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION PBES1Algorithms */
/**
 * @summary PBES1Algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES1Algorithms ALGORITHM-IDENTIFIER ::= {
 *     {PBEParameter IDENTIFIED BY pbeWithMD2AndDES-CBC}  |
 *     {PBEParameter IDENTIFIED BY pbeWithMD2AndRC2-CBC}  |
 *     {PBEParameter IDENTIFIED BY pbeWithMD5AndDES-CBC}  |
 *     {PBEParameter IDENTIFIED BY pbeWithMD5AndRC2-CBC}  |
 *     {PBEParameter IDENTIFIED BY pbeWithSHA1AndDES-CBC} |
 *     {PBEParameter IDENTIFIED BY pbeWithSHA1AndRC2-CBC},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBES1Algorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PBES1Algorithms_Union0_Intersection0_Element,
    PBES1Algorithms_Union1_Intersection0_Element,
    PBES1Algorithms_Union2_Intersection0_Element,
    PBES1Algorithms_Union3_Intersection0_Element,
    PBES1Algorithms_Union4_Intersection0_Element,
    PBES1Algorithms_Union5_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION PBES1Algorithms */

/* eslint-enable */
