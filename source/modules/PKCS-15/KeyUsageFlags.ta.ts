/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags */
/**
 * @summary KeyUsageFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyUsageFlags  ::=  BIT STRING { encrypt (0), decrypt (1), sign (2), signRecover (3), wrap (4), unwrap (5), verify (6), verifyRecover  (7), derive (8), nonRepudiation (9) }
 * ```
 */
export type KeyUsageFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_encrypt */
/**
 * @summary KeyUsageFlags_encrypt
 * @constant
 */
export const KeyUsageFlags_encrypt: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_encrypt */

/* START_OF_SYMBOL_DEFINITION encrypt */
/**
 * @summary encrypt
 * @constant
 */
export const encrypt: number = KeyUsageFlags_encrypt; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION encrypt */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_decrypt */
/**
 * @summary KeyUsageFlags_decrypt
 * @constant
 */
export const KeyUsageFlags_decrypt: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_decrypt */

/* START_OF_SYMBOL_DEFINITION decrypt */
/**
 * @summary decrypt
 * @constant
 */
export const decrypt: number = KeyUsageFlags_decrypt; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION decrypt */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_sign */
/**
 * @summary KeyUsageFlags_sign
 * @constant
 */
export const KeyUsageFlags_sign: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_sign */

/* START_OF_SYMBOL_DEFINITION sign */
/**
 * @summary sign
 * @constant
 */
export const sign: number = KeyUsageFlags_sign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sign */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_signRecover */
/**
 * @summary KeyUsageFlags_signRecover
 * @constant
 */
export const KeyUsageFlags_signRecover: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_signRecover */

/* START_OF_SYMBOL_DEFINITION signRecover */
/**
 * @summary signRecover
 * @constant
 */
export const signRecover: number = KeyUsageFlags_signRecover; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION signRecover */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_wrap */
/**
 * @summary KeyUsageFlags_wrap
 * @constant
 */
export const KeyUsageFlags_wrap: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_wrap */

/* START_OF_SYMBOL_DEFINITION wrap */
/**
 * @summary wrap
 * @constant
 */
export const wrap: number = KeyUsageFlags_wrap; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wrap */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_unwrap */
/**
 * @summary KeyUsageFlags_unwrap
 * @constant
 */
export const KeyUsageFlags_unwrap: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_unwrap */

/* START_OF_SYMBOL_DEFINITION unwrap */
/**
 * @summary unwrap
 * @constant
 */
export const unwrap: number = KeyUsageFlags_unwrap; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unwrap */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_verify */
/**
 * @summary KeyUsageFlags_verify
 * @constant
 */
export const KeyUsageFlags_verify: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_verify */

/* START_OF_SYMBOL_DEFINITION verify */
/**
 * @summary verify
 * @constant
 */
export const verify: number = KeyUsageFlags_verify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verify */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_verifyRecover */
/**
 * @summary KeyUsageFlags_verifyRecover
 * @constant
 */
export const KeyUsageFlags_verifyRecover: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_verifyRecover */

/* START_OF_SYMBOL_DEFINITION verifyRecover */
/**
 * @summary verifyRecover
 * @constant
 */
export const verifyRecover: number = KeyUsageFlags_verifyRecover; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verifyRecover */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_derive */
/**
 * @summary KeyUsageFlags_derive
 * @constant
 */
export const KeyUsageFlags_derive: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_derive */

/* START_OF_SYMBOL_DEFINITION derive */
/**
 * @summary derive
 * @constant
 */
export const derive: number = KeyUsageFlags_derive; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION derive */

/* START_OF_SYMBOL_DEFINITION KeyUsageFlags_nonRepudiation */
/**
 * @summary KeyUsageFlags_nonRepudiation
 * @constant
 */
export const KeyUsageFlags_nonRepudiation: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsageFlags_nonRepudiation */

/* START_OF_SYMBOL_DEFINITION nonRepudiation */
/**
 * @summary nonRepudiation
 * @constant
 */
export const nonRepudiation: number = KeyUsageFlags_nonRepudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nonRepudiation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyUsageFlags */
let _cached_decoder_for_KeyUsageFlags: $.ASN1Decoder<KeyUsageFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyUsageFlags */

/* START_OF_SYMBOL_DEFINITION _decode_KeyUsageFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyUsageFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyUsageFlags} The decoded data structure.
 */
export function _decode_KeyUsageFlags(el: _Element) {
    if (!_cached_decoder_for_KeyUsageFlags) {
        _cached_decoder_for_KeyUsageFlags = $._decodeBitString;
    }
    return _cached_decoder_for_KeyUsageFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyUsageFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyUsageFlags */
let _cached_encoder_for_KeyUsageFlags: $.ASN1Encoder<KeyUsageFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyUsageFlags */

/* START_OF_SYMBOL_DEFINITION _encode_KeyUsageFlags */
/**
 * @summary Encodes a(n) KeyUsageFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyUsageFlags, encoded as an ASN.1 Element.
 */
export function _encode_KeyUsageFlags(
    value: KeyUsageFlags,
    elGetter: $.ASN1Encoder<KeyUsageFlags>
) {
    if (!_cached_encoder_for_KeyUsageFlags) {
        _cached_encoder_for_KeyUsageFlags = $._encodeBitString;
    }
    return _cached_encoder_for_KeyUsageFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyUsageFlags */

/* eslint-enable */
