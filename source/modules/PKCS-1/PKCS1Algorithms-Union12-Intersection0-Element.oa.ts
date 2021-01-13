/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import { id_RSASSA_PSS } from "../PKCS-1/id-RSASSA-PSS.va";
import {
    RSASSA_PSS_params,
    _decode_RSASSA_PSS_params,
    _encode_RSASSA_PSS_params,
} from "../PKCS-1/RSASSA-PSS-params.ta";
export { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
export { id_RSASSA_PSS } from "../PKCS-1/id-RSASSA-PSS.va";
export {
    RSASSA_PSS_params,
    _decode_RSASSA_PSS_params,
    _encode_RSASSA_PSS_params,
} from "../PKCS-1/RSASSA-PSS-params.ta";

/* START_OF_SYMBOL_DEFINITION PKCS1Algorithms_Union12_Intersection0_Element */
/**
 * @summary PKCS1Algorithms_Union12_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1Algorithms-Union12-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<RSASSA_PSS_params>}
 * @implements {ALGORITHM_IDENTIFIER<RSASSA_PSS_params>}
 */
export const PKCS1Algorithms_Union12_Intersection0_Element: ALGORITHM_IDENTIFIER<RSASSA_PSS_params> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RSASSA_PSS_params,
    },
    encoderFor: {
        "&Type": _encode_RSASSA_PSS_params,
    },
    "&id": id_RSASSA_PSS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PKCS1Algorithms_Union12_Intersection0_Element */

/* eslint-enable */
