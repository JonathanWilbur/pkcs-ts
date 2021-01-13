/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Version */
/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER { v1(0), v2(1) } (v1, ..., v2)
 * ```
 */
export type Version = INTEGER;
/* END_OF_SYMBOL_DEFINITION Version */

/* START_OF_SYMBOL_DEFINITION Version_v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION Version_v2 */
/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */
let _cached_decoder_for_Version: $.ASN1Decoder<Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _decode_Version */
/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Version} The decoded data structure.
 */
export function _decode_Version(el: _Element) {
    if (!_cached_decoder_for_Version) {
        _cached_decoder_for_Version = $._decodeInteger;
    }
    return _cached_decoder_for_Version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */
let _cached_encoder_for_Version: $.ASN1Encoder<Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _encode_Version */
/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export function _encode_Version(
    value: Version,
    elGetter: $.ASN1Encoder<Version>
) {
    if (!_cached_encoder_for_Version) {
        _cached_encoder_for_Version = $._encodeInteger;
    }
    return _cached_encoder_for_Version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Version */

/* eslint-enable */
