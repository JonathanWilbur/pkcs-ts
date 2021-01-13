/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta";
import {
    OriginatorPublicKey,
    _decode_OriginatorPublicKey,
    _encode_OriginatorPublicKey,
} from "../CryptographicMessageSyntax/OriginatorPublicKey.ta";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax/SubjectKeyIdentifier.ta";
export {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta";
export {
    OriginatorPublicKey,
    _decode_OriginatorPublicKey,
    _encode_OriginatorPublicKey,
} from "../CryptographicMessageSyntax/OriginatorPublicKey.ta";
export {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax/SubjectKeyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION OriginatorIdentifierOrKey */
/**
 * @summary OriginatorIdentifierOrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorIdentifierOrKey  ::=  CHOICE {
 *   issuerAndSerialNumber  IssuerAndSerialNumber,
 *   subjectKeyIdentifier   [0]  SubjectKeyIdentifier,
 *   originatorKey          [1]  OriginatorPublicKey
 * }
 * ```
 */
export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { originatorKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorIdentifierOrKey */
let _cached_decoder_for_OriginatorIdentifierOrKey: $.ASN1Decoder<OriginatorIdentifierOrKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorIdentifierOrKey */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorIdentifierOrKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorIdentifierOrKey} The decoded data structure.
 */
export function _decode_OriginatorIdentifierOrKey(el: _Element) {
    if (!_cached_decoder_for_OriginatorIdentifierOrKey) {
        _cached_decoder_for_OriginatorIdentifierOrKey = $._decode_inextensible_choice<OriginatorIdentifierOrKey>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "CONTEXT 0": [
                    "subjectKeyIdentifier",
                    $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    ),
                ],
                "CONTEXT 1": [
                    "originatorKey",
                    $._decode_implicit<OriginatorPublicKey>(
                        () => _decode_OriginatorPublicKey
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OriginatorIdentifierOrKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorIdentifierOrKey */
let _cached_encoder_for_OriginatorIdentifierOrKey: $.ASN1Encoder<OriginatorIdentifierOrKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorIdentifierOrKey */
/**
 * @summary Encodes a(n) OriginatorIdentifierOrKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorIdentifierOrKey, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorIdentifierOrKey(
    value: OriginatorIdentifierOrKey,
    elGetter: $.ASN1Encoder<OriginatorIdentifierOrKey>
) {
    if (!_cached_encoder_for_OriginatorIdentifierOrKey) {
        _cached_encoder_for_OriginatorIdentifierOrKey = $._encode_choice<OriginatorIdentifierOrKey>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    $.BER
                ),
                originatorKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OriginatorPublicKey,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorIdentifierOrKey */

/* eslint-enable */
