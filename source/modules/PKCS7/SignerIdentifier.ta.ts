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

/* START_OF_SYMBOL_DEFINITION SignerIdentifier */
/**
 * @summary SignerIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerIdentifier  ::=  CHOICE {
 *     issuerAndSerialNumber  IssuerAndSerialNumber,
 *     subjectKeyIdentifier   [2]  SubjectKeyIdentifier
 * }
 * ```
 */
export type SignerIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignerIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerIdentifier */
let _cached_decoder_for_SignerIdentifier: $.ASN1Decoder<SignerIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SignerIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerIdentifier} The decoded data structure.
 */
export function _decode_SignerIdentifier(el: _Element) {
    if (!_cached_decoder_for_SignerIdentifier) {
        _cached_decoder_for_SignerIdentifier = $._decode_inextensible_choice<SignerIdentifier>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "CONTEXT 2": [
                    "subjectKeyIdentifier",
                    $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SignerIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerIdentifier */
let _cached_encoder_for_SignerIdentifier: $.ASN1Encoder<SignerIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SignerIdentifier */
/**
 * @summary Encodes a(n) SignerIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SignerIdentifier(
    value: SignerIdentifier,
    elGetter: $.ASN1Encoder<SignerIdentifier>
) {
    if (!_cached_encoder_for_SignerIdentifier) {
        _cached_encoder_for_SignerIdentifier = $._encode_choice<SignerIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                subjectKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SubjectKeyIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerIdentifier */

/* eslint-enable */
