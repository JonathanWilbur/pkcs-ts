/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RC5_CBC_Parameters_version,
    _decode_RC5_CBC_Parameters_version,
    _encode_RC5_CBC_Parameters_version,
} from "../PKCS5v2-1/RC5-CBC-Parameters-version.ta";
export {
    RC5_CBC_Parameters_version,
    RC5_CBC_Parameters_version_v1_0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1_0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RC5_CBC_Parameters_version,
    _encode_RC5_CBC_Parameters_version,
} from "../PKCS5v2-1/RC5-CBC-Parameters-version.ta";

/* START_OF_SYMBOL_DEFINITION RC5_CBC_Parameters */
/**
 * @summary RC5_CBC_Parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC5-CBC-Parameters ::= SEQUENCE {
 *     version INTEGER {v1-0(16)} (v1-0),
 *     rounds INTEGER (8..127),
 *     blockSizeInBits INTEGER (64 | 128),
 *     iv OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RC5_CBC_Parameters {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: RC5_CBC_Parameters_version,
        /**
         * @summary `rounds`.
         * @public
         * @readonly
         */
        readonly rounds: INTEGER,
        /**
         * @summary `blockSizeInBits`.
         * @public
         * @readonly
         */
        readonly blockSizeInBits: INTEGER,
        /**
         * @summary `iv`.
         * @public
         * @readonly
         */
        readonly iv: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a RC5_CBC_Parameters
     * @description
     *
     * This takes an `object` and converts it to a `RC5_CBC_Parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RC5_CBC_Parameters`.
     * @returns {RC5_CBC_Parameters}
     */
    public static _from_object(
        _o: { [_K in keyof RC5_CBC_Parameters]: RC5_CBC_Parameters[_K] }
    ): RC5_CBC_Parameters {
        return new RC5_CBC_Parameters(
            _o.version,
            _o.rounds,
            _o.blockSizeInBits,
            _o.iv
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RC5_CBC_Parameters */
/**
 * @summary The Leading Root Component Types of RC5_CBC_Parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RC5_CBC_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rounds",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "blockSizeInBits",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "iv",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RC5_CBC_Parameters */
/**
 * @summary The Trailing Root Component Types of RC5_CBC_Parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RC5_CBC_Parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RC5_CBC_Parameters */
/**
 * @summary The Extension Addition Component Types of RC5_CBC_Parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RC5_CBC_Parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters */
let _cached_decoder_for_RC5_CBC_Parameters: $.ASN1Decoder<RC5_CBC_Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) RC5_CBC_Parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RC5_CBC_Parameters} The decoded data structure.
 */
export function _decode_RC5_CBC_Parameters(el: _Element) {
    if (!_cached_decoder_for_RC5_CBC_Parameters) {
        _cached_decoder_for_RC5_CBC_Parameters = function (
            el: _Element
        ): RC5_CBC_Parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: RC5_CBC_Parameters_version;
            let rounds!: INTEGER;
            let blockSizeInBits!: INTEGER;
            let iv: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_RC5_CBC_Parameters_version(_el);
                },
                rounds: (_el: _Element): void => {
                    rounds = $._decodeInteger(_el);
                },
                blockSizeInBits: (_el: _Element): void => {
                    blockSizeInBits = $._decodeInteger(_el);
                },
                iv: (_el: _Element): void => {
                    iv = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RC5_CBC_Parameters,
                _extension_additions_list_spec_for_RC5_CBC_Parameters,
                _root_component_type_list_2_spec_for_RC5_CBC_Parameters,
                undefined
            );
            return new RC5_CBC_Parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                rounds,
                blockSizeInBits,
                iv
            );
        };
    }
    return _cached_decoder_for_RC5_CBC_Parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters */
let _cached_encoder_for_RC5_CBC_Parameters: $.ASN1Encoder<RC5_CBC_Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters */

/* START_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters */
/**
 * @summary Encodes a(n) RC5_CBC_Parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC5_CBC_Parameters, encoded as an ASN.1 Element.
 */
export function _encode_RC5_CBC_Parameters(
    value: RC5_CBC_Parameters,
    elGetter: $.ASN1Encoder<RC5_CBC_Parameters>
) {
    if (!_cached_encoder_for_RC5_CBC_Parameters) {
        _cached_encoder_for_RC5_CBC_Parameters = function (
            value: RC5_CBC_Parameters,
            elGetter: $.ASN1Encoder<RC5_CBC_Parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RC5_CBC_Parameters_version(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(value.rounds, $.BER),
                        /* REQUIRED   */ $._encodeInteger(
                            value.blockSizeInBits,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.iv === undefined
                            ? undefined
                            : $._encodeOctetString(value.iv, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RC5_CBC_Parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters */

/* eslint-enable */
