/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyInfo_paramsAndOps,
    _get_decoder_for_KeyInfo_paramsAndOps,
    _get_encoder_for_KeyInfo_paramsAndOps,
} from "../PKCS-15/KeyInfo-paramsAndOps.ta";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta";
export {
    KeyInfo_paramsAndOps,
    _get_decoder_for_KeyInfo_paramsAndOps,
    _get_encoder_for_KeyInfo_paramsAndOps,
} from "../PKCS-15/KeyInfo-paramsAndOps.ta";
export {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta";

/* START_OF_SYMBOL_DEFINITION KeyInfo */
/**
 * @summary KeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyInfo {ParameterType, OperationsType}  ::=  CHOICE {
 *     reference Reference,
 *     paramsAndOps SEQUENCE {
 *         parameters ParameterType,
 *         supportedOperations OperationsType OPTIONAL
 *     }
 * }
 * ```
 */
export type KeyInfo<ParameterType, OperationsType> =
    | { reference: Reference } /* CHOICE_ALT_ROOT */
    | {
          paramsAndOps: KeyInfo_paramsAndOps<ParameterType, OperationsType>;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION KeyInfo */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_KeyInfo */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_KeyInfo<ParameterType, OperationsType>(
    _decode_ParameterType: $.ASN1Decoder<ParameterType>,
    _decode_OperationsType: $.ASN1Decoder<OperationsType>
) {
    return $._decode_inextensible_choice<
        KeyInfo<ParameterType, OperationsType>
    >({
        "UNIVERSAL 2": ["reference", _decode_Reference],
        "UNIVERSAL 16": [
            "paramsAndOps",
            _get_decoder_for_KeyInfo_paramsAndOps<
                ParameterType,
                OperationsType
            >(_decode_ParameterType, _decode_OperationsType),
        ],
    });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_KeyInfo */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_KeyInfo */
/**
 * @summary Returns a function that will encode a(n) KeyInfo into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo as an ASN.1 element.
 */
export function _get_encoder_for_KeyInfo<ParameterType, OperationsType>(
    _encode_ParameterType: $.ASN1Encoder<ParameterType>,
    _encode_OperationsType: $.ASN1Encoder<OperationsType>
) {
    return $._encode_choice<KeyInfo<ParameterType, OperationsType>>(
        {
            reference: _encode_Reference,
            paramsAndOps: _get_encoder_for_KeyInfo_paramsAndOps<
                ParameterType,
                OperationsType
            >(_encode_ParameterType, _encode_OperationsType),
        },
        $.BER
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_KeyInfo */

/* eslint-enable */
