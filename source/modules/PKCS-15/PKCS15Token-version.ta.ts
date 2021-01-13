/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PKCS15Token_version */
/**
 * @summary PKCS15Token_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Token-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKCS15Token_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION PKCS15Token_version_v1 */
/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const PKCS15Token_version_v1: PKCS15Token_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKCS15Token_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const v1: PKCS15Token_version = PKCS15Token_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token_version */
let _cached_decoder_for_PKCS15Token_version: $.ASN1Decoder<PKCS15Token_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS15Token_version */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS15Token_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS15Token_version} The decoded data structure.
 */
export function _decode_PKCS15Token_version(el: _Element) {
    if (!_cached_decoder_for_PKCS15Token_version) {
        _cached_decoder_for_PKCS15Token_version = $._decodeInteger;
    }
    return _cached_decoder_for_PKCS15Token_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token_version */
let _cached_encoder_for_PKCS15Token_version: $.ASN1Encoder<PKCS15Token_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS15Token_version */
/**
 * @summary Encodes a(n) PKCS15Token_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS15Token_version, encoded as an ASN.1 Element.
 */
export function _encode_PKCS15Token_version(
    value: PKCS15Token_version,
    elGetter: $.ASN1Encoder<PKCS15Token_version>
) {
    if (!_cached_encoder_for_PKCS15Token_version) {
        _cached_encoder_for_PKCS15Token_version = $._encodeInteger;
    }
    return _cached_encoder_for_PKCS15Token_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS15Token_version */

/* eslint-enable */
