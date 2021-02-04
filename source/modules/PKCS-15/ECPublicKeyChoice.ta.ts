/* eslint-disable */
import {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "ansi-x9-62/dist/node/modules/ANSI-X9-62/ECPoint.ta";
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION ECPublicKeyChoice */
/**
 * @summary ECPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPublicKeyChoice  ::=  CHOICE {
 *     raw ECPoint,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public EC key
 *     ...
 * }
 * ```
 */
export type ECPublicKeyChoice =
    | { raw: ECPoint } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ECPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPublicKeyChoice */
let _cached_decoder_for_ECPublicKeyChoice: $.ASN1Decoder<ECPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _decode_ECPublicKeyChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPublicKeyChoice} The decoded data structure.
 */
export function _decode_ECPublicKeyChoice(el: _Element) {
    if (!_cached_decoder_for_ECPublicKeyChoice) {
        _cached_decoder_for_ECPublicKeyChoice = $._decode_extensible_choice<ECPublicKeyChoice>(
            {
                "UNIVERSAL 4": ["raw", _decode_ECPoint],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_ECPublicKeyChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPublicKeyChoice */
let _cached_encoder_for_ECPublicKeyChoice: $.ASN1Encoder<ECPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _encode_ECPublicKeyChoice */
/**
 * @summary Encodes a(n) ECPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_ECPublicKeyChoice(
    value: ECPublicKeyChoice,
    elGetter: $.ASN1Encoder<ECPublicKeyChoice>
) {
    if (!_cached_encoder_for_ECPublicKeyChoice) {
        _cached_encoder_for_ECPublicKeyChoice = $._encode_choice<ECPublicKeyChoice>(
            {
                raw: _encode_ECPoint,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ECPublicKeyChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPublicKeyChoice */

/* eslint-enable */
