/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyInfo_paramsAndOps */
/**
 * @summary KeyInfo_paramsAndOps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyInfo-paramsAndOps ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: ParameterType,
        /**
         * @summary `supportedOperations`.
         * @public
         * @readonly
         */
        readonly supportedOperations: OPTIONAL<OperationsType>
    ) {}

    /**
     * @summary Restructures an object into a KeyInfo_paramsAndOps
     * @description
     *
     * This takes an `object` and converts it to a `KeyInfo_paramsAndOps`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyInfo_paramsAndOps`.
     * @returns {KeyInfo_paramsAndOps}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyInfo_paramsAndOps<any, any>]: KeyInfo_paramsAndOps<
                any,
                any
            >[_K];
        }
    ): KeyInfo_paramsAndOps<any, any> {
        return new KeyInfo_paramsAndOps(_o.parameters, _o.supportedOperations);
    }
}
/* END_OF_SYMBOL_DEFINITION KeyInfo_paramsAndOps */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps */
/**
 * @summary The Leading Root Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [
    new $.ComponentSpec("parameters", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "supportedOperations",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps */
/**
 * @summary The Trailing Root Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyInfo_paramsAndOps */
/**
 * @summary The Extension Addition Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyInfo_paramsAndOps */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_KeyInfo_paramsAndOps */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo_paramsAndOps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_KeyInfo_paramsAndOps<
    ParameterType,
    OperationsType
>(
    _decode_ParameterType: $.ASN1Decoder<ParameterType>,
    _decode_OperationsType: $.ASN1Decoder<OperationsType>
) {
    return function (
        el: _Element
    ): KeyInfo_paramsAndOps<ParameterType, OperationsType> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let parameters!: ParameterType;
        let supportedOperations: OPTIONAL<OperationsType>;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            parameters: (_el: _Element): void => {
                parameters = _decode_ParameterType(_el);
            },
            supportedOperations: (_el: _Element): void => {
                supportedOperations = _decode_OperationsType(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps,
            _extension_additions_list_spec_for_KeyInfo_paramsAndOps,
            _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps,
            undefined
        );
        return new KeyInfo_paramsAndOps(
            /* SEQUENCE_CONSTRUCTOR_CALL */ parameters,
            supportedOperations
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_KeyInfo_paramsAndOps */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_KeyInfo_paramsAndOps */
/**
 * @summary Returns a function that will encode a(n) KeyInfo_paramsAndOps into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo_paramsAndOps as an ASN.1 element.
 */
export function _get_encoder_for_KeyInfo_paramsAndOps<
    ParameterType,
    OperationsType
>(
    _encode_ParameterType: $.ASN1Encoder<ParameterType>,
    _encode_OperationsType: $.ASN1Encoder<OperationsType>
) {
    return function (
        value: KeyInfo_paramsAndOps<ParameterType, OperationsType>,
        elGetter: $.ASN1Encoder<
            KeyInfo_paramsAndOps<ParameterType, OperationsType>
        >
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_ParameterType(
                        value.parameters,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.supportedOperations === undefined
                        ? undefined
                        : _encode_OperationsType(
                              value.supportedOperations,
                              $.BER
                          ),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_KeyInfo_paramsAndOps */

/* eslint-enable */
