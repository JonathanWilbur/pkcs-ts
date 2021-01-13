/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TokenInfo_version */
/**
 * @summary TokenInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TokenInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION TokenInfo_version_v1 */
/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const TokenInfo_version_v1: TokenInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TokenInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: TokenInfo_version = TokenInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo_version */
let _cached_decoder_for_TokenInfo_version: $.ASN1Decoder<TokenInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_TokenInfo_version */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenInfo_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenInfo_version} The decoded data structure.
 */
export function _decode_TokenInfo_version(el: _Element) {
    if (!_cached_decoder_for_TokenInfo_version) {
        _cached_decoder_for_TokenInfo_version = $._decodeInteger;
    }
    return _cached_decoder_for_TokenInfo_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo_version */
let _cached_encoder_for_TokenInfo_version: $.ASN1Encoder<TokenInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_TokenInfo_version */
/**
 * @summary Encodes a(n) TokenInfo_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenInfo_version, encoded as an ASN.1 Element.
 */
export function _encode_TokenInfo_version(
    value: TokenInfo_version,
    elGetter: $.ASN1Encoder<TokenInfo_version>
) {
    if (!_cached_encoder_for_TokenInfo_version) {
        _cached_encoder_for_TokenInfo_version = $._encodeInteger;
    }
    return _cached_encoder_for_TokenInfo_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenInfo_version */

/* eslint-enable */
