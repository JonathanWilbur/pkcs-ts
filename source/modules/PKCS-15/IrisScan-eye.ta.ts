/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_IrisScan_eye {
    left = 0,
    right = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type IrisScan_eye = _enum_for_IrisScan_eye;
/* END_OF_SYMBOL_DEFINITION IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye */
/**
 * @summary IrisScan_eye
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IrisScan-eye ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const IrisScan_eye = _enum_for_IrisScan_eye;
/* END_OF_SYMBOL_DEFINITION IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye_left */
/**
 * @summary IrisScan_eye_left
 * @constant
 * @type {number}
 */
export const IrisScan_eye_left: IrisScan_eye =
    IrisScan_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IrisScan_eye_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 * @type {number}
 */
export const left: IrisScan_eye =
    IrisScan_eye.left; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION IrisScan_eye_right */
/**
 * @summary IrisScan_eye_right
 * @constant
 * @type {number}
 */
export const IrisScan_eye_right: IrisScan_eye =
    IrisScan_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IrisScan_eye_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 * @type {number}
 */
export const right: IrisScan_eye =
    IrisScan_eye.right; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IrisScan_eye */
let _cached_decoder_for_IrisScan_eye: $.ASN1Decoder<IrisScan_eye> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _decode_IrisScan_eye */
/**
 * @summary Decodes an ASN.1 element into a(n) IrisScan_eye
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IrisScan_eye} The decoded data structure.
 */
export function _decode_IrisScan_eye(el: _Element) {
    if (!_cached_decoder_for_IrisScan_eye) {
        _cached_decoder_for_IrisScan_eye = $._decodeEnumerated;
    }
    return _cached_decoder_for_IrisScan_eye(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IrisScan_eye */
let _cached_encoder_for_IrisScan_eye: $.ASN1Encoder<IrisScan_eye> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IrisScan_eye */

/* START_OF_SYMBOL_DEFINITION _encode_IrisScan_eye */
/**
 * @summary Encodes a(n) IrisScan_eye into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IrisScan_eye, encoded as an ASN.1 Element.
 */
export function _encode_IrisScan_eye(
    value: IrisScan_eye,
    elGetter: $.ASN1Encoder<IrisScan_eye>
) {
    if (!_cached_encoder_for_IrisScan_eye) {
        _cached_encoder_for_IrisScan_eye = $._encodeEnumerated;
    }
    return _cached_encoder_for_IrisScan_eye(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IrisScan_eye */

/* eslint-enable */
