/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticatedSafe */
/**
 * @summary AuthenticatedSafe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedSafe  ::=  SEQUENCE OF ContentInfo
 * ```
 */
export type AuthenticatedSafe = ContentInfo[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AuthenticatedSafe */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedSafe */
let _cached_decoder_for_AuthenticatedSafe: $.ASN1Decoder<AuthenticatedSafe> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedSafe */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticatedSafe */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedSafe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedSafe} The decoded data structure.
 */
export function _decode_AuthenticatedSafe(el: _Element) {
    if (!_cached_decoder_for_AuthenticatedSafe) {
        _cached_decoder_for_AuthenticatedSafe = $._decodeSequenceOf<ContentInfo>(
            () => _decode_ContentInfo
        );
    }
    return _cached_decoder_for_AuthenticatedSafe(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticatedSafe */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedSafe */
let _cached_encoder_for_AuthenticatedSafe: $.ASN1Encoder<AuthenticatedSafe> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedSafe */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticatedSafe */
/**
 * @summary Encodes a(n) AuthenticatedSafe into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedSafe, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedSafe(
    value: AuthenticatedSafe,
    elGetter: $.ASN1Encoder<AuthenticatedSafe>
) {
    if (!_cached_encoder_for_AuthenticatedSafe) {
        _cached_encoder_for_AuthenticatedSafe = $._encodeSequenceOf<ContentInfo>(
            () => _encode_ContentInfo,
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticatedSafe(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticatedSafe */

/* eslint-enable */
