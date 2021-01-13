/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EncodingParameters */
/**
 * @summary EncodingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodingParameters  ::=  OCTET STRING(SIZE(0..MAX))
 * ```
 */
export type EncodingParameters = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodingParameters */
let _cached_decoder_for_EncodingParameters: $.ASN1Decoder<EncodingParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _decode_EncodingParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodingParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodingParameters} The decoded data structure.
 */
export function _decode_EncodingParameters(el: _Element) {
    if (!_cached_decoder_for_EncodingParameters) {
        _cached_decoder_for_EncodingParameters = $._decodeOctetString;
    }
    return _cached_decoder_for_EncodingParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodingParameters */
let _cached_encoder_for_EncodingParameters: $.ASN1Encoder<EncodingParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _encode_EncodingParameters */
/**
 * @summary Encodes a(n) EncodingParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodingParameters, encoded as an ASN.1 Element.
 */
export function _encode_EncodingParameters(
    value: EncodingParameters,
    elGetter: $.ASN1Encoder<EncodingParameters>
) {
    if (!_cached_encoder_for_EncodingParameters) {
        _cached_encoder_for_EncodingParameters = $._encodeOctetString;
    }
    return _cached_encoder_for_EncodingParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodingParameters */

/* eslint-enable */
