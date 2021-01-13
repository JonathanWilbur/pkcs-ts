/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ContentEncryptionAlgorithmIdentifier */
/**
 * @summary ContentEncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentEncryptionAlgorithmIdentifier */
let _cached_decoder_for_ContentEncryptionAlgorithmIdentifier: $.ASN1Decoder<ContentEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ContentEncryptionAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ContentEncryptionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_ContentEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentEncryptionAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentEncryptionAlgorithmIdentifier */
let _cached_encoder_for_ContentEncryptionAlgorithmIdentifier: $.ASN1Encoder<ContentEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ContentEncryptionAlgorithmIdentifier */
/**
 * @summary Encodes a(n) ContentEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentEncryptionAlgorithmIdentifier(
    value: ContentEncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ContentEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_ContentEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentEncryptionAlgorithmIdentifier */

/* eslint-enable */
