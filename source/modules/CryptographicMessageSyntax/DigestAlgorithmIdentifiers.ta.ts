/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/DigestAlgorithmIdentifier.ta";
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/DigestAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION DigestAlgorithmIdentifiers */
/**
 * @summary DigestAlgorithmIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmIdentifiers  ::=  SET OF DigestAlgorithmIdentifier
 * ```
 */
export type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION DigestAlgorithmIdentifiers */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestAlgorithmIdentifiers */
let _cached_decoder_for_DigestAlgorithmIdentifiers: $.ASN1Decoder<DigestAlgorithmIdentifiers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestAlgorithmIdentifiers */

/* START_OF_SYMBOL_DEFINITION _decode_DigestAlgorithmIdentifiers */
/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithmIdentifiers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithmIdentifiers} The decoded data structure.
 */
export function _decode_DigestAlgorithmIdentifiers(el: _Element) {
    if (!_cached_decoder_for_DigestAlgorithmIdentifiers) {
        _cached_decoder_for_DigestAlgorithmIdentifiers = $._decodeSetOf<DigestAlgorithmIdentifier>(
            () => _decode_DigestAlgorithmIdentifier
        );
    }
    return _cached_decoder_for_DigestAlgorithmIdentifiers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigestAlgorithmIdentifiers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestAlgorithmIdentifiers */
let _cached_encoder_for_DigestAlgorithmIdentifiers: $.ASN1Encoder<DigestAlgorithmIdentifiers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestAlgorithmIdentifiers */

/* START_OF_SYMBOL_DEFINITION _encode_DigestAlgorithmIdentifiers */
/**
 * @summary Encodes a(n) DigestAlgorithmIdentifiers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithmIdentifiers, encoded as an ASN.1 Element.
 */
export function _encode_DigestAlgorithmIdentifiers(
    value: DigestAlgorithmIdentifiers,
    elGetter: $.ASN1Encoder<DigestAlgorithmIdentifiers>
) {
    if (!_cached_encoder_for_DigestAlgorithmIdentifiers) {
        _cached_encoder_for_DigestAlgorithmIdentifiers = $._encodeSetOf<DigestAlgorithmIdentifier>(
            () => _encode_DigestAlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_DigestAlgorithmIdentifiers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DigestAlgorithmIdentifiers */

/* eslint-enable */
