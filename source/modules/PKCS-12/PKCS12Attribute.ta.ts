/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PKCS12Attribute */
/**
 * @summary PKCS12Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS12Attribute ::= SEQUENCE {
 *     attrId      ATTRIBUTE.&id ({PKCS12AttrSet}),
 *     attrValues  SET OF ATTRIBUTE.&Type ({PKCS12AttrSet}{@attrId})
 * }
 * ```
 *
 * @class
 */
export class PKCS12Attribute {
    constructor(
        /**
         * @summary `attrId`.
         * @public
         * @readonly
         */
        readonly attrId: OBJECT_IDENTIFIER,
        /**
         * @summary `attrValues`.
         * @public
         * @readonly
         */
        readonly attrValues: _Element[]
    ) {}

    /**
     * @summary Restructures an object into a PKCS12Attribute
     * @description
     *
     * This takes an `object` and converts it to a `PKCS12Attribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKCS12Attribute`.
     * @returns {PKCS12Attribute}
     */
    public static _from_object(
        _o: { [_K in keyof PKCS12Attribute]: PKCS12Attribute[_K] }
    ): PKCS12Attribute {
        return new PKCS12Attribute(_o.attrId, _o.attrValues);
    }
}
/* END_OF_SYMBOL_DEFINITION PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS12Attribute */
/**
 * @summary The Leading Root Component Types of PKCS12Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKCS12Attribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attrId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attrValues",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS12Attribute */
/**
 * @summary The Trailing Root Component Types of PKCS12Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKCS12Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS12Attribute */
/**
 * @summary The Extension Addition Component Types of PKCS12Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKCS12Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS12Attribute */
let _cached_decoder_for_PKCS12Attribute: $.ASN1Decoder<PKCS12Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS12Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS12Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS12Attribute} The decoded data structure.
 */
export function _decode_PKCS12Attribute(el: _Element) {
    if (!_cached_decoder_for_PKCS12Attribute) {
        _cached_decoder_for_PKCS12Attribute = function (
            el: _Element
        ): PKCS12Attribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PKCS12Attribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "attrId";
            sequence[1].name = "attrValues";
            let attrId!: OBJECT_IDENTIFIER;
            let attrValues!: _Element[];
            attrId = $._decodeObjectIdentifier(sequence[0]);
            attrValues = $._decodeSetOf<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new PKCS12Attribute(attrId, attrValues);
        };
    }
    return _cached_decoder_for_PKCS12Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS12Attribute */
let _cached_encoder_for_PKCS12Attribute: $.ASN1Encoder<PKCS12Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS12Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS12Attribute */
/**
 * @summary Encodes a(n) PKCS12Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS12Attribute, encoded as an ASN.1 Element.
 */
export function _encode_PKCS12Attribute(
    value: PKCS12Attribute,
    elGetter: $.ASN1Encoder<PKCS12Attribute>
) {
    if (!_cached_encoder_for_PKCS12Attribute) {
        _cached_encoder_for_PKCS12Attribute = function (
            value: PKCS12Attribute,
            elGetter: $.ASN1Encoder<PKCS12Attribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.attrId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<_Element>(
                            () => $._encodeAny,
                            $.BER
                        )(value.attrValues, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PKCS12Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS12Attribute */

/* eslint-enable */
