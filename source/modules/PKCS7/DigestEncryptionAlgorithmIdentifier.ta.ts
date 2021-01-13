/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION DigestEncryptionAlgorithmIdentifier */
/**
 * @summary DigestEncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type DigestEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION DigestEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestEncryptionAlgorithmIdentifier */
let _cached_decoder_for_DigestEncryptionAlgorithmIdentifier: $.ASN1Decoder<DigestEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_DigestEncryptionAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) DigestEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_DigestEncryptionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_DigestEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_DigestEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestEncryptionAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigestEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestEncryptionAlgorithmIdentifier */
let _cached_encoder_for_DigestEncryptionAlgorithmIdentifier: $.ASN1Encoder<DigestEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_DigestEncryptionAlgorithmIdentifier */
/**
 * @summary Encodes a(n) DigestEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_DigestEncryptionAlgorithmIdentifier(
    value: DigestEncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<DigestEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_DigestEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_DigestEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DigestEncryptionAlgorithmIdentifier */

/* eslint-enable */
