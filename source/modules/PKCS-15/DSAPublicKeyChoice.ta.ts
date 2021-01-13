/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION DSAPublicKeyChoice */
/**
 * @summary DSAPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPublicKeyChoice  ::=  CHOICE {
 *     raw INTEGER,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public DSA key.
 *     ...
 * }
 * ```
 */
export type DSAPublicKeyChoice =
    | { raw: INTEGER } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DSAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKeyChoice */
let _cached_decoder_for_DSAPublicKeyChoice: $.ASN1Decoder<DSAPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _decode_DSAPublicKeyChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) DSAPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAPublicKeyChoice} The decoded data structure.
 */
export function _decode_DSAPublicKeyChoice(el: _Element) {
    if (!_cached_decoder_for_DSAPublicKeyChoice) {
        _cached_decoder_for_DSAPublicKeyChoice = $._decode_extensible_choice<DSAPublicKeyChoice>(
            {
                "UNIVERSAL 2": ["raw", $._decodeInteger],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_DSAPublicKeyChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKeyChoice */
let _cached_encoder_for_DSAPublicKeyChoice: $.ASN1Encoder<DSAPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _encode_DSAPublicKeyChoice */
/**
 * @summary Encodes a(n) DSAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_DSAPublicKeyChoice(
    value: DSAPublicKeyChoice,
    elGetter: $.ASN1Encoder<DSAPublicKeyChoice>
) {
    if (!_cached_encoder_for_DSAPublicKeyChoice) {
        _cached_encoder_for_DSAPublicKeyChoice = $._encode_choice<DSAPublicKeyChoice>(
            {
                raw: $._encodeInteger,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DSAPublicKeyChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSAPublicKeyChoice */

/* eslint-enable */
