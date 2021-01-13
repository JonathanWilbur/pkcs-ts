/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthKeyAttributes,
    _decode_AuthKeyAttributes,
    _encode_AuthKeyAttributes,
} from "../PKCS-15/AuthKeyAttributes.ta";
import {
    CertBasedAuthenticationAttributes,
    _decode_CertBasedAuthenticationAttributes,
    _encode_CertBasedAuthenticationAttributes,
} from "../PKCS-15/CertBasedAuthenticationAttributes.ta";
export {
    AuthKeyAttributes,
    _decode_AuthKeyAttributes,
    _encode_AuthKeyAttributes,
} from "../PKCS-15/AuthKeyAttributes.ta";
export {
    CertBasedAuthenticationAttributes,
    _decode_CertBasedAuthenticationAttributes,
    _encode_CertBasedAuthenticationAttributes,
} from "../PKCS-15/CertBasedAuthenticationAttributes.ta";

/* START_OF_SYMBOL_DEFINITION ExternalAuthObjectAttributes */
/**
 * @summary ExternalAuthObjectAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalAuthObjectAttributes  ::=  CHOICE {
 *     authKeyAttributes AuthKeyAttributes,
 *     certBasedAttributes [0] CertBasedAuthenticationAttributes,
 *     ... -- For future extensions
 * }
 * ```
 */
export type ExternalAuthObjectAttributes =
    | { authKeyAttributes: AuthKeyAttributes } /* CHOICE_ALT_ROOT */
    | {
          certBasedAttributes: CertBasedAuthenticationAttributes;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ExternalAuthObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalAuthObjectAttributes */
let _cached_decoder_for_ExternalAuthObjectAttributes: $.ASN1Decoder<ExternalAuthObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalAuthObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalAuthObjectAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) ExternalAuthObjectAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalAuthObjectAttributes} The decoded data structure.
 */
export function _decode_ExternalAuthObjectAttributes(el: _Element) {
    if (!_cached_decoder_for_ExternalAuthObjectAttributes) {
        _cached_decoder_for_ExternalAuthObjectAttributes = $._decode_extensible_choice<ExternalAuthObjectAttributes>(
            {
                "UNIVERSAL 16": [
                    "authKeyAttributes",
                    _decode_AuthKeyAttributes,
                ],
                "CONTEXT 0": [
                    "certBasedAttributes",
                    $._decode_implicit<CertBasedAuthenticationAttributes>(
                        () => _decode_CertBasedAuthenticationAttributes
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExternalAuthObjectAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExternalAuthObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalAuthObjectAttributes */
let _cached_encoder_for_ExternalAuthObjectAttributes: $.ASN1Encoder<ExternalAuthObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalAuthObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalAuthObjectAttributes */
/**
 * @summary Encodes a(n) ExternalAuthObjectAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalAuthObjectAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ExternalAuthObjectAttributes(
    value: ExternalAuthObjectAttributes,
    elGetter: $.ASN1Encoder<ExternalAuthObjectAttributes>
) {
    if (!_cached_encoder_for_ExternalAuthObjectAttributes) {
        _cached_encoder_for_ExternalAuthObjectAttributes = $._encode_choice<ExternalAuthObjectAttributes>(
            {
                authKeyAttributes: _encode_AuthKeyAttributes,
                certBasedAttributes: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertBasedAuthenticationAttributes,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExternalAuthObjectAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExternalAuthObjectAttributes */

/* eslint-enable */
