/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Operations,
    _decode_Operations,
    _encode_Operations,
} from "../PKCS-15/Operations.ta";
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

/* START_OF_SYMBOL_DEFINITION PublicKeyOperations */
/**
 * @summary PublicKeyOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyOperations  ::=  Operations
 * ```
 */
export type PublicKeyOperations = Operations; // DefinedType
/* END_OF_SYMBOL_DEFINITION PublicKeyOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeyOperations */
let _cached_decoder_for_PublicKeyOperations: $.ASN1Decoder<PublicKeyOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeyOperations */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKeyOperations */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyOperations} The decoded data structure.
 */
export function _decode_PublicKeyOperations(el: _Element) {
    if (!_cached_decoder_for_PublicKeyOperations) {
        _cached_decoder_for_PublicKeyOperations = _decode_Operations;
    }
    return _cached_decoder_for_PublicKeyOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicKeyOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeyOperations */
let _cached_encoder_for_PublicKeyOperations: $.ASN1Encoder<PublicKeyOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeyOperations */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKeyOperations */
/**
 * @summary Encodes a(n) PublicKeyOperations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyOperations, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeyOperations(
    value: PublicKeyOperations,
    elGetter: $.ASN1Encoder<PublicKeyOperations>
) {
    if (!_cached_encoder_for_PublicKeyOperations) {
        _cached_encoder_for_PublicKeyOperations = _encode_Operations;
    }
    return _cached_encoder_for_PublicKeyOperations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicKeyOperations */

/* eslint-enable */
