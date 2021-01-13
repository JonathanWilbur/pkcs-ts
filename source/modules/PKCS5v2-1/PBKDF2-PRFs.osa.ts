/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { PBKDF2_PRFs_Union0_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union0-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union1_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union1-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union2_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union2-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union3_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union3-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union4_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union4-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union5_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union5-Intersection0-Element.oa";
import { PBKDF2_PRFs_Union6_Intersection0_Element } from "../PKCS5v2-1/PBKDF2-PRFs-Union6-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION PBKDF2_PRFs */
/**
 * @summary PBKDF2_PRFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFs ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY id-hmacWithSHA1}       |
 *     {NULL IDENTIFIED BY id-hmacWithSHA224}     |
 *     {NULL IDENTIFIED BY id-hmacWithSHA256}     |
 *     {NULL IDENTIFIED BY id-hmacWithSHA384}     |
 *     {NULL IDENTIFIED BY id-hmacWithSHA512}     |
 *     {NULL IDENTIFIED BY id-hmacWithSHA512-224} |
 *     {NULL IDENTIFIED BY id-hmacWithSHA512-256},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBKDF2_PRFs: ALGORITHM_IDENTIFIER<any>[] = [
    PBKDF2_PRFs_Union0_Intersection0_Element,
    PBKDF2_PRFs_Union1_Intersection0_Element,
    PBKDF2_PRFs_Union2_Intersection0_Element,
    PBKDF2_PRFs_Union3_Intersection0_Element,
    PBKDF2_PRFs_Union4_Intersection0_Element,
    PBKDF2_PRFs_Union5_Intersection0_Element,
    PBKDF2_PRFs_Union6_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION PBKDF2_PRFs */

/* eslint-enable */
