/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { OAEP_PSSDigestAlgorithms_Union0_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union0-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union1_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union1-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union2_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union2-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union3_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union3-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union4_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union4-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union5_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union5-Intersection0-Element.oa";
import { OAEP_PSSDigestAlgorithms_Union6_Intersection0_Element } from "../PKCS-1/OAEP-PSSDigestAlgorithms-Union6-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION OAEP_PSSDigestAlgorithms */
/**
 * @summary OAEP_PSSDigestAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OAEP-PSSDigestAlgorithms    ALGORITHM-IDENTIFIER ::= {
 *     { OID id-sha1       PARAMETERS NULL }|
 *     { OID id-sha224     PARAMETERS NULL }|
 *     { OID id-sha256     PARAMETERS NULL }|
 *     { OID id-sha384     PARAMETERS NULL }|
 *     { OID id-sha512     PARAMETERS NULL }|
 *     { OID id-sha512-224 PARAMETERS NULL }|
 *     { OID id-sha512-256 PARAMETERS NULL },
 *     ...  -- Allows for future expansion --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const OAEP_PSSDigestAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    OAEP_PSSDigestAlgorithms_Union0_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union1_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union2_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union3_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union4_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union5_Intersection0_Element,
    OAEP_PSSDigestAlgorithms_Union6_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION OAEP_PSSDigestAlgorithms */

/* eslint-enable */
