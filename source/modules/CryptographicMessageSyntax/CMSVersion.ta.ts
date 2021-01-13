/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CMSVersion */
/**
 * @summary CMSVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion  ::=  INTEGER {v0(0), v1(1), v2(2), v3(3), v4(4)}
 * ```
 */
export type CMSVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION CMSVersion */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v0 */
/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v0 */

/* START_OF_SYMBOL_DEFINITION v0 */
/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v0 */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v1 */
/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const CMSVersion_v1: CMSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const v1: CMSVersion = CMSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v2 */
/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const CMSVersion_v2: CMSVersion = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const v2: CMSVersion = CMSVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v3 */
/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const CMSVersion_v3: CMSVersion = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const v3: CMSVersion = CMSVersion_v3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v4 */
/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const CMSVersion_v4: CMSVersion = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v4 */

/* START_OF_SYMBOL_DEFINITION v4 */
/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const v4: CMSVersion = CMSVersion_v4; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v4 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMSVersion */
let _cached_decoder_for_CMSVersion: $.ASN1Decoder<CMSVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _decode_CMSVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) CMSVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMSVersion} The decoded data structure.
 */
export function _decode_CMSVersion(el: _Element) {
    if (!_cached_decoder_for_CMSVersion) {
        _cached_decoder_for_CMSVersion = $._decodeInteger;
    }
    return _cached_decoder_for_CMSVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMSVersion */
let _cached_encoder_for_CMSVersion: $.ASN1Encoder<CMSVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _encode_CMSVersion */
/**
 * @summary Encodes a(n) CMSVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMSVersion, encoded as an ASN.1 Element.
 */
export function _encode_CMSVersion(
    value: CMSVersion,
    elGetter: $.ASN1Encoder<CMSVersion>
) {
    if (!_cached_encoder_for_CMSVersion) {
        _cached_encoder_for_CMSVersion = $._encodeInteger;
    }
    return _cached_encoder_for_CMSVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMSVersion */

/* eslint-enable */
