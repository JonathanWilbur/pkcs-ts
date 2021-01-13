/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta";
import {
    RecipientKeyIdentifier,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "../CryptographicMessageSyntax/RecipientKeyIdentifier.ta";
export {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta";
export {
    RecipientKeyIdentifier,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "../CryptographicMessageSyntax/RecipientKeyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KeyAgreeRecipientIdentifier */
/**
 * @summary KeyAgreeRecipientIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreeRecipientIdentifier  ::=  CHOICE {
 *   issuerAndSerialNumber  IssuerAndSerialNumber,
 *   rKeyId                 [0] IMPLICIT RecipientKeyIdentifier
 * }
 * ```
 */
export type KeyAgreeRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { rKeyId: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientIdentifier */
let _cached_decoder_for_KeyAgreeRecipientIdentifier: $.ASN1Decoder<KeyAgreeRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreeRecipientIdentifier} The decoded data structure.
 */
export function _decode_KeyAgreeRecipientIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientIdentifier) {
        _cached_decoder_for_KeyAgreeRecipientIdentifier = $._decode_inextensible_choice<KeyAgreeRecipientIdentifier>(
            {
                "UNIVERSAL 16": [
                    "issuerAndSerialNumber",
                    _decode_IssuerAndSerialNumber,
                ],
                "CONTEXT 0": [
                    "rKeyId",
                    $._decode_implicit<RecipientKeyIdentifier>(
                        () => _decode_RecipientKeyIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_KeyAgreeRecipientIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientIdentifier */
let _cached_encoder_for_KeyAgreeRecipientIdentifier: $.ASN1Encoder<KeyAgreeRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientIdentifier */
/**
 * @summary Encodes a(n) KeyAgreeRecipientIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreeRecipientIdentifier(
    value: KeyAgreeRecipientIdentifier,
    elGetter: $.ASN1Encoder<KeyAgreeRecipientIdentifier>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientIdentifier) {
        _cached_encoder_for_KeyAgreeRecipientIdentifier = $._encode_choice<KeyAgreeRecipientIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                rKeyId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RecipientKeyIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_KeyAgreeRecipientIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientIdentifier */

/* eslint-enable */
