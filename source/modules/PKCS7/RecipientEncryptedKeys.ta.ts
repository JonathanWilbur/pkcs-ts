/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RecipientEncryptedKey,
    _decode_RecipientEncryptedKey,
    _encode_RecipientEncryptedKey,
} from "../PKCS7/RecipientEncryptedKey.ta";
export {
    RecipientEncryptedKey,
    _decode_RecipientEncryptedKey,
    _encode_RecipientEncryptedKey,
} from "../PKCS7/RecipientEncryptedKey.ta";

/* START_OF_SYMBOL_DEFINITION RecipientEncryptedKeys */
/**
 * @summary RecipientEncryptedKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientEncryptedKeys  ::=  SEQUENCE OF RecipientEncryptedKey
 * ```
 */
export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKeys */
let _cached_decoder_for_RecipientEncryptedKeys: $.ASN1Decoder<RecipientEncryptedKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKeys */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientEncryptedKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientEncryptedKeys} The decoded data structure.
 */
export function _decode_RecipientEncryptedKeys(el: _Element) {
    if (!_cached_decoder_for_RecipientEncryptedKeys) {
        _cached_decoder_for_RecipientEncryptedKeys = $._decodeSequenceOf<RecipientEncryptedKey>(
            () => _decode_RecipientEncryptedKey
        );
    }
    return _cached_decoder_for_RecipientEncryptedKeys(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKeys */
let _cached_encoder_for_RecipientEncryptedKeys: $.ASN1Encoder<RecipientEncryptedKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKeys */
/**
 * @summary Encodes a(n) RecipientEncryptedKeys into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientEncryptedKeys, encoded as an ASN.1 Element.
 */
export function _encode_RecipientEncryptedKeys(
    value: RecipientEncryptedKeys,
    elGetter: $.ASN1Encoder<RecipientEncryptedKeys>
) {
    if (!_cached_encoder_for_RecipientEncryptedKeys) {
        _cached_encoder_for_RecipientEncryptedKeys = $._encodeSequenceOf<RecipientEncryptedKey>(
            () => _encode_RecipientEncryptedKey,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientEncryptedKeys(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKeys */

/* eslint-enable */
