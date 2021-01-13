/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_FingerPrint_hand */
/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_FingerPrint_hand {
    left = 0,
    right = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION FingerPrint_hand */
/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type FingerPrint_hand = _enum_for_FingerPrint_hand;
/* END_OF_SYMBOL_DEFINITION FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION FingerPrint_hand */
/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const FingerPrint_hand = _enum_for_FingerPrint_hand;
/* END_OF_SYMBOL_DEFINITION FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION FingerPrint_hand_left */
/**
 * @summary FingerPrint_hand_left
 * @constant
 * @type {number}
 */
export const FingerPrint_hand_left: FingerPrint_hand =
    FingerPrint_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_hand_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 * @type {number}
 */
export const left: FingerPrint_hand =
    FingerPrint_hand.left; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION FingerPrint_hand_right */
/**
 * @summary FingerPrint_hand_right
 * @constant
 * @type {number}
 */
export const FingerPrint_hand_right: FingerPrint_hand =
    FingerPrint_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_hand_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 * @type {number}
 */
export const right: FingerPrint_hand =
    FingerPrint_hand.right; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FingerPrint_hand */
let _cached_decoder_for_FingerPrint_hand: $.ASN1Decoder<FingerPrint_hand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION _decode_FingerPrint_hand */
/**
 * @summary Decodes an ASN.1 element into a(n) FingerPrint_hand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FingerPrint_hand} The decoded data structure.
 */
export function _decode_FingerPrint_hand(el: _Element) {
    if (!_cached_decoder_for_FingerPrint_hand) {
        _cached_decoder_for_FingerPrint_hand = $._decodeEnumerated;
    }
    return _cached_decoder_for_FingerPrint_hand(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FingerPrint_hand */
let _cached_encoder_for_FingerPrint_hand: $.ASN1Encoder<FingerPrint_hand> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FingerPrint_hand */

/* START_OF_SYMBOL_DEFINITION _encode_FingerPrint_hand */
/**
 * @summary Encodes a(n) FingerPrint_hand into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FingerPrint_hand, encoded as an ASN.1 Element.
 */
export function _encode_FingerPrint_hand(
    value: FingerPrint_hand,
    elGetter: $.ASN1Encoder<FingerPrint_hand>
) {
    if (!_cached_encoder_for_FingerPrint_hand) {
        _cached_encoder_for_FingerPrint_hand = $._encodeEnumerated;
    }
    return _cached_encoder_for_FingerPrint_hand(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FingerPrint_hand */

/* eslint-enable */
