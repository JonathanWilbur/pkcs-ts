/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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

/* START_OF_SYMBOL_DEFINITION CommonAuthenticationObjectAttributes */
/**
 * @summary CommonAuthenticationObjectAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonAuthenticationObjectAttributes ::= SEQUENCE {
 *     authId Identifier,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class CommonAuthenticationObjectAttributes {
    constructor(
        /**
         * @summary `authId`.
         * @public
         * @readonly
         */
        readonly authId: Identifier,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonAuthenticationObjectAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonAuthenticationObjectAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonAuthenticationObjectAttributes`.
     * @returns {CommonAuthenticationObjectAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonAuthenticationObjectAttributes]: CommonAuthenticationObjectAttributes[_K];
        }
    ): CommonAuthenticationObjectAttributes {
        return new CommonAuthenticationObjectAttributes(
            _o.authId,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes */
/**
 * @summary The Leading Root Component Types of CommonAuthenticationObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authId",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes */
/**
 * @summary The Trailing Root Component Types of CommonAuthenticationObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes */
/**
 * @summary The Extension Addition Component Types of CommonAuthenticationObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonAuthenticationObjectAttributes */
let _cached_decoder_for_CommonAuthenticationObjectAttributes: $.ASN1Decoder<CommonAuthenticationObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CommonAuthenticationObjectAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonAuthenticationObjectAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonAuthenticationObjectAttributes} The decoded data structure.
 */
export function _decode_CommonAuthenticationObjectAttributes(el: _Element) {
    if (!_cached_decoder_for_CommonAuthenticationObjectAttributes) {
        _cached_decoder_for_CommonAuthenticationObjectAttributes = function (
            el: _Element
        ): CommonAuthenticationObjectAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CommonAuthenticationObjectAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "authId";
            let authId!: Identifier;
            authId = _decode_Identifier(sequence[0]);
            return new CommonAuthenticationObjectAttributes(
                authId,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_CommonAuthenticationObjectAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonAuthenticationObjectAttributes */
let _cached_encoder_for_CommonAuthenticationObjectAttributes: $.ASN1Encoder<CommonAuthenticationObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonAuthenticationObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CommonAuthenticationObjectAttributes */
/**
 * @summary Encodes a(n) CommonAuthenticationObjectAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonAuthenticationObjectAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonAuthenticationObjectAttributes(
    value: CommonAuthenticationObjectAttributes,
    elGetter: $.ASN1Encoder<CommonAuthenticationObjectAttributes>
) {
    if (!_cached_encoder_for_CommonAuthenticationObjectAttributes) {
        _cached_encoder_for_CommonAuthenticationObjectAttributes = function (
            value: CommonAuthenticationObjectAttributes,
            elGetter: $.ASN1Encoder<CommonAuthenticationObjectAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Identifier(
                                value.authId,
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
    return _cached_encoder_for_CommonAuthenticationObjectAttributes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonAuthenticationObjectAttributes */

/* eslint-enable */
