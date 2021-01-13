/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
import { id_PBMAC1 } from "../PKCS5v2-1/id-PBMAC1.va";
import {
    PBMAC1_params,
    _decode_PBMAC1_params,
    _encode_PBMAC1_params,
} from "../PKCS5v2-1/PBMAC1-params.ta";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";
export { id_PBMAC1 } from "../PKCS5v2-1/id-PBMAC1.va";
export {
    PBMAC1_params,
    _decode_PBMAC1_params,
    _encode_PBMAC1_params,
} from "../PKCS5v2-1/PBMAC1-params.ta";

/* START_OF_SYMBOL_DEFINITION PBMAC1Algorithms_Union0_Intersection0_Element */
/**
 * @summary PBMAC1Algorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBMAC1Algorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<PBMAC1_params>}
 * @implements {ALGORITHM_IDENTIFIER<PBMAC1_params>}
 */
export const PBMAC1Algorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<PBMAC1_params> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PBMAC1_params,
    },
    encoderFor: {
        "&Type": _encode_PBMAC1_params,
    },
    "&id": id_PBMAC1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PBMAC1Algorithms_Union0_Intersection0_Element */

/* eslint-enable */
