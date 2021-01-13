/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DigestInfo,
    _decode_DigestInfo,
    _encode_DigestInfo,
} from "../PKCS7/DigestInfo.ta";
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../PKCS7/ENCRYPTED.ta";
export {
    DigestInfo,
    _decode_DigestInfo,
    _encode_DigestInfo,
} from "../PKCS7/DigestInfo.ta";
export {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../PKCS7/ENCRYPTED.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedDigest */
/**
 * @summary EncryptedDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedDigest  ::=  ENCRYPTED{DigestInfo}
 * ```
 */
export type EncryptedDigest = ENCRYPTED<DigestInfo>; // DefinedType
/* END_OF_SYMBOL_DEFINITION EncryptedDigest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedDigest */
let _cached_decoder_for_EncryptedDigest: $.ASN1Decoder<EncryptedDigest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedDigest */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedDigest */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedDigest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedDigest} The decoded data structure.
 */
export function _decode_EncryptedDigest(el: _Element) {
    if (!_cached_decoder_for_EncryptedDigest) {
        _cached_decoder_for_EncryptedDigest = _get_decoder_for_ENCRYPTED<DigestInfo>(
            _decode_DigestInfo
        );
    }
    return _cached_decoder_for_EncryptedDigest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedDigest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedDigest */
let _cached_encoder_for_EncryptedDigest: $.ASN1Encoder<EncryptedDigest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedDigest */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedDigest */
/**
 * @summary Encodes a(n) EncryptedDigest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedDigest, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedDigest(
    value: EncryptedDigest,
    elGetter: $.ASN1Encoder<EncryptedDigest>
) {
    if (!_cached_encoder_for_EncryptedDigest) {
        _cached_encoder_for_EncryptedDigest = _get_encoder_for_ENCRYPTED<DigestInfo>(
            _encode_DigestInfo
        );
    }
    return _cached_encoder_for_EncryptedDigest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedDigest */

/* eslint-enable */
