/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION EncryptionAlgorithmIdentifier */
/**
 * @summary EncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { CONTENT-ENCRYPTION,
 *                                         { KeyEncryptionAlgorithms } }
 * ```
 */
export type EncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION EncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionAlgorithmIdentifier */
let _cached_decoder_for_EncryptionAlgorithmIdentifier: $.ASN1Decoder<EncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_EncryptionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_EncryptionAlgorithmIdentifier) {
        _cached_decoder_for_EncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_EncryptionAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionAlgorithmIdentifier */
let _cached_encoder_for_EncryptionAlgorithmIdentifier: $.ASN1Encoder<EncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionAlgorithmIdentifier */
/**
 * @summary Encodes a(n) EncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EncryptionAlgorithmIdentifier(
    value: EncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<EncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_EncryptionAlgorithmIdentifier) {
        _cached_encoder_for_EncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_EncryptionAlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionAlgorithmIdentifier */

/* eslint-enable */
