/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";

/* START_OF_SYMBOL_DEFINITION SecurityCondition */
/**
 * @summary SecurityCondition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityCondition  ::=  CHOICE {
 *     authId Identifier,
 *     not [0] SecurityCondition,
 *     and [1] SEQUENCE SIZE (2..pkcs15-ub-securityConditions) OF SecurityCondition,
 *     or [2] SEQUENCE SIZE (2..pkcs15-ub-securityConditions) OF SecurityCondition,
 *     ... -- For future extensions
 * }
 * ```
 */
export type SecurityCondition =
    | { authId: Identifier } /* CHOICE_ALT_ROOT */
    | { not: SecurityCondition } /* CHOICE_ALT_ROOT */
    | { and: SecurityCondition[] } /* CHOICE_ALT_ROOT */
    | { or: SecurityCondition[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SecurityCondition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityCondition */
let _cached_decoder_for_SecurityCondition: $.ASN1Decoder<SecurityCondition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityCondition */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityCondition */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCondition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityCondition} The decoded data structure.
 */
export function _decode_SecurityCondition(el: _Element) {
    if (!_cached_decoder_for_SecurityCondition) {
        _cached_decoder_for_SecurityCondition = $._decode_extensible_choice<SecurityCondition>(
            {
                "UNIVERSAL 4": ["authId", _decode_Identifier],
                "CONTEXT 0": [
                    "not",
                    $._decode_explicit<SecurityCondition>(
                        () => _decode_SecurityCondition
                    ),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_implicit<SecurityCondition[]>(() =>
                        $._decodeSequenceOf<SecurityCondition>(
                            () => _decode_SecurityCondition
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_implicit<SecurityCondition[]>(() =>
                        $._decodeSequenceOf<SecurityCondition>(
                            () => _decode_SecurityCondition
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityCondition(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityCondition */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityCondition */
let _cached_encoder_for_SecurityCondition: $.ASN1Encoder<SecurityCondition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityCondition */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityCondition */
/**
 * @summary Encodes a(n) SecurityCondition into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCondition, encoded as an ASN.1 Element.
 */
export function _encode_SecurityCondition(
    value: SecurityCondition,
    elGetter: $.ASN1Encoder<SecurityCondition>
) {
    if (!_cached_encoder_for_SecurityCondition) {
        _cached_encoder_for_SecurityCondition = $._encode_choice<SecurityCondition>(
            {
                authId: _encode_Identifier,
                not: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SecurityCondition,
                    $.BER
                ),
                and: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<SecurityCondition>(
                            () => _encode_SecurityCondition,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<SecurityCondition>(
                            () => _encode_SecurityCondition,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityCondition(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityCondition */

/* eslint-enable */
