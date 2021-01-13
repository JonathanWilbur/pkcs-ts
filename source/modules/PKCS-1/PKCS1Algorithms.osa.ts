/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { PKCS1Algorithms_Union0_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union0-Intersection0-Element.oa";
import { PKCS1Algorithms_Union1_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union1-Intersection0-Element.oa";
import { PKCS1Algorithms_Union10_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union10-Intersection0-Element.oa";
import { PKCS1Algorithms_Union12_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union12-Intersection0-Element.oa";
import { PKCS1Algorithms_Union2_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union2-Intersection0-Element.oa";
import { PKCS1Algorithms_Union3_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union3-Intersection0-Element.oa";
import { PKCS1Algorithms_Union4_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union4-Intersection0-Element.oa";
import { PKCS1Algorithms_Union5_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union5-Intersection0-Element.oa";
import { PKCS1Algorithms_Union6_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union6-Intersection0-Element.oa";
import { PKCS1Algorithms_Union7_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union7-Intersection0-Element.oa";
import { PKCS1Algorithms_Union8_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union8-Intersection0-Element.oa";
import { PKCS1Algorithms_Union9_Intersection0_Element } from "../PKCS-1/PKCS1Algorithms-Union9-Intersection0-Element.oa";
import { PKCS1PSourceAlgorithms } from "../PKCS-1/PKCS1PSourceAlgorithms.osa";

/* START_OF_SYMBOL_DEFINITION PKCS1Algorithms */
/**
 * @summary PKCS1Algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1Algorithms    ALGORITHM-IDENTIFIER ::= {
 *     { OID rsaEncryption                PARAMETERS NULL } |
 *     { OID md2WithRSAEncryption         PARAMETERS NULL } |
 *     { OID md5WithRSAEncryption         PARAMETERS NULL } |
 *     { OID sha1WithRSAEncryption        PARAMETERS NULL } |
 *     { OID sha224WithRSAEncryption      PARAMETERS NULL } |
 *     { OID sha256WithRSAEncryption      PARAMETERS NULL } |
 *     { OID sha384WithRSAEncryption      PARAMETERS NULL } |
 *     { OID sha512WithRSAEncryption      PARAMETERS NULL } |
 *     { OID sha512-224WithRSAEncryption  PARAMETERS NULL } |
 *     { OID sha512-256WithRSAEncryption  PARAMETERS NULL } |
 *     { OID id-RSAES-OAEP   PARAMETERS RSAES-OAEP-params } |
 *     PKCS1PSourceAlgorithms                               |
 *     { OID id-RSASSA-PSS   PARAMETERS RSASSA-PSS-params },
 *     ...  -- Allows for future expansion --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PKCS1Algorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PKCS1Algorithms_Union0_Intersection0_Element,
    PKCS1Algorithms_Union1_Intersection0_Element,
    PKCS1Algorithms_Union2_Intersection0_Element,
    PKCS1Algorithms_Union3_Intersection0_Element,
    PKCS1Algorithms_Union4_Intersection0_Element,
    PKCS1Algorithms_Union5_Intersection0_Element,
    PKCS1Algorithms_Union6_Intersection0_Element,
    PKCS1Algorithms_Union7_Intersection0_Element,
    PKCS1Algorithms_Union8_Intersection0_Element,
    PKCS1Algorithms_Union9_Intersection0_Element,
    PKCS1Algorithms_Union10_Intersection0_Element,
    ...PKCS1PSourceAlgorithms,
    PKCS1Algorithms_Union12_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION PKCS1Algorithms */

/* eslint-enable */
