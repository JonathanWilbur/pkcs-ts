/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca";
export {
    compute_checksum /* IMPORTED_SHORT_NAMED_BIT */,
    compute_signature /* IMPORTED_SHORT_NAMED_BIT */,
    decipher /* IMPORTED_SHORT_NAMED_BIT */,
    encipher /* IMPORTED_SHORT_NAMED_BIT */,
    generate_key /* IMPORTED_SHORT_NAMED_BIT */,
    hash /* IMPORTED_SHORT_NAMED_BIT */,
    Operations,
    Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */,
    Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */,
    Operations_decipher /* IMPORTED_LONG_NAMED_BIT */,
    Operations_encipher /* IMPORTED_LONG_NAMED_BIT */,
    Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */,
    Operations_hash /* IMPORTED_LONG_NAMED_BIT */,
    Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */,
    Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */,
    verify_checksum /* IMPORTED_SHORT_NAMED_BIT */,
    verify_signature /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Operations,
    _encode_Operations,
} from "../PKCS-15/Operations.ta";
export { PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION pkcs15_alg_null */
/**
 * @summary pkcs15_alg_null
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-alg-null  PKCS15-ALGORITHM ::= { PARAMETERS NULL OPERATIONS {{generate-key}} ID -1}
 * ```
 *
 * @constant
 * @type {PKCS15_ALGORITHM<NULL>}
 * @implements {PKCS15_ALGORITHM<NULL>}
 */
export const pkcs15_alg_null: PKCS15_ALGORITHM<NULL> = {
    class: "PKCS15-ALGORITHM",
    decoderFor: {
        "&Parameters": $._decodeNull,
    },
    encoderFor: {
        "&Parameters": $._encodeNull,
    },
    "&id": -1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Parameters": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Operations": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkcs15_alg_null */

/* eslint-enable */
