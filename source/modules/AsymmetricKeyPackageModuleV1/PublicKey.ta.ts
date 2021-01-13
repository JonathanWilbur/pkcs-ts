/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PublicKey */
/**
 * @summary PublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export type PublicKey = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKey */
let _cached_decoder_for_PublicKey: $.ASN1Decoder<PublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKey} The decoded data structure.
 */
export function _decode_PublicKey(el: _Element) {
    if (!_cached_decoder_for_PublicKey) {
        _cached_decoder_for_PublicKey = $._decodeBitString;
    }
    return _cached_decoder_for_PublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKey */
let _cached_encoder_for_PublicKey: $.ASN1Encoder<PublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKey */
/**
 * @summary Encodes a(n) PublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKey, encoded as an ASN.1 Element.
 */
export function _encode_PublicKey(
    value: PublicKey,
    elGetter: $.ASN1Encoder<PublicKey>
) {
    if (!_cached_encoder_for_PublicKey) {
        _cached_encoder_for_PublicKey = $._encodeBitString;
    }
    return _cached_encoder_for_PublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicKey */

/* eslint-enable */
