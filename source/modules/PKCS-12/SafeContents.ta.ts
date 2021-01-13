/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SafeBag,
    _decode_SafeBag,
    _encode_SafeBag,
} from "../PKCS-12/SafeBag.ta";
export {
    SafeBag,
    _decode_SafeBag,
    _encode_SafeBag,
} from "../PKCS-12/SafeBag.ta";

/* START_OF_SYMBOL_DEFINITION SafeContents */
/**
 * @summary SafeContents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SafeContents  ::=  SEQUENCE OF SafeBag
 * ```
 */
export type SafeContents = SafeBag[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SafeContents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SafeContents */
let _cached_decoder_for_SafeContents: $.ASN1Decoder<SafeContents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SafeContents */

/* START_OF_SYMBOL_DEFINITION _decode_SafeContents */
/**
 * @summary Decodes an ASN.1 element into a(n) SafeContents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SafeContents} The decoded data structure.
 */
export function _decode_SafeContents(el: _Element) {
    if (!_cached_decoder_for_SafeContents) {
        _cached_decoder_for_SafeContents = $._decodeSequenceOf<SafeBag>(
            () => _decode_SafeBag
        );
    }
    return _cached_decoder_for_SafeContents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SafeContents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SafeContents */
let _cached_encoder_for_SafeContents: $.ASN1Encoder<SafeContents> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SafeContents */

/* START_OF_SYMBOL_DEFINITION _encode_SafeContents */
/**
 * @summary Encodes a(n) SafeContents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SafeContents, encoded as an ASN.1 Element.
 */
export function _encode_SafeContents(
    value: SafeContents,
    elGetter: $.ASN1Encoder<SafeContents>
) {
    if (!_cached_encoder_for_SafeContents) {
        _cached_encoder_for_SafeContents = $._encodeSequenceOf<SafeBag>(
            () => _encode_SafeBag,
            $.BER
        );
    }
    return _cached_encoder_for_SafeContents(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SafeContents */

/* eslint-enable */
