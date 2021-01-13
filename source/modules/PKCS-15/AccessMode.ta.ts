/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AccessMode */
/**
 * @summary AccessMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessMode  ::=  BIT STRING { read (0), update (1), execute (2) }
 * ```
 */
export type AccessMode = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AccessMode */

/* START_OF_SYMBOL_DEFINITION AccessMode_read */
/**
 * @summary AccessMode_read
 * @constant
 */
export const AccessMode_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AccessMode_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = AccessMode_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION AccessMode_update */
/**
 * @summary AccessMode_update
 * @constant
 */
export const AccessMode_update: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AccessMode_update */

/* START_OF_SYMBOL_DEFINITION update */
/**
 * @summary update
 * @constant
 */
export const update: number = AccessMode_update; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION update */

/* START_OF_SYMBOL_DEFINITION AccessMode_execute */
/**
 * @summary AccessMode_execute
 * @constant
 */
export const AccessMode_execute: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AccessMode_execute */

/* START_OF_SYMBOL_DEFINITION execute */
/**
 * @summary execute
 * @constant
 */
export const execute: number = AccessMode_execute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION execute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessMode */
let _cached_decoder_for_AccessMode: $.ASN1Decoder<AccessMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessMode */

/* START_OF_SYMBOL_DEFINITION _decode_AccessMode */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessMode} The decoded data structure.
 */
export function _decode_AccessMode(el: _Element) {
    if (!_cached_decoder_for_AccessMode) {
        _cached_decoder_for_AccessMode = $._decodeBitString;
    }
    return _cached_decoder_for_AccessMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessMode */
let _cached_encoder_for_AccessMode: $.ASN1Encoder<AccessMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessMode */

/* START_OF_SYMBOL_DEFINITION _encode_AccessMode */
/**
 * @summary Encodes a(n) AccessMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessMode, encoded as an ASN.1 Element.
 */
export function _encode_AccessMode(
    value: AccessMode,
    elGetter: $.ASN1Encoder<AccessMode>
) {
    if (!_cached_encoder_for_AccessMode) {
        _cached_encoder_for_AccessMode = $._encodeBitString;
    }
    return _cached_encoder_for_AccessMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessMode */

/* eslint-enable */
