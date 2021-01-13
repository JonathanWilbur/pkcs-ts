/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RandomNonce */
/**
 * @summary RandomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RandomNonce  ::=  OCTET STRING (SIZE(4..MAX))
 * ```
 */
export type RandomNonce = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RandomNonce */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNonce */
let _cached_decoder_for_RandomNonce: $.ASN1Decoder<RandomNonce> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _decode_RandomNonce */
/**
 * @summary Decodes an ASN.1 element into a(n) RandomNonce
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RandomNonce} The decoded data structure.
 */
export function _decode_RandomNonce(el: _Element) {
    if (!_cached_decoder_for_RandomNonce) {
        _cached_decoder_for_RandomNonce = $._decodeOctetString;
    }
    return _cached_decoder_for_RandomNonce(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNonce */
let _cached_encoder_for_RandomNonce: $.ASN1Encoder<RandomNonce> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNonce */

/* START_OF_SYMBOL_DEFINITION _encode_RandomNonce */
/**
 * @summary Encodes a(n) RandomNonce into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RandomNonce, encoded as an ASN.1 Element.
 */
export function _encode_RandomNonce(
    value: RandomNonce,
    elGetter: $.ASN1Encoder<RandomNonce>
) {
    if (!_cached_encoder_for_RandomNonce) {
        _cached_encoder_for_RandomNonce = $._encodeOctetString;
    }
    return _cached_encoder_for_RandomNonce(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RandomNonce */

/* eslint-enable */
