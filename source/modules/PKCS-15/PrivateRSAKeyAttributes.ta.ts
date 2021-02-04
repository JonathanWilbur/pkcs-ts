/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyInfo,
    _get_decoder_for_KeyInfo,
    _get_encoder_for_KeyInfo,
} from "../PKCS-15/KeyInfo.ta";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
import {
    PublicKeyOperations,
    _decode_PublicKeyOperations,
    _encode_PublicKeyOperations,
} from "../PKCS-15/PublicKeyOperations.ta";
import {
    RSAPrivateKeyObject,
    _decode_RSAPrivateKeyObject,
    _encode_RSAPrivateKeyObject,
} from "../PKCS-15/RSAPrivateKeyObject.ta";
export {
    KeyInfo,
    _get_decoder_for_KeyInfo,
    _get_encoder_for_KeyInfo,
} from "../PKCS-15/KeyInfo.ta";
export {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
export {
    PublicKeyOperations,
    _decode_PublicKeyOperations,
    _encode_PublicKeyOperations,
} from "../PKCS-15/PublicKeyOperations.ta";
export {
    RSAPrivateKeyObject,
    _decode_RSAPrivateKeyObject,
    _encode_RSAPrivateKeyObject,
} from "../PKCS-15/RSAPrivateKeyObject.ta";

/* START_OF_SYMBOL_DEFINITION PrivateRSAKeyAttributes */
/**
 * @summary PrivateRSAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateRSAKeyAttributes ::= SEQUENCE {
 *     value ObjectValue {RSAPrivateKeyObject},
 *     modulusLength INTEGER, -- modulus length in bits, e.g. 1024
 *     keyInfo  KeyInfo {NULL, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PrivateRSAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<RSAPrivateKeyObject>,
        /**
         * @summary `modulusLength`.
         * @public
         * @readonly
         */
        readonly modulusLength: INTEGER,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateRSAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PrivateRSAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateRSAKeyAttributes`.
     * @returns {PrivateRSAKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof PrivateRSAKeyAttributes]: PrivateRSAKeyAttributes[_K];
        }
    ): PrivateRSAKeyAttributes {
        return new PrivateRSAKeyAttributes(
            _o.value,
            _o.modulusLength,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes */
/**
 * @summary The Leading Root Component Types of PrivateRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "modulusLength",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PrivateRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateRSAKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PrivateRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateRSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateRSAKeyAttributes */
let _cached_decoder_for_PrivateRSAKeyAttributes: $.ASN1Decoder<PrivateRSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateRSAKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateRSAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateRSAKeyAttributes} The decoded data structure.
 */
export function _decode_PrivateRSAKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PrivateRSAKeyAttributes) {
        _cached_decoder_for_PrivateRSAKeyAttributes = function (
            el: _Element
        ): PrivateRSAKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<RSAPrivateKeyObject>;
            let modulusLength!: INTEGER;
            let keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<RSAPrivateKeyObject>(
                        _decode_RSAPrivateKeyObject
                    )(_el);
                },
                modulusLength: (_el: _Element): void => {
                    modulusLength = $._decodeInteger(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        NULL,
                        PublicKeyOperations
                    >(
                        $._decodeNull,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateRSAKeyAttributes,
                _extension_additions_list_spec_for_PrivateRSAKeyAttributes,
                _root_component_type_list_2_spec_for_PrivateRSAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateRSAKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ value,
                modulusLength,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateRSAKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateRSAKeyAttributes */
let _cached_encoder_for_PrivateRSAKeyAttributes: $.ASN1Encoder<PrivateRSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateRSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateRSAKeyAttributes */
/**
 * @summary Encodes a(n) PrivateRSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateRSAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PrivateRSAKeyAttributes(
    value: PrivateRSAKeyAttributes,
    elGetter: $.ASN1Encoder<PrivateRSAKeyAttributes>
) {
    if (!_cached_encoder_for_PrivateRSAKeyAttributes) {
        _cached_encoder_for_PrivateRSAKeyAttributes = function (
            value: PrivateRSAKeyAttributes,
            elGetter: $.ASN1Encoder<PrivateRSAKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<RSAPrivateKeyObject>(
                                _encode_RSAPrivateKeyObject
                            )(value.value, $.BER),
                            /* REQUIRED   */ $._encodeInteger(
                                value.modulusLength,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      NULL,
                                      PublicKeyOperations
                                  >($._encodeNull, _encode_PublicKeyOperations)(
                                      value.keyInfo,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PrivateRSAKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateRSAKeyAttributes */

/* eslint-enable */
