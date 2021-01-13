/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import {
    RC2_CBC_Parameter,
    _decode_RC2_CBC_Parameter,
    _encode_RC2_CBC_Parameter,
} from "../PKCS5v2-1/RC2-CBC-Parameter.ta";
import { rc2CBC } from "../PKCS5v2-1/rc2CBC.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
export {
    RC2_CBC_Parameter,
    _decode_RC2_CBC_Parameter,
    _encode_RC2_CBC_Parameter,
} from "../PKCS5v2-1/RC2-CBC-Parameter.ta";
export { rc2CBC } from "../PKCS5v2-1/rc2CBC.va";

/* START_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union3_Intersection0_Element */
/**
 * @summary SupportingAlgorithms_Union3_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportingAlgorithms-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<RC2_CBC_Parameter>}
 * @implements {ALGORITHM_IDENTIFIER<RC2_CBC_Parameter>}
 */
export const SupportingAlgorithms_Union3_Intersection0_Element: ALGORITHM_IDENTIFIER<RC2_CBC_Parameter> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RC2_CBC_Parameter,
    },
    encoderFor: {
        "&Type": _encode_RC2_CBC_Parameter,
    },
    "&id": rc2CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION SupportingAlgorithms_Union3_Intersection0_Element */

/* eslint-enable */
