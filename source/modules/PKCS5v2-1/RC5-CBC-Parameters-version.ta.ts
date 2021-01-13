/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version */
/**
 * @summary RC5_CBC_Parameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC5-CBC-Parameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RC5_CBC_Parameters_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version_v1_0 */
/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const RC5_CBC_Parameters_version_v1_0: RC5_CBC_Parameters_version = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version_v1_0 */

/* START_OF_SYMBOL_DEFINITION v1_0 */
/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const v1_0: RC5_CBC_Parameters_version = RC5_CBC_Parameters_version_v1_0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1_0 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters_version */
let _cached_decoder_for_RC5_CBC_Parameters_version: $.ASN1Decoder<RC5_CBC_Parameters_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters_version */
/**
 * @summary Decodes an ASN.1 element into a(n) RC5_CBC_Parameters_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RC5_CBC_Parameters_version} The decoded data structure.
 */
export function _decode_RC5_CBC_Parameters_version(el: _Element) {
    if (!_cached_decoder_for_RC5_CBC_Parameters_version) {
        _cached_decoder_for_RC5_CBC_Parameters_version = $._decodeInteger;
    }
    return _cached_decoder_for_RC5_CBC_Parameters_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters_version */
let _cached_encoder_for_RC5_CBC_Parameters_version: $.ASN1Encoder<RC5_CBC_Parameters_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters_version */
/**
 * @summary Encodes a(n) RC5_CBC_Parameters_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC5_CBC_Parameters_version, encoded as an ASN.1 Element.
 */
export function _encode_RC5_CBC_Parameters_version(
    value: RC5_CBC_Parameters_version,
    elGetter: $.ASN1Encoder<RC5_CBC_Parameters_version>
) {
    if (!_cached_encoder_for_RC5_CBC_Parameters_version) {
        _cached_encoder_for_RC5_CBC_Parameters_version = $._encodeInteger;
    }
    return _cached_encoder_for_RC5_CBC_Parameters_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters_version */

/* eslint-enable */
