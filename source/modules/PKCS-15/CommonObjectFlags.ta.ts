/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags */
/**
 * @summary CommonObjectFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonObjectFlags  ::=  BIT STRING { private (0), modifiable (1) }
 * ```
 */
export type CommonObjectFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags_private_ */
/**
 * @summary CommonObjectFlags_private_
 * @constant
 */
export const CommonObjectFlags_private_: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 */
export const private_: number = CommonObjectFlags_private_; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION CommonObjectFlags_modifiable */
/**
 * @summary CommonObjectFlags_modifiable
 * @constant
 */
export const CommonObjectFlags_modifiable: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CommonObjectFlags_modifiable */

/* START_OF_SYMBOL_DEFINITION modifiable */
/**
 * @summary modifiable
 * @constant
 */
export const modifiable: number = CommonObjectFlags_modifiable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION modifiable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectFlags */
let _cached_decoder_for_CommonObjectFlags: $.ASN1Decoder<CommonObjectFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _decode_CommonObjectFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonObjectFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonObjectFlags} The decoded data structure.
 */
export function _decode_CommonObjectFlags(el: _Element) {
    if (!_cached_decoder_for_CommonObjectFlags) {
        _cached_decoder_for_CommonObjectFlags = $._decodeBitString;
    }
    return _cached_decoder_for_CommonObjectFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectFlags */
let _cached_encoder_for_CommonObjectFlags: $.ASN1Encoder<CommonObjectFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectFlags */

/* START_OF_SYMBOL_DEFINITION _encode_CommonObjectFlags */
/**
 * @summary Encodes a(n) CommonObjectFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonObjectFlags, encoded as an ASN.1 Element.
 */
export function _encode_CommonObjectFlags(
    value: CommonObjectFlags,
    elGetter: $.ASN1Encoder<CommonObjectFlags>
) {
    if (!_cached_encoder_for_CommonObjectFlags) {
        _cached_encoder_for_CommonObjectFlags = $._encodeBitString;
    }
    return _cached_encoder_for_CommonObjectFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonObjectFlags */

/* eslint-enable */
