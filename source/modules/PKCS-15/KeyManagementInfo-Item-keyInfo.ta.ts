/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RecipientInfo,
    _decode_RecipientInfo,
    _encode_RecipientInfo,
} from "../CryptographicMessageSyntax/RecipientInfo.ta";
import {
    PasswordInfo,
    _decode_PasswordInfo,
    _encode_PasswordInfo,
} from "../PKCS-15/PasswordInfo.ta";
export {
    RecipientInfo,
    _decode_RecipientInfo,
    _encode_RecipientInfo,
} from "../CryptographicMessageSyntax/RecipientInfo.ta";
export {
    PasswordInfo,
    _decode_PasswordInfo,
    _encode_PasswordInfo,
} from "../PKCS-15/PasswordInfo.ta";

/* START_OF_SYMBOL_DEFINITION KeyManagementInfo_Item_keyInfo */
/**
 * @summary KeyManagementInfo_Item_keyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyManagementInfo-Item-keyInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type KeyManagementInfo_Item_keyInfo =
    | { recipientInfo: RecipientInfo } /* CHOICE_ALT_ROOT */
    | { passwordInfo: PasswordInfo } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION KeyManagementInfo_Item_keyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo_Item_keyInfo */
let _cached_decoder_for_KeyManagementInfo_Item_keyInfo: $.ASN1Decoder<KeyManagementInfo_Item_keyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo_Item_keyInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo_Item_keyInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyManagementInfo_Item_keyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyManagementInfo_Item_keyInfo} The decoded data structure.
 */
export function _decode_KeyManagementInfo_Item_keyInfo(el: _Element) {
    if (!_cached_decoder_for_KeyManagementInfo_Item_keyInfo) {
        _cached_decoder_for_KeyManagementInfo_Item_keyInfo = $._decode_inextensible_choice<KeyManagementInfo_Item_keyInfo>(
            {
                "UNIVERSAL 16": ["recipientInfo", _decode_RecipientInfo],
                "CONTEXT 1": ["recipientInfo", _decode_RecipientInfo],
                "CONTEXT 2": ["recipientInfo", _decode_RecipientInfo],
                "CONTEXT 0": [
                    "passwordInfo",
                    $._decode_implicit<PasswordInfo>(
                        () => _decode_PasswordInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_KeyManagementInfo_Item_keyInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo_Item_keyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo_Item_keyInfo */
let _cached_encoder_for_KeyManagementInfo_Item_keyInfo: $.ASN1Encoder<KeyManagementInfo_Item_keyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo_Item_keyInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo_Item_keyInfo */
/**
 * @summary Encodes a(n) KeyManagementInfo_Item_keyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyManagementInfo_Item_keyInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyManagementInfo_Item_keyInfo(
    value: KeyManagementInfo_Item_keyInfo,
    elGetter: $.ASN1Encoder<KeyManagementInfo_Item_keyInfo>
) {
    if (!_cached_encoder_for_KeyManagementInfo_Item_keyInfo) {
        _cached_encoder_for_KeyManagementInfo_Item_keyInfo = $._encode_choice<KeyManagementInfo_Item_keyInfo>(
            {
                recipientInfo: _encode_RecipientInfo,
                passwordInfo: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PasswordInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_KeyManagementInfo_Item_keyInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo_Item_keyInfo */

/* eslint-enable */
