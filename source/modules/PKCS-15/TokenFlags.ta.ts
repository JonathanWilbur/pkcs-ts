/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TokenFlags */
/**
 * @summary TokenFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenFlags  ::=  BIT STRING { readonly (0), loginRequired (1), prnGeneration (2), eidCompliant  (3) }
 * ```
 */
export type TokenFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION TokenFlags */

/* START_OF_SYMBOL_DEFINITION TokenFlags_readonly */
/**
 * @summary TokenFlags_readonly
 * @constant
 */
export const TokenFlags_readonly: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TokenFlags_readonly */

/* START_OF_SYMBOL_DEFINITION readonly */
/**
 * @summary readonly
 * @constant
 */
export const readonly: number = TokenFlags_readonly; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION readonly */

/* START_OF_SYMBOL_DEFINITION TokenFlags_loginRequired */
/**
 * @summary TokenFlags_loginRequired
 * @constant
 */
export const TokenFlags_loginRequired: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TokenFlags_loginRequired */

/* START_OF_SYMBOL_DEFINITION loginRequired */
/**
 * @summary loginRequired
 * @constant
 */
export const loginRequired: number = TokenFlags_loginRequired; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION loginRequired */

/* START_OF_SYMBOL_DEFINITION TokenFlags_prnGeneration */
/**
 * @summary TokenFlags_prnGeneration
 * @constant
 */
export const TokenFlags_prnGeneration: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TokenFlags_prnGeneration */

/* START_OF_SYMBOL_DEFINITION prnGeneration */
/**
 * @summary prnGeneration
 * @constant
 */
export const prnGeneration: number = TokenFlags_prnGeneration; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION prnGeneration */

/* START_OF_SYMBOL_DEFINITION TokenFlags_eidCompliant */
/**
 * @summary TokenFlags_eidCompliant
 * @constant
 */
export const TokenFlags_eidCompliant: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TokenFlags_eidCompliant */

/* START_OF_SYMBOL_DEFINITION eidCompliant */
/**
 * @summary eidCompliant
 * @constant
 */
export const eidCompliant: number = TokenFlags_eidCompliant; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION eidCompliant */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenFlags */
let _cached_decoder_for_TokenFlags: $.ASN1Decoder<TokenFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenFlags */

/* START_OF_SYMBOL_DEFINITION _decode_TokenFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) TokenFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenFlags} The decoded data structure.
 */
export function _decode_TokenFlags(el: _Element) {
    if (!_cached_decoder_for_TokenFlags) {
        _cached_decoder_for_TokenFlags = $._decodeBitString;
    }
    return _cached_decoder_for_TokenFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TokenFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenFlags */
let _cached_encoder_for_TokenFlags: $.ASN1Encoder<TokenFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenFlags */

/* START_OF_SYMBOL_DEFINITION _encode_TokenFlags */
/**
 * @summary Encodes a(n) TokenFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenFlags, encoded as an ASN.1 Element.
 */
export function _encode_TokenFlags(
    value: TokenFlags,
    elGetter: $.ASN1Encoder<TokenFlags>
) {
    if (!_cached_encoder_for_TokenFlags) {
        _cached_encoder_for_TokenFlags = $._encodeBitString;
    }
    return _cached_encoder_for_TokenFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TokenFlags */

/* eslint-enable */
