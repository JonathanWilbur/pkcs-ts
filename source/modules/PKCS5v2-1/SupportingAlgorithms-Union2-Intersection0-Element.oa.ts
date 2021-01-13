/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { des_EDE3_CBC } from "../PKCS5v2-1/des-EDE3-CBC.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
export { des_EDE3_CBC } from "../PKCS5v2-1/des-EDE3-CBC.va";

/* START_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union2_Intersection0_Element */
/**
 * @summary SupportingAlgorithms_Union2_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<OCTET_STRING>}
 * @implements {ALGORITHM_IDENTIFIER<OCTET_STRING>}
 */
export const SupportingAlgorithms_Union2_Intersection0_Element: ALGORITHM_IDENTIFIER<OCTET_STRING> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&id": des_EDE3_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union2_Intersection0_Element */

/* eslint-enable */
