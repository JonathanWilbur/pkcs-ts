/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyManagementInfo_Item,
    _decode_KeyManagementInfo_Item,
    _encode_KeyManagementInfo_Item,
} from "../PKCS-15/KeyManagementInfo-Item.ta";
export {
    KeyManagementInfo_Item,
    _decode_KeyManagementInfo_Item,
    _encode_KeyManagementInfo_Item,
} from "../PKCS-15/KeyManagementInfo-Item.ta";

/* START_OF_SYMBOL_DEFINITION KeyManagementInfo */
/**
 * @summary KeyManagementInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyManagementInfo  ::=  SEQUENCE OF SEQUENCE {
 *     keyId Identifier,
 *     keyInfo CHOICE {
 *         recipientInfo RecipientInfo,
 *         passwordInfo [0] PasswordInfo
 *     }
 * } (CONSTRAINED BY {-- Each keyID must be unique --})
 * ```
 */
export type KeyManagementInfo = KeyManagementInfo_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION KeyManagementInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo */
let _cached_decoder_for_KeyManagementInfo: $.ASN1Decoder<KeyManagementInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyManagementInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyManagementInfo} The decoded data structure.
 */
export function _decode_KeyManagementInfo(el: _Element) {
    if (!_cached_decoder_for_KeyManagementInfo) {
        _cached_decoder_for_KeyManagementInfo = $._decodeSequenceOf<KeyManagementInfo_Item>(
            () => _decode_KeyManagementInfo_Item
        );
    }
    return _cached_decoder_for_KeyManagementInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo */
let _cached_encoder_for_KeyManagementInfo: $.ASN1Encoder<KeyManagementInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo */
/**
 * @summary Encodes a(n) KeyManagementInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyManagementInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyManagementInfo(
    value: KeyManagementInfo,
    elGetter: $.ASN1Encoder<KeyManagementInfo>
) {
    if (!_cached_encoder_for_KeyManagementInfo) {
        _cached_encoder_for_KeyManagementInfo = $._encodeSequenceOf<KeyManagementInfo_Item>(
            () => _encode_KeyManagementInfo_Item,
            $.BER
        );
    }
    return _cached_encoder_for_KeyManagementInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo */

/* eslint-enable */
