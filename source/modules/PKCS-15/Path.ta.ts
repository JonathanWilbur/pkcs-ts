/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Path */
/**
 * @summary Path
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Path ::= SEQUENCE {
 *     path OCTET STRING,
 *     index  INTEGER (0..pkcs15-ub-index) OPTIONAL,
 *     length [0] INTEGER (0..pkcs15-ub-index) OPTIONAL
 * }( WITH COMPONENTS {..., index PRESENT, length PRESENT} | WITH COMPONENTS {..., index ABSENT, length ABSENT})
 * ```
 *
 * @class
 */
export class Path {
    constructor(
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: OCTET_STRING,
        /**
         * @summary `index`.
         * @public
         * @readonly
         */
        readonly index: OPTIONAL<INTEGER>,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Path
     * @description
     *
     * This takes an `object` and converts it to a `Path`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path`.
     * @returns {Path}
     */
    public static _from_object(_o: { [_K in keyof Path]: Path[_K] }): Path {
        return new Path(_o.path, _o.index, _o.length);
    }
}
/* END_OF_SYMBOL_DEFINITION Path */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Path */
/**
 * @summary The Leading Root Component Types of Path
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Path: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "path",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "index",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "length",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Path */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Path */
/**
 * @summary The Trailing Root Component Types of Path
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Path: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Path */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Path */
/**
 * @summary The Extension Addition Component Types of Path
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Path: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Path */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Path */
let _cached_decoder_for_Path: $.ASN1Decoder<Path> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Path */

/* START_OF_SYMBOL_DEFINITION _decode_Path */
/**
 * @summary Decodes an ASN.1 element into a(n) Path
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Path} The decoded data structure.
 */
export function _decode_Path(el: _Element) {
    if (!_cached_decoder_for_Path) {
        _cached_decoder_for_Path = function (el: _Element): Path {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let path!: OCTET_STRING;
            let index: OPTIONAL<INTEGER>;
            let length: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                path: (_el: _Element): void => {
                    path = $._decodeOctetString(_el);
                },
                index: (_el: _Element): void => {
                    index = $._decodeInteger(_el);
                },
                length: (_el: _Element): void => {
                    length = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Path,
                _extension_additions_list_spec_for_Path,
                _root_component_type_list_2_spec_for_Path,
                undefined
            );
            return new Path(
                /* SEQUENCE_CONSTRUCTOR_CALL */ path,
                index,
                length
            );
        };
    }
    return _cached_decoder_for_Path(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Path */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Path */
let _cached_encoder_for_Path: $.ASN1Encoder<Path> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Path */

/* START_OF_SYMBOL_DEFINITION _encode_Path */
/**
 * @summary Encodes a(n) Path into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path, encoded as an ASN.1 Element.
 */
export function _encode_Path(value: Path, elGetter: $.ASN1Encoder<Path>) {
    if (!_cached_encoder_for_Path) {
        _cached_encoder_for_Path = function (
            value: Path,
            elGetter: $.ASN1Encoder<Path>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.path,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.index === undefined
                            ? undefined
                            : $._encodeInteger(value.index, $.BER),
                        /* IF_ABSENT  */ value.length === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.length, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Path(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Path */

/* eslint-enable */
