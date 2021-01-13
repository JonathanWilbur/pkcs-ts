/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithm */
/**
 * @summary MessageAuthenticationCodeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithm  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCodeAlgorithm */
let _cached_decoder_for_MessageAuthenticationCodeAlgorithm: $.ASN1Decoder<MessageAuthenticationCodeAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCodeAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCodeAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithm} The decoded data structure.
 */
export function _decode_MessageAuthenticationCodeAlgorithm(el: _Element) {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCodeAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCodeAlgorithm */
let _cached_encoder_for_MessageAuthenticationCodeAlgorithm: $.ASN1Encoder<MessageAuthenticationCodeAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCodeAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCodeAlgorithm */
/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_MessageAuthenticationCodeAlgorithm(
    value: MessageAuthenticationCodeAlgorithm,
    elGetter: $.ASN1Encoder<MessageAuthenticationCodeAlgorithm>
) {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithm(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCodeAlgorithm */

/* eslint-enable */
