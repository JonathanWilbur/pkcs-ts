/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca";

/* START_OF_SYMBOL_DEFINITION AlgorithmIdentifier */
/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier { ALGORITHM-IDENTIFIER:InfoObjectSet } ::= SEQUENCE {
 *     algorithm ALGORITHM-IDENTIFIER.&id({InfoObjectSet}),
 *     parameters ALGORITHM-IDENTIFIER.&Type({InfoObjectSet}{@algorithm}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlgorithmIdentifier {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmIdentifier`.
     * @returns {AlgorithmIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof AlgorithmIdentifier]: AlgorithmIdentifier[_K] }
    ): AlgorithmIdentifier {
        return new AlgorithmIdentifier(_o.algorithm, _o.parameters);
    }
}
/* END_OF_SYMBOL_DEFINITION AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmIdentifier */
/**
 * @summary The Leading Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmIdentifier */
/**
 * @summary The Trailing Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmIdentifier */
/**
 * @summary The Extension Addition Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */
let _cached_decoder_for_AlgorithmIdentifier: $.ASN1Decoder<AlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_AlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = function (
            el: _Element
        ): AlgorithmIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmIdentifier,
                _extension_additions_list_spec_for_AlgorithmIdentifier,
                _root_component_type_list_2_spec_for_AlgorithmIdentifier,
                undefined
            );
            return new AlgorithmIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
                parameters
            );
        };
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */
let _cached_encoder_for_AlgorithmIdentifier: $.ASN1Encoder<AlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */
/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: $.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = function (
            value: AlgorithmIdentifier,
            elGetter: $.ASN1Encoder<AlgorithmIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encodeAny(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmIdentifier */

/* eslint-enable */
