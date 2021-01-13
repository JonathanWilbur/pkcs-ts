/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ECPrivateKey */
/**
 * @summary ECPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPrivateKey  ::=  INTEGER
 * ```
 */
export type ECPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */
let _cached_decoder_for_ECPrivateKey: $.ASN1Decoder<ECPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPrivateKey} The decoded data structure.
 */
export function _decode_ECPrivateKey(el: _Element) {
    if (!_cached_decoder_for_ECPrivateKey) {
        _cached_decoder_for_ECPrivateKey = $._decodeInteger;
    }
    return _cached_decoder_for_ECPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */
let _cached_encoder_for_ECPrivateKey: $.ASN1Encoder<ECPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */
/**
 * @summary Encodes a(n) ECPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_ECPrivateKey(
    value: ECPrivateKey,
    elGetter: $.ASN1Encoder<ECPrivateKey>
) {
    if (!_cached_encoder_for_ECPrivateKey) {
        _cached_encoder_for_ECPrivateKey = $._encodeInteger;
    }
    return _cached_encoder_for_ECPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */

/* eslint-enable */
