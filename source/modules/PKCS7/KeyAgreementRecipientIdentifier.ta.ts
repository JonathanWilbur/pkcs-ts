/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../PKCS7/IssuerAndSerialNumber.ta";
import {
    RecipientKeyIdentifier,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "../PKCS7/RecipientKeyIdentifier.ta";
export {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../PKCS7/IssuerAndSerialNumber.ta";
export {
    RecipientKeyIdentifier,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "../PKCS7/RecipientKeyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KeyAgreementRecipientIdentifier */
/**
 * @summary KeyAgreementRecipientIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreementRecipientIdentifier  ::=  CHOICE {
 *     issuerAndSerialNumber   IssuerAndSerialNumber,
 *     recipientKeyIdentifier  [0]  RecipientKeyIdentifier
 * }
 * ```
 */
export type KeyAgreementRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { recipientKeyIdentifier: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION KeyAgreementRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreementRecipientIdentifier */
let _cached_decoder_for_KeyAgreementRecipientIdentifier: $.ASN1Decoder<KeyAgreementRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreementRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreementRecipientIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreementRecipientIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreementRecipientIdentifier} The decoded data structure.
 */
export function _decode_KeyAgreementRecipientIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyAgreementRecipientIdentifier) {
        _cached_decoder_for_KeyAgreementRecipientIdentifier = $._decode_inextensible_choice<KeyAgreementRecipientIdentifier>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "CONTEXT 0": [
                    "recipientKeyIdentifier",
                    $._decode_implicit<RecipientKeyIdentifier>(
                        () => _decode_RecipientKeyIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_KeyAgreementRecipientIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreementRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreementRecipientIdentifier */
let _cached_encoder_for_KeyAgreementRecipientIdentifier: $.ASN1Encoder<KeyAgreementRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreementRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreementRecipientIdentifier */
/**
 * @summary Encodes a(n) KeyAgreementRecipientIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreementRecipientIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreementRecipientIdentifier(
    value: KeyAgreementRecipientIdentifier,
    elGetter: $.ASN1Encoder<KeyAgreementRecipientIdentifier>
) {
    if (!_cached_encoder_for_KeyAgreementRecipientIdentifier) {
        _cached_encoder_for_KeyAgreementRecipientIdentifier = $._encode_choice<KeyAgreementRecipientIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                recipientKeyIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RecipientKeyIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_KeyAgreementRecipientIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreementRecipientIdentifier */

/* eslint-enable */
