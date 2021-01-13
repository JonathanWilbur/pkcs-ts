/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKCS-1/EncodingParameters.ta";
import { id_pSpecified } from "../PKCS-1/id-pSpecified.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
export {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKCS-1/EncodingParameters.ta";
export { id_pSpecified } from "../PKCS-1/id-pSpecified.va";

/* START_OF_SYMBOL_DEFINITION PKCS1PSourceAlgorithms_Union0_Intersection0_Element */
/**
 * @summary PKCS1PSourceAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1PSourceAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<EncodingParameters>}
 * @implements {ALGORITHM_IDENTIFIER<EncodingParameters>}
 */
export const PKCS1PSourceAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<EncodingParameters> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_EncodingParameters,
    },
    encoderFor: {
        "&Type": _encode_EncodingParameters,
    },
    "&id": id_pSpecified /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PKCS1PSourceAlgorithms_Union0_Intersection0_Element */

/* eslint-enable */
