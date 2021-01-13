/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { id_hmacWithSHA1 } from "../PKCS5v2-1/id-hmacWithSHA1.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
export { id_hmacWithSHA1 } from "../PKCS5v2-1/id-hmacWithSHA1.va";

/* START_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union0_Intersection0_Element */
/**
 * @summary SupportingAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<NULL>}
 * @implements {ALGORITHM_IDENTIFIER<NULL>}
 */
export const SupportingAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union0_Intersection0_Element */

/* eslint-enable */
