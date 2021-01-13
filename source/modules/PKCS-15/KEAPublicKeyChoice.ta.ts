/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION KEAPublicKeyChoice */
/**
 * @summary KEAPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEAPublicKeyChoice  ::=  CHOICE {
 *     raw INTEGER,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public KEA key
 *     ...
 * }
 * ```
 */
export type KEAPublicKeyChoice =
    | { raw: INTEGER } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION KEAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KEAPublicKeyChoice */
let _cached_decoder_for_KEAPublicKeyChoice: $.ASN1Decoder<KEAPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KEAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _decode_KEAPublicKeyChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) KEAPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEAPublicKeyChoice} The decoded data structure.
 */
export function _decode_KEAPublicKeyChoice(el: _Element) {
    if (!_cached_decoder_for_KEAPublicKeyChoice) {
        _cached_decoder_for_KEAPublicKeyChoice = $._decode_extensible_choice<KEAPublicKeyChoice>(
            {
                "UNIVERSAL 2": ["raw", $._decodeInteger],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_KEAPublicKeyChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KEAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KEAPublicKeyChoice */
let _cached_encoder_for_KEAPublicKeyChoice: $.ASN1Encoder<KEAPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KEAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _encode_KEAPublicKeyChoice */
/**
 * @summary Encodes a(n) KEAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_KEAPublicKeyChoice(
    value: KEAPublicKeyChoice,
    elGetter: $.ASN1Encoder<KEAPublicKeyChoice>
) {
    if (!_cached_encoder_for_KEAPublicKeyChoice) {
        _cached_encoder_for_KEAPublicKeyChoice = $._encode_choice<KEAPublicKeyChoice>(
            {
                raw: $._encodeInteger,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_KEAPublicKeyChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KEAPublicKeyChoice */

/* eslint-enable */
