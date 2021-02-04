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
    DigestInfo,
    _decode_DigestInfo,
    _encode_DigestInfo,
} from "../PKCS7/DigestInfo.ta";

/* START_OF_SYMBOL_DEFINITION MacData */
/**
 * @summary MacData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MacData ::= SEQUENCE {
 *     mac        DigestInfo,
 *     macSalt    OCTET STRING,
 *     iterations INTEGER DEFAULT 1
 *     -- Note: The default is for historical reasons and its use is
 *     -- deprecated.
 * }
 * ```
 *
 * @class
 */
export class MacData {
    constructor(
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: DigestInfo,
        /**
         * @summary `macSalt`.
         * @public
         * @readonly
         */
        readonly macSalt: OCTET_STRING,
        /**
         * @summary `iterations`.
         * @public
         * @readonly
         */
        readonly iterations: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a MacData
     * @description
     *
     * This takes an `object` and converts it to a `MacData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MacData`.
     * @returns {MacData}
     */
    public static _from_object(
        _o: { [_K in keyof MacData]: MacData[_K] }
    ): MacData {
        return new MacData(_o.mac, _o.macSalt, _o.iterations);
    }

    /**
     * @summary Getter that returns the default value for `iterations`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_iterations() {
        return 1;
    }
}
/* END_OF_SYMBOL_DEFINITION MacData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MacData */
/**
 * @summary The Leading Root Component Types of MacData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MacData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mac",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "macSalt",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "iterations",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MacData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MacData */
/**
 * @summary The Trailing Root Component Types of MacData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MacData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MacData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MacData */
/**
 * @summary The Extension Addition Component Types of MacData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MacData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MacData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MacData */
let _cached_decoder_for_MacData: $.ASN1Decoder<MacData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MacData */

/* START_OF_SYMBOL_DEFINITION _decode_MacData */
/**
 * @summary Decodes an ASN.1 element into a(n) MacData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MacData} The decoded data structure.
 */
export function _decode_MacData(el: _Element) {
    if (!_cached_decoder_for_MacData) {
        _cached_decoder_for_MacData = function (el: _Element): MacData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mac!: DigestInfo;
            let macSalt!: OCTET_STRING;
            let iterations: OPTIONAL<INTEGER> =
                MacData._default_value_for_iterations;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mac: (_el: _Element): void => {
                    mac = _decode_DigestInfo(_el);
                },
                macSalt: (_el: _Element): void => {
                    macSalt = $._decodeOctetString(_el);
                },
                iterations: (_el: _Element): void => {
                    iterations = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MacData,
                _extension_additions_list_spec_for_MacData,
                _root_component_type_list_2_spec_for_MacData,
                undefined
            );
            return new MacData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mac,
                macSalt,
                iterations
            );
        };
    }
    return _cached_decoder_for_MacData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MacData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MacData */
let _cached_encoder_for_MacData: $.ASN1Encoder<MacData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MacData */

/* START_OF_SYMBOL_DEFINITION _encode_MacData */
/**
 * @summary Encodes a(n) MacData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MacData, encoded as an ASN.1 Element.
 */
export function _encode_MacData(
    value: MacData,
    elGetter: $.ASN1Encoder<MacData>
) {
    if (!_cached_encoder_for_MacData) {
        _cached_encoder_for_MacData = function (
            value: MacData,
            elGetter: $.ASN1Encoder<MacData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestInfo(value.mac, $.BER),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.macSalt,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.iterations === undefined ||
                        $.deepEq(
                            value.iterations,
                            MacData._default_value_for_iterations
                        )
                            ? undefined
                            : $._encodeInteger(value.iterations, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MacData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MacData */

/* eslint-enable */
