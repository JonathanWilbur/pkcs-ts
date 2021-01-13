/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SHA1Parameters */
/**
 * @summary SHA1Parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SHA1Parameters  ::=  NULL
 * ```
 */
export type SHA1Parameters = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION SHA1Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SHA1Parameters */
let _cached_decoder_for_SHA1Parameters: $.ASN1Decoder<SHA1Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SHA1Parameters */

/* START_OF_SYMBOL_DEFINITION _decode_SHA1Parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) SHA1Parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SHA1Parameters} The decoded data structure.
 */
export function _decode_SHA1Parameters(el: _Element) {
    if (!_cached_decoder_for_SHA1Parameters) {
        _cached_decoder_for_SHA1Parameters = $._decodeNull;
    }
    return _cached_decoder_for_SHA1Parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SHA1Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SHA1Parameters */
let _cached_encoder_for_SHA1Parameters: $.ASN1Encoder<SHA1Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SHA1Parameters */

/* START_OF_SYMBOL_DEFINITION _encode_SHA1Parameters */
/**
 * @summary Encodes a(n) SHA1Parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SHA1Parameters, encoded as an ASN.1 Element.
 */
export function _encode_SHA1Parameters(
    value: SHA1Parameters,
    elGetter: $.ASN1Encoder<SHA1Parameters>
) {
    if (!_cached_encoder_for_SHA1Parameters) {
        _cached_encoder_for_SHA1Parameters = $._encodeNull;
    }
    return _cached_encoder_for_SHA1Parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SHA1Parameters */

/* eslint-enable */
