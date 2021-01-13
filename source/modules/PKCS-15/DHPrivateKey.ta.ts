/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DHPrivateKey */
/**
 * @summary DHPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPrivateKey  ::=  INTEGER
 * ```
 */
export type DHPrivateKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPrivateKey */
let _cached_decoder_for_DHPrivateKey: $.ASN1Decoder<DHPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_DHPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) DHPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHPrivateKey} The decoded data structure.
 */
export function _decode_DHPrivateKey(el: _Element) {
    if (!_cached_decoder_for_DHPrivateKey) {
        _cached_decoder_for_DHPrivateKey = $._decodeInteger;
    }
    return _cached_decoder_for_DHPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPrivateKey */
let _cached_encoder_for_DHPrivateKey: $.ASN1Encoder<DHPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_DHPrivateKey */
/**
 * @summary Encodes a(n) DHPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHPrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_DHPrivateKey(
    value: DHPrivateKey,
    elGetter: $.ASN1Encoder<DHPrivateKey>
) {
    if (!_cached_encoder_for_DHPrivateKey) {
        _cached_encoder_for_DHPrivateKey = $._encodeInteger;
    }
    return _cached_encoder_for_DHPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DHPrivateKey */

/* eslint-enable */
