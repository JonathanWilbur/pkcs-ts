/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Operations */
/**
 * @summary Operations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operations  ::=  BIT STRING {
 *     compute-checksum (0), -- H/W computation of checksum
 *     compute-signature (1), -- H/W computation of signature
 *     verify-checksum   (2), -- H/W verification of checksum
 *     verify-signature  (3), -- H/W verification of signature
 *     encipher   (4), -- H/W encryption of data
 *     decipher   (5), -- H/W decryption of data
 *     hash   (6), -- H/W hashing
 *     generate-key  (7)  -- H/W key generation
 * }
 * ```
 */
export type Operations = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Operations */

/* START_OF_SYMBOL_DEFINITION Operations_compute_checksum */
/**
 * @summary Operations_compute_checksum
 * @constant
 */
export const Operations_compute_checksum: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_compute_checksum */

/* START_OF_SYMBOL_DEFINITION compute_checksum */
/**
 * @summary compute_checksum
 * @constant
 */
export const compute_checksum: number = Operations_compute_checksum; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION compute_checksum */

/* START_OF_SYMBOL_DEFINITION Operations_compute_signature */
/**
 * @summary Operations_compute_signature
 * @constant
 */
export const Operations_compute_signature: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_compute_signature */

/* START_OF_SYMBOL_DEFINITION compute_signature */
/**
 * @summary compute_signature
 * @constant
 */
export const compute_signature: number = Operations_compute_signature; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION compute_signature */

/* START_OF_SYMBOL_DEFINITION Operations_verify_checksum */
/**
 * @summary Operations_verify_checksum
 * @constant
 */
export const Operations_verify_checksum: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_verify_checksum */

/* START_OF_SYMBOL_DEFINITION verify_checksum */
/**
 * @summary verify_checksum
 * @constant
 */
export const verify_checksum: number = Operations_verify_checksum; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verify_checksum */

/* START_OF_SYMBOL_DEFINITION Operations_verify_signature */
/**
 * @summary Operations_verify_signature
 * @constant
 */
export const Operations_verify_signature: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_verify_signature */

/* START_OF_SYMBOL_DEFINITION verify_signature */
/**
 * @summary verify_signature
 * @constant
 */
export const verify_signature: number = Operations_verify_signature; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verify_signature */

/* START_OF_SYMBOL_DEFINITION Operations_encipher */
/**
 * @summary Operations_encipher
 * @constant
 */
export const Operations_encipher: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_encipher */

/* START_OF_SYMBOL_DEFINITION encipher */
/**
 * @summary encipher
 * @constant
 */
export const encipher: number = Operations_encipher; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION encipher */

/* START_OF_SYMBOL_DEFINITION Operations_decipher */
/**
 * @summary Operations_decipher
 * @constant
 */
export const Operations_decipher: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_decipher */

/* START_OF_SYMBOL_DEFINITION decipher */
/**
 * @summary decipher
 * @constant
 */
export const decipher: number = Operations_decipher; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION decipher */

/* START_OF_SYMBOL_DEFINITION Operations_hash */
/**
 * @summary Operations_hash
 * @constant
 */
export const Operations_hash: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_hash */

/* START_OF_SYMBOL_DEFINITION hash */
/**
 * @summary hash
 * @constant
 */
export const hash: number = Operations_hash; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION hash */

/* START_OF_SYMBOL_DEFINITION Operations_generate_key */
/**
 * @summary Operations_generate_key
 * @constant
 */
export const Operations_generate_key: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_generate_key */

/* START_OF_SYMBOL_DEFINITION generate_key */
/**
 * @summary generate_key
 * @constant
 */
export const generate_key: number = Operations_generate_key; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION generate_key */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Operations */
let _cached_decoder_for_Operations: $.ASN1Decoder<Operations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Operations */

/* START_OF_SYMBOL_DEFINITION _decode_Operations */
/**
 * @summary Decodes an ASN.1 element into a(n) Operations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Operations} The decoded data structure.
 */
export function _decode_Operations(el: _Element) {
    if (!_cached_decoder_for_Operations) {
        _cached_decoder_for_Operations = $._decodeBitString;
    }
    return _cached_decoder_for_Operations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Operations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Operations */
let _cached_encoder_for_Operations: $.ASN1Encoder<Operations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Operations */

/* START_OF_SYMBOL_DEFINITION _encode_Operations */
/**
 * @summary Encodes a(n) Operations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operations, encoded as an ASN.1 Element.
 */
export function _encode_Operations(
    value: Operations,
    elGetter: $.ASN1Encoder<Operations>
) {
    if (!_cached_encoder_for_Operations) {
        _cached_encoder_for_Operations = $._encodeBitString;
    }
    return _cached_encoder_for_Operations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Operations */

/* eslint-enable */
