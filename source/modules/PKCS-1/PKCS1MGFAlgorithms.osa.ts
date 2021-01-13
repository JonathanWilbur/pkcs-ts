/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { PKCS1MGFAlgorithms_Union0_Intersection0_Element } from "../PKCS-1/PKCS1MGFAlgorithms-Union0-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */
/**
 * @summary PKCS1MGFAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
 *     { OID id-mgf1 PARAMETERS HashAlgorithm },
 *     ...  -- Allows for future expansion --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PKCS1MGFAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PKCS1MGFAlgorithms_Union0_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */

/* eslint-enable */
