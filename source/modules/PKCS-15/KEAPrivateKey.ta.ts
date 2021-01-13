/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KEAPrivateKey */
/**
 * @summary KEAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEAPrivateKey  ::=  INTEGER
 * ```
 */
export type KEAPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION KEAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KEAPrivateKey */
let _cached_decoder_for_KEAPrivateKey: $.ASN1Decoder<KEAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KEAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_KEAPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) KEAPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEAPrivateKey} The decoded data structure.
 */
export function _decode_KEAPrivateKey(el: _Element) {
    if (!_cached_decoder_for_KEAPrivateKey) {
        _cached_decoder_for_KEAPrivateKey = $._decodeInteger;
    }
    return _cached_decoder_for_KEAPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KEAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KEAPrivateKey */
let _cached_encoder_for_KEAPrivateKey: $.ASN1Encoder<KEAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KEAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_KEAPrivateKey */
/**
 * @summary Encodes a(n) KEAPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEAPrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_KEAPrivateKey(
    value: KEAPrivateKey,
    elGetter: $.ASN1Encoder<KEAPrivateKey>
) {
    if (!_cached_encoder_for_KEAPrivateKey) {
        _cached_encoder_for_KEAPrivateKey = $._encodeInteger;
    }
    return _cached_encoder_for_KEAPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KEAPrivateKey */

/* eslint-enable */
