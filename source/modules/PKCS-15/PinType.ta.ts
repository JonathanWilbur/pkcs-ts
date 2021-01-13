/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_PinType */
export enum _enum_for_PinType {
    bcd = 0,
    ascii_numeric = 1,
    utf8 = 2,
    half_nibble_bcd = 3,
    iso9564_1 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PinType */

/* START_OF_SYMBOL_DEFINITION PinType */
/**
 * @summary PinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PinType  ::=  ENUMERATED {bcd, ascii-numeric, utf8, ..., half-nibble-bcd, iso9564-1}
 * ```@enum {number}
 */
export type PinType = _enum_for_PinType | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PinType */

/* START_OF_SYMBOL_DEFINITION PinType_bcd */
/**
 * @summary PinType_bcd
 * @constant
 * @type {number}
 */
export const PinType_bcd: PinType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PinType_bcd */

/* START_OF_SYMBOL_DEFINITION bcd */
/**
 * @summary bcd
 * @constant
 * @type {number}
 */
export const bcd: PinType = PinType_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bcd */

/* START_OF_SYMBOL_DEFINITION PinType_ascii_numeric */
/**
 * @summary PinType_ascii_numeric
 * @constant
 * @type {number}
 */
export const PinType_ascii_numeric: PinType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PinType_ascii_numeric */

/* START_OF_SYMBOL_DEFINITION ascii_numeric */
/**
 * @summary ascii_numeric
 * @constant
 * @type {number}
 */
export const ascii_numeric: PinType = PinType_ascii_numeric; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ascii_numeric */

/* START_OF_SYMBOL_DEFINITION PinType_utf8 */
/**
 * @summary PinType_utf8
 * @constant
 * @type {number}
 */
export const PinType_utf8: PinType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PinType_utf8 */

/* START_OF_SYMBOL_DEFINITION utf8 */
/**
 * @summary utf8
 * @constant
 * @type {number}
 */
export const utf8: PinType = PinType_utf8; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION utf8 */

/* START_OF_SYMBOL_DEFINITION PinType_half_nibble_bcd */
/**
 * @summary PinType_half_nibble_bcd
 * @constant
 * @type {number}
 */
export const PinType_half_nibble_bcd: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PinType_half_nibble_bcd */

/* START_OF_SYMBOL_DEFINITION half_nibble_bcd */
/**
 * @summary half_nibble_bcd
 * @constant
 * @type {number}
 */
export const half_nibble_bcd: PinType = PinType_half_nibble_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION half_nibble_bcd */

/* START_OF_SYMBOL_DEFINITION PinType_iso9564_1 */
/**
 * @summary PinType_iso9564_1
 * @constant
 * @type {number}
 */
export const PinType_iso9564_1: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PinType_iso9564_1 */

/* START_OF_SYMBOL_DEFINITION iso9564_1 */
/**
 * @summary iso9564_1
 * @constant
 * @type {number}
 */
export const iso9564_1: PinType = PinType_iso9564_1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION iso9564_1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PinType */
let _cached_decoder_for_PinType: $.ASN1Decoder<PinType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PinType */

/* START_OF_SYMBOL_DEFINITION _decode_PinType */
/**
 * @summary Decodes an ASN.1 element into a(n) PinType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PinType} The decoded data structure.
 */
export function _decode_PinType(el: _Element) {
    if (!_cached_decoder_for_PinType) {
        _cached_decoder_for_PinType = $._decodeEnumerated;
    }
    return _cached_decoder_for_PinType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PinType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PinType */
let _cached_encoder_for_PinType: $.ASN1Encoder<PinType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PinType */

/* START_OF_SYMBOL_DEFINITION _encode_PinType */
/**
 * @summary Encodes a(n) PinType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PinType, encoded as an ASN.1 Element.
 */
export function _encode_PinType(
    value: PinType,
    elGetter: $.ASN1Encoder<PinType>
) {
    if (!_cached_encoder_for_PinType) {
        _cached_encoder_for_PinType = $._encodeEnumerated;
    }
    return _cached_encoder_for_PinType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PinType */

/* eslint-enable */
