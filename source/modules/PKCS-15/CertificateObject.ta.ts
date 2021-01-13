/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CommonCertificateAttributes,
    _decode_CommonCertificateAttributes,
    _encode_CommonCertificateAttributes,
} from "../PKCS-15/CommonCertificateAttributes.ta";
import {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";
export {
    CommonCertificateAttributes,
    _decode_CommonCertificateAttributes,
    _encode_CommonCertificateAttributes,
} from "../PKCS-15/CommonCertificateAttributes.ta";
export {
    PKCS15Object,
    _get_decoder_for_PKCS15Object,
    _get_encoder_for_PKCS15Object,
} from "../PKCS-15/PKCS15Object.ta";

/* START_OF_SYMBOL_DEFINITION CertificateObject */
/**
 * @summary CertificateObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateObject {CertAttributes}  ::=  PKCS15Object { CommonCertificateAttributes, NULL, CertAttributes}
 * ```
 */
export type CertificateObject<CertAttributes> = PKCS15Object<
    CommonCertificateAttributes,
    NULL,
    CertAttributes
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION CertificateObject */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_CertificateObject */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) CertificateObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_CertificateObject<CertAttributes>(
    _decode_CertAttributes: $.ASN1Decoder<CertAttributes>
) {
    return _get_decoder_for_PKCS15Object<
        CommonCertificateAttributes,
        NULL,
        CertAttributes
    >(
        _decode_CommonCertificateAttributes,
        $._decodeNull,
        _decode_CertAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_CertificateObject */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_CertificateObject */
/**
 * @summary Returns a function that will encode a(n) CertificateObject into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) CertificateObject as an ASN.1 element.
 */
export function _get_encoder_for_CertificateObject<CertAttributes>(
    _encode_CertAttributes: $.ASN1Encoder<CertAttributes>
) {
    return _get_encoder_for_PKCS15Object<
        CommonCertificateAttributes,
        NULL,
        CertAttributes
    >(
        _encode_CommonCertificateAttributes,
        $._encodeNull,
        _encode_CertAttributes
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_CertificateObject */

/* eslint-enable */
