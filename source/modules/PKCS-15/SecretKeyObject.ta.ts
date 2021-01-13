/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CommonKeyAttributes,
    _decode_CommonKeyAttributes,
    _encode_CommonKeyAttributes,
} from "../PKCS-15/CommonKeyAttributes.ta";
import {
    CommonSecretKeyAttributes,
    _decode_CommonSecretKeyAttributes,
    _encode_CommonSecretKeyAttributes,
} from "../PKCS-15/CommonSecretKeyAttributes.ta";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";
export {
    CommonKeyAttributes,
    _decode_CommonKeyAttributes,
    _encode_CommonKeyAttributes,
} from "../PKCS-15/CommonKeyAttributes.ta";
export {
    CommonSecretKeyAttributes,
    _decode_CommonSecretKeyAttributes,
    _encode_CommonSecretKeyAttributes,
} from "../PKCS-15/CommonSecretKeyAttributes.ta";
export {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";

/* START_OF_SYMBOL_DEFINITION SecretKeyObject */
/**
 * @summary SecretKeyObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecretKeyObject {KeyAttributes}  ::=  PKCS15Object { CommonKeyAttributes, CommonSecretKeyAttributes, KeyAttributes}
 * ```
 */
export type SecretKeyObject<KeyAttributes> = PKCS15Object<
    CommonKeyAttributes,
    CommonSecretKeyAttributes,
    KeyAttributes
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecretKeyObject */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_SecretKeyObject */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SecretKeyObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_SecretKeyObject<KeyAttributes>(
    _decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>
) {
    return _get_decoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonSecretKeyAttributes,
        KeyAttributes
    >(
        _decode_CommonKeyAttributes,
        _decode_CommonSecretKeyAttributes,
        _decode_KeyAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_SecretKeyObject */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_SecretKeyObject */
/**
 * @summary Returns a function that will encode a(n) SecretKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SecretKeyObject as an ASN.1 element.
 */
export function _get_encoder_for_SecretKeyObject<KeyAttributes>(
    _encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>
) {
    return _get_encoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonSecretKeyAttributes,
        KeyAttributes
    >(
        _encode_CommonKeyAttributes,
        _encode_CommonSecretKeyAttributes,
        _encode_KeyAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_SecretKeyObject */

/* eslint-enable */
