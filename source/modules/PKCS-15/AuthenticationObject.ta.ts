/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CommonAuthenticationObjectAttributes,
    _decode_CommonAuthenticationObjectAttributes,
    _encode_CommonAuthenticationObjectAttributes,
} from "../PKCS-15/CommonAuthenticationObjectAttributes.ta";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";
export {
    CommonAuthenticationObjectAttributes,
    _decode_CommonAuthenticationObjectAttributes,
    _encode_CommonAuthenticationObjectAttributes,
} from "../PKCS-15/CommonAuthenticationObjectAttributes.ta";
export {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticationObject */
/**
 * @summary AuthenticationObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationObject {AuthObjectAttributes}  ::=  PKCS15Object {CommonAuthenticationObjectAttributes, NULL, AuthObjectAttributes}
 * ```
 */
export type AuthenticationObject<AuthObjectAttributes> = PKCS15Object<
    CommonAuthenticationObjectAttributes,
    NULL,
    AuthObjectAttributes
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AuthenticationObject */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_AuthenticationObject */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AuthenticationObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_AuthenticationObject<AuthObjectAttributes>(
    _decode_AuthObjectAttributes: $.ASN1Decoder<AuthObjectAttributes>
) {
    return _get_decoder_for_PKCS15Object<
        CommonAuthenticationObjectAttributes,
        NULL,
        AuthObjectAttributes
    >(
        _decode_CommonAuthenticationObjectAttributes,
        $._decodeNull,
        _decode_AuthObjectAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_AuthenticationObject */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_AuthenticationObject */
/**
 * @summary Returns a function that will encode a(n) AuthenticationObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AuthenticationObject as an ASN.1 element.
 */
export function _get_encoder_for_AuthenticationObject<AuthObjectAttributes>(
    _encode_AuthObjectAttributes: $.ASN1Encoder<AuthObjectAttributes>
) {
    return _get_encoder_for_PKCS15Object<
        CommonAuthenticationObjectAttributes,
        NULL,
        AuthObjectAttributes
    >(
        _encode_CommonAuthenticationObjectAttributes,
        $._encodeNull,
        _encode_AuthObjectAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_AuthenticationObject */

/* eslint-enable */
