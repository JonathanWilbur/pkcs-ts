/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSAPrivateKey */
/**
 * @summary DSAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPrivateKey  ::=  INTEGER
 * ```
 */
export type DSAPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPrivateKey */
let _cached_decoder_for_DSAPrivateKey: $.ASN1Decoder<DSAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_DSAPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) DSAPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAPrivateKey} The decoded data structure.
 */
export function _decode_DSAPrivateKey(el: _Element) {
    if (!_cached_decoder_for_DSAPrivateKey) {
        _cached_decoder_for_DSAPrivateKey = $._decodeInteger;
    }
    return _cached_decoder_for_DSAPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPrivateKey */
let _cached_encoder_for_DSAPrivateKey: $.ASN1Encoder<DSAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_DSAPrivateKey */
/**
 * @summary Encodes a(n) DSAPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAPrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_DSAPrivateKey(
    value: DSAPrivateKey,
    elGetter: $.ASN1Encoder<DSAPrivateKey>
) {
    if (!_cached_encoder_for_DSAPrivateKey) {
        _cached_encoder_for_DSAPrivateKey = $._encodeInteger;
    }
    return _cached_encoder_for_DSAPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSAPrivateKey */

/* eslint-enable */
