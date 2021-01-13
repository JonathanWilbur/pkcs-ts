/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthObjects,
    _decode_AuthObjects,
    _encode_AuthObjects,
} from "../PKCS-15/AuthObjects.ta";
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from "../PKCS-15/Certificates.ta";
import {
    DataObjects,
    _decode_DataObjects,
    _encode_DataObjects,
} from "../PKCS-15/DataObjects.ta";
import {
    PrivateKeys,
    _decode_PrivateKeys,
    _encode_PrivateKeys,
} from "../PKCS-15/PrivateKeys.ta";
import {
    PublicKeys,
    _decode_PublicKeys,
    _encode_PublicKeys,
} from "../PKCS-15/PublicKeys.ta";
import {
    SecretKeys,
    _decode_SecretKeys,
    _encode_SecretKeys,
} from "../PKCS-15/SecretKeys.ta";
export {
    AuthObjects,
    _decode_AuthObjects,
    _encode_AuthObjects,
} from "../PKCS-15/AuthObjects.ta";
export {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from "../PKCS-15/Certificates.ta";
export {
    DataObjects,
    _decode_DataObjects,
    _encode_DataObjects,
} from "../PKCS-15/DataObjects.ta";
export {
    PrivateKeys,
    _decode_PrivateKeys,
    _encode_PrivateKeys,
} from "../PKCS-15/PrivateKeys.ta";
export {
    PublicKeys,
    _decode_PublicKeys,
    _encode_PublicKeys,
} from "../PKCS-15/PublicKeys.ta";
export {
    SecretKeys,
    _decode_SecretKeys,
    _encode_SecretKeys,
} from "../PKCS-15/SecretKeys.ta";

/* START_OF_SYMBOL_DEFINITION PKCS15Objects */
/**
 * @summary PKCS15Objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Objects  ::=  CHOICE {
 *     privateKeys [0] PrivateKeys,
 *     publicKeys [1] PublicKeys,
 *     trustedPublicKeys  [2] PublicKeys,
 *     secretKeys [3] SecretKeys,
 *     certificates [4] Certificates,
 *     trustedCertificates [5] Certificates,
 *     usefulCertificates [6] Certificates,
 *     dataObjects [7] DataObjects,
 *     authObjects [8] AuthObjects,
 *     ... -- For future extensions
 * }
 * ```
 */
export type PKCS15Objects =
    | { privateKeys: PrivateKeys } /* CHOICE_ALT_ROOT */
    | { publicKeys: PublicKeys } /* CHOICE_ALT_ROOT */
    | { trustedPublicKeys: PublicKeys } /* CHOICE_ALT_ROOT */
    | { secretKeys: SecretKeys } /* CHOICE_ALT_ROOT */
    | { certificates: Certificates } /* CHOICE_ALT_ROOT */
    | { trustedCertificates: Certificates } /* CHOICE_ALT_ROOT */
    | { usefulCertificates: Certificates } /* CHOICE_ALT_ROOT */
    | { dataObjects: DataObjects } /* CHOICE_ALT_ROOT */
    | { authObjects: AuthObjects } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PKCS15Objects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Objects */
let _cached_decoder_for_PKCS15Objects: $.ASN1Decoder<PKCS15Objects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Objects */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS15Objects */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS15Objects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS15Objects} The decoded data structure.
 */
export function _decode_PKCS15Objects(el: _Element) {
    if (!_cached_decoder_for_PKCS15Objects) {
        _cached_decoder_for_PKCS15Objects = $._decode_extensible_choice<PKCS15Objects>(
            {
                "CONTEXT 0": [
                    "privateKeys",
                    $._decode_explicit<PrivateKeys>(() => _decode_PrivateKeys),
                ],
                "CONTEXT 1": [
                    "publicKeys",
                    $._decode_explicit<PublicKeys>(() => _decode_PublicKeys),
                ],
                "CONTEXT 2": [
                    "trustedPublicKeys",
                    $._decode_explicit<PublicKeys>(() => _decode_PublicKeys),
                ],
                "CONTEXT 3": [
                    "secretKeys",
                    $._decode_explicit<SecretKeys>(() => _decode_SecretKeys),
                ],
                "CONTEXT 4": [
                    "certificates",
                    $._decode_explicit<Certificates>(
                        () => _decode_Certificates
                    ),
                ],
                "CONTEXT 5": [
                    "trustedCertificates",
                    $._decode_explicit<Certificates>(
                        () => _decode_Certificates
                    ),
                ],
                "CONTEXT 6": [
                    "usefulCertificates",
                    $._decode_explicit<Certificates>(
                        () => _decode_Certificates
                    ),
                ],
                "CONTEXT 7": [
                    "dataObjects",
                    $._decode_explicit<DataObjects>(() => _decode_DataObjects),
                ],
                "CONTEXT 8": [
                    "authObjects",
                    $._decode_explicit<AuthObjects>(() => _decode_AuthObjects),
                ],
            }
        );
    }
    return _cached_decoder_for_PKCS15Objects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS15Objects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Objects */
let _cached_encoder_for_PKCS15Objects: $.ASN1Encoder<PKCS15Objects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Objects */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS15Objects */
/**
 * @summary Encodes a(n) PKCS15Objects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS15Objects, encoded as an ASN.1 Element.
 */
export function _encode_PKCS15Objects(
    value: PKCS15Objects,
    elGetter: $.ASN1Encoder<PKCS15Objects>
) {
    if (!_cached_encoder_for_PKCS15Objects) {
        _cached_encoder_for_PKCS15Objects = $._encode_choice<PKCS15Objects>(
            {
                privateKeys: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PrivateKeys,
                    $.BER
                ),
                publicKeys: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_PublicKeys,
                    $.BER
                ),
                trustedPublicKeys: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_PublicKeys,
                    $.BER
                ),
                secretKeys: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_SecretKeys,
                    $.BER
                ),
                certificates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_Certificates,
                    $.BER
                ),
                trustedCertificates: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_Certificates,
                    $.BER
                ),
                usefulCertificates: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_Certificates,
                    $.BER
                ),
                dataObjects: $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_DataObjects,
                    $.BER
                ),
                authObjects: $._encode_explicit(
                    _TagClass.context,
                    8,
                    () => _encode_AuthObjects,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PKCS15Objects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS15Objects */

/* eslint-enable */
