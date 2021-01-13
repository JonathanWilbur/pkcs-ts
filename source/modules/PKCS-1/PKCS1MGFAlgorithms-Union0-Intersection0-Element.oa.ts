/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKCS-1/HashAlgorithm.ta";
import { id_mgf1 } from "../PKCS-1/id-mgf1.va";
export { ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKCS-1/HashAlgorithm.ta";
export { id_mgf1 } from "../PKCS-1/id-mgf1.va";

/* START_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms_Union0_Intersection0_Element */
/**
 * @summary PKCS1MGFAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1MGFAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER<HashAlgorithm>}
 * @implements {ALGORITHM_IDENTIFIER<HashAlgorithm>}
 */
export const PKCS1MGFAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<HashAlgorithm> = {
    class: "ALGORITHM-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_HashAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_HashAlgorithm,
    },
    "&id": id_mgf1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms_Union0_Intersection0_Element */

/* eslint-enable */
