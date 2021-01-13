/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION BiometricFlags */
/**
 * @summary BiometricFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricFlags  ::=  BIT STRING {
 *     local (1),
 *     change-disabled (2),
 *     unblock-disabled (3),
 *     initialized (4),
 *     disable-allowed (8),
 *     integrity-protected (9),
 *     confidentiality-protected (10)
 * }
 * ```
 */
export type BiometricFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BiometricFlags */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_local */
/**
 * @summary BiometricFlags_local
 * @constant
 */
export const BiometricFlags_local: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary local
 * @constant
 */
export const local: number = BiometricFlags_local; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_change_disabled */
/**
 * @summary BiometricFlags_change_disabled
 * @constant
 */
export const BiometricFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_change_disabled */

/* START_OF_SYMBOL_DEFINITION change_disabled */
/**
 * @summary change_disabled
 * @constant
 */
export const change_disabled: number = BiometricFlags_change_disabled; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION change_disabled */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_unblock_disabled */
/**
 * @summary BiometricFlags_unblock_disabled
 * @constant
 */
export const BiometricFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_unblock_disabled */

/* START_OF_SYMBOL_DEFINITION unblock_disabled */
/**
 * @summary unblock_disabled
 * @constant
 */
export const unblock_disabled: number = BiometricFlags_unblock_disabled; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unblock_disabled */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_initialized */
/**
 * @summary BiometricFlags_initialized
 * @constant
 */
export const BiometricFlags_initialized: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_initialized */

/* START_OF_SYMBOL_DEFINITION initialized */
/**
 * @summary initialized
 * @constant
 */
export const initialized: number = BiometricFlags_initialized; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION initialized */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_disable_allowed */
/**
 * @summary BiometricFlags_disable_allowed
 * @constant
 */
export const BiometricFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_disable_allowed */

/* START_OF_SYMBOL_DEFINITION disable_allowed */
/**
 * @summary disable_allowed
 * @constant
 */
export const disable_allowed: number = BiometricFlags_disable_allowed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION disable_allowed */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_integrity_protected */
/**
 * @summary BiometricFlags_integrity_protected
 * @constant
 */
export const BiometricFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_integrity_protected */

/* START_OF_SYMBOL_DEFINITION integrity_protected */
/**
 * @summary integrity_protected
 * @constant
 */
export const integrity_protected: number = BiometricFlags_integrity_protected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION integrity_protected */

/* START_OF_SYMBOL_DEFINITION BiometricFlags_confidentiality_protected */
/**
 * @summary BiometricFlags_confidentiality_protected
 * @constant
 */
export const BiometricFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricFlags_confidentiality_protected */

/* START_OF_SYMBOL_DEFINITION confidentiality_protected */
/**
 * @summary confidentiality_protected
 * @constant
 */
export const confidentiality_protected: number = BiometricFlags_confidentiality_protected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION confidentiality_protected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricFlags */
let _cached_decoder_for_BiometricFlags: $.ASN1Decoder<BiometricFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricFlags */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricFlags} The decoded data structure.
 */
export function _decode_BiometricFlags(el: _Element) {
    if (!_cached_decoder_for_BiometricFlags) {
        _cached_decoder_for_BiometricFlags = $._decodeBitString;
    }
    return _cached_decoder_for_BiometricFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricFlags */
let _cached_encoder_for_BiometricFlags: $.ASN1Encoder<BiometricFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricFlags */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricFlags */
/**
 * @summary Encodes a(n) BiometricFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricFlags, encoded as an ASN.1 Element.
 */
export function _encode_BiometricFlags(
    value: BiometricFlags,
    elGetter: $.ASN1Encoder<BiometricFlags>
) {
    if (!_cached_encoder_for_BiometricFlags) {
        _cached_encoder_for_BiometricFlags = $._encodeBitString;
    }
    return _cached_encoder_for_BiometricFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricFlags */

/* eslint-enable */
