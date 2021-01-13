/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION PrivateKeyAlgorithmIdentifier */
/**
 * @summary PrivateKeyAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { PUBLIC-KEY,
 *                                     { PrivateKeyAlgorithms } }
 * ```
 */
export type PrivateKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION PrivateKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyAlgorithmIdentifier */
let _cached_decoder_for_PrivateKeyAlgorithmIdentifier: $.ASN1Decoder<PrivateKeyAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKeyAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_PrivateKeyAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_decoder_for_PrivateKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PrivateKeyAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyAlgorithmIdentifier */
let _cached_encoder_for_PrivateKeyAlgorithmIdentifier: $.ASN1Encoder<PrivateKeyAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKeyAlgorithmIdentifier */
/**
 * @summary Encodes a(n) PrivateKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyAlgorithmIdentifier(
    value: PrivateKeyAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<PrivateKeyAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_encoder_for_PrivateKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PrivateKeyAlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKeyAlgorithmIdentifier */

/* eslint-enable */
