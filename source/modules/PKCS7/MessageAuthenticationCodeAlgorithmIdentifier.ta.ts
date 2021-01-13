/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithmIdentifier */
/**
 * @summary MessageAuthenticationCodeAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier */
let _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Decoder<MessageAuthenticationCodeAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCodeAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_MessageAuthenticationCodeAlgorithmIdentifier(
    el: _Element
) {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCodeAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier */
let _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCodeAlgorithmIdentifier */
/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageAuthenticationCodeAlgorithmIdentifier(
    value: MessageAuthenticationCodeAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCodeAlgorithmIdentifier */

/* eslint-enable */
