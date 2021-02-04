/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";

/* START_OF_SYMBOL_DEFINITION AuthKeyAttributes */
/**
 * @summary AuthKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthKeyAttributes ::= SEQUENCE {
 *     derivedKey BOOLEAN DEFAULT TRUE,
 *     authKeyId Identifier,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class AuthKeyAttributes {
    constructor(
        /**
         * @summary `derivedKey`.
         * @public
         * @readonly
         */
        readonly derivedKey: OPTIONAL<BOOLEAN>,
        /**
         * @summary `authKeyId`.
         * @public
         * @readonly
         */
        readonly authKeyId: Identifier,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `AuthKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthKeyAttributes`.
     * @returns {AuthKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof AuthKeyAttributes]: AuthKeyAttributes[_K] }
    ): AuthKeyAttributes {
        return new AuthKeyAttributes(
            _o.derivedKey,
            _o.authKeyId,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `derivedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_derivedKey() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthKeyAttributes */
/**
 * @summary The Leading Root Component Types of AuthKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "derivedKey",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authKeyId",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthKeyAttributes */
/**
 * @summary The Trailing Root Component Types of AuthKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthKeyAttributes */
/**
 * @summary The Extension Addition Component Types of AuthKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthKeyAttributes */
let _cached_decoder_for_AuthKeyAttributes: $.ASN1Decoder<AuthKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_AuthKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthKeyAttributes} The decoded data structure.
 */
export function _decode_AuthKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_AuthKeyAttributes) {
        _cached_decoder_for_AuthKeyAttributes = function (
            el: _Element
        ): AuthKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let derivedKey: OPTIONAL<BOOLEAN> =
                AuthKeyAttributes._default_value_for_derivedKey;
            let authKeyId!: Identifier;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                derivedKey: (_el: _Element): void => {
                    derivedKey = $._decodeBoolean(_el);
                },
                authKeyId: (_el: _Element): void => {
                    authKeyId = _decode_Identifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthKeyAttributes,
                _extension_additions_list_spec_for_AuthKeyAttributes,
                _root_component_type_list_2_spec_for_AuthKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ derivedKey,
                authKeyId,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthKeyAttributes */
let _cached_encoder_for_AuthKeyAttributes: $.ASN1Encoder<AuthKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_AuthKeyAttributes */
/**
 * @summary Encodes a(n) AuthKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_AuthKeyAttributes(
    value: AuthKeyAttributes,
    elGetter: $.ASN1Encoder<AuthKeyAttributes>
) {
    if (!_cached_encoder_for_AuthKeyAttributes) {
        _cached_encoder_for_AuthKeyAttributes = function (
            value: AuthKeyAttributes,
            elGetter: $.ASN1Encoder<AuthKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.derivedKey === undefined ||
                            $.deepEq(
                                value.derivedKey,
                                AuthKeyAttributes._default_value_for_derivedKey
                            )
                                ? undefined
                                : $._encodeBoolean(value.derivedKey, $.BER),
                            /* REQUIRED   */ _encode_Identifier(
                                value.authKeyId,
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
    return _cached_encoder_for_AuthKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthKeyAttributes */

/* eslint-enable */
