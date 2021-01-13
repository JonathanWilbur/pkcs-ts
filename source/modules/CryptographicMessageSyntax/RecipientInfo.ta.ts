/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from "../CryptographicMessageSyntax/KEKRecipientInfo.ta";
import {
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from "../CryptographicMessageSyntax/KeyAgreeRecipientInfo.ta";
import {
    KeyTransRecipientInfo,
    _decode_KeyTransRecipientInfo,
    _encode_KeyTransRecipientInfo,
} from "../CryptographicMessageSyntax/KeyTransRecipientInfo.ta";
export {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from "../CryptographicMessageSyntax/KEKRecipientInfo.ta";
export {
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from "../CryptographicMessageSyntax/KeyAgreeRecipientInfo.ta";
export {
    KeyTransRecipientInfo,
    _decode_KeyTransRecipientInfo,
    _encode_KeyTransRecipientInfo,
} from "../CryptographicMessageSyntax/KeyTransRecipientInfo.ta";

/* START_OF_SYMBOL_DEFINITION RecipientInfo */
/**
 * @summary RecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 *   ktri   KeyTransRecipientInfo,
 *   kari   [1]  KeyAgreeRecipientInfo,
 *   kekri  [2]  KEKRecipientInfo
 * }
 * ```
 */
export type RecipientInfo =
    | { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */
let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfo} The decoded data structure.
 */
export function _decode_RecipientInfo(el: _Element) {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = $._decode_inextensible_choice<RecipientInfo>(
            {
                "UNIVERSAL 16": ["ktri", _decode_KeyTransRecipientInfo],
                "CONTEXT 1": [
                    "kari",
                    $._decode_implicit<KeyAgreeRecipientInfo>(
                        () => _decode_KeyAgreeRecipientInfo
                    ),
                ],
                "CONTEXT 2": [
                    "kekri",
                    $._decode_implicit<KEKRecipientInfo>(
                        () => _decode_KEKRecipientInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */
let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientInfo */
/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_RecipientInfo(
    value: RecipientInfo,
    elGetter: $.ASN1Encoder<RecipientInfo>
) {
    if (!_cached_encoder_for_RecipientInfo) {
        _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>(
            {
                ktri: _encode_KeyTransRecipientInfo,
                kari: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_KeyAgreeRecipientInfo,
                    $.BER
                ),
                kekri: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_KEKRecipientInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientInfo */

/* eslint-enable */
