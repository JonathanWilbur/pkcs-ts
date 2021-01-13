/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KeyWrapAlgorithm */
/**
 * @summary KeyWrapAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapAlgorithm  ::=  AlgorithmIdentifier
 * ```
 */
export type KeyWrapAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyWrapAlgorithm */
let _cached_decoder_for_KeyWrapAlgorithm: $.ASN1Decoder<KeyWrapAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_KeyWrapAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyWrapAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyWrapAlgorithm} The decoded data structure.
 */
export function _decode_KeyWrapAlgorithm(el: _Element) {
    if (!_cached_decoder_for_KeyWrapAlgorithm) {
        _cached_decoder_for_KeyWrapAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyWrapAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyWrapAlgorithm */
let _cached_encoder_for_KeyWrapAlgorithm: $.ASN1Encoder<KeyWrapAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_KeyWrapAlgorithm */
/**
 * @summary Encodes a(n) KeyWrapAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyWrapAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_KeyWrapAlgorithm(
    value: KeyWrapAlgorithm,
    elGetter: $.ASN1Encoder<KeyWrapAlgorithm>
) {
    if (!_cached_encoder_for_KeyWrapAlgorithm) {
        _cached_encoder_for_KeyWrapAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyWrapAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyWrapAlgorithm */

/* eslint-enable */
