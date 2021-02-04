/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { DDO, _decode_DDO, _encode_DDO } from "../PKCS-15/DDO.ta";
export { DDO, _decode_DDO, _encode_DDO } from "../PKCS-15/DDO.ta";

/* START_OF_SYMBOL_DEFINITION DIRRecord */
/**
 * @summary DIRRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DIRRecord ::= [APPLICATION 1] SEQUENCE {
 *     aid  [APPLICATION 15] OCTET STRING,
 *     label [APPLICATION 16] UTF8String OPTIONAL,
 *     path [APPLICATION 17] OCTET STRING,
 *     ddo  [APPLICATION 19] DDO OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DIRRecord {
    constructor(
        /**
         * @summary `aid`.
         * @public
         * @readonly
         */
        readonly aid: OCTET_STRING,
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<UTF8String>,
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: OCTET_STRING,
        /**
         * @summary `ddo`.
         * @public
         * @readonly
         */
        readonly ddo: OPTIONAL<DDO>
    ) {}

    /**
     * @summary Restructures an object into a DIRRecord
     * @description
     *
     * This takes an `object` and converts it to a `DIRRecord`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DIRRecord`.
     * @returns {DIRRecord}
     */
    public static _from_object(
        _o: { [_K in keyof DIRRecord]: DIRRecord[_K] }
    ): DIRRecord {
        return new DIRRecord(_o.aid, _o.label, _o.path, _o.ddo);
    }
}
/* END_OF_SYMBOL_DEFINITION DIRRecord */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DIRRecord */
/**
 * @summary The Leading Root Component Types of DIRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DIRRecord: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "aid",
        false,
        $.hasTag(_TagClass.application, 15),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "label",
        true,
        $.hasTag(_TagClass.application, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "path",
        false,
        $.hasTag(_TagClass.application, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ddo",
        true,
        $.hasTag(_TagClass.application, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DIRRecord */
/**
 * @summary The Trailing Root Component Types of DIRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DIRRecord: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DIRRecord */
/**
 * @summary The Extension Addition Component Types of DIRRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DIRRecord: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DIRRecord */
let _cached_decoder_for_DIRRecord: $.ASN1Decoder<DIRRecord> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _decode_DIRRecord */
/**
 * @summary Decodes an ASN.1 element into a(n) DIRRecord
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DIRRecord} The decoded data structure.
 */
export function _decode_DIRRecord(el: _Element) {
    if (!_cached_decoder_for_DIRRecord) {
        _cached_decoder_for_DIRRecord = $._decode_implicit<DIRRecord>(
            () =>
                function (el: _Element): DIRRecord {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let aid!: OCTET_STRING;
                    let label: OPTIONAL<UTF8String>;
                    let path!: OCTET_STRING;
                    let ddo: OPTIONAL<DDO>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        aid: (_el: _Element): void => {
                            aid = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                        label: (_el: _Element): void => {
                            label = $._decode_implicit<UTF8String>(
                                () => $._decodeUTF8String
                            )(_el);
                        },
                        path: (_el: _Element): void => {
                            path = $._decode_implicit<OCTET_STRING>(
                                () => $._decodeOctetString
                            )(_el);
                        },
                        ddo: (_el: _Element): void => {
                            ddo = $._decode_implicit<DDO>(() => _decode_DDO)(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_DIRRecord,
                        _extension_additions_list_spec_for_DIRRecord,
                        _root_component_type_list_2_spec_for_DIRRecord,
                        undefined
                    );
                    return new DIRRecord(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ aid,
                        label,
                        path,
                        ddo
                    );
                }
        );
    }
    return _cached_decoder_for_DIRRecord(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DIRRecord */
let _cached_encoder_for_DIRRecord: $.ASN1Encoder<DIRRecord> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DIRRecord */

/* START_OF_SYMBOL_DEFINITION _encode_DIRRecord */
/**
 * @summary Encodes a(n) DIRRecord into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DIRRecord, encoded as an ASN.1 Element.
 */
export function _encode_DIRRecord(
    value: DIRRecord,
    elGetter: $.ASN1Encoder<DIRRecord>
) {
    if (!_cached_encoder_for_DIRRecord) {
        _cached_encoder_for_DIRRecord = $._encode_implicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: DIRRecord,
                    elGetter: $.ASN1Encoder<DIRRecord>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.application,
                                    15,
                                    () => $._encodeOctetString,
                                    $.BER
                                )(value.aid, $.BER),
                                /* IF_ABSENT  */ value.label === undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.application,
                                          16,
                                          () => $._encodeUTF8String,
                                          $.BER
                                      )(value.label, $.BER),
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.application,
                                    17,
                                    () => $._encodeOctetString,
                                    $.BER
                                )(value.path, $.BER),
                                /* IF_ABSENT  */ value.ddo === undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.application,
                                          19,
                                          () => _encode_DDO,
                                          $.BER
                                      )(value.ddo, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_DIRRecord(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DIRRecord */

/* eslint-enable */
