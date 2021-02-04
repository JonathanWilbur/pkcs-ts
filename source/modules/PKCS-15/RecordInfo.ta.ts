/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RecordInfo */
/**
 * @summary RecordInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecordInfo ::= SEQUENCE {
 *     oDFRecordLength  [0] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     prKDFRecordLength [1] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     puKDFRecordLength [2] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     sKDFRecordLength [3] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     cDFRecordLength  [4] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     dODFRecordLength [5] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL,
 *     aODFRecordLength [6] INTEGER (0..pkcs15-ub-recordLength) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RecordInfo {
    constructor(
        /**
         * @summary `oDFRecordLength`.
         * @public
         * @readonly
         */
        readonly oDFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `prKDFRecordLength`.
         * @public
         * @readonly
         */
        readonly prKDFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `puKDFRecordLength`.
         * @public
         * @readonly
         */
        readonly puKDFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `sKDFRecordLength`.
         * @public
         * @readonly
         */
        readonly sKDFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `cDFRecordLength`.
         * @public
         * @readonly
         */
        readonly cDFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `dODFRecordLength`.
         * @public
         * @readonly
         */
        readonly dODFRecordLength: OPTIONAL<INTEGER>,
        /**
         * @summary `aODFRecordLength`.
         * @public
         * @readonly
         */
        readonly aODFRecordLength: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a RecordInfo
     * @description
     *
     * This takes an `object` and converts it to a `RecordInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordInfo`.
     * @returns {RecordInfo}
     */
    public static _from_object(
        _o: { [_K in keyof RecordInfo]: RecordInfo[_K] }
    ): RecordInfo {
        return new RecordInfo(
            _o.oDFRecordLength,
            _o.prKDFRecordLength,
            _o.puKDFRecordLength,
            _o.sKDFRecordLength,
            _o.cDFRecordLength,
            _o.dODFRecordLength,
            _o.aODFRecordLength
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RecordInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecordInfo */
/**
 * @summary The Leading Root Component Types of RecordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecordInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "oDFRecordLength",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prKDFRecordLength",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "puKDFRecordLength",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sKDFRecordLength",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "cDFRecordLength",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dODFRecordLength",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aODFRecordLength",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecordInfo */
/**
 * @summary The Trailing Root Component Types of RecordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecordInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecordInfo */
/**
 * @summary The Extension Addition Component Types of RecordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecordInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecordInfo */
let _cached_decoder_for_RecordInfo: $.ASN1Decoder<RecordInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RecordInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RecordInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecordInfo} The decoded data structure.
 */
export function _decode_RecordInfo(el: _Element) {
    if (!_cached_decoder_for_RecordInfo) {
        _cached_decoder_for_RecordInfo = function (el: _Element): RecordInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let oDFRecordLength: OPTIONAL<INTEGER>;
            let prKDFRecordLength: OPTIONAL<INTEGER>;
            let puKDFRecordLength: OPTIONAL<INTEGER>;
            let sKDFRecordLength: OPTIONAL<INTEGER>;
            let cDFRecordLength: OPTIONAL<INTEGER>;
            let dODFRecordLength: OPTIONAL<INTEGER>;
            let aODFRecordLength: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                oDFRecordLength: (_el: _Element): void => {
                    oDFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                prKDFRecordLength: (_el: _Element): void => {
                    prKDFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                puKDFRecordLength: (_el: _Element): void => {
                    puKDFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                sKDFRecordLength: (_el: _Element): void => {
                    sKDFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                cDFRecordLength: (_el: _Element): void => {
                    cDFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                dODFRecordLength: (_el: _Element): void => {
                    dODFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                aODFRecordLength: (_el: _Element): void => {
                    aODFRecordLength = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RecordInfo,
                _extension_additions_list_spec_for_RecordInfo,
                _root_component_type_list_2_spec_for_RecordInfo,
                undefined
            );
            return new RecordInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ oDFRecordLength,
                prKDFRecordLength,
                puKDFRecordLength,
                sKDFRecordLength,
                cDFRecordLength,
                dODFRecordLength,
                aODFRecordLength
            );
        };
    }
    return _cached_decoder_for_RecordInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecordInfo */
let _cached_encoder_for_RecordInfo: $.ASN1Encoder<RecordInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecordInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RecordInfo */
/**
 * @summary Encodes a(n) RecordInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordInfo, encoded as an ASN.1 Element.
 */
export function _encode_RecordInfo(
    value: RecordInfo,
    elGetter: $.ASN1Encoder<RecordInfo>
) {
    if (!_cached_encoder_for_RecordInfo) {
        _cached_encoder_for_RecordInfo = function (
            value: RecordInfo,
            elGetter: $.ASN1Encoder<RecordInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.oDFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.oDFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.prKDFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.prKDFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.puKDFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.puKDFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.sKDFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.sKDFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.cDFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.cDFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.dODFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.dODFRecordLength, $.BER),
                        /* IF_ABSENT  */ value.aODFRecordLength === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.aODFRecordLength, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecordInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecordInfo */

/* eslint-enable */
