/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_FingerPrint_finger */
/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_FingerPrint_finger {
    thumb = 0,
    pointerFinger = 1,
    middleFinger = 2,
    ringFinger = 3,
    littleFinger = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger */
/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type FingerPrint_finger = _enum_for_FingerPrint_finger;
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger */
/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const FingerPrint_finger = _enum_for_FingerPrint_finger;
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger_thumb */
/**
 * @summary FingerPrint_finger_thumb
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_thumb: FingerPrint_finger =
    FingerPrint_finger.thumb; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger_thumb */

/* START_OF_SYMBOL_DEFINITION thumb */
/**
 * @summary thumb
 * @constant
 * @type {number}
 */
export const thumb: FingerPrint_finger =
    FingerPrint_finger.thumb; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION thumb */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger_pointerFinger */
/**
 * @summary FingerPrint_finger_pointerFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_pointerFinger: FingerPrint_finger =
    FingerPrint_finger.pointerFinger; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger_pointerFinger */

/* START_OF_SYMBOL_DEFINITION pointerFinger */
/**
 * @summary pointerFinger
 * @constant
 * @type {number}
 */
export const pointerFinger: FingerPrint_finger =
    FingerPrint_finger.pointerFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pointerFinger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger_middleFinger */
/**
 * @summary FingerPrint_finger_middleFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_middleFinger: FingerPrint_finger =
    FingerPrint_finger.middleFinger; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger_middleFinger */

/* START_OF_SYMBOL_DEFINITION middleFinger */
/**
 * @summary middleFinger
 * @constant
 * @type {number}
 */
export const middleFinger: FingerPrint_finger =
    FingerPrint_finger.middleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION middleFinger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger_ringFinger */
/**
 * @summary FingerPrint_finger_ringFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_ringFinger: FingerPrint_finger =
    FingerPrint_finger.ringFinger; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger_ringFinger */

/* START_OF_SYMBOL_DEFINITION ringFinger */
/**
 * @summary ringFinger
 * @constant
 * @type {number}
 */
export const ringFinger: FingerPrint_finger =
    FingerPrint_finger.ringFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ringFinger */

/* START_OF_SYMBOL_DEFINITION FingerPrint_finger_littleFinger */
/**
 * @summary FingerPrint_finger_littleFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_littleFinger: FingerPrint_finger =
    FingerPrint_finger.littleFinger; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FingerPrint_finger_littleFinger */

/* START_OF_SYMBOL_DEFINITION littleFinger */
/**
 * @summary littleFinger
 * @constant
 * @type {number}
 */
export const littleFinger: FingerPrint_finger =
    FingerPrint_finger.littleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION littleFinger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FingerPrint_finger */
let _cached_decoder_for_FingerPrint_finger: $.ASN1Decoder<FingerPrint_finger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION _decode_FingerPrint_finger */
/**
 * @summary Decodes an ASN.1 element into a(n) FingerPrint_finger
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FingerPrint_finger} The decoded data structure.
 */
export function _decode_FingerPrint_finger(el: _Element) {
    if (!_cached_decoder_for_FingerPrint_finger) {
        _cached_decoder_for_FingerPrint_finger = $._decodeEnumerated;
    }
    return _cached_decoder_for_FingerPrint_finger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FingerPrint_finger */
let _cached_encoder_for_FingerPrint_finger: $.ASN1Encoder<FingerPrint_finger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FingerPrint_finger */

/* START_OF_SYMBOL_DEFINITION _encode_FingerPrint_finger */
/**
 * @summary Encodes a(n) FingerPrint_finger into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FingerPrint_finger, encoded as an ASN.1 Element.
 */
export function _encode_FingerPrint_finger(
    value: FingerPrint_finger,
    elGetter: $.ASN1Encoder<FingerPrint_finger>
) {
    if (!_cached_encoder_for_FingerPrint_finger) {
        _cached_encoder_for_FingerPrint_finger = $._encodeEnumerated;
    }
    return _cached_encoder_for_FingerPrint_finger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FingerPrint_finger */

/* eslint-enable */
