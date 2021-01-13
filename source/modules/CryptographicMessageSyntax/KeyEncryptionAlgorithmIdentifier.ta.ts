/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmIdentifier */
/**
 * @summary KeyEncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyEncryptionAlgorithmIdentifier */
let _cached_decoder_for_KeyEncryptionAlgorithmIdentifier: $.ASN1Decoder<KeyEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyEncryptionAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_KeyEncryptionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyEncryptionAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyEncryptionAlgorithmIdentifier */
let _cached_encoder_for_KeyEncryptionAlgorithmIdentifier: $.ASN1Encoder<KeyEncryptionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyEncryptionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyEncryptionAlgorithmIdentifier */
/**
 * @summary Encodes a(n) KeyEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyEncryptionAlgorithmIdentifier(
    value: KeyEncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<KeyEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyEncryptionAlgorithmIdentifier */

/* eslint-enable */
