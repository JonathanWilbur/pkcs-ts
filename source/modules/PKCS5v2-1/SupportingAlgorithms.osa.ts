/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { SupportingAlgorithms_Union0_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union0-Intersection0-Element.oa";
import { SupportingAlgorithms_Union1_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union1-Intersection0-Element.oa";
import { SupportingAlgorithms_Union2_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union2-Intersection0-Element.oa";
import { SupportingAlgorithms_Union3_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union3-Intersection0-Element.oa";
import { SupportingAlgorithms_Union4_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union4-Intersection0-Element.oa";
import { SupportingAlgorithms_Union5_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union5-Intersection0-Element.oa";
import { SupportingAlgorithms_Union6_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union6-Intersection0-Element.oa";
import { SupportingAlgorithms_Union7_Intersection0_Element } from "../PKCS5v2-1/SupportingAlgorithms-Union7-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION SupportingAlgorithms */
/**
 * @summary SupportingAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY id-hmacWithSHA1}                   |
 *     {OCTET STRING (SIZE(8)) IDENTIFIED BY desCBC}          |
 *     {OCTET STRING (SIZE(8)) IDENTIFIED BY des-EDE3-CBC}    |
 *     {RC2-CBC-Parameter IDENTIFIED BY rc2CBC}               |
 *     {RC5-CBC-Parameters IDENTIFIED BY rc5-CBC-PAD}         |
 *     {OCTET STRING (SIZE(16)) IDENTIFIED BY aes128-CBC-PAD} |
 *     {OCTET STRING (SIZE(16)) IDENTIFIED BY aes192-CBC-PAD} |
 *     {OCTET STRING (SIZE(16)) IDENTIFIED BY aes256-CBC-PAD},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const SupportingAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    SupportingAlgorithms_Union0_Intersection0_Element,
    SupportingAlgorithms_Union1_Intersection0_Element,
    SupportingAlgorithms_Union2_Intersection0_Element,
    SupportingAlgorithms_Union3_Intersection0_Element,
    SupportingAlgorithms_Union4_Intersection0_Element,
    SupportingAlgorithms_Union5_Intersection0_Element,
    SupportingAlgorithms_Union6_Intersection0_Element,
    SupportingAlgorithms_Union7_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION SupportingAlgorithms */

/* eslint-enable */
