/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CommonKeyAttributes,
    _decode_CommonKeyAttributes,
    _encode_CommonKeyAttributes,
} from "../PKCS-15/CommonKeyAttributes.ta";
import {
    CommonPrivateKeyAttributes,
    _decode_CommonPrivateKeyAttributes,
    _encode_CommonPrivateKeyAttributes,
} from "../PKCS-15/CommonPrivateKeyAttributes.ta";
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
    CommonPrivateKeyAttributes,
    _decode_CommonPrivateKeyAttributes,
    _encode_CommonPrivateKeyAttributes,
} from "../PKCS-15/CommonPrivateKeyAttributes.ta";
export {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";

/* START_OF_SYMBOL_DEFINITION PrivateKeyObject */
/**
 * @summary PrivateKeyObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyObject {KeyAttributes}  ::=  PKCS15Object {
 *     CommonKeyAttributes,
 *     CommonPrivateKeyAttributes,
 *     KeyAttributes
 * }
 * ```
 */
export type PrivateKeyObject<KeyAttributes> = PKCS15Object<
    CommonKeyAttributes,
    CommonPrivateKeyAttributes,
    KeyAttributes
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION PrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_PrivateKeyObject */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PrivateKeyObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PrivateKeyObject<KeyAttributes>(
    _decode_KeyAttributes: $.ASN1Decoder<KeyAttributes>
) {
    return _get_decoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPrivateKeyAttributes,
        KeyAttributes
    >(
        _decode_CommonKeyAttributes,
        _decode_CommonPrivateKeyAttributes,
        _decode_KeyAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_PrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_PrivateKeyObject */
/**
 * @summary Returns a function that will encode a(n) PrivateKeyObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PrivateKeyObject as an ASN.1 element.
 */
export function _get_encoder_for_PrivateKeyObject<KeyAttributes>(
    _encode_KeyAttributes: $.ASN1Encoder<KeyAttributes>
) {
    return _get_encoder_for_PKCS15Object<
        CommonKeyAttributes,
        CommonPrivateKeyAttributes,
        KeyAttributes
    >(
        _encode_CommonKeyAttributes,
        _encode_CommonPrivateKeyAttributes,
        _encode_KeyAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_PrivateKeyObject */

/* eslint-enable */
