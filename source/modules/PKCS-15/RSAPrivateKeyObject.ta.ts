/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RSAPrivateKeyObject */
/**
 * @summary RSAPrivateKeyObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAPrivateKeyObject ::= SEQUENCE {
 *     modulus [0] INTEGER OPTIONAL, -- n
 *     publicExponent [1] INTEGER OPTIONAL, -- e
 *     privateExponent [2] INTEGER OPTIONAL, -- d
 *     prime1 [3] INTEGER OPTIONAL, -- p
 *     prime2 [4] INTEGER OPTIONAL, -- q
 *     exponent1  [5] INTEGER OPTIONAL, -- d mod (p-1)
 *     exponent2  [6] INTEGER OPTIONAL, -- d mod (q-1)
 *     coefficient [7] INTEGER OPTIONAL -- inv(q) mod p
 * } (CONSTRAINED BY {-- must be possible to reconstruct modulus and privateExponent from
 * -- selected fields --})
 * ```
 *
 * @class
 */
export class RSAPrivateKeyObject {
    constructor(
        /**
         * @summary `modulus`.
         * @public
         * @readonly
         */
        readonly modulus: OPTIONAL<INTEGER>,
        /**
         * @summary `publicExponent`.
         * @public
         * @readonly
         */
        readonly publicExponent: OPTIONAL<INTEGER>,
        /**
         * @summary `privateExponent`.
         * @public
         * @readonly
         */
        readonly privateExponent: OPTIONAL<INTEGER>,
        /**
         * @summary `prime1`.
         * @public
         * @readonly
         */
        readonly prime1: OPTIONAL<INTEGER>,
        /**
         * @summary `prime2`.
         * @public
         * @readonly
         */
        readonly prime2: OPTIONAL<INTEGER>,
        /**
         * @summary `exponent1`.
         * @public
         * @readonly
         */
        readonly exponent1: OPTIONAL<INTEGER>,
        /**
         * @summary `exponent2`.
         * @public
         * @readonly
         */
        readonly exponent2: OPTIONAL<INTEGER>,
        /**
         * @summary `coefficient`.
         * @public
         * @readonly
         */
        readonly coefficient: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a RSAPrivateKeyObject
     * @description
     *
     * This takes an `object` and converts it to a `RSAPrivateKeyObject`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSAPrivateKeyObject`.
     * @returns {RSAPrivateKeyObject}
     */
    public static _from_object(
        _o: { [_K in keyof RSAPrivateKeyObject]: RSAPrivateKeyObject[_K] }
    ): RSAPrivateKeyObject {
        return new RSAPrivateKeyObject(
            _o.modulus,
            _o.publicExponent,
            _o.privateExponent,
            _o.prime1,
            _o.prime2,
            _o.exponent1,
            _o.exponent2,
            _o.coefficient
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPrivateKeyObject */
/**
 * @summary The Leading Root Component Types of RSAPrivateKeyObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSAPrivateKeyObject: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "modulus",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicExponent",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privateExponent",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prime1",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prime2",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exponent1",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exponent2",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "coefficient",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPrivateKeyObject */
/**
 * @summary The Trailing Root Component Types of RSAPrivateKeyObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSAPrivateKeyObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPrivateKeyObject */
/**
 * @summary The Extension Addition Component Types of RSAPrivateKeyObject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSAPrivateKeyObject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPrivateKeyObject */
let _cached_decoder_for_RSAPrivateKeyObject: $.ASN1Decoder<RSAPrivateKeyObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _decode_RSAPrivateKeyObject */
/**
 * @summary Decodes an ASN.1 element into a(n) RSAPrivateKeyObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAPrivateKeyObject} The decoded data structure.
 */
export function _decode_RSAPrivateKeyObject(el: _Element) {
    if (!_cached_decoder_for_RSAPrivateKeyObject) {
        _cached_decoder_for_RSAPrivateKeyObject = function (
            el: _Element
        ): RSAPrivateKeyObject {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let modulus: OPTIONAL<INTEGER>;
            let publicExponent: OPTIONAL<INTEGER>;
            let privateExponent: OPTIONAL<INTEGER>;
            let prime1: OPTIONAL<INTEGER>;
            let prime2: OPTIONAL<INTEGER>;
            let exponent1: OPTIONAL<INTEGER>;
            let exponent2: OPTIONAL<INTEGER>;
            let coefficient: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                modulus: (_el: _Element): void => {
                    modulus = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                publicExponent: (_el: _Element): void => {
                    publicExponent = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                privateExponent: (_el: _Element): void => {
                    privateExponent = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                prime1: (_el: _Element): void => {
                    prime1 = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                prime2: (_el: _Element): void => {
                    prime2 = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                exponent1: (_el: _Element): void => {
                    exponent1 = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                exponent2: (_el: _Element): void => {
                    exponent2 = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                coefficient: (_el: _Element): void => {
                    coefficient = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSAPrivateKeyObject,
                _extension_additions_list_spec_for_RSAPrivateKeyObject,
                _root_component_type_list_2_spec_for_RSAPrivateKeyObject,
                undefined
            );
            return new RSAPrivateKeyObject(
                /* SEQUENCE_CONSTRUCTOR_CALL */ modulus,
                publicExponent,
                privateExponent,
                prime1,
                prime2,
                exponent1,
                exponent2,
                coefficient
            );
        };
    }
    return _cached_decoder_for_RSAPrivateKeyObject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPrivateKeyObject */
let _cached_encoder_for_RSAPrivateKeyObject: $.ASN1Encoder<RSAPrivateKeyObject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPrivateKeyObject */

/* START_OF_SYMBOL_DEFINITION _encode_RSAPrivateKeyObject */
/**
 * @summary Encodes a(n) RSAPrivateKeyObject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAPrivateKeyObject, encoded as an ASN.1 Element.
 */
export function _encode_RSAPrivateKeyObject(
    value: RSAPrivateKeyObject,
    elGetter: $.ASN1Encoder<RSAPrivateKeyObject>
) {
    if (!_cached_encoder_for_RSAPrivateKeyObject) {
        _cached_encoder_for_RSAPrivateKeyObject = function (
            value: RSAPrivateKeyObject,
            elGetter: $.ASN1Encoder<RSAPrivateKeyObject>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.modulus === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.modulus, $.BER),
                        /* IF_ABSENT  */ value.publicExponent === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.publicExponent, $.BER),
                        /* IF_ABSENT  */ value.privateExponent === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.privateExponent, $.BER),
                        /* IF_ABSENT  */ value.prime1 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.prime1, $.BER),
                        /* IF_ABSENT  */ value.prime2 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.prime2, $.BER),
                        /* IF_ABSENT  */ value.exponent1 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.exponent1, $.BER),
                        /* IF_ABSENT  */ value.exponent2 === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.exponent2, $.BER),
                        /* IF_ABSENT  */ value.coefficient === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.coefficient, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSAPrivateKeyObject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSAPrivateKeyObject */

/* eslint-enable */
