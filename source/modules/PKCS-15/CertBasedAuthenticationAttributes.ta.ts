/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CertBasedAuthenticationAttributes */
/**
 * @summary CertBasedAuthenticationAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBasedAuthenticationAttributes ::= SEQUENCE {
 *     cha OCTET STRING,
 *     ...
 * }
 * ```
 *
 * @class
 */
export class CertBasedAuthenticationAttributes {
    constructor(
        /**
         * @summary `cha`.
         * @public
         * @readonly
         */
        readonly cha: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertBasedAuthenticationAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CertBasedAuthenticationAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertBasedAuthenticationAttributes`.
     * @returns {CertBasedAuthenticationAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CertBasedAuthenticationAttributes]: CertBasedAuthenticationAttributes[_K];
        }
    ): CertBasedAuthenticationAttributes {
        return new CertBasedAuthenticationAttributes(
            _o.cha,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes */
/**
 * @summary The Leading Root Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cha",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes */
/**
 * @summary The Trailing Root Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertBasedAuthenticationAttributes */
/**
 * @summary The Extension Addition Component Types of CertBasedAuthenticationAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertBasedAuthenticationAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBasedAuthenticationAttributes */
let _cached_decoder_for_CertBasedAuthenticationAttributes: $.ASN1Decoder<CertBasedAuthenticationAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CertBasedAuthenticationAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CertBasedAuthenticationAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBasedAuthenticationAttributes} The decoded data structure.
 */
export function _decode_CertBasedAuthenticationAttributes(el: _Element) {
    if (!_cached_decoder_for_CertBasedAuthenticationAttributes) {
        _cached_decoder_for_CertBasedAuthenticationAttributes = function (
            el: _Element
        ): CertBasedAuthenticationAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertBasedAuthenticationAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "cha";
            let cha!: OCTET_STRING;
            cha = $._decodeOctetString(sequence[0]);
            return new CertBasedAuthenticationAttributes(
                cha,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_CertBasedAuthenticationAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBasedAuthenticationAttributes */
let _cached_encoder_for_CertBasedAuthenticationAttributes: $.ASN1Encoder<CertBasedAuthenticationAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBasedAuthenticationAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CertBasedAuthenticationAttributes */
/**
 * @summary Encodes a(n) CertBasedAuthenticationAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBasedAuthenticationAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CertBasedAuthenticationAttributes(
    value: CertBasedAuthenticationAttributes,
    elGetter: $.ASN1Encoder<CertBasedAuthenticationAttributes>
) {
    if (!_cached_encoder_for_CertBasedAuthenticationAttributes) {
        _cached_encoder_for_CertBasedAuthenticationAttributes = function (
            value: CertBasedAuthenticationAttributes,
            elGetter: $.ASN1Encoder<CertBasedAuthenticationAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.cha,
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
    return _cached_encoder_for_CertBasedAuthenticationAttributes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CertBasedAuthenticationAttributes */

/* eslint-enable */
