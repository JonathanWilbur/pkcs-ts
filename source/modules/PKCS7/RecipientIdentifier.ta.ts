/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../PKCS7/IssuerAndSerialNumber.ta";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../PKCS7/SubjectKeyIdentifier.ta";
export {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../PKCS7/IssuerAndSerialNumber.ta";
export {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../PKCS7/SubjectKeyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION RecipientIdentifier */
/**
 * @summary RecipientIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientIdentifier  ::=  CHOICE {
 *     issuerAndSerialNumber  IssuerAndSerialNumber,
 *     subjectKeyIdentifier   [0]  SubjectKeyIdentifier
 * }
 * ```
 */
export type RecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientIdentifier */
let _cached_decoder_for_RecipientIdentifier: $.ASN1Decoder<RecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientIdentifier} The decoded data structure.
 */
export function _decode_RecipientIdentifier(el: _Element) {
    if (!_cached_decoder_for_RecipientIdentifier) {
        _cached_decoder_for_RecipientIdentifier = $._decode_inextensible_choice<RecipientIdentifier>(
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
            }
        );
    }
    return _cached_decoder_for_RecipientIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientIdentifier */
let _cached_encoder_for_RecipientIdentifier: $.ASN1Encoder<RecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientIdentifier */
/**
 * @summary Encodes a(n) RecipientIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RecipientIdentifier(
    value: RecipientIdentifier,
    elGetter: $.ASN1Encoder<RecipientIdentifier>
) {
    if (!_cached_encoder_for_RecipientIdentifier) {
        _cached_encoder_for_RecipientIdentifier = $._encode_choice<RecipientIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SubjectKeyIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RecipientIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientIdentifier */

/* eslint-enable */
