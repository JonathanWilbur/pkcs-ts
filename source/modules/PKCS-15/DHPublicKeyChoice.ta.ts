/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DiffieHellmanPublicNumber,
    _decode_DiffieHellmanPublicNumber,
    _encode_DiffieHellmanPublicNumber,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DiffieHellmanPublicNumber.ta";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION DHPublicKeyChoice */
/**
 * @summary DHPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicKeyChoice  ::=  CHOICE {
 *     raw DiffieHellmanPublicNumber,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public D-H key
 *     ...
 * }
 * ```
 */
export type DHPublicKeyChoice =
    | { raw: DiffieHellmanPublicNumber } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DHPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKeyChoice */
let _cached_decoder_for_DHPublicKeyChoice: $.ASN1Decoder<DHPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _decode_DHPublicKeyChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) DHPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHPublicKeyChoice} The decoded data structure.
 */
export function _decode_DHPublicKeyChoice(el: _Element) {
    if (!_cached_decoder_for_DHPublicKeyChoice) {
        _cached_decoder_for_DHPublicKeyChoice = $._decode_extensible_choice<DHPublicKeyChoice>(
            {
                "UNIVERSAL 2": ["raw", _decode_DiffieHellmanPublicNumber],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_DHPublicKeyChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DHPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKeyChoice */
let _cached_encoder_for_DHPublicKeyChoice: $.ASN1Encoder<DHPublicKeyChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKeyChoice */

/* START_OF_SYMBOL_DEFINITION _encode_DHPublicKeyChoice */
/**
 * @summary Encodes a(n) DHPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_DHPublicKeyChoice(
    value: DHPublicKeyChoice,
    elGetter: $.ASN1Encoder<DHPublicKeyChoice>
) {
    if (!_cached_encoder_for_DHPublicKeyChoice) {
        _cached_encoder_for_DHPublicKeyChoice = $._encode_choice<DHPublicKeyChoice>(
            {
                raw: _encode_DiffieHellmanPublicNumber,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DHPublicKeyChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DHPublicKeyChoice */

/* eslint-enable */
