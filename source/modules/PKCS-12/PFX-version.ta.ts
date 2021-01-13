/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PFX_version */
/**
 * @summary PFX_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PFX-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PFX_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION PFX_version */

/* START_OF_SYMBOL_DEFINITION PFX_version_v3 */
/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const PFX_version_v3: PFX_version = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PFX_version_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const v3: PFX_version = PFX_version_v3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX_version */
let _cached_decoder_for_PFX_version: $.ASN1Decoder<PFX_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX_version */

/* START_OF_SYMBOL_DEFINITION _decode_PFX_version */
/**
 * @summary Decodes an ASN.1 element into a(n) PFX_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PFX_version} The decoded data structure.
 */
export function _decode_PFX_version(el: _Element) {
    if (!_cached_decoder_for_PFX_version) {
        _cached_decoder_for_PFX_version = $._decodeInteger;
    }
    return _cached_decoder_for_PFX_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PFX_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX_version */
let _cached_encoder_for_PFX_version: $.ASN1Encoder<PFX_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX_version */

/* START_OF_SYMBOL_DEFINITION _encode_PFX_version */
/**
 * @summary Encodes a(n) PFX_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFX_version, encoded as an ASN.1 Element.
 */
export function _encode_PFX_version(
    value: PFX_version,
    elGetter: $.ASN1Encoder<PFX_version>
) {
    if (!_cached_encoder_for_PFX_version) {
        _cached_encoder_for_PFX_version = $._encodeInteger;
    }
    return _cached_encoder_for_PFX_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PFX_version */

/* eslint-enable */
