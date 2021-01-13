/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TrailerField */
/**
 * @summary TrailerField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrailerField  ::=  INTEGER { trailerFieldBC(1) }
 * ```
 */
export type TrailerField = INTEGER;
/* END_OF_SYMBOL_DEFINITION TrailerField */

/* START_OF_SYMBOL_DEFINITION TrailerField_trailerFieldBC */
/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const TrailerField_trailerFieldBC: TrailerField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TrailerField_trailerFieldBC */

/* START_OF_SYMBOL_DEFINITION trailerFieldBC */
/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const trailerFieldBC: TrailerField = TrailerField_trailerFieldBC; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION trailerFieldBC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrailerField */
let _cached_decoder_for_TrailerField: $.ASN1Decoder<TrailerField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrailerField */

/* START_OF_SYMBOL_DEFINITION _decode_TrailerField */
/**
 * @summary Decodes an ASN.1 element into a(n) TrailerField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrailerField} The decoded data structure.
 */
export function _decode_TrailerField(el: _Element) {
    if (!_cached_decoder_for_TrailerField) {
        _cached_decoder_for_TrailerField = $._decodeInteger;
    }
    return _cached_decoder_for_TrailerField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrailerField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrailerField */
let _cached_encoder_for_TrailerField: $.ASN1Encoder<TrailerField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrailerField */

/* START_OF_SYMBOL_DEFINITION _encode_TrailerField */
/**
 * @summary Encodes a(n) TrailerField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrailerField, encoded as an ASN.1 Element.
 */
export function _encode_TrailerField(
    value: TrailerField,
    elGetter: $.ASN1Encoder<TrailerField>
) {
    if (!_cached_encoder_for_TrailerField) {
        _cached_encoder_for_TrailerField = $._encodeInteger;
    }
    return _cached_encoder_for_TrailerField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrailerField */

/* eslint-enable */
