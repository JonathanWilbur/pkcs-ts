/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { md5WithRSAEncryption } from "../PKCS-1/md5WithRSAEncryption.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
export { md5WithRSAEncryption } from "../PKCS-1/md5WithRSAEncryption.va";

/* START_OF_SYMBOL_DEFINITION PKCS1Algorithms_Union2_Intersection0_Element */
/**
 * @summary PKCS1Algorithms_Union2_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1Algorithms-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<NULL>}
 * @implements {ALGORITHM_IDENTIFIER<NULL>}
 */
export const PKCS1Algorithms_Union2_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": md5WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PKCS1Algorithms_Union2_Intersection0_Element */

/* eslint-enable */
