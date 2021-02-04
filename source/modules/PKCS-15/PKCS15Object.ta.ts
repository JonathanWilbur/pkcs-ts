/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CommonObjectAttributes,
    _decode_CommonObjectAttributes,
    _encode_CommonObjectAttributes,
} from "../PKCS-15/CommonObjectAttributes.ta";
export {
    CommonObjectAttributes,
    _decode_CommonObjectAttributes,
    _encode_CommonObjectAttributes,
} from "../PKCS-15/CommonObjectAttributes.ta";

/* START_OF_SYMBOL_DEFINITION PKCS15Object */
/**
 * @summary PKCS15Object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Object {ClassAttributes, SubClassAttributes, TypeAttributes} ::= SEQUENCE {
 *     commonObjectAttributes CommonObjectAttributes,
 *     classAttributes ClassAttributes,
 *     subClassAttributes [0] SubClassAttributes OPTIONAL,
 *     typeAttributes [1] TypeAttributes
 * }
 * ```
 *
 * @class
 */
export class PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes> {
    constructor(
        /**
         * @summary `commonObjectAttributes`.
         * @public
         * @readonly
         */
        readonly commonObjectAttributes: CommonObjectAttributes,
        /**
         * @summary `classAttributes`.
         * @public
         * @readonly
         */
        readonly classAttributes: ClassAttributes,
        /**
         * @summary `subClassAttributes`.
         * @public
         * @readonly
         */
        readonly subClassAttributes: OPTIONAL<SubClassAttributes>,
        /**
         * @summary `typeAttributes`.
         * @public
         * @readonly
         */
        readonly typeAttributes: TypeAttributes
    ) {}

    /**
     * @summary Restructures an object into a PKCS15Object
     * @description
     *
     * This takes an `object` and converts it to a `PKCS15Object`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKCS15Object`.
     * @returns {PKCS15Object}
     */
    public static _from_object(
        _o: {
            [_K in keyof PKCS15Object<any, any, any>]: PKCS15Object<
                any,
                any,
                any
            >[_K];
        }
    ): PKCS15Object<any, any, any> {
        return new PKCS15Object(
            _o.commonObjectAttributes,
            _o.classAttributes,
            _o.subClassAttributes,
            _o.typeAttributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PKCS15Object */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS15Object */
/**
 * @summary The Leading Root Component Types of PKCS15Object
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKCS15Object: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "commonObjectAttributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classAttributes",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subClassAttributes",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "typeAttributes",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS15Object */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS15Object */
/**
 * @summary The Trailing Root Component Types of PKCS15Object
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKCS15Object: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS15Object */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS15Object */
/**
 * @summary The Extension Addition Component Types of PKCS15Object
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKCS15Object: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS15Object */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_PKCS15Object */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PKCS15Object
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PKCS15Object<
    ClassAttributes,
    SubClassAttributes,
    TypeAttributes
>(
    _decode_ClassAttributes: $.ASN1Decoder<ClassAttributes>,
    _decode_SubClassAttributes: $.ASN1Decoder<SubClassAttributes>,
    _decode_TypeAttributes: $.ASN1Decoder<TypeAttributes>
) {
    return function (
        el: _Element
    ): PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let commonObjectAttributes!: CommonObjectAttributes;
        let classAttributes!: ClassAttributes;
        let subClassAttributes: OPTIONAL<SubClassAttributes>;
        let typeAttributes!: TypeAttributes;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            commonObjectAttributes: (_el: _Element): void => {
                commonObjectAttributes = _decode_CommonObjectAttributes(_el);
            },
            classAttributes: (_el: _Element): void => {
                classAttributes = _decode_ClassAttributes(_el);
            },
            subClassAttributes: (_el: _Element): void => {
                subClassAttributes = $._decode_implicit<SubClassAttributes>(
                    () => _decode_SubClassAttributes
                )(_el);
            },
            typeAttributes: (_el: _Element): void => {
                typeAttributes = $._decode_implicit<TypeAttributes>(
                    () => _decode_TypeAttributes
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_PKCS15Object,
            _extension_additions_list_spec_for_PKCS15Object,
            _root_component_type_list_2_spec_for_PKCS15Object,
            undefined
        );
        return new PKCS15Object(
            /* SEQUENCE_CONSTRUCTOR_CALL */ commonObjectAttributes,
            classAttributes,
            subClassAttributes,
            typeAttributes
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_PKCS15Object */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_PKCS15Object */
/**
 * @summary Returns a function that will encode a(n) PKCS15Object into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PKCS15Object as an ASN.1 element.
 */
export function _get_encoder_for_PKCS15Object<
    ClassAttributes,
    SubClassAttributes,
    TypeAttributes
>(
    _encode_ClassAttributes: $.ASN1Encoder<ClassAttributes>,
    _encode_SubClassAttributes: $.ASN1Encoder<SubClassAttributes>,
    _encode_TypeAttributes: $.ASN1Encoder<TypeAttributes>
) {
    return function (
        value: PKCS15Object<
            ClassAttributes,
            SubClassAttributes,
            TypeAttributes
        >,
        elGetter: $.ASN1Encoder<
            PKCS15Object<ClassAttributes, SubClassAttributes, TypeAttributes>
        >
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_CommonObjectAttributes(
                        value.commonObjectAttributes,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_ClassAttributes(
                        value.classAttributes,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.subClassAttributes === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => _encode_SubClassAttributes,
                              $.BER
                          )(value.subClassAttributes, $.BER),
                    /* REQUIRED   */ $._encode_implicit(
                        _TagClass.context,
                        1,
                        () => _encode_TypeAttributes,
                        $.BER
                    )(value.typeAttributes, $.BER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_PKCS15Object */

/* eslint-enable */
